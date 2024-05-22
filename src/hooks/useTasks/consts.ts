import {
	bind,
	body,
	completedAt,
	counter,
	difficulty,
	every,
	indention,
	status
} from "./middleware";
import { Difficulty, Middleware, Status } from "./types";

/**
 * Prices for different difficulty levels.
 * Inspired by Habitica: {@link https://habitica.com/}
 */
export const DifficultyPrice: Record<Difficulty, number> = {
	/**
	 * Price for tasks of trivial difficulty.
	 */
	trivial: 0.1,

	/**
	 * Price for tasks of easy difficulty.
	 */
	easy: 1,

	/**
	 * Price for tasks of medium difficulty.
	 */
	medium: 2.5,

	/**
	 * Price for tasks of hard difficulty.
	 */
	hard: 5,
};

/**
 * Array of difficulty keys.
 */
export const DifficultyKeys = Object.keys(
	DifficultyPrice,
) as Array<Difficulty>;

/**
 * Statuses for tasks with markdown values
 * Inspired by obsidian-tasks: {@link https://publish.obsidian.md/tasks/Getting+Started/Statuses}
 */
export const StatusMarkdown: Record<Status, string> = {
	/**
	 * Represents a task that is to be done.
	 */
	todo: " ",

	/**
	 * Represents a task that is currently being worked on.
	 */
	doing: "/",

	/**
	 * Represents a task that has been completed.
	 */
	done: "x",

	/**
	 * Represents a task that has been denied or rejected.
	 */
	denied: "-",

	/**
	 * Represents a task that has been delayed.
	 */
	delay: "?",
};

/**
 * Array of status keys.
 */
export const StatusKeys = Object.keys(StatusMarkdown) as Array<Status>;

/**
 * Middlewares used for parsing tasks metadata and stringifying back to markdown line.
 *
 * These middlewares handle various aspects of task parsing and stringification,
 * including indention, task status, body content, counters, bindings, difficulty level,
 * recurrence and completion timestamps.
 *
 * Note: The `body` middleware is not necessary for parsing but is included for
 * correct stringification.
 */
export const middlewares: Array<Middleware> = [
	indention, // Middleware for handling indention
	status, // Middleware for handling task status
	body, // Middleware for handling task body content
	counter, // Middleware for handling task counters
	difficulty, // Middleware for handling task difficulty
	bind, // Middleware for handling binding to YAML properties in daily notes.
	every, // Middleware for handling task recurrence
	completedAt, // Middleware for handling task completion timestamps
];
