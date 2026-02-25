import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type OurProjectsState = {
  activeProjectId: string | null;
  isOpen: boolean;
};

const initialState: OurProjectsState = {
  activeProjectId: null,
  isOpen: false,
};

const ourProjectsSlice = createSlice({
  name: "ourProjects",
  initialState,
  reducers: {
    openProject(state, action: PayloadAction<string>) {
      state.activeProjectId = action.payload;
      state.isOpen = true;
    },
    closeProject(state) {
      state.activeProjectId = null;
      state.isOpen = false;
    },
  },
});

export const { openProject, closeProject } = ourProjectsSlice.actions;
export default ourProjectsSlice.reducer;
