'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import TaanMiniLogo from '@/app/assets/icons/TaanMiniLogo';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setActiveMenu } from '@/app/store/heroSliderSlice';
import {
  selectActiveMenuIndex,
  selectHeroMenuItems,
} from '@/app/store/heroSliderSelectors';
import { getPathFromMenuIndex } from '@/app/helpers/heroRoutes';

export default function HeroHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const navItems = useAppSelector(selectHeroMenuItems);
  const activeMenuIndex = useAppSelector(selectActiveMenuIndex);

  const handleMenuClick = (index: number) => {
    const nextPath = getPathFromMenuIndex(index);

    setIsMobileMenuOpen(false);
    dispatch(setActiveMenu(index));

    if (pathname !== nextPath) {
      window.history.pushState(null, '', nextPath);
    }
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return (
    <header className="heroHeader">
      <div className="heroHeaderBrand">
        <TaanMiniLogo />
      </div>

      <nav className="heroHeaderNav" aria-label="Main navigation">
        {navItems.map((item, index) => (
          <button
            key={item}
            type="button"
            className={`heroHeaderNavLink ${activeMenuIndex === index ? 'heroHeaderNavLinkActive' : ''}`}
            onClick={() => handleMenuClick(index)}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="heroHeaderActions">
        <button
          type="button"
          className={`heroHeaderBurger ${isMobileMenuOpen ? 'heroHeaderBurgerOpen' : ''}`}
          aria-expanded={isMobileMenuOpen}
          aria-controls="hero-mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        <button className="heroHeaderLangButton" type="button">
          EN
        </button>
      </div>

      <div
        id="hero-mobile-menu"
        className={`heroHeaderMobilePanel ${isMobileMenuOpen ? 'heroHeaderMobilePanelOpen' : ''}`}
      >
        <nav className="heroHeaderMobileNav" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <button
              key={`mobile-${item}`}
              type="button"
              className={`heroHeaderMobileLink ${activeMenuIndex === index ? 'heroHeaderMobileLinkActive' : ''}`}
              onClick={() => handleMenuClick(index)}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
