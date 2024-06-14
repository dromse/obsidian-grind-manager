import {
	LimitFilter,
	NoteFilter,
	RecurFilter,
	SearchFilter,
	StatusFilter,
	TagFilter
} from "@components/reusable/filters";
import { useSettings } from "@hooks";
import { Task, TaskFilters } from "@hooks/useTasks/types";
import { singularOrPlural } from "@utils/string";
import React, { useState } from "react";
import styles from "./styles.module.css";
import TaskItem from "./TaskItem";

type Props = {
	tasks: Array<Task>;
	updateTask: (task: Task, newTask: Task) => void;
	filters: TaskFilters;
};

export default function TaskList(props: Props): React.JSX.Element {
	const { tasks, updateTask, filters } = props;
	const settings = useSettings();

	const {
		limit,
		setLimit,
		searchFilter,
		setSearchFilter,
		statusFilter,
		setStatusFilter,
		isRecur,
		setIsRecur,
		tagFilter,
		setTagFilter,
		hasOnlyThisTags,
		setHasOnlyThisTags,
		noteFilter,
		setNoteFilter,
		isFromCurrentNote,
		setIsFromCurrentNote,
	} = filters;

	const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(
		settings?.shouldShowAllFilters,
	);

	return (
		<div>
			<div className={`${styles.filters} flex-column border`}>
				<SearchFilter
					searchFilter={searchFilter}
					setSearchFilter={setSearchFilter}
				/>
				<StatusFilter
					currentStatusFilter={statusFilter}
					setCurrentStatusFilter={setStatusFilter}
				/>
				<RecurFilter
					isRecur={isRecur}
					setIsRecur={setIsRecur}
				/>

				<div className="checkbox">
					<input
						id="more-filters"
						type="checkbox"
						checked={isMoreFiltersOpen}
						onChange={() => setIsMoreFiltersOpen((prev) => !prev)}
					/>

					<label htmlFor="more-filters">Show all filters</label>
				</div>

				{isMoreFiltersOpen && (
					<>
						<hr />

						<LimitFilter
							limit={limit}
							setLimit={setLimit}
						/>

						<TagFilter
							tagFilter={tagFilter}
							setTagFilter={setTagFilter}
							hasOnlyThisTags={hasOnlyThisTags}
							setHasOnlyThisTags={setHasOnlyThisTags}
						/>

						<NoteFilter
							noteFilter={noteFilter}
							setNoteFilter={setNoteFilter}
							isFromCurrentNote={isFromCurrentNote}
							setIsFromCurrentNote={setIsFromCurrentNote}
						/>
					</>
				)}

				<hr />

				<div>
					{singularOrPlural({ amount: tasks.length, singular: "task" })}
				</div>
			</div>

			<ul className="list flex-column contains-task-list">
				{tasks.length > 0 ? (
					tasks.map((task) => (
						<TaskItem
							key={`${task.lineNumber}${task.path}`}
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
