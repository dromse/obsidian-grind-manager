import { Middleware, Task } from "../types";
import { cleanBody, findByRegex } from "../utils";

const parse = (task: Task): Task => {
	const regex = /#timer\/(\w+)\/(\w+)/;

	const match = findByRegex(regex, task);

	if (!match) {
		return task;
	}

	const newBody = cleanBody(regex, task);

	return {
		...task,
		timer: { current: match[1], goal: match[2] },
		body: newBody,
	};
};

const stringify = (task: Task): string =>
	task.timer ? ` #timer/${task.timer.current}/${task.timer.goal}` : "";

export default { parse, stringify } as Middleware;
