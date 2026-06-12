'use client';

import Image from 'next/image';
import { useState } from 'react';
import BioBacMobileNewCompanies from '@/app/assets/images/BioBacMobileNewCompanies.jpeg';
import BioBacMobileNewReceiptPreview from '@/app/assets/images/BioBacMobileNewReceiptPreview.jpeg';
import BioBacMobileNewReturn from '@/app/assets/images/BioBacMobileNewReturn.jpeg';
import BioBacMobileNewSales from '@/app/assets/images/BioBacMobileNewSales.jpeg';

const MOBILE_TAGS = [
  'Mobile ERP',
  'Companies',
  'Sales',
  'Receipts',
  'Search',
  'Returns',
] as const;

const MOBILE_STATS = [
  { value: '04', label: 'updated mobile screens' },
  { value: 'B2B', label: 'operations app' },
  { value: 'RU', label: 'receipt-ready flow' },
] as const;

const MOBILE_FEATURES = [
  'Company list with search, filtering, add action, balances, addresses, and contact details.',
  'Sales flow with selected product chips, quantity and price inputs, total cost, and received amount.',
  'Receipt preview and return-product flow for creating documents and correcting product operations.',
] as const;

const MOBILE_SCREENS = [
  {
    label: 'Companies',
    title: 'Company registry',
    caption:
      'Search-ready customer list with balances, addresses, phone numbers, and quick add action.',
    image: BioBacMobileNewCompanies,
    alt: 'BioBac mobile companies search screen',
  },
  {
    label: 'Sales',
    title: 'Sales builder',
    caption:
      'Selected product chips, quantity controls, price fields, total cost, and received amount.',
    image: BioBacMobileNewSales,
    alt: 'BioBac mobile sales builder screen',
  },
  {
    label: 'Receipt',
    title: 'Receipt preview',
    caption:
      'Supplier, buyer, product table, totals, balance, signature fields, and document actions.',
    image: BioBacMobileNewReceiptPreview,
    alt: 'BioBac mobile receipt preview screen',
  },
  {
    label: 'Returns',
    title: 'Return products',
    caption:
      'Return date, comment, item rows, quantity, return price, related sale, and create action.',
    image: BioBacMobileNewReturn,
    alt: 'BioBac mobile return products screen',
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
            operators can find a company, prepare a sales order, review the
            receipt, and create or print documents without leaving the mobile
            workflow.
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
              Mobile workflows for company search, sales, and receipt
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
                Search, balances, addresses, contact details, and fast add.
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
