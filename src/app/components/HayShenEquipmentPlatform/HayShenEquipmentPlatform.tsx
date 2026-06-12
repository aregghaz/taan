'use client';

import Image from 'next/image';
import { useState } from 'react';
import HayShenAuth from '@/app/assets/images/HayShenAuth.png';
import HayShenClientHome from '@/app/assets/images/HayShenClientHome.png';
import HayShenCompanyEmpty from '@/app/assets/images/HayShenCompanyEmpty.png';
import HayShenCreateDriver from '@/app/assets/images/HayShenCreateDriver.png';
import HayShenDriverOrders from '@/app/assets/images/HayShenDriverOrders.png';
import HayShenDriverRoute from '@/app/assets/images/HayShenDriverRoute.png';
import HayShenEquipmentDetail from '@/app/assets/images/HayShenEquipmentDetail.png';
import HayShenOrderAccepted from '@/app/assets/images/HayShenOrderAccepted.png';
import HayShenOrderSummary from '@/app/assets/images/HayShenOrderSummary.png';
import HayShenOrderTracking from '@/app/assets/images/HayShenOrderTracking.png';

const HAYSHEN_TAGS = [
  '3 mobile apps',
  'Heavy equipment',
  'Order tracking',
  'Company dashboard',
  'Driver workflow',
] as const;

const HAYSHEN_STATS = [
  { value: '03', label: 'connected apps' },
  { value: '10', label: 'Figma screens' },
  { value: 'B2B', label: 'field operations' },
] as const;

const HAYSHEN_FEATURES = [
  'Client app for ordering construction equipment by category, price, rating, and location.',
  'Company app for accepting jobs, creating drivers, managing workers, and publishing equipment.',
  'Driver app for receiving assigned work, seeing route details, contacting the client, and completing the order.',
] as const;

const ECOSYSTEM_APPS = [
  {
    title: 'Client App',
    text: 'Customers choose equipment, review details, place orders, and follow the job status.',
  },
  {
    title: 'Company App',
    text: 'Companies manage drivers, workers, machinery, incoming requests, and job acceptance.',
  },
  {
    title: 'Driver App',
    text: 'Drivers receive jobs, view the map route, call the customer, and move through task stages.',
  },
] as const;

const HAYSHEN_SCREENS = [
  {
    label: 'Client Home',
    title: 'Equipment marketplace',
    caption: 'Category browsing, search, recent orders, favorites, profile, and request history.',
    image: HayShenClientHome,
    alt: 'HayShen client app home screen',
  },
  {
    label: 'Equipment',
    title: 'Machine detail page',
    caption: 'Photos, rating, hourly price, technical specs, company profile, and order action.',
    image: HayShenEquipmentDetail,
    alt: 'HayShen equipment detail screen',
  },
  {
    label: 'Order',
    title: 'Order lifecycle',
    caption: 'Step-by-step status from accepted request to machine dispatch, work, and completion.',
    image: HayShenOrderTracking,
    alt: 'HayShen order tracking screen',
  },
  {
    label: 'Accepted',
    title: 'Accepted job status',
    caption: 'A clear milestone screen with job progress, equipment, driver contact, and confirmation actions.',
    image: HayShenOrderAccepted,
    alt: 'HayShen accepted job status screen',
  },
  {
    label: 'Summary',
    title: 'PDF-ready summary',
    caption: 'A final order document with equipment, driver, dates, price, and downloadable PDF action.',
    image: HayShenOrderSummary,
    alt: 'HayShen completed order document summary screen',
  },
  {
    label: 'Driver',
    title: 'Incoming jobs',
    caption: 'Driver dashboard for availability, new jobs, machine preview, price, reject, and accept actions.',
    image: HayShenDriverOrders,
    alt: 'HayShen driver incoming job screen',
  },
  {
    label: 'Route',
    title: 'Navigation to work site',
    caption: 'Map route, call action, send message, notes, worker details, equipment, and confirm arrival.',
    image: HayShenDriverRoute,
    alt: 'HayShen driver route and order details screen',
  },
  {
    label: 'Company Setup',
    title: 'Start company operations',
    caption: 'Empty-state onboarding for adding drivers and equipment before taking orders.',
    image: HayShenCompanyEmpty,
    alt: 'HayShen company setup empty state screen',
  },
  {
    label: 'Company',
    title: 'Create driver flow',
    caption: 'Company-side form for worker details, license upload, machine assignment, and notes.',
    image: HayShenCreateDriver,
    alt: 'HayShen create driver form screen',
  },
  {
    label: 'Auth',
    title: 'Company sign-in',
    caption: 'Branded login screen for company access with email, password, and social sign-in.',
    image: HayShenAuth,
    alt: 'HayShen company sign in screen',
  },
] as const;

