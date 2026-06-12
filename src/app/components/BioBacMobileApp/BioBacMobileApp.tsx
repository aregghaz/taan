'use client';

import Image from 'next/image';
import { useState } from 'react';
import BioBacMobileCompany from '@/app/assets/images/BioBacMobileCompany.jpeg';
import BioBacMobileHome from '@/app/assets/images/BioBacMobileHome.jpeg';
import BioBacMobileReceipt from '@/app/assets/images/BioBacMobileReceipt.jpeg';
import BioBacMobileReturn from '@/app/assets/images/BioBacMobileReturn.jpeg';
import BioBacMobileSales from '@/app/assets/images/BioBacMobileSales.jpeg';

const MOBILE_TAGS = [
  'Mobile ERP',
  'Companies',
  'Sales',
  'Returns',
  'Receipts',
  'Field workflow',
] as const;

const MOBILE_STATS = [
  { value: '06', label: 'core mobile screens' },
  { value: 'B2B', label: 'operations app' },
  { value: 'RU', label: 'receipt-ready flow' },
] as const;

const MOBILE_FEATURES = [
  'Home navigation for Company, Warehouse, Pre-order, and Account List modules.',
  'Company profile screen with balance, history, Sales, Payment, Return, Pre-order, Task, and Phone actions.',
  'Sales and return flows with product selection, quantities, prices, totals, and receipt preview.',
] as const;

const MOBILE_SCREENS = [
  {
    label: 'Home',
    title: 'Module launcher',
    caption:
      'Fast entry into companies, warehouse, pre-orders, and account lists.',
    image: BioBacMobileHome,
    alt: 'BioBac mobile app home module screen',
  },
  {
    label: 'Company',
    title: 'Company operations',
    caption:
      'Sales, payment, return, pre-order, task, and call actions in one hub.',
    image: BioBacMobileCompany,
    alt: 'BioBac mobile app company detail screen',
  },
  {
    label: 'Sales',
    title: 'Sales builder',
    caption:
      'Product chips, quantity fields, price inputs, total price, and received amount.',
    image: BioBacMobileSales,
    alt: 'BioBac mobile app sales product screen',
  },
  {
    label: 'Receipt',
    title: 'Receipt preview',
    caption:
      'Supplier, buyer, product table, totals, balance, signature fields, and print actions.',
    image: BioBacMobileReceipt,
    alt: 'BioBac mobile app receipt preview screen',
  },
  {
    label: 'Returns',
    title: 'Return products',
    caption:
      'Return date, comment, item rows, price calculation, and create action.',
    image: BioBacMobileReturn,
    alt: 'BioBac mobile app return products screen',
  },
] as const;

export default function BioBacMobileApp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = MOBILE_SCREENS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? MOBILE_SCREENS.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % MOBILE_SCREENS.length);
  };

  return (
    <section className="bioBacMobileSlide">
      <div className="bioBacMobileShell">
        <div className="bioBacMobileContent">
          <p className="bioBacMobileEyebrow">Mobile Operations App</p>
          <h1>BioBac Mobile App</h1>
          <p className="bioBacMobileSubtitle">
            A mobile extension for BioBac operations, designed for quick field
            access to companies, balances, sales, returns, and receipt handling.
          </p>
          <p className="bioBacMobileLead">
            The app brings everyday B2B workflows into a phone-first interface:
            operators can find a company, open its history, create sales or
            returns, preview receipt data, and move through the work with a
            simple bottom navigation.
          </p>

          <div
            className="bioBacMobileTagRow"
            aria-label="BioBac mobile modules"
          >
            {MOBILE_TAGS.map((tag) => (
              <span className="bioBacMobileTag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="bioBacMobileStatsGrid">
            {MOBILE_STATS.map((item) => (
              <article className="bioBacMobileStatCard" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <article className="bioBacMobileNarrativeCard">
            <p className="bioBacMobileSectionLabel">What the App Covers</p>
            <h2>
              Mobile workflows for company, sales, return, and receipt
              operations.
            </h2>
            <ul className="bioBacMobileFeatureList">
              {MOBILE_FEATURES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="bioBacMobileVisualSide">
          <div className="bioBacMobilePreviewPanel">
            <div className="bioBacMobilePhoneFrame">
              <div className="bioBacMobilePhoneSpeaker" />
              <div className="bioBacMobilePhoneScreen">
                <Image
                  key={activeScreen.label}
                  src={activeScreen.image}
                  alt={activeScreen.alt}
                  fill
                  className="bioBacMobilePhoneImage"
                  sizes="(max-width: 720px) 72vw, 320px"
                />
              </div>
            </div>

            <div className="bioBacMobileScreenMeta">
              <div>
                <p>{activeScreen.label}</p>
                <strong>{activeScreen.title}</strong>
                <span>{activeScreen.caption}</span>
              </div>

              <div className="bioBacMobileControls">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous mobile screen"
                >
                  Prev
                </button>
                <div className="bioBacMobileDots">
                  {MOBILE_SCREENS.map((screen, index) => (
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
                  aria-label="Next mobile screen"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="bioBacMobileFlowGrid">
            <article>
              <span>Company Hub</span>
              <strong>
                Balances, history, actions, and contact shortcuts.
              </strong>
            </article>
            <article>
              <span>Sales Flow</span>
              <strong>
                Product rows, totals, received amount, and receipt preview.
              </strong>
            </article>
            <article>
              <span>Returns</span>
              <strong>
                Return date, item rows, quantity, price, and create action.
              </strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
