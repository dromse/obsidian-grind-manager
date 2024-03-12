import { ItemView, WorkspaceLeaf } from "obsidian";
import { createRoot, Root } from "react-dom/client";
import { GrindView } from "./components/GrindView";
import { AppContext } from "./context";

export const MY_VIEW_TYPE = "grind-manager-view";

export class MyView extends ItemView {
	root: Root | null = null;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
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
				<h1>Grind Manager</h1>

				<GrindView />
			</AppContext.Provider>,
		);
	}

	async onClose() {
		this.root?.unmount();
	}
}
