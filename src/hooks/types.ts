import { TFile } from "obsidian";

export type ParseState = "parsing" | "parsed" | "error";

export type RawFile = {
	tFile: TFile;
	content: string[];
};
