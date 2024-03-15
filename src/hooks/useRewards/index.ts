import { useEffect, useState } from "react";
import { useApp, useSettings } from "..";
import { ParseState } from "../types";
import { getLines } from "../utils";

type Reward = {
	title: string;
	price: number;
	desc?: string;
};

/** Hook for interacting with rewards list */
export default function useRewards() {
	const [isRewardsParsed, setIsRewardsParsed] =
		useState<ParseState>("parsing");

	const app = useApp();
	const settings = useSettings();

	const [rewards, setRewards] = useState<Reward[]>([]);

	if (!app) {
		setIsRewardsParsed("error");

		return { rewards, isRewardsParsed };
	}

	const { vault } = app;

	useEffect(() => {
		let tFile;

		if (settings) {
			tFile = vault.getFileByPath(settings.pathToRewards);

		} else {
			tFile = vault.getFileByPath("rewards.md");
		}

		if (tFile) {
			vault.read(tFile).then((content) => {
				const rewards = parseRewards(content);

				setRewards(rewards);

				setIsRewardsParsed("parsed");
			});
		}

		setIsRewardsParsed("error");
	}, []);

	return { rewards, isRewardsParsed };
}

/**
 * Parse rewards from string which represents full file content
 * @param {string} content - full content with `'\n'` delimeters.
 *
 * @example
 * Parse
 * - Line in file: ice cream -> { title: 'ice cream', price: 1 }
 * - Line in file: ice cream | 10 -> { title: 'ice cream', price: 10 }
 * - Line in file: ice cream | 10 | be careful with it -> { title: 'ice cream', price: 10, desc: 'be careful with it' }
 * - Line in file: ice cream | okay be like that -> {title: 'ice cream', price: 1, desc: 'okay be like that' }
 * - Line in file: ice cream | 10 | desc | extra | extra 2 -> { title: 'ice cream', price: 10, desc: 'desc' } <- parses only 3 first elements.
 * - Line in file: ice cream | -> { title: 'ice cream', price: 1 } <- just ignore empty and extra delimeter.
 * Ignore
 * - Line in file: | it's not work -> nothing
 * - Line in file: | -> nothing
 * - Line in file: | 10 -> nothing
 * - Line in file: *empty* -> nothing
 * Feature:
 * - You can use `|` like in Ignore to comment things
 */
function parseRewards(content: string): Reward[] {
	const lines = getLines(content);

	const splitedLines = lines.reduce((acc, line) => {
		const newLine = line
			.split("|")
			.map((item) => item.trim())
			.slice(0, 3);

		if (newLine.length > 0 && newLine[0] !== "") {
			acc.push(newLine);
		}

		return acc;
	}, [] as string[][]);

	function isDigitString(line: string) {
		const digitLineRegex = /^\d+$/;

		return digitLineRegex.test(line);
	}

	const rewards = splitedLines.reduce((acc, line) => {
		if (line.length === 1) {
			acc.push({
				title: line[0],
				price: 1,
			});
			return acc;
		} else if (line.length === 2) {
			if (isDigitString(line[1])) {
				acc.push({
					title: line[0],
					price: Number(line[1]),
				});
				return acc;
			} else {
				acc.push({
					title: line[0],
					price: 1,
					desc: line[1],
				});
				return acc;
			}
		} else if (line.length === 3) {
			acc.push({
				title: line[0],
				price: Number(line[1]),
				desc: line[2],
			});
			return acc;
		}
	}, [] as Reward[]);

	return rewards as Reward[];
}
