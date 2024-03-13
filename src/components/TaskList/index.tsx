import { useState } from "react";
import { Status } from "../../hooks/useTasks/middleware/status";
import { Task } from "../../hooks/useTasks/types";
import CompletedFilter from "./CompletedFilter";
import LimitFilter from "./LimitFilter";
import StatusFilter from "./StatusFilter";
import styles from "./styles.module.css";
import TaskItem from "./TaskItem";

type Props = {
	tasks: Task[];
	updateTask: (task: Task, newTask: Task) => void;
};

export type ICompletedFilter = "all" | "uncompleted" | "completed";
export type IStatusFilter = "all" | Status

export default function TaskList({ tasks, updateTask }: Props) {
	const [limit, setLimit] = useState<number | undefined>(undefined);
	const [currentCompletedFilter, setCurrentCompletedFilter] =
		useState<ICompletedFilter>("all");
	const [currentStatusFilter, setCurrentStatusFilter] =
		useState<IStatusFilter>("all");

	const filterByCompleted = (task: Task): boolean => {
		if (task.completed === undefined) {
			return false;
		}

		if (currentCompletedFilter === "all") {
			return true;
		}

		if (currentCompletedFilter === "completed") {
			return task.completed;
		}

		if (currentCompletedFilter === "uncompleted") {
			return !task.completed;
		}

		return false;
	};

	const filterByStatus = (task: Task): boolean => {
		if (currentStatusFilter === 'all') {
			return true
		}

		if (!task.status) {
			return false
		}

		if (currentStatusFilter === task.status) {
			return true
		}

		return false
	}

	console.log(tasks);

	return (
		<div>
			<LimitFilter limit={limit} setLimit={setLimit} />
			<CompletedFilter currentCompletedFilter={currentCompletedFilter} setCurrentCompletedFilter={setCurrentCompletedFilter} />
			<StatusFilter currentStatusFilter={currentStatusFilter} setCurrentStatusFilter={setCurrentStatusFilter} />

			<ul className={styles.list}>
				{tasks
					.filter(filterByCompleted)
					.filter(filterByStatus)
					.slice(0, limit)
					.map((task) => (
						<TaskItem
							task={task}
							updateTask={updateTask}
						/>
					))}
			</ul>
		</div>
	);
}
