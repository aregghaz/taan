'use client';

import {
  type ComponentType,
  type CSSProperties,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import type {
  ProjectComponentType,
  ProjectItem,
  ProjectLogoType,
} from '@/app/store/ourProjectsSlice';
import { closeProject, openProject } from '@/app/store/ourProjectsSlice';
import {
  selectActiveProjectId,
  selectProjects,
} from '@/app/store/ourProjectsSelectors';
import { CuravelLogoIcon } from '@/app/assets/icons/CuravelLogoIcon';
import CuravelProject from '@/app/components/CuravelProject/CuravelProject';
import Auxilium from '@/app/components/Auxilium/Auxilium';
import AxuxiliumMobilApp from '@/app/components/AxuxiliumMobilApp/AxuxiliumMobilApp';
import BioBac from '@/app/components/BioBac/BioBac';
import { AuxiliumLogoIcon } from '@/app/assets/icons/AuxiliumLogoIcon';

const FULL_PAGE_COMPONENTS: Record<ProjectComponentType, ComponentType> = {
  curavel: CuravelProject,
  auxilium: Auxilium,
  axuxiliumMobileApp: AxuxiliumMobilApp,
  biobac: BioBac,
};

const LOGO_COMPONENTS: Partial<
  Record<ProjectLogoType, ComponentType<{ className?: string }>>
> = {
  curavel: CuravelLogoIcon,
  auxilium: AuxiliumLogoIcon,
  axuxiliumMobileApp: AuxiliumLogoIcon,
};

const BACKGROUND_OVERLAYS =
  'radial-gradient(70% 62% at 72% 100%, rgba(132, 111, 255, 0.22), transparent 70%), radial-gradient(56% 58% at 26% 16%, rgba(88, 148, 255, 0.2), transparent 72%)';
const CARD_OVERLAY =
  'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 46%)';
const SIDEBAR_OPEN_MEDIA_QUERY = '(min-width: 1400px)';

function getSlideStyle(project: ProjectItem): CSSProperties {
  return {
    ['--project-accent' as string]: project.theme.accentColor,
  };
}

function getBackgroundLayerStyle(project: ProjectItem): CSSProperties {
  return {
    backgroundImage: project.theme.disableBackgroundOverlays
      ? project.theme.surface
      : `${BACKGROUND_OVERLAYS}, ${project.theme.surface}`,
  };
}

function getCardStyle(project: ProjectItem): CSSProperties {
  return {
    backgroundImage: `${CARD_OVERLAY}, ${project.theme.cardTone}`,
    ['--project-card-text' as string]:
      project.theme.cardTextColor ?? '#f8fbff',
    ['--project-card-meta' as string]:
      project.theme.cardMetaTextColor ?? 'rgba(230, 239, 255, 0.76)',
    ['--project-card-shade' as string]:
      project.theme.cardShadeColor ?? 'rgba(10, 24, 64, 0.34)',
  };
}

export default function OurProjectsSlide() {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(selectProjects);
  const activeProjectId = useAppSelector(selectActiveProjectId);
  const fullPageRef = useRef<HTMLDivElement | null>(null);
  const [isDesktopSidebar, setIsDesktopSidebar] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const resetProjectScroll = () => {
    const root = fullPageRef.current;
    if (!root) return;

    const directHost = root.firstElementChild;

    root.scrollTop = 0;
    root.scrollLeft = 0;

    if (directHost instanceof HTMLElement) {
      directHost.scrollTop = 0;
      directHost.scrollLeft = 0;
    }
  };

  const activeIndex = useMemo(() => {
    if (projects.length === 0) return -1;
    if (!activeProjectId) return 0;

    return projects.findIndex((project) => project.id === activeProjectId);
  }, [activeProjectId, projects]);

  const normalizedActiveIndex = activeIndex >= 0 ? activeIndex : 0;

  const activeProject = useMemo(() => {
    return projects[normalizedActiveIndex] ?? null;
  }, [normalizedActiveIndex, projects]);

  const ActiveProjectComponent = useMemo(() => {
    if (!activeProject) return null;
    return FULL_PAGE_COMPONENTS[activeProject.componentType];
  }, [activeProject]);

  useEffect(() => {
    if (projects.length === 0) return;
    if (!activeProjectId) {
      dispatch(openProject(projects[0].id));
    }
  }, [activeProjectId, dispatch, projects]);

  useEffect(() => {
    return () => {
      dispatch(closeProject());
    };
  }, [dispatch]);

  useLayoutEffect(() => {
    resetProjectScroll();
  }, [activeProjectId]);

  useEffect(() => {
    resetProjectScroll();

    const frame1 = requestAnimationFrame(() => {
      resetProjectScroll();
      requestAnimationFrame(() => {
        resetProjectScroll();
      });
    });
    const timeoutId = setTimeout(() => {
      resetProjectScroll();
    }, 140);

    return () => {
      cancelAnimationFrame(frame1);
      clearTimeout(timeoutId);
    };
  }, [activeProjectId]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(SIDEBAR_OPEN_MEDIA_QUERY);

    const syncSidebarState = (matches: boolean) => {
      setIsDesktopSidebar(matches);
      setIsSidebarOpen(matches);
    };

    syncSidebarState(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      syncSidebarState(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleProjectSelect = (projectId: string) => {
    if (projectId !== activeProjectId) {
      dispatch(openProject(projectId));
    }

    if (!isDesktopSidebar) {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((current) => !current);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (!activeProject || !ActiveProjectComponent) {
    return null;
  }

  return (
    <section
      className={`ourProjectsSlide ourProjectsTheme ${isDesktopSidebar ? 'ourProjectsSlideDesktopSidebar' : 'ourProjectsSlideMobileSidebar'} ${isSidebarOpen ? 'ourProjectsSlideSidebarOpen' : ''} ${activeProject.id === 'biobac' ? 'ourProjectsSlideLightChrome' : ''}`}
      style={getSlideStyle(activeProject)}
    >
      <AnimatePresence>
        <motion.div
          key={activeProject.id}
          className="ourProjectsBackgroundLayer"
          style={getBackgroundLayerStyle(activeProject)}
          initial={{ scale: 0.8, opacity: 0.88 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.12, opacity: 0.92 }}
          transition={{ duration: 0.66, ease: [0.22, 0.9, 0.2, 1] }}
        />
      </AnimatePresence>

      <button
        type="button"
        className={`ourProjectsSidebarBackdrop ${!isDesktopSidebar && isSidebarOpen ? 'ourProjectsSidebarBackdropVisible' : ''}`}
        onClick={closeSidebar}
        aria-label="Close project navigation"
        tabIndex={!isDesktopSidebar && isSidebarOpen ? 0 : -1}
      />

      <div className="ourProjectsShell">
        <aside
          id="our-projects-sidebar"
          className="ourProjectsSidebar"
          aria-label="Project navigation"
        >
          <div className="ourProjectsSidebarPanel">
            <div className="ourProjectsSidebarHeader">
              <div className="ourProjectsSidebarHeaderText">
                <p className="ourProjectsSidebarEyebrow">Projects</p>
                <strong>Case studies</strong>
                <span>Vertical project list with quick switching.</span>
              </div>

              <button
                type="button"
                className="ourProjectsSidebarCloseButton"
                onClick={toggleSidebar}
                aria-label={
                  isSidebarOpen
                    ? 'Hide project navigation'
                    : 'Show project navigation'
                }
              >
                {isSidebarOpen ? 'Hide' : 'Show'}
              </button>
            </div>

            <div className="ourProjectsSidebarCards">
              {projects.map((project, index) => {
                const isActive = project.id === activeProject.id;
                const Logo = project.logoType
                  ? LOGO_COMPONENTS[project.logoType]
                  : null;

                return (
                  <motion.button
                    key={project.id}
                    type="button"
                    className={`ourProjectsCard ${isActive ? 'ourProjectsCardActive' : ''}`}
                    style={getCardStyle(project)}
                    onClick={() => handleProjectSelect(project.id)}
                    animate={{
                      opacity: isActive ? 1 : 0.84,
                      scale: isActive ? 1 : 0.985,
                      x: isActive ? 6 : 0,
                    }}
                    transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}
                    whileHover={{ y: -2, opacity: 1, scale: 1 }}
                    whileTap={{ scale: 0.995 }}
                    aria-pressed={isActive}
                  >
                    {Logo ? (
                      <Logo className="ourProjectsCardLogo" />
                    ) : project.cardWordmark ? (
                      <span className="ourProjectsCardWordmark">
                        {project.cardWordmark}
                      </span>
                    ) : null}

                    <span className="ourProjectsCardIndex">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="ourProjectsCardLocation">
                      {project.cardLocation}
                    </span>
                    <span className="ourProjectsCardTitle">
                      {project.cardTitle}
                    </span>
                    <span className="ourProjectsCardSubtitle">
                      {project.cardSubtitle}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </aside>

        <div className="ourProjectsMain">
          <div className="ourProjectsToolbar">
            <button
              type="button"
              className="ourProjectsMainToggle"
              onClick={toggleSidebar}
              aria-controls="our-projects-sidebar"
              aria-expanded={isSidebarOpen}
            >
              {isSidebarOpen ? 'Hide Projects' : 'Show Projects'}
            </button>

            <div className="ourProjectsActiveMeta">
              <span className="ourProjectsActiveEyebrow">Active project</span>
              <strong>{activeProject.cardTitle}</strong>
              <em>{activeProject.cardSubtitle}</em>
            </div>
          </div>

          <div ref={fullPageRef} className="ourProjectsFullPage">
            <ActiveProjectComponent key={`project-${activeProject.id}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
