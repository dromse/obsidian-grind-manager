import { RawFile } from "@hooks/types";
import { DifficultyPrice } from "@hooks/useTasks/consts";
import { Status, Task } from "@hooks/useTasks/types";
import { Notice } from "obsidian";
import { coins } from "./string";

/** Parse all occurance of task line in `file` content and then returns task list */
export function parseTasksFromFile(file: RawFile): Array<Task> {
	const tasks = file.content.reduce<Array<Task>>((acc, lineContent, index) => {
		const regex = /- \[.\]/;

		if (lineContent.match(regex)) {
			acc.push({
				path: file.path,
				lineContent,
				lineNumber: index,
				body: lineContent,
			});
		}

		return acc;
	}, []);

	return tasks;
}

/** Iterates through all files, parse tasks from files and return all found tasks in `files`
 * @param {RawFile[]} files - list of RawFile[]
 *
 * @returns {Task[]} all tasks in files
 *
 * @example
 * const files = [{ tFile: {...}: TFile, content: ['- [ ] one simple task'] }]
 *
 * const tasks = parseTasks(files)
 * -> [{ tFile: {...}, completed: false, lineNumber: 0, lineContent: '- [ ] one simple task', body: '- [ ] one simple task' }]
 */
export function parseTasks(files: Array<RawFile>): Array<Task> {
	const tasks = files.reduce(
		(acc, file) => [...acc, ...parseTasksFromFile(file)],
		[],
	);

	return tasks;
}

type UpdateTaskProps<TPayload> = {
	task: Task;
	payload: TPayload;
	updateTask: Function;
	addHistoryRow: Function;
};

export const updateCounter = async (
	props: UpdateTaskProps<{ change: number }>,
): Promise<void> => {
	const { task, payload, updateTask, addHistoryRow } = props;
	const { change } = payload;

	const current = Number(task.counter?.current);
	const goal = Number(task.counter?.goal);

	if (!current && !goal) {
		return;
	}

	const newCurrent = current + change;
	const isOutOfScope = (value: number): boolean => value < 0 || value > goal;

	if (isOutOfScope(newCurrent)) {
		return;
	}

	const result = await updateTask(task, {
		...task,
		status: newCurrent === goal ? "done" : "doing",
		counter: { current: newCurrent, goal },
	});

	if (result === "error") {
		new Notice("Error during counter update.");
	}

	const getEarningString = (): string =>
		task.difficulty
			? `You ${change > 0 ? "earned" : "returned"}: ${coins(
				DifficultyPrice[task.difficulty],
			)}`
			: "";

	new Notice(getEarningString());

	if (newCurrent === goal) {
		new Notice(`You completed task: '${task.body}'`);
	}

	if (task.difficulty) {
		await addHistoryRow({
			title: task.body,
			change: DifficultyPrice[task.difficulty] * change,
		});
	}
};

export async function updateStatus(
	props: UpdateTaskProps<{ status: Status }>,
): Promise<void> {
	const { task, payload, updateTask, addHistoryRow } = props;
	const { status } = payload;

	await updateTask(task, { ...task, status });

	if (task.counter) {
		return;
	}

	if (!task.difficulty) {
		return;
	}

	if (status === "done") {
		await addHistoryRow({
			title: task.body,
			change: DifficultyPrice[task.difficulty],
		});

		new Notice(`You earned: ${coins(DifficultyPrice[task.difficulty])}`);
		new Notice(`You completed task: '${task.body}'`);
	}

	if (task.status === "done" && status !== "done") {
		await addHistoryRow({
			title: task.body,
			change: -DifficultyPrice[task.difficulty],
		});

		new Notice(`You returned: ${coins(DifficultyPrice[task.difficulty])}`);
	}
}
