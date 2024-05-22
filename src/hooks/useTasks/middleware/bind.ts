import { cleanBody, findByRegex } from "@utils/middleware";
import { DurationUnit, DurationUnitList, Middleware, Task } from "../types";

// TODO: add parsing for unit
// bind/prop/number-unit -> #bind/walkingTime/5m to increase or decrease by 5m
// bind/prop/unit -> #bind/runningTime/m to increase or decrease by 1m
const parse = (task: Task): Task => {
	const regex = /#bind\/(\w+)(?:\/(\d+)?([a-zA-Z]+)?)?/;

	const match = findByRegex(regex, task);

	if (!match) {
		return task;
	}

	const property = match[1]; // Capture the bind
	const delta = match[2] ? parseInt(match[2], 10) : null; // Capture the numeric amount, allowing for negative values
	let unit = null; // Capture the unit

	if (DurationUnitList.some((unit) => match[3] === unit)) {
		unit = match[3] as DurationUnit;
	}

	const newBody = cleanBody(regex, task);

	return { ...task, bind: { property, delta, unit }, body: newBody };
};

const stringify = (task: Task): string =>
	task.bind ? ` #bind/${task.bind}` : "";

const middleware: Middleware = {
	parse,
	stringify,
};

export default middleware;
