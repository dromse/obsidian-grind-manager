import { App } from "obsidian";
import { useContext } from "react";
import { AppContext } from "../context";

/** Access `this.app` from different components through `useContext` */
export const useApp = (): App | undefined => {
	return useContext(AppContext);
};
