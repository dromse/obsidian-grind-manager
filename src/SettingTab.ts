import { App, PluginSettingTab, Setting } from "obsidian";
import {
	CompletedFilterOption,
	StatusFilterOption
} from "./components/TaskList";
import { Statuses } from "./hooks/useTasks/middleware/status";
import GrindPlugin from "./main";

/** Class for Setting Tab where user can set default filtering settings for `Grind Manager` */
export default class GrindSettingTab extends PluginSettingTab {
	plugin: GrindPlugin;

	constructor(app: App, plugin: GrindPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl).setName("Default limit: ").addText((text) =>
			text
				.setPlaceholder("Only number")
				.setValue(String(this.plugin.settings.limit))
				.onChange(async (value) => {
					this.plugin.settings.limit = Number(value.replace(/\D/g, ""));
					await this.plugin.saveSettings();
				}),
		);

		const statusFilterOptions: Record<string, string> = {};

		Statuses.forEach((status) => (statusFilterOptions[status] = status));

		new Setting(containerEl)
			.setName("Default status filter: ")
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

		new Setting(containerEl)
			.setName("Default completed filter: ")
			.addDropdown((dropDown) =>
				dropDown
					.addOption("all", "all")
					.addOption("uncompleted", "uncompleted")
					.addOption("completed", "completed")
					.setValue(this.plugin.settings.completedFilter)
					.onChange(async (value) => {
						this.plugin.settings.completedFilter =
							value as CompletedFilterOption;
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("Path to rewards file: ")
			.addText((text) =>
				text
					.setPlaceholder("path/to/rewards.md")
					.setValue(String(this.plugin.settings.pathToRewards))
					.onChange(async (value) => {
						const trimmedValue = value.trim();

						this.plugin.settings.pathToRewards = trimmedValue
							? trimmedValue
							: "rewards.md";

						await this.plugin.saveSettings();
					}),
			);
	}
}
