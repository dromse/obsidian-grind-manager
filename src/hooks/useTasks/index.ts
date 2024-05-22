import { GamifiedTasksConstants } from "@consts";
import { getRawFiles } from "@utils/file";
import {
	byNote,
	byRecurrance,
	bySearch,
	byStatus,
	byTag,
	byToday,
} from "@utils/filter";
import { parseMiddlewares, stringifyMiddlewares } from "@utils/middleware";
import { operateYAMLBinding, parseTasks } from "@utils/task";
import { TFile, moment } from "obsidian";
import { useEffect, useState } from "react";
import { useApp, useHistory, useSettings } from "..";
import { ParseState } from "../types";
import { middlewares } from "./consts";
import { StatusFilterOption, Task, TaskFilters } from "./types";

type UseTasksResult = {
	tasks: Array<Task>;
	isTasksParsed: ParseState;
	updateTask: (task: Task, newTask: Task) => void;
	filters: TaskFilters;
};

/**
 * Hook for interaction with tasks in current vault
 */
export default function useTasks(): UseTasksResult {
	const [tasks, setTasks] = useState<Array<Task>>([]);
	const [isTasksParsed, setIsTasksParsed] = useState<ParseState>("parsing");
	const [shouldUpdateUI, setSouldUpdateUI] = useState(false);
	const [limit, setLimit] = useState(0);
	const [statusFilter, setStatusFilter] = useState<StatusFilterOption>("all");
	const [isRecur, setIsRecur] = useState(false);
	const [searchFilter, setSearchFilter] = useState("");
	const [tagFilter, setTagFilter] = useState("");
	const [hasOnlyThisTags, setHasOnlyThisTags] = useState(false);
	const [noteFilter, setNoteFilter] = useState("");
	const [isFromCurrentNote, setIsFromCurrentNote] = useState(false);
	const [activeFile, setActiveFile] = useState<TFile | null>(null);

	const filters = {
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
	};

	const app = useApp();
	const { historyRows } = useHistory();
	const settings = useSettings();

	if (!app) {
		setIsTasksParsed("error");

		return { tasks, isTasksParsed, updateTask, filters };
	}

	const { vault, workspace } = app;

	/** Update task props and save to vault */
	async function updateTask(
		task: Task,
		newTask: Task,
	): Promise<"updated" | "error"> {
		const newStr = stringifyMiddlewares(newTask, middlewares, settings);

		const tFile = vault.getFileByPath(task.path);

		if (!tFile) {
			return "error";
		}

		const result = await vault.process(tFile, (data) =>
			data.replace(task.lineContent, newStr),
		);

		if (result) {
			if (newTask.bind && settings && app) {
				operateYAMLBinding({ app, vault, settings, task: newTask, previousTaskState: task });
			}

			return "updated";
		}

		return "error";
	}

	function getTodayTasks(tasks: ReadonlyArray<Task>): Array<Task> {
		const toShowTodayTasks = tasks.filter(byToday(historyRows));
		toShowTodayTasks.map((task) => resetReccuringTask(task, updateTask));

		return toShowTodayTasks;
	}

	async function fetchTasks(): Promise<void> {
		try {
			const files = await getRawFiles(vault, settings);

			const parsedTasks = parseTasks(files);
			const parsedTaskswithMiddlewares = parseMiddlewares(
				parsedTasks,
				middlewares,
				settings,
			);

			sessionStorage.setItem(
				GamifiedTasksConstants.sessionTasks,
				JSON.stringify(parsedTaskswithMiddlewares),
			);

			setIsTasksParsed("parsed");
			setSouldUpdateUI((prev) => !prev);
		} catch (err) {
			setIsTasksParsed("error");
		}
	}

	const filterTaskList = (taskList: ReadonlyArray<Task>): Array<Task> =>
		taskList
			.filter(byNote(noteFilter, isFromCurrentNote, workspace))
			.filter(byStatus(statusFilter))
			.filter(byTag(tagFilter, hasOnlyThisTags))
			.filter(bySearch(searchFilter))
			.slice(0, limit);

	/**
	 * Load tasks from sessionStorage and apply filters.
	 */
	useEffect(() => {
		const tasksJSON = sessionStorage.getItem(GamifiedTasksConstants.sessionTasks);

		if (tasksJSON) {
			const tasks: Array<Task> = JSON.parse(tasksJSON);

			if (isRecur) {
				const allRecurringTasks = tasks.filter(byRecurrance);

				const todayTasks = getTodayTasks(allRecurringTasks);

				const filteredList = filterTaskList(todayTasks);

				setTasks(filteredList);
			} else {
				const filteredList = filterTaskList(tasks);

				setTasks(filteredList);
			}
		}

		const handleActiveFile = (): void => {
			const tFile = workspace.getActiveFile();
			setActiveFile(tFile);
		};

		workspace.on("active-leaf-change", handleActiveFile);
		return () => workspace.off("active-leaf-change", handleActiveFile);
	}, [
		limit,
		searchFilter,
		isRecur,
		statusFilter,
		tagFilter,
		hasOnlyThisTags,
		noteFilter,
		isFromCurrentNote,
		activeFile,
		shouldUpdateUI,
	]);

	const setupDefaultSettings = (): void => {
		if (!settings) {
			return;
		}

		type SettingSetter = {
			setting: unknown;
			setter: React.Dispatch<React.SetStateAction<unknown>>;
		};

		const settingSetters: ReadonlyArray<SettingSetter> = [
			{ setting: settings.limit, setter: setLimit },
			{ setting: settings.statusFilter, setter: setStatusFilter },
			{ setting: settings.isRecurTasks, setter: setIsRecur },
			{ setting: settings.tagFilter, setter: setTagFilter },
			{ setting: settings.hasOnlyThisTags, setter: setHasOnlyThisTags },
			{ setting: settings.noteFilter, setter: setNoteFilter },
			{ setting: settings.isFromCurrentNote, setter: setIsFromCurrentNote },
		];

		settingSetters.forEach((obj) => obj.setting && obj.setter(obj.setting));
	};

	/**
	 * Apply default settings on mount.
	 * Fetch tasks when vault is modified.
	 */
	useEffect(() => {
		setupDefaultSettings();

		fetchTasks();
		vault.on("modify", fetchTasks);
		return () => vault.off("modify", fetchTasks);
	}, []);

	return { tasks, isTasksParsed, updateTask, filters };
}

function resetReccuringTask(
	task: Task,
	updateTask: (task: Task, newTask: Task) => void,
): void {
	const newTask = { ...task };

	if (task.status === "done") {
		newTask.status = "todo";

		if (task.counter) {
			if (task.counter.current === task.counter.goal) {
				const { goal } = task.counter;

				newTask.counter = { current: 0, goal };
			}
		}

		updateTask(task, newTask);
	}
}
