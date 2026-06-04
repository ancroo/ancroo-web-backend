import type { Workflow, HotkeyMapping } from "./types";
import {
  listWorkflows as backendListWorkflows,
  fetchHotkeySettings as backendFetchHotkeySettings,
} from "./api-client";

export async function listWorkflowsUnified(): Promise<Workflow[]> {
  return backendListWorkflows();
}

export async function fetchHotkeySettingsUnified(): Promise<HotkeyMapping[]> {
  return backendFetchHotkeySettings();
}
