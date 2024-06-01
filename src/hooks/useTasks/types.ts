import { GamifiedTasksSettings } from "@types";

/**
 * Represents the status options for filtering tasks.
 */
export type StatusFilterOption = "all" | Status;

/**
 * Represents the filters for tasks.
 */
export type TaskFilters = {
	/**
	 * The limit of tasks to display.
	 */
	limit: number;
	/**
	 * A function to set the limit of tasks to display.
	 */
	setLimit: Function;

	/**
	 * The search filter for tasks.
	 */
	searchFilter: string;
	/**
	 * A function to set the search filter for tasks.
	 */
	setSearchFilter: Function;

	/**
	 * The status filter option for tasks.
	 */
	statusFilter: StatusFilterOption;
	/**
	 * A function to set the status filter option for tasks.
	 */
	setStatusFilter: Function;

	/**
	 * Indicates whether tasks are recurring.
	 */
	isRecur: boolean;
	/**
	 * A function to set whether tasks are recurring.
	 */
	setIsRecur: Function;

	/**
	 *  List of tags to filter tasks.
	 */
	tagFilter: string;
	/**
	 * A function to set filtering by specific tag.
	 */
	setTagFilter: Function;
	/**
	 *  Specify only show tasks with this tags or all tasks with matched tags
	 */
	hasOnlyThisTags: boolean;
	/**
	 * A function to set whether to only show tags with these tags.
	 */
	setHasOnlyThisTags: Function;

	noteFilter: string;
	setNoteFilter: Function;
	isFromCurrentNote: boolean;
	setIsFromCurrentNote: Function;
};

/**
 * Represents the possible difficulty levels of a task.
 */
export type Difficulty = "trivial" | "easy" | "medium" | "hard";

/**
 * Represents the possible statuses of a task.
 */
export type Status = "todo" | "doing" | "done" | "denied" | "delay";

/**
 * Type defenition for a task object
 */
export type Task = {
	/**
	 * The file associated with the task.
	 */
	path: string;

	/**
	 * The full content of the line containing the task.
	 */
	lineContent: string;

	/**
	 * The line number of the task in the file.
	 */
	lineNumber: number;

	/**
	 * The body content of the task.
	 */
	body: string;

	/**
	 * The indention level of the task in spaces.
	 */
	indention?: number;

	/**
	 * The completion timestamp of the task.
	 */
	completedAt?: string;

	/**
	 * The difficulty level of the task.
	 */
	difficulty?: Difficulty;

	/**
	 * The completion status of the task.
	 */
	status?: Status;

	/**
	 * The recurrence of the task.
	 */
	every?: string;

	/**
	 * The counter information of the task.
	 */
	counter?: {
		/**
		 * The goal value of the counter.
		 */
		goal: number;

		/**
		 * The current value of the counter.
		 */
		current: number;
	};

	/**
	 * Information about conditions
	 */
	condition?: {
		/**
		 * The file associated with the condition.
		 */
		file: string;

		/**
		 * Indicates whether the task should be shown or hidden.
		 */
		show: boolean;
	};
};

/**
 * Type defenition for a middleware used for parsing and stringification.
 *
 * A middleware consists of two functions:
 * - parse: parse metadata from markdown line
 * - stringify: stringify metadata back to markdown line
 */
export type Middleware = {
	/**
	 * Function for parsing metadata from a markdown line.
	 *
	 * This function takes a task object and extracts any metadata present in `body`.
	 * If metadata is found, metadata is cleared from the `body`.
	 *
	 * @param task The task object with field `body` representing the markdown line to parse.
	 * @param settings The plugin settings object (optional)
	 * @returns The task object with metadata cleared from the body, if found or the same task object.
	 */
	parse: (task: Task, settings?: GamifiedTasksSettings) => Task;

	/**
	 * Function for stringifying a task object to a markdown line.
	 *
	 * This function takes a task object and converts it into a markdown line.
	 * If metadata wasn't found in the task object, it returns an empty string.
	 *
	 * @param task The task object to stringify.
	 * @param settings The plugin settings object (optional)
	 * @returns The markdown representation of the task, or an empty string if metadata wasn't found.
	 */
	stringify: (task: Task, settings?: GamifiedTasksSettings) => string;
};
