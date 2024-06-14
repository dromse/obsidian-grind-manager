import { useApp, useHistory } from "@hooks";
import { StatusMarkdown } from "@hooks/useTasks/consts";
import { Task } from "@hooks/useTasks/types";
import { revealTask } from "@utils/editor";
import { logger, loggerMsg } from "@utils/logger";
import { extractTitlesFromLinks } from "@utils/string";
import { updateCounter, updateStatus } from "@utils/task";
import { Notice } from "obsidian";
import React from "react";

import styles from "./styles.module.css";

type Props = {
	task: Task;
	updateTask: (task: Task, newTask: Task) => unknown;
};

export default function TaskItem(props: Props): React.JSX.Element {
	const { task, updateTask } = props;
	const [isButtonBlocked, setIsButtonBlocked] = React.useState(false);
	const app = useApp();
	const { addHistoryRow } = useHistory();

	if (!app) {
		return <div>Error: App is not defined.</div>;
	}

	const { workspace, vault } = app;

	const handleUpdateCheckbox = (): void => {
		const isDone = task.status === "done";
		const isDenied = task.status === "denied";

		if (isDone || isDenied) {
			updateStatus({
				task,
				payload: { status: "todo" },
				updateTask,
				addHistoryRow,
			});
		} else {
			updateStatus({
				task,
				payload: { status: "done" },
				updateTask,
				addHistoryRow,
			});

		}
	};

	const handleUpdateCounter = (change: number) => async (): Promise<void> => {
		try {
			setIsButtonBlocked(true);

			await updateCounter({
				task,
				payload: { change },
				updateTask,
				addHistoryRow,
			});
		} catch (err) {
			logger(err);
			new Notice(loggerMsg(err));
		} finally {
			setIsButtonBlocked(false);
		}
	};

	const handleRevealTask = (): void => {
		revealTask({ task, workspace, vault });
	};

	return (
		<li
			className={` task-list-item ${styles.task}  flex-items-center border`}
			data-task={StatusMarkdown[task.status ? task.status : "todo"]}
		>
			<input
				type="checkbox"
				onChange={handleUpdateCheckbox}
				name=""
				id=""
				checked={task.status !== "todo"}
			/>

			<div onClick={handleRevealTask}>{extractTitlesFromLinks(task.body)}</div>

			{task.counter && (
				<div className={`flex-items-center ${styles.counter}`}>
					<p>
						{task.counter.current} / {task.counter.goal}
					</p>

					<button onClick={handleUpdateCounter(1)} disabled={isButtonBlocked}>
						+
					</button>

					<button onClick={handleUpdateCounter(-1)} disabled={isButtonBlocked}>
						-
					</button>
				</div>
			)}
		</li>
	);
}
