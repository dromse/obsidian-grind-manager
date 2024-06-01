import { GrindPluginSettings } from "@types";
import { cleanBody, findByRegex } from "@utils/middleware";
import { moment } from "obsidian";
import { Middleware, Task } from "../types";

const parse = (task: Task, settings: GrindPluginSettings): Task => {
	// By default parse WikiLink
	let regex =
		/✅ \[\[(\d{4}-\d{2}-\d{2})\|(\d{4}-\d{2}-\d{2} \| \d{2}:\d{2})\]\]/;

	if (settings && settings.useMarkdownLinks) {
		regex = RegExp(
			`✅ \\[\\d{4}-\\d{2}-\\d{2} \\| \\d{2}:\\d{2}\\]\\(${settings.pathToDaily}\\/\\d{4}-\\d{2}-\\d{2}\\.md\\)`,
		);
	}

	const match = findByRegex(regex, task);

	if (!match) {
		return task;
	}

	const newBody = cleanBody(regex, task);

	return { ...task, completedAt: match[0], body: newBody };
};

const stringify = (task: Task, settings: GrindPluginSettings): string => {
	if (settings.isCompletedAtEnabled === false) {
		return "";
	}

	let completedAtDate = moment().format(settings.dailyFormat);
	let completedAtTime = moment().format("HH:mm");
	let completedAt;

	if (settings.useMarkdownLinks) {
		completedAt = ` ✅ [${completedAtDate} | ${completedAtTime}](${settings.pathToDaily}/${completedAtDate}.md)`;
	} else {
		completedAt = ` ✅ [[${completedAtDate}|${completedAtDate} | ${completedAtTime}]]`;
	}

	return task.status === "done" ? completedAt : "";
};

export default { parse, stringify } as Middleware;
