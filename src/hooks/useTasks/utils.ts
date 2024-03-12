import { Task } from "./types";

export const cleanBody = (regex: RegExp, task: Task) => {
	const removeWithSpace = new RegExp(regex.source + /\s?/.source);

	const newBody = task.body.replace(removeWithSpace, "").trim();

	return newBody;
};

export const findByRegex = (regex: RegExp, task: Task) => {
	const match = task.body.match(regex);
	return match;
};
