'use client';

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import HeroHeader from "@/app/components/HeroHeader/HeroHeader";
import HeroFullscreenSlide from "@/app/components/HeroFullscreenSlide/HeroFullscreenSlide";
import HeroRouteSync from "@/app/components/HeroRouteSync/HeroRouteSync";

const HOME_PATH = "/home";
const HOME_HEADER_ANIMATED_KEY = "taan_home_header_animated";

export default function Home() {
  const pathname = usePathname();
  const [shouldAnimateHeader, setShouldAnimateHeader] = useState(false);

  useEffect(() => {
    const isHomePath = pathname === HOME_PATH || pathname === `${HOME_PATH}/`;

    if (!isHomePath) {
      setShouldAnimateHeader(false);
      return;
    }

    const navigationEntry = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const isPageReload = navigationEntry?.type === "reload";
    const isFirstHomeVisit = sessionStorage.getItem(HOME_HEADER_ANIMATED_KEY) !== "1";
    const shouldAnimate = isPageReload || isFirstHomeVisit;

    setShouldAnimateHeader(shouldAnimate);

    if (isFirstHomeVisit) {
      sessionStorage.setItem(HOME_HEADER_ANIMATED_KEY, "1");
    }
  }, [pathname]);

  const headerWrapperClassName = useMemo(() => {
    return shouldAnimateHeader
      ? "homePageHeaderWrapper homePageHeaderAnimate"
      : "homePageHeaderWrapper";
  }, [shouldAnimateHeader]);

  return (
    <main className="homePage">
        <HeroRouteSync />
        <div className={headerWrapperClassName}>
            <HeroHeader />
        </div>
      <div className="homePageRing" />

      <div className="homePageContent">
        <p className="homePageKicker">Tomorrow’s Answers, Available Now</p>
        <h1 className="homePageTitle">TAAN <br/> TECHNOLOGIES</h1>
        <button className="homePageButton">Buttonik</button>
      </div>

      <HeroFullscreenSlide />
    </main>
  );
}
