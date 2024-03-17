import { TFile } from "obsidian";
import { Difficulty } from "./middleware/difficulty";
import { Status } from "./middleware/status";

export type Task = {
	tFile: TFile;
	lineContent: string;
	lineNumber: number;
	body: string;

	// for middlewares
	indention?: number;
	bind?: string;
	completed?: boolean;
	completedAt?: string;
	difficulty?: Difficulty;
	status?: Status;
	every?: string;
	counter?: { goal: number; current: number; unit: string };
	timer?: { goal: string; current: string };
};

export type Middleware = {
	parse: (task: Task) => Task; // parse from line
	stringify: (task: Task) => string; // stringify middleware
};
