import { Middleware, Task } from "../types";
import { cleanBody, findByRegex } from "../utils";

const parse = (task: Task): Task => {
	const regex = /#bind\/(\w+)/;

	const match = findByRegex(regex, task);

	if (!match) {
		return task;
	}

	const newBody = cleanBody(regex, task);

	return { ...task, bind: match[1], body: newBody };
};

const stringify = (task: Task) => (task.bind ? ` #bind/${task.bind}` : "");

export default { parse, stringify } as Middleware;
