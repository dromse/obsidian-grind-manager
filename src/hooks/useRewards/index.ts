import { useEffect, useState } from "react";
import { useApp } from "..";
import { ParseState } from "../types";

const pathToRewards = "/Misc/rewards.md";

type Reward = {
	title: string;
	price?: number;
	allowTodayQuantity?: number;
	desc?: string;
};

/**
 * Parse rewards from rewards.md from settings: title: string | price: number? | allowTodayQuantity: number? | desc: string?
 */
export function useRewards() {
	const [isRewardsParsed, setIsRewardsParsed] =
		useState<ParseState>("parsing");
	const app = useApp()?.vault;

	const [rewards, setRewards] = useState<Reward[]>([]);

	if (!app) {
		setIsRewardsParsed("error");

		return { rewards, isRewardsParsed };
	}

	useEffect(() => {}, []);

	return { rewards };
}
