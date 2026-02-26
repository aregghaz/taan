'use client';

import {useEffect, useMemo, useState, type CSSProperties, type ComponentType, type PointerEvent} from "react";
import {AnimatePresence, motion} from "motion/react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {closeProject, openProject} from "@/app/store/ourProjectsSlice";
import {selectActiveProjectId, selectProjects} from "@/app/store/ourProjectsSelectors";
import SliderArrowIcon from "@/app/assets/icons/SliderArrowIcon";
import CuravelProject from "@/app/components/CuravelProject/CuravelProject";
import Auxilium from "@/app/components/Auxilium/Auxilium";
import AxuxiliumMobilApp from "@/app/components/AxuxiliumMobilApp/AxuxiliumMobilApp";
import BioBac from "@/app/components/BioBac/BioBac";
import type {ProjectComponentType, ProjectItem} from "@/app/store/ourProjectsSlice";

const FULL_PAGE_COMPONENTS: Record<ProjectComponentType, ComponentType> = {
    curavel: CuravelProject,
    auxilium: Auxilium,
    axuxiliumMobileApp: AxuxiliumMobilApp,
    biobac: BioBac,
};

const VISIBLE_CARDS = 4;
const BACKGROUND_OVERLAYS =
    "radial-gradient(70% 62% at 72% 100%, rgba(132, 111, 255, 0.22), transparent 70%), radial-gradient(56% 58% at 26% 16%, rgba(88, 148, 255, 0.2), transparent 72%)";
const CARD_OVERLAY =
    "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 46%)";

function getSlideStyle(project: ProjectItem): CSSProperties {
    return {
        ["--project-accent" as string]: project.theme.accentColor,
    };
}

function getBackgroundLayerStyle(project: ProjectItem): CSSProperties {
    return {
        backgroundImage: `${BACKGROUND_OVERLAYS}, ${project.theme.surface}`,
    };
}

function getCardStyle(project: ProjectItem): CSSProperties {
    return {
        backgroundImage: `${CARD_OVERLAY}, ${project.theme.cardTone}`,
    };
}

