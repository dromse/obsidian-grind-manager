import { Middleware, Task } from "../types";
import { cleanBody, findByRegex } from "../utils";

const parse = (task: Task): Task => {
	const regex = /^\s*/;

	const match = findByRegex(regex, task);

	if (!match) {
		return task;
	}

	const newBody = cleanBody(regex, task);

	return { ...task, indention: match ? match[0].length : 0, body: newBody };
};

const stringify = (task: Task): string =>
	task.indention ? " ".repeat(task.indention) : "";

export default { parse, stringify } as Middleware;
