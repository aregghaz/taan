import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ProjectComponentType =
  | 'curavel'
  | 'auxilium'
  | 'axuxiliumMobileApp'
  | 'biobac'
  | 'bioBacMobileApp'
  | 'socialVenturePodcast'
  | 'joeMkProfile'
  | 'hayShenEquipmentPlatform';
export type ProjectLogoType =
  | 'curavel'
  | 'auxilium'
  | 'axuxiliumMobileApp'
  | 'biobac'
  | 'bioBacMobileApp'
  | 'socialVenturePodcast'
  | 'joeMkProfile'
  | 'hayShenEquipmentPlatform';

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
    disableBackgroundOverlays?: boolean;
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
    id: 'social-venture-podcast',
    cardLocation: 'Podcast',
    cardTitle: 'Social Venture Podcast',
    cardSubtitle: 'Website + Design',
    componentType: 'socialVenturePodcast',
    cardWordmark: 'SVP',
    theme: {
      surface: 'linear-gradient(146deg, #0a1026 0%, #161432 50%, #3b2233 100%)',
      cardTone:
        'linear-gradient(160deg, rgba(42, 34, 63, 0.94) 0%, rgba(20, 22, 47, 0.96) 100%)',
      accentColor: '#ffb45f',
      cardShadeColor: 'rgba(18, 12, 28, 0.38)',
    },
  },
  {
    id: 'joe-mk-profile',
    cardLocation: 'Profile',
    cardTitle: 'Joe Mkhitaryan',
    cardSubtitle: 'Profile Website + Motion',
    componentType: 'joeMkProfile',
    cardWordmark: 'Joe MK',
    theme: {
      surface: 'linear-gradient(146deg, #06140b 0%, #102d18 52%, #26412b 100%)',
      cardTone:
        'linear-gradient(160deg, rgba(28, 70, 39, 0.94) 0%, rgba(8, 24, 13, 0.96) 100%)',
      accentColor: '#4f8f63',
      cardShadeColor: 'rgba(4, 18, 9, 0.42)',
    },
  },
  {
    id: 'hayshen-equipment-platform',
    cardLocation: 'HayShen',
    cardTitle: 'HayShen',
    cardSubtitle: '3-App Equipment Platform',
    componentType: 'hayShenEquipmentPlatform',
    cardWordmark: 'HayShen',
    theme: {
      surface: 'linear-gradient(180deg, #f8f8f2 0%, #eef3e9 100%)',
      cardTone:
        'linear-gradient(160deg, rgba(255, 255, 255, 0.96) 0%, rgba(232, 241, 228, 0.98) 100%)',
      accentColor: '#245b32',
      disableBackgroundOverlays: true,
      cardTextColor: '#172018',
      cardMetaTextColor: 'rgba(23, 32, 24, 0.66)',
      cardShadeColor: 'rgba(36, 91, 50, 0.12)',
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
    cardTitle: 'Auxilium Mobile App',
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
      surface: 'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)',
      cardTone:
        'linear-gradient(160deg, rgba(252, 252, 253, 0.96) 0%, rgba(240, 241, 243, 0.98) 100%)',
      accentColor: '#3b82f6',
      disableBackgroundOverlays: true,
      cardTextColor: '#171717',
      cardMetaTextColor: 'rgba(23, 23, 23, 0.66)',
      cardShadeColor: 'rgba(72, 83, 108, 0.12)',
    },
  },
  {
    id: 'biobac-mobile-app',
    cardLocation: 'BioBac App',
    cardTitle: 'BioBac Mobile App',
    cardSubtitle: 'Mobile Operations',
    componentType: 'bioBacMobileApp',
    cardWordmark: 'BioBac',
    theme: {
      surface: 'linear-gradient(180deg, #f6f8fb 0%, #eef3f9 100%)',
      cardTone:
        'linear-gradient(160deg, rgba(255, 255, 255, 0.96) 0%, rgba(232, 239, 248, 0.98) 100%)',
      accentColor: '#2f86ed',
      disableBackgroundOverlays: true,
      cardTextColor: '#15171d',
      cardMetaTextColor: 'rgba(21, 23, 29, 0.66)',
      cardShadeColor: 'rgba(47, 134, 237, 0.12)',
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
