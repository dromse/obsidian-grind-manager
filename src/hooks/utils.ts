/** Split content string by '\n' and return list of strings */
export function getLines(fileContent: string): string[] {
	return fileContent.split("\n");
}
