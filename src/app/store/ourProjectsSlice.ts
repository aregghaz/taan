import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ProjectComponentType = "curavel" | "auxilium" | "axuxiliumMobileApp" | "biobac";

export type ProjectItem = {
  id: string;
  cardLocation: string;
  cardTitle: string;
  cardSubtitle: string;
  componentType: ProjectComponentType;
  theme: {
    surface: string;
    cardTone: string;
    accentColor: string;
  };
};

const PROJECTS: ProjectItem[] = [
  {
    id: "curavel",
    cardLocation: "Swiss Alps",
    cardTitle: "Saint Antonien",
    cardSubtitle: "Mountain Pass",
    componentType: "curavel",
    theme: {
      surface: "linear-gradient(146deg, #020817 0%, #041653 52%, #182b79 100%)",
      cardTone: "linear-gradient(160deg, rgba(19, 35, 88, 0.92) 0%, rgba(15, 29, 72, 0.96) 100%)",
      accentColor: "#9da8ff",
    },
  },
  {
    id: "auxilium",
    cardLocation: "Auxilium",
    cardTitle: "Auxilium",
    cardSubtitle: "Core Platform",
    componentType: "auxilium",
    theme: {
      surface: "linear-gradient(148deg, #020b1f 0%, #032552 54%, #024267 100%)",
      cardTone: "linear-gradient(160deg, rgba(16, 40, 88, 0.92) 0%, rgba(11, 31, 69, 0.96) 100%)",
      accentColor: "#63e5d3",
    },
  },
  {
    id: "axuxilium-mobile-app",
    cardLocation: "Auxilium App",
    cardTitle: "Axuxilium Mobil APP",
    cardSubtitle: "Mobile Experience",
    componentType: "axuxiliumMobileApp",
    theme: {
      surface: "linear-gradient(148deg, #020a25 0%, #07265a 52%, #0d3a77 100%)",
      cardTone: "linear-gradient(160deg, rgba(17, 43, 94, 0.92) 0%, rgba(13, 34, 78, 0.96) 100%)",
      accentColor: "#4ea3ff",
    },
  },
  {
    id: "biobac",
    cardLocation: "BioBac",
    cardTitle: "BioBac",
    cardSubtitle: "Project Slide",
    componentType: "biobac",
    theme: {
      surface: "linear-gradient(148deg, #020b2a 0%, #05285a 50%, #063f78 100%)",
      cardTone: "linear-gradient(160deg, rgba(15, 39, 90, 0.92) 0%, rgba(11, 31, 70, 0.96) 100%)",
      accentColor: "#48d7c8",
    },
  },
];

type OurProjectsState = {
  projects: ProjectItem[];
  activeProjectId: string | null;
  isOpen: boolean;
};

const initialState: OurProjectsState = {
  projects: PROJECTS,
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
