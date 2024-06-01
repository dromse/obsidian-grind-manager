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
	pathToConditions: "Conditions",
	pathToDaily: "",
	dailyFormat: "YYYY-MM-DD",
	useMarkdownLinks: true,
	ignoreList: [],
	tagFilter: "",
	hasOnlyThisTags: false,
	noteFilter: "",
	isFromCurrentNote: false,
	shouldShowAllFilters: false,
	isCompletedAtEnabled: true
};

export const DATE_FORMAT = "YYYY-MM-DD HH:mm" as const;
