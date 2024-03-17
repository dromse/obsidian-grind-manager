import { Middleware, Task } from "../types";
import { cleanBody, findByRegex } from "../utils";

const parse = (task: Task): Task => {
	const regex = /#counter\/(\d+)\/(\d+)(\/(\w+))?/;

	const match = findByRegex(regex, task);

	if (!match) {
		return task;
	}

	const newBody = cleanBody(regex, task);

	return {
		...task,
		counter: {
			current: Number(match[1]),
			goal: Number(match[2]),
			unit: match[4] ? match[4] : "",
		},
		body: newBody,
	};
};

const stringify = (task: Task): string =>
	task.counter
		? ` #counter/${task.counter.current}/${task.counter.goal}${task.counter.unit ? "/" + task.counter.unit : ""}`
		: "";

export default { parse, stringify } as Middleware;