export default function HayShenEquipmentPlatform() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = HAYSHEN_SCREENS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? HAYSHEN_SCREENS.length - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % HAYSHEN_SCREENS.length);
  };

  return (
    <section className="hayShenSlide">
      <div className="hayShenShell">
        <div className="hayShenContent">
          <p className="hayShenEyebrow">Equipment Ordering Platform</p>
          <h1>HayShen</h1>
          <p className="hayShenSubtitle">
            A three-app marketplace for ordering construction machinery and
            managing field work, similar in logic to ride-hailing, but built for
            heavy equipment, companies, operators, and job sites.
          </p>
          <p className="hayShenLead">
            The product connects clients who need machinery, companies that own
            equipment and staff, and drivers or workers who complete the job.
            The current stage is a Figma concept, focused on the core journey:
            request equipment, accept the job, route to the destination, and
            complete the work.
          </p>

          <div className="hayShenTagRow" aria-label="HayShen project modules">
            {HAYSHEN_TAGS.map((tag) => (
              <span className="hayShenTag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="hayShenStatsGrid">
            {HAYSHEN_STATS.map((item) => (
              <article className="hayShenStatCard" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <article className="hayShenNarrativeCard">
            <p className="hayShenSectionLabel">Platform Scope</p>
            <h2>One ecosystem for clients, companies, and drivers.</h2>
            <ul className="hayShenFeatureList">
              {HAYSHEN_FEATURES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <div className="hayShenAppGrid">
            {ECOSYSTEM_APPS.map((app) => (
              <article key={app.title}>
                <span>{app.title}</span>
                <strong>{app.text}</strong>
              </article>
            ))}
          </div>
        </div>

        <div className="hayShenVisualSide">
          <div className="hayShenPreviewPanel">
            <div
              className="hayShenPhoneStack"
              aria-label="HayShen mobile screen preview"
            >
              <div className="hayShenPhoneGhost hayShenPhoneGhostLeft" />
              <div className="hayShenPhoneGhost hayShenPhoneGhostRight" />
              <div className="hayShenPhoneFrame">
                <div className="hayShenPhoneScreen">
                  <Image
                    key={activeScreen.label}
                    src={activeScreen.image}
                    alt={activeScreen.alt}
                    fill
                    className="hayShenPhoneImage"
                    sizes="(max-width: 720px) 72vw, 330px"
                  />
                </div>
              </div>
            </div>

            <div className="hayShenScreenMeta">
              <div>
                <p>{activeScreen.label}</p>
                <strong>{activeScreen.title}</strong>
                <span>{activeScreen.caption}</span>
              </div>

              <div className="hayShenControls">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous HayShen screen"
                >
                  Prev
                </button>
                <div className="hayShenDots">
                  {HAYSHEN_SCREENS.map((screen, index) => (
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
                  aria-label="Next HayShen screen"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="hayShenFlowBar">
            <span>Request</span>
            <i />
            <span>Accept</span>
            <i />
            <span>Route</span>
            <i />
            <span>Complete</span>
          </div>
        </div>
      </div>
    </section>
  );
}
