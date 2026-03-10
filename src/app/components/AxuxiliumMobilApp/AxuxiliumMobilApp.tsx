'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Aux1 from '@/app/assets/images/Aux1.jpg';
import Aux2 from '@/app/assets/images/Aux2.jpg';
import Aux3 from '@/app/assets/images/Aux3.jpg';
import Aux4 from '@/app/assets/images/Aux4.jpg';

const APP_METRICS = [
  { value: '40+', label: 'Designed screens' },
  { value: '6', label: 'Core user flows' },
  { value: '1', label: 'Unified app experience' },
] as const;

const FLOW_STEPS = [
  {
    title: 'Secure Login',
    description:
      'Email login with password reset, social sign-in options, and SSO support.',
  },
  {
    title: 'Identity Verification',
    description:
      'Member details, profile checks, and call support fallback for blocked cases.',
  },
  {
    title: 'Ride Setup',
    description:
      'Ride preferences, pickup and drop-off locations, and quick address confirmation.',
  },
  {
    title: 'Ride Operations',
    description:
      'Scheduled rides, map-based route details, live status updates, and rescheduling.',
  },
  {
    title: 'Account & Safety',
    description:
      'Authorized contacts, eligibility checks, account security, and notification control.',
  },
] as const;

const SCREEN_GROUPS = [
  {
    title: 'Onboarding & Access',
    points: [
      'Welcome and multi-step sign-up',
      'Email verification and password setup',
      'Optional Face ID and SSO toggles',
    ],
  },
  {
    title: 'Ride Creation',
    points: [
      'Preferred rider tags and service types',
      'Pickup and drop-off with location search',
      'Address confirmation modal and conflict warning',
    ],
  },
  {
    title: 'Trip Tracking',
    points: [
      'Scheduled rides timeline',
      'Ride detail with map and status chips',
      'Reschedule, cancel, and emergency call actions',
    ],
  },
  {
    title: 'Profile & Settings',
    points: [
      'Personal info and home address',
      'Authorized contacts and permissions',
      'Notifications, SMS code, and password reset',
    ],
  },
] as const;

const MOBILE_SLIDES = [
  {
    id: 'auth',
    title: 'Login & Verification',
    description:
      'Secure sign-in, email verification, and password recovery path for members.',
    image: Aux1,
  },
  {
    id: 'rides',
    title: 'Ride Scheduling',
    description:
      'Create rides, select service details, and review pickup and drop-off plans.',
    image: Aux2,
  },
  {
    id: 'tracking',
    title: 'Live Ride Detail',
    description:
      'Track route progress with status states, map context, and quick actions.',
    image: Aux3,
  },
  {
    id: 'settings',
    title: 'Security & Settings',
    description:
      'Manage account protection, notifications, and authorized contact access.',
    image: Aux4,
  },
] as const;

export default function AxuxiliumMobilApp() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % MOBILE_SLIDES.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setActiveSlide((current) =>
      current === 0 ? MOBILE_SLIDES.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveSlide((current) => (current + 1) % MOBILE_SLIDES.length);
  };

  return (
    <section className="axuxiliumMobilAppSlide">
      <div className="axmContent">
        <div className="axmTopLayout">
          <div className="axmMainInfo">
            <header className="axmHero">
              <p className="axmEyebrow">Mobile Product</p>
              <h2 className="axmTitle">Auxilium Mobile App</h2>
              <p className="axmLead">
                End-to-end member experience for NEMT ride booking,
                verification, live trip tracking, and account security in one
                mobile interface.
              </p>

              <div className="axmMetricGrid">
                {APP_METRICS.map((metric) => (
                  <article className="axmMetricCard" key={metric.label}>
                    <span className="axmMetricValue">{metric.value}</span>
                    <span className="axmMetricLabel">{metric.label}</span>
                  </article>
                ))}
              </div>
            </header>

            <div className="axmFlowLayout">
              <article className="axmFlowCard">
                <h3>Product Flow</h3>
                <ol className="axmFlowList">
                  {FLOW_STEPS.map((step) => (
                    <li key={step.title}>
                      <span>{step.title}</span>
                      <p>{step.description}</p>
                    </li>
                  ))}
                </ol>
              </article>
            </div>

            <div
              className="axmScreenGroups"
              aria-label="Auxilium mobile screen groups"
            >
              {SCREEN_GROUPS.map((group) => (
                <article className="axmScreenGroupCard" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="axmSliderWrapper">
            <aside
              className="axmSliderCard"
              aria-label="Auxilium app screen slider"
            >
              <div className="axmSliderHeader">
                <p>Interface Preview</p>
                <span>
                  {String(activeSlide + 1).padStart(2, '0')} /{' '}
                  {String(MOBILE_SLIDES.length).padStart(2, '0')}
                </span>
              </div>

              <div className="axmSliderViewport">
                <div
                  className="axmSliderTrack"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {MOBILE_SLIDES.map((slide) => (
                    <article className="axmSlide" key={slide.id}>
                      <div className="axmPhoneFrame">
                        <div className="axmPhoneNotch" />
                        <Image
                          src={slide.image}
                          alt={`${slide.title} screen`}
                          fill
                          className="axmPhoneImage"
                        />
                      </div>

                      <div className="axmSlideCaption">
                        <h4>{slide.title}</h4>
                        <p>{slide.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="axmSliderControls">
                <button
                  type="button"
                  className="axmSliderButton"
                  onClick={handlePrev}
                  aria-label="Previous screen"
                >
                  Prev
                </button>

                <div
                  className="axmSliderDots"
                  role="tablist"
                  aria-label="Slide selector"
                >
                  {MOBILE_SLIDES.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      className={`axmDot ${index === activeSlide ? 'isActive' : ''}`}
                      aria-label={`Go to ${slide.title}`}
                      onClick={() => setActiveSlide(index)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="axmSliderButton"
                  onClick={handleNext}
                  aria-label="Next screen"
                >
                  Next
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
