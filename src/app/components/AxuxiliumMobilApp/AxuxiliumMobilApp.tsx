'use client';

import Image from 'next/image';
import { useState } from 'react';
import AuxMob1 from '@/app/assets/images/AuxMob1.png';
import AuxMob3 from '@/app/assets/images/AuxMob3.png';
import AuxMob4 from '@/app/assets/images/AuxMob4.png';

const AUX_MOBILE_TAGS = [
  'NEMT mobile app',
  'Ride booking',
  'Member verification',
  'Live trip flow',
  'Account safety',
] as const;

const AUX_MOBILE_STATS = [
  { value: '04', label: 'key mobile screens' },
  { value: '06', label: 'core user flows' },
  { value: 'HIPAA', label: 'healthcare mindset' },
] as const;

const AUX_MOBILE_FEATURES = [
  'Guided onboarding collects eligibility details, insurance information, and sign-in requirements before the member starts booking rides.',
  'Ride creation supports date of service, passenger needs, line-of-business limits, assistance preferences, and location confirmation.',
  'Profile, settings, and authorized contacts help members manage access, safety, communication, and account details from one mobile app.',
] as const;

const AUX_MOBILE_SCREENS = [
  {
    label: 'Welcome',
    title: 'Guided member onboarding',
    caption:
      'Clear requirements for coverage, insurance, physical address, and sign-in information.',
    image: AuxMob1,
    alt: 'Auxilium mobile onboarding welcome screen',
  },
  // {
  //   label: 'Create Ride',
  //   title: 'Ride request builder',
  //   caption:
  //     'Date of service, passenger count, business line limits, assistance options, and quick navigation.',
  //   image: AuxMob2,
  //   alt: 'Auxilium mobile create ride screen',
  // },
  {
    label: 'Profile',
    title: 'Member details and home address',
    caption:
      'Editable rider profile, preferred name, pronouns, address fields, and secure save action.',
    image: AuxMob3,
    alt: 'Auxilium mobile member detail screen',
  },
  {
    label: 'Contacts',
    title: 'Authorized contact access',
    caption:
      'Trusted contact setup with relationship, phone, email, approval, and account access controls.',
    image: AuxMob4,
    alt: 'Auxilium mobile authorized contact screen',
  },
] as const;

const AUX_MOBILE_FLOWS = [
  {
    title: 'Book',
    text: 'Members create transportation requests with the details dispatch teams need from the start.',
  },
  {
    title: 'Verify',
    text: 'Eligibility, insurance, profile, and contact information are structured into the flow.',
  },
  {
    title: 'Manage',
    text: 'Settings, notifications, trusted contacts, and ride actions stay close to the user.',
  },
] as const;

export default function AxuxiliumMobilApp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = AUX_MOBILE_SCREENS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? AUX_MOBILE_SCREENS.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % AUX_MOBILE_SCREENS.length);
  };

  return (
    <section className="auxMobileSlide">
      <div className="auxMobileShell">
        <div className="auxMobileContent">
          <p className="auxMobileEyebrow">Mobile Healthcare Transportation</p>
          <h1>Auxilium Mobile App</h1>
          <p className="auxMobileSubtitle">
            A member-facing mobile experience for non-emergency medical
            transportation, covering onboarding, ride requests, profile
            management, and trusted contact access.
          </p>
          <p className="auxMobileLead">
            The app turns a complex healthcare transportation process into a
            clear mobile journey: members understand what information is needed,
            create rides with service details, keep their profile accurate, and
            give authorized contacts controlled access when support is needed.
          </p>

          <div
            className="auxMobileTagRow"
            aria-label="Auxilium mobile product areas"
          >
            {AUX_MOBILE_TAGS.map((tag) => (
              <span className="auxMobileTag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="auxMobileStatsGrid">
            {AUX_MOBILE_STATS.map((item) => (
              <article className="auxMobileStatCard" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <article className="auxMobileNarrativeCard">
            <p className="auxMobileSectionLabel">What the App Covers</p>
            <h2>Ride booking, member data, and support access in one app.</h2>
            <ul className="auxMobileFeatureList">
              {AUX_MOBILE_FEATURES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="auxMobileVisualSide">
          <div className="auxMobilePreviewPanel">
            <div className="auxMobilePhoneFrame">
              <div className="auxMobilePhoneSpeaker" />
              <div className="auxMobilePhoneScreen">
                <Image
                  key={activeScreen.label}
                  src={activeScreen.image}
                  alt={activeScreen.alt}
                  fill
                  className="auxMobilePhoneImage"
                  sizes="(max-width: 720px) 72vw, 320px"
                />
              </div>
            </div>

            <div className="auxMobileScreenMeta">
              <div>
                <p>{activeScreen.label}</p>
                <strong>{activeScreen.title}</strong>
                <span>{activeScreen.caption}</span>
              </div>

              <div className="auxMobileControls">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Auxilium mobile screen"
                >
                  Prev
                </button>
                <div className="auxMobileDots">
                  {AUX_MOBILE_SCREENS.map((screen, index) => (
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
                  aria-label="Next Auxilium mobile screen"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="auxMobileFlowGrid">
            {AUX_MOBILE_FLOWS.map((flow) => (
              <article key={flow.title}>
                <span>{flow.title}</span>
                <strong>{flow.text}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
