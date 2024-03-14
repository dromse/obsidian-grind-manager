import { App } from "obsidian";
import { createContext } from "react";
import { GrindPluginSettings } from "../main";

export const AppContext = createContext<App | undefined>(undefined);
export const SettingsContext = createContext<GrindPluginSettings | undefined>(
	undefined,
);
