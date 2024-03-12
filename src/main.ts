import { Plugin, WorkspaceLeaf } from "obsidian";
import { MyView, MY_VIEW_TYPE } from "./MyView";

interface GrindPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: GrindPluginSettings = {
	mySetting: "default",
};

export default class GrindPlugin extends Plugin {
	settings: GrindPluginSettings;

	async onload() {
		await this.loadSettings();

		this.registerView(MY_VIEW_TYPE, (leaf) => new MyView(leaf));

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
			leaf = workspace.getLeaf("tab");
			await leaf?.setViewState({ type: MY_VIEW_TYPE, active: true });
		}

		if (leaf) {
			workspace.revealLeaf(leaf);
		}
	}

	onunload() { }

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
