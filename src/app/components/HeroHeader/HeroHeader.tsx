'use client';

import styles from './heroHeader.module.scss';
import TaanMiniLogo from "@/app/assets/icons/TaanMiniLogo";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setActiveMenu } from "@/app/store/heroSliderSlice";
import {
  selectActiveMenuIndex,
  selectHeroMenuItems,
} from "@/app/store/heroSliderSelectors";

export default function HeroHeader() {
  const dispatch = useAppDispatch();
  const navItems = useAppSelector(selectHeroMenuItems);
  const activeMenuIndex = useAppSelector(selectActiveMenuIndex);

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
            onClick={() => dispatch(setActiveMenu(index))}
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
