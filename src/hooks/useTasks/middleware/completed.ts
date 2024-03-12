import { Middleware, Task } from "../types";
import { cleanBody, findByRegex } from "../utils";

const parse = (task: Task): Task => {
	const regex = /- \[.\]/;

	const match = findByRegex(regex, task);

	if (!match) {
		return task;
	}

	let completed = false;

	if (match[0].includes("- [x]")) {
		completed = true;
	}

	const newBody = cleanBody(regex, task);

	return { ...task, completed, body: newBody };
};

const stringify = (task: Task): string => (task.completed ? "- [x]" : "- [ ]");

export default { parse, stringify } as Middleware;
