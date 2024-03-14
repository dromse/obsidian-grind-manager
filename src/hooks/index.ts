import { App } from "obsidian";
import { useContext } from "react";
import { AppContext, SettingsContext } from "../context";
import { GrindPluginSettings } from "../main";
import { default as useRewards } from "./useRewards";
import { default as useTasks } from "./useTasks";

/** Access `this.app` from different components through `useContext` */
export const useApp = (): App | undefined => {
	return useContext(AppContext);
};

export const useSettings = (): GrindPluginSettings | undefined => {
	return useContext(SettingsContext);
};

export { useRewards, useTasks };
