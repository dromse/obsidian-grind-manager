import { Middleware, Task } from "../types";

const parse = (task: Task): Task =>
	task.body ? task : { ...task, body: task.lineContent };

const stringify = (task: Task): string => (task.body ? ` ${task.body}` : "");

export default { parse, stringify } as Middleware;
