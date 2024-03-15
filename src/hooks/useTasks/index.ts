import { Vault } from "obsidian";
import { useEffect, useState } from "react";
import { useApp } from "..";
import { ParseState, RawFile } from "../types";
import { getLines } from "../utils";
import bind from "./middleware/bind";
import body from "./middleware/body";
import completed from "./middleware/completed";
import completedAt from "./middleware/completedAt";
import counter from "./middleware/counter";
import difficulty from "./middleware/difficulty";
import every from "./middleware/every";
import indention from "./middleware/indention";
import status from "./middleware/status";
import timer from "./middleware/timer";
import { Middleware, Task } from "./types";

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
	// TODO: I think i need to remove it in future.
	const [trigger, setTrigger] = useState(false);

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
		const newStr = stringifyMiddlewares(newTask, middlewares);

		await vault.process(task.tFile, (data) =>
			data.replace(task.lineContent, newStr),
		);

		setTrigger((prev) => !prev);
	}

	const app = useApp();

	if (!app) {
		setIsTasksParsed("error");

		return { tasks, isTasksParsed, updateTask };
	}

	const { vault } = app;

	useEffect(() => {
		getRawFiles(vault).then((files) => {
			const parsedTasks = parseTasks(files);
			const withMiddlewares = parseMiddlewares(parsedTasks, middlewares);

			setTasks(withMiddlewares);
			setIsTasksParsed("parsed");
		});
	}, [trigger]);

	return { tasks, isTasksParsed, updateTask };
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
