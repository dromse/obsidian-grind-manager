import { Middleware, Task } from "../types";
import { cleanBody, findByRegex } from "../utils";

const parse = (task: Task): Task => {
	const regex =
		/✅ \[\[(\d{4}-\d{2}-\d{2})\|(\d{4}-\d{2}-\d{2} \| \d{2}:\d{2})\]\]/;

	const match = findByRegex(regex, task);

	if (!match) {
		return task;
	}

	const newBody = cleanBody(regex, task);

	return { ...task, completedAt: match[0], body: newBody };
};

const stringify = (task: Task): string => {
	const date = new Date();
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding 1 to month because it's zero-based
	const day = String(date.getDate()).padStart(2, "0");
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");

	const completedAt = ` ✅ [[${year}-${month}-${day}|${year}-${month}-${day} | ${hours}:${minutes}]]`;

	return task.completed ? completedAt : "";
};

export default { parse, stringify } as Middleware;
