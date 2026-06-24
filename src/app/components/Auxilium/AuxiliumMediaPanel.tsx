'use client';

import Image from 'next/image';
import { useState } from 'react';
import AuxiliumDashboardHome from '@/app/assets/images/AuxiliumDashboardHome.png';
import AuxiliumPayerFeatures from '@/app/assets/images/AuxiliumPayerFeatures.png';
import AuxiliumPayerInformation from '@/app/assets/images/AuxiliumPayerInformation.png';
import AuxiliumRideReportsCharts from '@/app/assets/images/AuxiliumRideReportsCharts.png';
import AuxiliumRideReportsOverview from '@/app/assets/images/AuxiliumRideReportsOverview.png';
import AuxiliumUsersDirectory from '@/app/assets/images/AuxiliumUsersDirectory.png';

const AUXILIUM_SCREENS = [
  {
    label: 'Home',
    title: 'Operations command center',
    caption:
      'Actions, ride creation, member search, standing orders, contractors, and recent activity in one dispatcher home.',
    src: AuxiliumDashboardHome,
    alt: 'Auxilium home dashboard with actions and recent activity',
  },
  {
    label: 'Users',
    title: 'User directory and profile audit',
    caption:
      'Admin teams can manage users, inspect profile details, reset passwords, and review login activity.',
    src: AuxiliumUsersDirectory,
    alt: 'Auxilium user directory and user profile screen',
  },
  {
    label: 'Payer Info',
    title: 'Payer information workspace',
    caption:
      'Payer identity, locations, contact numbers, service levels, map context, and analytics stay visible together.',
    src: AuxiliumPayerInformation,
    alt: 'Auxilium payer information screen with map and analytics',
  },
  {
    label: 'Features',
    title: 'Feature controls by payer',
    caption:
      'Configurable payer, rideshare, contractor, and authorization features are organized for quick review.',
    src: AuxiliumPayerFeatures,
    alt: 'Auxilium payer features configuration screen',
  },
  {
    label: 'Reports',
    title: 'Ride reporting overview',
    caption:
      'A reporting dashboard tracks ride status, completion, cost, on-time performance, and member volume.',
    src: AuxiliumRideReportsOverview,
    alt: 'Auxilium ride reports dashboard with status and metric cards',
  },
  {
    label: 'Charts',
    title: 'Detailed performance charts',
    caption:
      'Deeper report views compare county cost, rendering services, rides, and on-time performance trends.',
    src: AuxiliumRideReportsCharts,
    alt: 'Auxilium ride report charts and performance graphs',
  },
] as const;

const AUXILIUM_MEDIA_TAGS = [
  'Admin console',
  'Payer controls',
  'Ride reporting',
  'Operations UI',
] as const;

export default function AuxiliumMediaPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = AUXILIUM_SCREENS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? AUXILIUM_SCREENS.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % AUXILIUM_SCREENS.length);
  };

  return (
    <div className="auxiliumRightContent">
      <div className="auxiliumScreenShowcase auxiliumReveal auxiliumDelay2">
        <div className="auxiliumScreenFrame">
          <div className="auxiliumScreenTopbar">
            <div className="auxiliumWindowDots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <span className="auxiliumScreenCrumb">{activeScreen.label}</span>
            <span className="auxiliumScreenCount">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(AUXILIUM_SCREENS.length).padStart(2, '0')}
            </span>
          </div>

          <div className="auxiliumScreenViewport">
            <Image
              key={activeScreen.label}
              src={activeScreen.src}
              alt={activeScreen.alt}
              fill
              className="auxiliumScreenImage"
              sizes="(max-width: 980px) 92vw, 760px"
              priority={activeIndex === 0}
            />
          </div>
        </div>

        <div className="auxiliumScreenMeta">
          <div>
            <p>{activeScreen.label}</p>
            <strong>{activeScreen.title}</strong>
            <span>{activeScreen.caption}</span>
          </div>

          <div className="auxiliumScreenControls">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Auxilium screen"
            >
              Prev
            </button>

            <div className="auxiliumScreenDots">
              {AUXILIUM_SCREENS.map((screen, index) => (
                <button
                  type="button"
                  key={screen.label}
                  className={index === activeIndex ? 'isActive' : ''}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${screen.label} screen`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Auxilium screen"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
