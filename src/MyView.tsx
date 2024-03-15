import { ItemView, WorkspaceLeaf } from "obsidian";
import { createRoot, Root } from "react-dom/client";
import { GrindApp } from "./components/GrindApp";
import { AppContext, SettingsContext } from "./context";
import { GrindPluginSettings } from "./main";

export const MY_VIEW_TYPE = "grind-manager-view";

export class MyView extends ItemView {
	root: Root | null = null;
	pluginSettings: GrindPluginSettings;

	constructor(leaf: WorkspaceLeaf, settings: GrindPluginSettings) {
		super(leaf);
		this.pluginSettings = settings;
	}

	getViewType() {
		return MY_VIEW_TYPE;
	}

	getDisplayText() {
		return "Grind View";
	}

	async onOpen() {
		this.root = createRoot(this.containerEl.children[1]);

		this.root.render(
			<AppContext.Provider value={this.app}>
				<SettingsContext.Provider value={this.pluginSettings}>
					<h1>Grind Manager</h1>

					<GrindApp />
				</SettingsContext.Provider>
			</AppContext.Provider>,
		);
	}

	async onClose() {
		this.root?.unmount();
	}
}
