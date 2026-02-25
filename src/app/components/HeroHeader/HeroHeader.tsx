'use client';

import styles from './heroHeader.module.scss';
import { usePathname, useRouter } from "next/navigation";
import TaanMiniLogo from "@/app/assets/icons/TaanMiniLogo";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setActiveMenu } from "@/app/store/heroSliderSlice";
import {
  selectActiveMenuIndex,
  selectHeroMenuItems,
} from "@/app/store/heroSliderSelectors";
import { getPathFromMenuIndex } from "@/app/helpers/heroRoutes";

export default function HeroHeader() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const navItems = useAppSelector(selectHeroMenuItems);
  const activeMenuIndex = useAppSelector(selectActiveMenuIndex);

  const handleMenuClick = (index: number) => {
    const nextPath = getPathFromMenuIndex(index);

    dispatch(setActiveMenu(index));

    if (pathname !== nextPath) {
      router.push(nextPath);
    }
  };

  return (
    <header className={styles.heroHeader}>
      <div className={styles.brand}>
          <TaanMiniLogo  />
      </div>

      <nav className={styles.nav} aria-label="Main navigation">
        {navItems.map((item, index) => (
          <button
            key={item}
            type="button"
            className={`${styles.navLink} ${activeMenuIndex === index ? styles.navLinkActive : ""}`}
            onClick={() => handleMenuClick(index)}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className={styles.actions}>
        <button className={styles.langButton} type="button">
          EN
        </button>
      </div>
    </header>
  );
}
