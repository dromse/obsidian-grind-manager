export type StatusFilterOption = "all" | Status;

export type TaskFilters = {
	limit: number;
	setLimit: Function;

	searchFilter: string;
	setSearchFilter: Function;

	statusFilter: StatusFilterOption;
	setStatusFilter: Function;

	isRecur: boolean;
	setIsRecur: Function;
};

/** Represets day time */
export type Time = {
	/**
	 * The hour of the day (0-23).
	 */
	hour: number;

	/**
	 * The minute of the hour (0-59).
	 */
	minute: number;
};

/**
 * Represents duration
 */
export interface Duration extends Time {
	/**
	 * The second of the minute (0-59).
	 */
	second: number;
}

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
	 * @returns The task object with metadata cleared from the body, if found or the same task object.
	 */
	parse: (task: Task) => Task;

	/**
	 * Function for stringifying a task object to a markdown line.
	 *
	 * This function takes a task object and converts it into a markdown line.
	 * If metadata wasn't found in the task object, it returns an empty string.
	 *
	 * @param task The task object to stringify.
	 * @returns The markdown representation of the task, or an empty string if metadata wasn't found.
	 */
	stringify: (task: Task) => string;
};
