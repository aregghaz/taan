import type { RootState } from "./store";

export const selectProjects = (state: RootState) => state.ourProjects.projects;
export const selectActiveProjectId = (state: RootState) => state.ourProjects.activeProjectId;
export const selectIsProjectOpen = (state: RootState) => state.ourProjects.isOpen;
