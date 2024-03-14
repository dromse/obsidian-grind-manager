import { useEffect, useState } from "react";
import { useApp } from "..";
import { ParseState, RawFile } from "../types";

const pathToRewards = "/Misc/rewards.md";

type Reward = {
	title: string;
	price?: number;
	desc?: string;
};

/** Hook for interacting with rewards list */
export default function useRewards() {
	const [isRewardsParsed, setIsRewardsParsed] =
		useState<ParseState>("parsing");
	const app = useApp()?.vault;

	const [rewards, setRewards] = useState<Reward[]>([]);

	if (!app) {
		setIsRewardsParsed("error");

		return { rewards, isRewardsParsed };
	}

	useEffect(() => { }, []);

	return { rewards };
}

/**
 * Parse rewards from rewards.md from settings
 *
 * @example
 * // In file: ice cream -> { title: 'ice cream', price: 1 }
 * // In file: ice cream | 10 -> { title: 'ice cream', price: 10 }
 * // In file: ice cream | 10 | be careful with it -> { title: 'ice cream', price: 10, desc: 'be careful with it' }
 * // In file: ice cream | okay be like that -> {title: 'ice cream', price: 1, desc: 'okay be like that' }
 */
function parseRewards(file: RawFile): Reward[] {
	return [];
}
