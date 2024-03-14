import { Middleware, Task } from "../types";
import { cleanBody, findByRegex } from "../utils";

const parse = (task: Task): Task => {
	const regex = /✅ \[\[(\d{4}-\d{2}-\d{2})\|\1\|(\d{2}:\d{2})\]\]/;

	const match = findByRegex(regex, task);

	if (!match) {
		return task;
	}

	const newBody = cleanBody(regex, task);

	return { ...task, completedAt: match[0], body: newBody };
};

const stringify = (task: Task): string =>
	task.completedAt ? ` ${task.completedAt}` : "";

export default { parse, stringify } as Middleware;
