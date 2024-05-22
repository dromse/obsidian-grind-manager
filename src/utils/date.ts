import { DATE_FORMAT } from "@consts";
import { moment } from "obsidian";

/** Stringigy date for locale time */
export function currentDate(): string {
	const dateStr = moment().format(DATE_FORMAT);

	return dateStr;
}

/** Generate an array of past dates starting from the current date. */
export function generatePastDaysArray(numDays: number): Array<String> {
	// Get current date
	const currentDate = moment();

	// Initialize an empty array to store the dates
	const datesList = [];

	// Loop through each day from numDays ago to today
	for (let i = 0; i < numDays; i++) {
		const date = currentDate.clone().subtract(i, "days");
		datesList.push(date.format("YYYY-MM-DD"));
	}

	// Reverse the array to get dates in chronological order
	return datesList.reverse();
}

/**
 * Extracts the numeric value from a string representing days or weeks.
 * If the string ends with "day", returns the numeric part as is.
 * If the string ends with "week", returns the numeric part multiplied by 7.
 * If the string does not match the pattern, returns null.
 *
 * @param {string} str - The input string containing a numeric value followed by "day" or "week".
 * @returns The extracted numeric value, or null if no match is found.
 */
export function getAmountOfPastDays(str: string): number | null {
	const regex = /^(\d+)?(day|week)$/;

	const match = str.match(regex);
	if (match) {
		const numericPart = match[1] ? parseInt(match[1]) : 1;
		const isWeek = match[2] === "week";
		return isWeek ? numericPart * 7 : numericPart;
	} else {
		return null;
	}
}

/**
 * Converts duration to human readeable format
 * @example
 * "62 minute" -> "1 hour 2 minutes"
 * "0 hour 31 minute 62 second" -> "32 minutes 2 seconds"
 */
export function convertDuration(durationStr: string): string {
	const timeUnits = [
		{ label: "day", seconds: 86400 },
		{ label: "hour", seconds: 3600 },
		{ label: "minute", seconds: 60 },
		{ label: "second", seconds: 1 },
	] as const;

	// Convert input to total seconds
	let totalSeconds = 0;
	const parts = durationStr.match(/(\d+)\s*(day|hour|minute|second)/g);
	if (parts) {
		parts.forEach((part) => {
			const match = part.match(/(\d+)\s*(day|hour|minute|second)/);
			if (match) {
				const [_, value, unit] = match;
				const timeUnit = timeUnits.find((tu) => tu.label === unit);
				if (timeUnit) {
					totalSeconds += parseInt(value) * timeUnit.seconds;
				}
			}
		});
	}

	// Convert total seconds to human-readable format
	const result: Array<string> = [];
	timeUnits.forEach((unit) => {
		const value = Math.floor(totalSeconds / unit.seconds);
		if (value > 0) {
			result.push(`${value} ${unit.label}${value > 1 ? "s" : ""}`);
			totalSeconds -= value * unit.seconds;
		}
	});

	return result.join(" ");
}
