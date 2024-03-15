import { useEffect, useMemo, useState } from "react";
import { useSettings } from "../../hooks";
import { Status } from "../../hooks/useTasks/middleware/status";
import { Task } from "../../hooks/useTasks/types";
import {
	CompletedFilter,
	LimitFilter,
	SearchFilter,
	StatusFilter,
} from "./Filters";
import styles from "./styles.module.css";
import TaskItem from "./TaskItem";

type Props = {
	tasks: Task[];
	updateTask: (task: Task, newTask: Task) => void;
};

export type CompletedFilterOption = "all" | "uncompleted" | "completed";
export type StatusFilterOption = "all" | Status;

export default function TaskList({ tasks, updateTask }: Props) {
	const [limit, setLimit] = useState<number | undefined>(undefined);
	const [currentCompletedFilter, setCurrentCompletedFilter] =
		useState<CompletedFilterOption>("all");
	const [currentStatusFilter, setCurrentStatusFilter] =
		useState<StatusFilterOption>("all");
	const [searchFilter, setSearchFilter] = useState<string>("");

	const settings = useSettings();

	useEffect(() => {
		if (settings) {
			setLimit(settings.limit);
			setCurrentCompletedFilter(settings.completedFilter);
			setCurrentStatusFilter(settings.statusFilter);
		}
	}, []);

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
		if (currentStatusFilter === "all") {
			return true;
		}

		if (!task.status) {
			return false;
		}

		if (currentStatusFilter === task.status) {
			return true;
		}

		return false;
	};

	const filterBySearch = (task: Task): boolean =>
		task.body.toLowerCase().includes(searchFilter);

	const filteredTasks = useMemo(() => {
		return tasks
			.filter(filterByStatus)
			.filter(filterByCompleted)
			.filter(filterBySearch)
			.slice(0, limit);
	}, [tasks, filterByStatus, filterByCompleted, filterBySearch, limit]);

	return (
		<div>
			<div className={`${styles.filters} ${styles.border}`}>
				<SearchFilter
					searchFilter={searchFilter}
					setSearchFilter={setSearchFilter}
				/>
				<LimitFilter
					limit={limit}
					setLimit={setLimit}
				/>
				<CompletedFilter
					currentCompletedFilter={currentCompletedFilter}
					setCurrentCompletedFilter={setCurrentCompletedFilter}
				/>
				<StatusFilter
					currentStatusFilter={currentStatusFilter}
					setCurrentStatusFilter={setCurrentStatusFilter}
				/>
			</div>

			<ul className={`${styles.list} ${styles.border}`}>
				{filteredTasks.length > 0 ? (
					filteredTasks.map((task) => (
						<TaskItem
							task={task}
							updateTask={updateTask}
						/>
					))
				) : (
					<p>Empty list.</p>
				)}
			</ul>
		</div>
	);
}
