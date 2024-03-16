import { Middleware, Task } from "../types";
import { cleanBody, findByRegex } from "../utils";

export type Difficulty = "trivial" | "easy" | "medium" | "hard";

export const DifficultyPrices = {
	trivial: 0.1,
	easy: 1,
	medium: 2.5,
	hard: 5,
};

export const Difficulties: Difficulty[] = Object.keys(
	DifficultyPrices,
) as Difficulty[];

const parse = (task: Task): Task => {
	const regex = new RegExp(`#diff/(${Difficulties.join("|")})`);

	const match = findByRegex(regex, task);

	if (!match) {
		return task;
	}

	const newBody = cleanBody(regex, task);

	return { ...task, difficulty: match[1] as Difficulty, body: newBody };
};

const stringify = (task: Task): string =>
	task.difficulty ? ` #diff/${task.difficulty}` : "";

export default { parse, stringify } as Middleware;
