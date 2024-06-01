import { DEFAULT_SETTINGS } from "@consts";
import { StatusKeys } from "@hooks/useTasks/consts";
import { StatusFilterOption } from "@hooks/useTasks/types";
import { getFileLines } from "@utils/file";
import { App, PluginSettingTab, Setting } from "obsidian";
import GamifiedTasksPlugin from "./main";

/** Class for Setting Tab where user can set default filtering settings for `Grind Manager` */
export default class GamifiedTasksSettingTab extends PluginSettingTab {
	plugin: GamifiedTasksPlugin;

	constructor(app: App, plugin: GamifiedTasksPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl).setName("Path to rewards file").addText((text) =>
			text
				.setPlaceholder("path/to/rewards.md")
				.setValue(String(this.plugin.settings.pathToRewards))
				.onChange(async (value) => {
					const trimmedValue = value.trim();

					this.plugin.settings.pathToRewards = trimmedValue
						? trimmedValue
						: DEFAULT_SETTINGS.pathToRewards;

					await this.plugin.saveSettings();
				}),
		);

		new Setting(containerEl).setName("Path to history file").addText((text) =>
			text
				.setPlaceholder("path/to/history.md")
				.setValue(String(this.plugin.settings.pathToHistory))
				.onChange(async (value) => {
					const trimmedValue = value.trim();

					this.plugin.settings.pathToHistory = trimmedValue
						? trimmedValue
						: DEFAULT_SETTINGS.pathToHistory;

					await this.plugin.saveSettings();
				}),
		);

		new Setting(containerEl).setName("Path to conditions directory").addText((text) =>
			text
				.setPlaceholder("path/to/conditions")
				.setValue(String(this.plugin.settings.pathToConditions))
				.onChange(async (value) => {
					const trimmedValue = value.trim();

					this.plugin.settings.pathToConditions = trimmedValue
						? trimmedValue
						: DEFAULT_SETTINGS.pathToConditions;

					await this.plugin.saveSettings();
				}),
		);

		new Setting(containerEl)
			.setName("Ignore")
			.setDesc("Exclude files or folders from parsing tasks")
			.addTextArea((text) => {
				text.inputEl.style.width = "100%";
				text.inputEl.style.height = "auto";
				text.inputEl.style.resize = "vertical";

				text.inputEl.style.height = "1px";
				text.inputEl.style.height = 25 + text.inputEl.scrollHeight + "px";

				text
					.setPlaceholder("Input to ignore Folder/, Note or Path/to/Note")
					.setValue(this.plugin.settings.ignoreList.join("\n"))
					.onChange(async (value) => {
						const filesToIgnore = getFileLines(value).reduce<Array<string>>(
							(acc, str) => {
								const trimmedLine = str.trim();

								if (trimmedLine) {
									acc.push(trimmedLine);
								}

								return acc;
							},
							[],
						);

						this.plugin.settings.ignoreList =
							filesToIgnore || DEFAULT_SETTINGS.ignoreList;

						await this.plugin.saveSettings();
					});
			});

		new Setting(containerEl)
			.setName("Show done date in completed task")
			.setDesc(
				"Add Markdown or Wiki link to the current daily note when you complete a task ✅",
			)
			.addToggle((toggle) =>
				toggle
					.setValue(this.plugin.settings.isCompletedAtEnabled)
					.onChange(async (value) => {
						this.plugin.settings.isCompletedAtEnabled = value;
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("Show all filters by default?")
			.addToggle((toggle) =>
				toggle
					.setValue(this.plugin.settings.shouldShowAllFilters)
					.onChange(async (value) => {
						this.plugin.settings.shouldShowAllFilters = value;
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl).setName("Filters").setHeading();

		new Setting(containerEl).setName("Default limit").addText((text) =>
			text
				.setPlaceholder("Only number")
				.setValue(String(this.plugin.settings.limit))
				.onChange(async (value) => {
					this.plugin.settings.limit = Number(value.replace(/\D/g, ""));
					await this.plugin.saveSettings();
				}),
		);

		const statusFilterOptions: Record<string, string> = {};

		StatusKeys.forEach((status) => (statusFilterOptions[status] = status));

		new Setting(containerEl)
			.setName("Default status filter")
			.addDropdown((dropDown) =>
				dropDown
					.addOption("all", "all")
					.addOptions(statusFilterOptions)
					.setValue(this.plugin.settings.statusFilter)
					.onChange(async (value) => {
						this.plugin.settings.statusFilter = value as StatusFilterOption;
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl).setName("Default tag filter").addText((text) =>
			text
				.setPlaceholder("Input tags without # (use comma to separate)")
				.setValue(this.plugin.settings.tagFilter)
				.onChange(async (value) => {
					this.plugin.settings.tagFilter = value;

					await this.plugin.saveSettings();
				}),
		);

		new Setting(containerEl)
			.setName("Show only with these tags by default?")
			.addToggle((toggle) =>
				toggle
					.setValue(this.plugin.settings.hasOnlyThisTags)
					.onChange(async (value) => {
						this.plugin.settings.hasOnlyThisTags = value;
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("Default note filter (without .md)")
			.addText((text) =>
				text
					.setPlaceholder("Input path to note (without '.md')")
					.setValue(this.plugin.settings.noteFilter)
					.onChange(async (value) => {
						this.plugin.settings.noteFilter = value.trim();

						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("Show tasks from current note by default?")
			.addToggle((toggle) =>
				toggle
					.setValue(this.plugin.settings.isFromCurrentNote)
					.onChange(async (value) => {
						this.plugin.settings.isFromCurrentNote = value;
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("Show recurring tasks by default?")
			.addToggle((toggle) =>
				toggle
					.setValue(this.plugin.settings.isRecurTasks)
					.onChange(async (value) => {
						this.plugin.settings.isRecurTasks = value;
						await this.plugin.saveSettings();
					}),
			);
	}
}
