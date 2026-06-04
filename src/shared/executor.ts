import type { InputDataPacket, ExecuteWorkflowResponse, Workflow } from "./types";
import { executeWorkflow as backendExecute } from "./api-client";

export async function executeWorkflowUnified(
  workflow: Workflow,
  inputData: InputDataPacket,
): Promise<ExecuteWorkflowResponse> {
  return backendExecute(workflow.slug, inputData);
}
