import { GamifiedTasksSettings } from "@types";

export const GamifiedTasksConstants = {
	sessionTasks: "gamified-tasks__tasks",
};

export const DEFAULT_SETTINGS: GamifiedTasksSettings = {
	limit: 10,
	statusFilter: "all",
	isRecurTasks: false,
	pathToRewards: "rewards.md",
	pathToHistory: "history.md",
	pathToDaily: "",
	dailyFormat: "YYYY-MM-DD",
	useMarkdownLinks: true,
	ignoreList: [],
	tagFilter: "",
	hasOnlyThisTags: false,
	noteFilter: "",
	isFromCurrentNote: false,
	shouldShowAllFilters: false,
	isCompletedAtEnabled: true,
};

export const DAY_FORMAT = "YYYY-MM-DD" as const;
export const DATE_FORMAT = `${DAY_FORMAT} HH:mm` as const;
