import { TFile } from "obsidian";
import { useApp, useHistory } from "../../hooks";
import { DifficultyPrices } from "../../hooks/useTasks/middleware/difficulty";
import { Status, Statuses } from "../../hooks/useTasks/middleware/status";
import { Task } from "../../hooks/useTasks/types";
import styles from "./styles.module.css";

type Props = {
	task: Task;
	updateTask: (task: Task, newTask: Task) => void;
};

export default function TaskItem({ task, updateTask }: Props) {
	const workspace = useApp()?.workspace;

	const { addHistoryRow } = useHistory();

	if (!workspace) {
		return <div>Workspace not exists...</div>;
	}

	const openFile = (tFile: TFile) => workspace.getLeaf("tab").openFile(tFile);

	const updateCompleted = () => {
		const newTask = {
			...task,
			completed: !task.completed,
			status: !task.completed ? "done" : "todo",
		};

		updateTask(task, newTask as Task);
	};

	const updateCounter = (value: number) => {
		if (task.counter) {
			const newCurrent = task.counter.current + value;

			if (newCurrent >= 0) {
				task.counter.current = newCurrent;

				if (task.difficulty) {
					addHistoryRow({
						title: task.body,
						change: DifficultyPrices[task.difficulty] * value,
					});
				}
			} else {
				task.counter.current = 0;
			}
		}

		updateTask(task, task);
	};

	function updateStatus(status: Status) {
		updateTask(task, { ...task, status });
	}

	return (
		<li className={styles.task}>
			<input
				type="checkbox"
				checked={task.completed}
				onChange={updateCompleted}
			/>

			<a onClick={() => openFile(task.tFile)}>{task.body}</a>

			{task.status && (
				<select
					className={styles.select}
					onChange={(e) => updateStatus(e.currentTarget.value as Status)}
					value={task.status}
				>
					{Statuses.map((status) => (
						<option>{status}</option>
					))}
				</select>
			)}

			{task.counter && (
				<div className={styles.counter}>
					<p>
						{task.counter.current} / {task.counter.goal}
					</p>
					<button onClick={() => updateCounter(1)}>+</button>
					<button onClick={() => updateCounter(-1)}>-</button>
				</div>
			)}
		</li>
	);
}
