import { Middleware, Task } from "../types";
import { cleanBody, findByRegex } from "../utils";

const parse = (task: Task): Task => {
	const regex = /#every\/(\w+)/;

	const match = findByRegex(regex, task);

	if (!match) {
		return task;
	}

	const newBody = cleanBody(regex, task);

	return { ...task, every: match[1], body: newBody };
};

const stringify = (task: Task): string =>
	task.every ? ` #every/${task.every}` : "";

export default { parse, stringify } as Middleware;
