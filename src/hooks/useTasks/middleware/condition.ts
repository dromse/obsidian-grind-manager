import { GrindPluginSettings } from "@types";
import { cleanBody, findByRegex } from "@utils/middleware";
import { Middleware, Task } from "../types";

const parse = (task: Task, settings: GrindPluginSettings): Task => {
	let regex = /#if\/[a-zA-Z0-9_-]+/;

	const match = findByRegex(regex, task);

	if (!match) {
		return task;
	}

	const newBody = cleanBody(regex, task);

	const condition = {
		file: match[0],
		show: true
	}

	return { ...task, condition, body: newBody };
};

const stringify = (task: Task, settings: GrindPluginSettings): string => {
	let ifTag = "";

	if (task.condition) {
		ifTag = `#if/${task.condition.file}`;
	}

	return ifTag;
};

export default { parse, stringify } as Middleware;
