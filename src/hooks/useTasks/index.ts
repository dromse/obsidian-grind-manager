import { useApp, useSettings } from "..";
import { moment, Vault } from "obsidian";
import { useEffect, useState } from "react";
import { ParseState, RawFile } from "../types";
import { getLines } from "../utils";
import { Middleware, Task } from "./types";
import {
	bind,
	body,
	completedAt,
	completed,
	counter,
	difficulty,
	every,
	indention,
	status,
	timer,
} from "./middleware";

type UseTasksProps = {
	tasks: Task[];
	isTasksParsed: ParseState;
	updateTask: (task: Task, newTask: Task) => void;
};

/**
 * Hook for interaction with tasks in current vault
 */
export default function useTasks(): UseTasksProps {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [isTasksParsed, setIsTasksParsed] = useState<ParseState>("parsing");
	const [trigger, setTrigger] = useState(false);

	const app = useApp();

	if (!app) {
		setIsTasksParsed("error");

		return { tasks, isTasksParsed, updateTask };
	}

	const { vault } = app;

	const settings = useSettings();

	/**
	 * Middlewares used for parsing tasks metadata and stringifying back to markdown line.
	 * I don't need `body` to be in middlewares for parsing but for correct stringifying I added it.
	 */
	const middlewares = [
		indention,
		completed,
		body,
		counter,
		timer,
		bind,
		difficulty,
		status,
		every,
		completedAt,
	];

	/** Update task props and save to vault */
	async function updateTask(task: Task, newTask: Task) {
		// If task has `bind` property -> update YAML property in today daily note.
		if (newTask.bind) {
			if (settings?.pathToDaily) {
				updateDailyNote(task, settings.pathToDaily, vault);
			}
		}

		const newStr = stringifyMiddlewares(newTask, middlewares);
		await vault.process(task.tFile, (data) =>
			data.replace(task.lineContent, newStr),
		);

		setTrigger((prev) => !prev);
	}

	useEffect(() => {
		async function fetchData() {
			try {
				const files = await getRawFiles(vault);

				const parsedTasks = parseTasks(files);
				const parsedTaskswithMiddlewares = parseMiddlewares(
					parsedTasks,
					middlewares,
				);

				setTasks(parsedTaskswithMiddlewares);
				setIsTasksParsed("parsed");
			} catch (err) {
				console.error("Error fetching data:", err);
				setIsTasksParsed("error");
			}
		}

		fetchData();
	}, [trigger]);

	return { tasks, isTasksParsed, updateTask };
}

/** Update property in today daily note */
async function updateDailyNote(task: Task, pathToDaily: string, vault: Vault) {
	const dailyNotePath = moment().format(`[${pathToDaily}/]YYYY-MM-DD[.md]`);
	const todayTFile = vault.getFileByPath(dailyNotePath);
	let newLine = `${task.bind}: `;

	// if we have counter -> save counter value
	if (task.counter) {
		const { current, unit } = task.counter;

		if (current !== undefined) {
			newLine += `${current}${unit ? (current === 1 || current === 0 ? ` ${unit}` : ` ${unit}s`) : ""}`;
		}
	} else {
		newLine = newLine + Number(task.completed);
	}

	if (todayTFile) {
		await vault.process(todayTFile, (data) => {
			const oldLine = new RegExp(`${task.bind}:.*`);
			return data.replace(oldLine, newLine);
		});
	}
}

/** Get all markdown files in vault with their content */
async function getRawFiles(vault: Vault): Promise<RawFile[]> {
	const files = Promise.all(
		vault.getMarkdownFiles().map(async (file) => ({
			tFile: file,
			content: getLines(await vault.read(file)),
		})),
	);

	return files;
}

/** Parse all occurance of task line in `file` content and then returns task list */
function parseTasksFromFile(file: RawFile): Task[] {
	const tasks = file.content.reduce((acc, lineContent, index) => {
		const regex = /- \[.\]/;

		if (lineContent.match(regex)) {
			acc.push({
				tFile: file.tFile,
				lineContent,
				lineNumber: index,
				body: lineContent,
			});
		}

		return acc;
	}, [] as Task[]);

	return tasks;
}

/** Iterates through all files, parse tasks from files and return all found tasks in `files`
 * @param {RawFile[]} files - list of RawFile[]
 *
 * @returns {Task[]} all tasks in files
 *
 * @example
 * const files = [{ tFile: {...}: TFile, content: ['- [ ] one simple task'] }]
 *
 * const tasks = parseTasks(files)
 * -> [{ tFile: {...}, completed: false, lineNumber: 0, lineContent: '- [ ] one simple task', body: '- [ ] one simple task' }]
 */
function parseTasks(files: RawFile[]): Task[] {
	const tasks = files.reduce(
		(acc, file) => [...acc, ...parseTasksFromFile(file)],
		[],
	);

	return tasks;
}

/** Stringify task obj by middlewares */
function stringifyMiddlewares(task: Task, middlewares: Middleware[]): string {
	const taskString = middlewares.reduce(
		(str, middleware) => (str += middleware.stringify(task)),
		"",
	);

	return taskString;
}

/** Iterate through all tasks and parse their middlewares and return new task list  */
function parseMiddlewares(tasks: Task[], middlewares: Middleware[]): Task[] {
	middlewares.forEach(
		(middleware) => (tasks = tasks.map((task) => middleware.parse(task))),
	);

	return tasks;
}
