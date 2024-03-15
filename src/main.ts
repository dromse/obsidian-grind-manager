import {
	Plugin, WorkspaceLeaf
} from "obsidian";
import { CompletedFilterOption, StatusFilterOption } from "./components/TaskList";
import { MyView, MY_VIEW_TYPE } from "./MyView";
import GrindSettingTab from "./SettingTab";

export type GrindPluginSettings = {
	limit: number | undefined;
	completedFilter: CompletedFilterOption;
	statusFilter: StatusFilterOption;
	pathToRewards: string;
};

const DEFAULT_SETTINGS: GrindPluginSettings = {
	limit: 10,
	completedFilter: "all",
	statusFilter: "all",
	pathToRewards: "rewards.md",
};

export default class GrindPlugin extends Plugin {
	settings: GrindPluginSettings;

	async onload() {
		await this.loadSettings();

		this.registerView(MY_VIEW_TYPE, (leaf) => new MyView(leaf, this.settings));

		this.addSettingTab(new GrindSettingTab(this.app, this));

		this.addRibbonIcon("list-todo", "Show Grind View", () => {
			this.activateView();
		});
	}

	async activateView() {
		const { workspace } = this.app;

		let leaf: WorkspaceLeaf | null = null;
		const leaves = workspace.getLeavesOfType(MY_VIEW_TYPE);

		if (leaves.length > 0) {
			leaf = leaves[0];
		} else {
			leaf = workspace.getRightLeaf(false);
			await leaf?.setViewState({ type: MY_VIEW_TYPE, active: true });
		}

		if (leaf) {
			workspace.revealLeaf(leaf);
		}
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
