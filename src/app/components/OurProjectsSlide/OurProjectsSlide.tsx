'use client';

import {useEffect, useMemo, useState, type CSSProperties} from "react";
import {AnimatePresence, motion} from "motion/react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {closeProject, openProject} from "@/app/store/ourProjectsSlice";
import {selectActiveProjectId} from "@/app/store/ourProjectsSelectors";
import SliderArrowIcon from "@/app/assets/icons/SliderArrowIcon";

type ProjectItem = {
    id: string;
    location: string;
    title: string;
    subtitle: string;
    description: string;
    theme: {
        surface: string;
        cardTone: string;
        textColor: string;
        mutedTextColor: string;
    };
};

const PROJECTS: ProjectItem[] = [
    {
        id: "atlas",
        location: "Swiss Alps",
        title: "Saint\nAntonien",
        subtitle: "Mountain Pass",
        description:
            "Alpine-inspired product concept with layered navigation, immersive hero scene and compact information cards.",
        theme: {
            surface: "linear-gradient(145deg, #f7f9ff 0%, #e8eeff 56%, #dbe5ff 100%)",
            cardTone: "linear-gradient(160deg, rgba(37, 63, 112, 0.88) 0%, rgba(28, 44, 84, 0.94) 100%)",
            textColor: "#0f1e4d",
            mutedTextColor: "rgba(26, 44, 91, 0.72)",
        },
    },
    {
        id: "flux",
        location: "Morocco",
        title: "Marrakesh\nMerzouga",
        subtitle: "Desert Route",
        description:
            "Warm palette interface exploration with timed cards and atmospheric transitions for travel storytelling.",
        theme: {
            surface: "linear-gradient(154deg, #bc1028 0%, #921126 54%, #650c1c 100%)",
            cardTone: "linear-gradient(160deg, rgba(255, 171, 171, 0.54) 0%, rgba(159, 25, 52, 0.76) 100%)",
            textColor: "#f9fbff",
            mutedTextColor: "rgba(234, 239, 255, 0.8)",
        },
    },
    {
        id: "lumen",
        location: "Barcelona",
        title: "City\nLights",
        subtitle: "Urban Nights",
        description:
            "Neon-inspired showcase variant used to test card rails when the amount of items is greater than four.",
        theme: {
            surface: "linear-gradient(154deg, #7b2cbf 0%, #5a189a 56%, #3c096c 100%)",
            cardTone: "linear-gradient(160deg, rgba(245, 189, 255, 0.56) 0%, rgba(100, 48, 161, 0.78) 100%)",
            textColor: "#f9fbff",
            mutedTextColor: "rgba(234, 239, 255, 0.8)",
        },
    },
    {
        id: "nova",
        location: "California",
        title: "Los Lances\nBeach",
        subtitle: "Coastal Wind",
        description:
            "Editorial card rhythm with clean typography and right-side slider to keep a cinematic browsing flow.",
        theme: {
            surface: "linear-gradient(154deg, #1240ab 0%, #11358f 52%, #0c2669 100%)",
            cardTone: "linear-gradient(160deg, rgba(165, 204, 255, 0.56) 0%, rgba(20, 63, 155, 0.76) 100%)",
            textColor: "#f9fbff",
            mutedTextColor: "rgba(234, 239, 255, 0.8)",
        },
    },
    {
        id: "orbit",
        location: "Yosemite",
        title: "National\nPark",
        subtitle: "Granite Peaks",
        description:
            "Large background-led layout where cards act as waypoints and keep context while changing the hero content.",
        theme: {
            surface: "linear-gradient(154deg, #127447 0%, #0f5e3b 56%, #0b3f2a 100%)",
            cardTone: "linear-gradient(160deg, rgba(157, 235, 191, 0.56) 0%, rgba(16, 86, 54, 0.78) 100%)",
            textColor: "#f9fbff",
            mutedTextColor: "rgba(234, 239, 255, 0.8)",
        },
    },
];

const VISIBLE_CARDS = 4;
const BACKGROUND_OVERLAYS =
    "radial-gradient(66% 66% at 80% 24%, rgba(220, 234, 255, 0.22), transparent 64%), radial-gradient(50% 56% at 20% 76%, rgba(178, 212, 255, 0.18), transparent 68%)";
const CARD_OVERLAY =
    "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 46%)";