export default function OurProjectsSlide() {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(selectProjects);
  const activeProjectId = useAppSelector(selectActiveProjectId);
  const [windowStart, setWindowStart] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [hoverTilt, setHoverTilt] = useState({rotateX: 0, rotateY: 0});

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

  const maxWindowStart = Math.max(0, projects.length - VISIBLE_CARDS);
  const canSlide = projects.length > VISIBLE_CARDS;

    useEffect(() => {
        setWindowStart((prev) => Math.min(prev, maxWindowStart));
    }, [maxWindowStart]);

    useEffect(() => {
        if (!canSlide) return;

        setWindowStart((current) => {
            if (normalizedActiveIndex < current) {
                return normalizedActiveIndex;
            }

            if (normalizedActiveIndex > current + VISIBLE_CARDS - 1) {
                return normalizedActiveIndex - VISIBLE_CARDS + 1;
            }

            return current;
        });
    }, [normalizedActiveIndex, canSlide]);

  const visibleProjects = canSlide
    ? projects.slice(windowStart, windowStart + VISIBLE_CARDS)
    : projects;

    const handlePrevWindow = () => {
        if (!canSlide || windowStart <= 0) return;
        setSlideDirection(-1);
        setWindowStart((prev) => Math.max(0, prev - 1));
    };

  const handleNextWindow = () => {
    if (!canSlide || windowStart >= maxWindowStart) return;
    setSlideDirection(1);
    setWindowStart((prev) => Math.min(maxWindowStart, prev + 1));
  };

  const handleCardPointerMove = (event: PointerEvent<HTMLButtonElement>, projectId: string) => {
    if (event.pointerType === "touch") return;

    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 22;
    const rotateX = (0.5 - y) * 22;

    target.style.setProperty("--pointer-x", `${(x * 100).toFixed(2)}%`);
    target.style.setProperty("--pointer-y", `${(y * 100).toFixed(2)}%`);

    setHoveredCardId(projectId);
    setHoverTilt({rotateX, rotateY});
  };

  const handleCardPointerLeave = (event: PointerEvent<HTMLButtonElement>, projectId: string) => {
    const target = event.currentTarget;
    target.style.removeProperty("--pointer-x");
    target.style.removeProperty("--pointer-y");

    setHoveredCardId((current) => (current === projectId ? null : current));
    setHoverTilt({rotateX: 0, rotateY: 0});
  };

  if (!activeProject || !ActiveProjectComponent) {
    return null;
  }

    return (
        <section className="ourProjectsSlide ourProjectsTheme" style={getSlideStyle(activeProject)}>
            <AnimatePresence>
                <motion.div
                    key={activeProject.id}
                    className="ourProjectsBackgroundLayer"
                    style={getBackgroundLayerStyle(activeProject)}
                    initial={{scale: 0.8, opacity: 0.88}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 1.12, opacity: 0.92}}
                    transition={{duration: 0.66, ease: [0.22, 0.9, 0.2, 1]}}
                />
            </AnimatePresence>

            <div className="ourProjectsFullPage">
                <ActiveProjectComponent/>
            </div>

            <div className="ourProjectsRailWrap">
                <div className="ourProjectsCardsViewport">
                    <AnimatePresence mode="popLayout" initial={false} custom={slideDirection}>
                        <motion.div
                            key={windowStart}
                            className="ourProjectsCardsRail"
                            custom={slideDirection}
                            initial={{x: slideDirection > 0 ? 46 : -46, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: slideDirection > 0 ? -46 : 46, opacity: 0}}
                            transition={{duration: 0.35, ease: [0.2, 0.8, 0.2, 1]}}
                            aria-label="Our projects"
                        >
              {visibleProjects.map((project, localIndex) => {
                const absoluteIndex = canSlide ? windowStart + localIndex : localIndex;
                const isActive = project.id === activeProject.id;
                const isHovered = hoveredCardId === project.id;

                const rotateX = isHovered ? hoverTilt.rotateX : isActive ? 7 : 0;
                const rotateY = isHovered ? hoverTilt.rotateY : isActive ? -6 : 0;

                return (
                  <motion.button
                    key={`${project.id}-${absoluteIndex}`}
                    type="button"
                    className={`ourProjectsCard ${isActive ? "ourProjectsCardActive" : ""} ${isHovered ? "ourProjectsCardHover" : ""}`}
                    style={getCardStyle(project)}
                    onClick={() => dispatch(openProject(project.id))}
                    onPointerMove={(event) => handleCardPointerMove(event, project.id)}
                    onPointerLeave={(event) => handleCardPointerLeave(event, project.id)}
                    animate={{
                      y: isActive ? -12 : 0,
                      scale: 1,
                      opacity: isActive ? 1 : 0.82,
                      rotateX,
                      rotateY,
                      z: isHovered ? 52 : isActive ? 32 : 0,
                    }}
                    transition={{duration: 0.28, ease: [0.2, 0.8, 0.2, 1]}}
                    whileTap={{scale: 0.995}}
                                    >
                    <span className="ourProjectsCardIndex">
                      {String(absoluteIndex + 1).padStart(2, "0")}
                    </span>
                                        <span className="ourProjectsCardLocation">{project.cardLocation}</span>
                                        <span className="ourProjectsCardTitle">{project.cardTitle}</span>
                                        <span className="ourProjectsCardSubtitle">{project.cardSubtitle}</span>
                                    </motion.button>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>
                {/*TODO this part is commented because we dont have much projects*/}
                {/*<div className="ourProjectsArrowButtonsWrapper">*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        className="ourProjectsArrowButton"*/}
                {/*        onClick={handlePrevWindow}*/}
                {/*        disabled={!canSlide || windowStart === 0}*/}
                {/*        aria-label="Previous cards"*/}
                {/*    >*/}
                {/*        <SliderArrowIcon width={30} height={30}/>*/}
                {/*    </button>*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        className="ourProjectsArrowButton"*/}
                {/*        onClick={handleNextWindow}*/}
                {/*        disabled={!canSlide || windowStart >= maxWindowStart}*/}
                {/*        aria-label="Next cards"*/}
                {/*    >*/}
                {/*        <SliderArrowIcon width={30} height={30}/>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </section>
    );
}
