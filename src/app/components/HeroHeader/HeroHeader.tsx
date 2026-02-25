'use client';

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
    <header className="heroHeader">
      <div className="heroHeaderBrand">
          <TaanMiniLogo  />
      </div>

      <nav className="heroHeaderNav" aria-label="Main navigation">
        {navItems.map((item, index) => (
          <button
            key={item}
            type="button"
            className={`heroHeaderNavLink ${activeMenuIndex === index ? "heroHeaderNavLinkActive" : ""}`}
            onClick={() => handleMenuClick(index)}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="heroHeaderActions">
        <button className="heroHeaderLangButton" type="button">
          EN
        </button>
      </div>
    </header>
  );
}
