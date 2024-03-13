import { Middleware, Task } from "../types";
import { cleanBody, findByRegex } from "../utils";

export type Status = "todo" | "doing" | "done" | "denied" | "delay";

export const Statuses: Status[] = [
	"todo",
	"doing",
	"done",
	"denied",
	"delay",
];

const parse = (task: Task): Task => {
	const regex = new RegExp(`#status/(${Statuses.join("|")})`);

	const match = findByRegex(regex, task);

	if (!match) {
		return task;
	}

	const newBody = cleanBody(regex, task);

	return { ...task, status: match[1] as Status, body: newBody };
};

const stringify = (task: Task): string =>
	task.status ? `#status/${task.status}` : "";

export default { parse, stringify } as Middleware;
