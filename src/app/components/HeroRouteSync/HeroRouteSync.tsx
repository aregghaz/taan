'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAppDispatch } from '@/app/store/hooks';
import { setActiveMenu } from '@/app/store/heroSliderSlice';
import { getMenuIndexFromPath } from '@/app/helpers/heroRoutes';

export default function HeroRouteSync() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const nextMenuIndex = getMenuIndexFromPath(pathname);
    dispatch(setActiveMenu(nextMenuIndex));
  }, [dispatch, pathname]);

  return null;
}
