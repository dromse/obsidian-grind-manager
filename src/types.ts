import { StatusFilterOption } from "@hooks/useTasks/types";

export type GamifiedTasksSettings = {
	limit: number | undefined;
	statusFilter: StatusFilterOption;
	isRecurTasks: boolean;
	pathToRewards: string;
	pathToHistory: string;
	pathToConditions: string;
	pathToDaily: string;
	dailyFormat: string;
	useMarkdownLinks: boolean;
	ignoreList: Array<string>;
	tagFilter: string;
	hasOnlyThisTags: boolean;
	noteFilter: string;
	isFromCurrentNote: boolean;
	shouldShowAllFilters: boolean;
	isCompletedAtEnabled: boolean;
};
