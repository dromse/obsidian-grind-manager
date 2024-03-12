import { TFile, Vault } from "obsidian";
import { useEffect, useState } from "react";
import { useApp } from "..";
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

type ParseState = "parsing" | "parsed" | "error";

type UseTasksProps = {
	tasks: Task[];
	isParsed: ParseState;
	updateTask: (task: Task, newTask: Task) => void;
};

export function useTasks(): UseTasksProps {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [isParsed, setIsParsed] = useState<ParseState>("parsing");
	const [trigger, setTrigger] = useState(false);

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
	const updateTask = async (task: Task, newTask: Task) => {
		await vault.process(task.tFile, (data) =>
			data.replace(
				task.lineContent,
				stringifyMiddlewares(newTask, middlewares),
			),
		);

		setTrigger((prev) => !prev);
	};

	const app = useApp();

	if (!app) {
		setIsParsed("error");

		return { tasks, isParsed, updateTask };
	}

	const { vault } = app;

	useEffect(() => {
		getRawFiles(vault).then((files) => {
			const parsedTasks = parseTasks(files);
			const withMiddlewares = parseMiddlewares(parsedTasks, middlewares);

			setTasks(withMiddlewares);
			setIsParsed("parsed");
		});
	}, [trigger]);

	return { tasks, isParsed, updateTask };
}

type RawFile = {
	tFile: TFile;
	content: string[];
};

async function getRawFiles(vault: Vault): Promise<RawFile[]> {
	const files = Promise.all(
		vault.getMarkdownFiles().map(async (file) => ({
			tFile: file,
			content: getLines(await vault.read(file)),
		})),
	);

	return files;
}

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

function parseTasks(files: RawFile[]): Task[] {
	const tasks = files.map((file) => parseTasksFromFile(file)).flat();

	return tasks;
}

function stringifyMiddlewares(task: Task, middlewares: Middleware[]): string {
	const taskString = middlewares.reduce(
		(str, middleware) => (str += " " + middleware.stringify(task)),
		"",
	);

	return taskString;
}

function parseMiddlewares(tasks: Task[], middlewares: Middleware[]): Task[] {
	middlewares.forEach(
		(middleware) => (tasks = tasks.map((task) => middleware.parse(task))),
	);

	return tasks;
}

function getLines(fileContent: string): string[] {
	return fileContent.split("\n");
}
