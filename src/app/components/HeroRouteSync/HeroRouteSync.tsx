'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectActiveMenuIndex } from "@/app/store/heroSliderSelectors";
import { setActiveMenu } from "@/app/store/heroSliderSlice";
import { getMenuIndexFromPath } from "@/app/helpers/heroRoutes";

export default function HeroRouteSync() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const activeMenuIndex = useAppSelector(selectActiveMenuIndex);

  useEffect(() => {
    const nextMenuIndex = getMenuIndexFromPath(pathname);

    if (nextMenuIndex !== activeMenuIndex) {
      dispatch(setActiveMenu(nextMenuIndex));
    }
  }, [activeMenuIndex, dispatch, pathname]);

  return null;
}
