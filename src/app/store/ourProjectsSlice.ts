import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ProjectComponentType =
  | 'curavel'
  | 'auxilium'
  | 'axuxiliumMobileApp'
  | 'biobac';
export type ProjectLogoType =
  | 'curavel'
  | 'auxilium'
  | 'axuxiliumMobileApp'
  | 'biobac';

export type ProjectItem = {
  id: string;
  cardLocation: string;
  cardTitle: string;
  cardSubtitle: string;
  componentType: ProjectComponentType;
  logoType?: ProjectLogoType;
  cardWordmark?: string;
  theme: {
    surface: string;
    cardTone: string;
    accentColor: string;
    cardTextColor?: string;
    cardMetaTextColor?: string;
    cardShadeColor?: string;
  };
};

const PROJECTS: ProjectItem[] = [
  {
    id: 'curavel',
    cardLocation: 'Curavel',
    cardTitle: 'Curavel',
    cardSubtitle: 'Website',
    componentType: 'curavel',
    logoType: 'curavel',
    theme: {
      surface: 'linear-gradient(146deg, #020817 0%, #041653 52%, #182b79 100%)',
      cardTone:
        'linear-gradient(160deg, rgba(19, 35, 88, 0.92) 0%, rgba(15, 29, 72, 0.96) 100%)',
      accentColor: '#9da8ff',
    },
  },
  {
    id: 'auxilium',
    cardLocation: 'Auxilium',
    cardTitle: 'Auxilium',
    cardSubtitle: 'Core Platform',
    componentType: 'auxilium',
    logoType: 'auxilium',
    theme: {
      surface: 'linear-gradient(146deg, #252551 0%, #2d2c61 54%, #37346f 100%)',
      cardTone:
        'linear-gradient(160deg, rgba(42, 40, 96, 0.92) 0%, rgba(29, 27, 73, 0.96) 100%)',
      accentColor: '#7f72e6',
    },
  },
  {
    id: 'axuxilium-mobile-app',
    cardLocation: 'Auxilium App',
    cardTitle: 'Axuxilium Mobil APP',
    cardSubtitle: 'Mobile Experience',
    componentType: 'axuxiliumMobileApp',
    logoType: 'axuxiliumMobileApp',
    theme: {
      surface: 'linear-gradient(148deg, #16001f 0%, #3b0f4d 52%, #5a1368 100%)',
      cardTone:
        'linear-gradient(160deg, rgba(76, 16, 104, 0.92) 0%, rgba(54, 18, 74, 0.96) 100%)',
      accentColor: '#d11a81',
    },
  },
  {
    id: 'biobac',
    cardLocation: 'BioBac',
    cardTitle: 'BioBac',
    cardSubtitle: 'Project Slide',
    componentType: 'biobac',
    cardWordmark: 'BioBac',
    theme: {
      surface: 'linear-gradient(180deg, #f6f6f7 0%, #ededee 100%)',
      cardTone:
        'linear-gradient(160deg, rgba(252, 252, 253, 0.96) 0%, rgba(240, 241, 243, 0.98) 100%)',
      accentColor: '#3b82f6',
      cardTextColor: '#171717',
      cardMetaTextColor: 'rgba(23, 23, 23, 0.66)',
      cardShadeColor: 'rgba(72, 83, 108, 0.12)',
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
  name: 'ourProjects',
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
