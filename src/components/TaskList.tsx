import { useState } from "react";
import { useApp } from "../hooks";
import { Task } from "../hooks/useTasks/types";
import styles from "./TaskList.module.css";

type Props = {
	tasks: Task[];
	updateTask: Function;
};

export default function TaskList({ tasks, updateTask }: Props) {
	const [limit, setLimit] = useState<number | undefined>(undefined);

	const workspace = useApp()?.workspace;

	if (!workspace) {
		return <div>Workspace not exists...</div>;
	}

	console.log(tasks);

	return (
		<>
			<label>
				Limit:
				<input
					type="number"
					name=""
					id=""
					placeholder="Amount of showed tasks"
					value={limit ? limit : ""}
					onChange={(e) =>
						setLimit(
							e.currentTarget.value ? Number(e.currentTarget.value) : undefined,
						)
					}
				/>
			</label>

			<ul className={styles.list}>
				{tasks.slice(0, limit).map((task) => (
					<li className={styles.task}>
						<input
							type="checkbox"
							name=""
							id=""
							checked={task.completed}
							onChange={() =>
								updateTask(task, {
									...task,
									completed: !task.completed,
								})
							}
						/>
						<a
							onClick={() => {
								workspace.getLeaf("tab").openFile(task.tFile);
							}}
						>
							{task.body}
						</a>
					</li>
				))}
			</ul>
		</>
	);
}