function getSlideStyle(project: ProjectItem): CSSProperties {
    return {
        ["--project-text-color" as string]: project.theme.textColor,
        ["--project-muted-color" as string]: project.theme.mutedTextColor,
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
    const activeProjectId = useAppSelector(selectActiveProjectId);
    const [windowStart, setWindowStart] = useState(0);
    const [slideDirection, setSlideDirection] = useState<1 | -1>(1);

    const activeIndex = useMemo(() => {
        if (!activeProjectId) return 0;
        return PROJECTS.findIndex((project) => project.id === activeProjectId);
    }, [activeProjectId]);

    const activeProject = useMemo(() => {
        return PROJECTS[activeIndex >= 0 ? activeIndex : 0];
    }, [activeIndex]);

    useEffect(() => {
        if (!activeProjectId) {
            dispatch(openProject(PROJECTS[0].id));
        }
    }, [activeProjectId, dispatch]);

    useEffect(() => {
        return () => {
            dispatch(closeProject());
        };
    }, [dispatch]);

    const maxWindowStart = Math.max(0, PROJECTS.length - VISIBLE_CARDS);
    const canSlide = PROJECTS.length > VISIBLE_CARDS;

    useEffect(() => {
        setWindowStart((prev) => Math.min(prev, maxWindowStart));
    }, [maxWindowStart]);

    useEffect(() => {
        if (!canSlide) return;
        if (activeIndex < 0) return;

        setWindowStart((current) => {
            if (activeIndex < current) {
                return activeIndex;
            }

            if (activeIndex > current + VISIBLE_CARDS - 1) {
                return activeIndex - VISIBLE_CARDS + 1;
            }

            return current;
        });
    }, [activeIndex, canSlide]);

    const visibleProjects = canSlide
        ? PROJECTS.slice(windowStart, windowStart + VISIBLE_CARDS)
        : PROJECTS;

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

    return (
        <section className="ourProjectsSlide ourProjectsTheme" style={getSlideStyle(activeProject)}>
            <AnimatePresence>
                <motion.div
                    key={activeProject.id}
                    className="ourProjectsBackgroundLayer"
                    style={getBackgroundLayerStyle(activeProject)}
                    initial={{scale: 0.78, opacity: 1}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 1.14, opacity: 1}}
                    transition={{duration: 0.68, ease: [0.22, 0.9, 0.2, 1]}}
                />
            </AnimatePresence>

            <div className="ourProjectsIntro">
                <p className="ourProjectsKicker">{activeProject.location}</p>
                <h2 className="ourProjectsTitle">{activeProject.title}</h2>
                <p className="ourProjectsText">{activeProject.description}</p>
                <p className="ourProjectsCounter">{String(activeIndex + 1).padStart(2, "0")}</p>
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

                                return (
                                    <motion.button
                                        key={`${project.id}-${absoluteIndex}`}
                                        type="button"
                                        className={`ourProjectsCard ${isActive ? "ourProjectsCardActive" : ""}`}
                                        style={getCardStyle(project)}
                                        onClick={() => dispatch(openProject(project.id))}
                                        animate={{
                                            y: isActive ? -12 : 0,
                                            scale: isActive ? 1.05 : 1,
                                            opacity: isActive ? 1 : 0.78,
                                        }}
                                        transition={{duration: 0.42, ease: [0.2, 0.8, 0.2, 1]}}
                                        whileTap={{scale: 0.97}}
                                    >
                                            <span className="ourProjectsCardIndex">
                                              {String(absoluteIndex + 1).padStart(2, "0")}
                                            </span>
                                        <span className="ourProjectsCardLocation">{project.location}</span>
                                        <span className="ourProjectsCardTitle">{project.title.replace("\n", " ")}</span>
                                        <span className="ourProjectsCardSubtitle">{project.subtitle}</span>
                                    </motion.button>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="ourProjectsArrowButtonsWrapper">
                    <button
                        type="button"
                        className="ourProjectsArrowButton"
                        onClick={handlePrevWindow}
                        disabled={!canSlide || windowStart === 0}
                        aria-label="Previous cards"
                    >
                        <SliderArrowIcon width={30} height={30} />
                    </button>
                    <button
                        type="button"
                        className="ourProjectsArrowButton"
                        onClick={handleNextWindow}
                        disabled={!canSlide || windowStart >= maxWindowStart}
                        aria-label="Next cards"
                    >
                        <SliderArrowIcon width={30} height={30} />
                    </button>
                </div>
            </div>
        </section>
    );
}
