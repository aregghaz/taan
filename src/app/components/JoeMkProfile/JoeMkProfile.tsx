'use client';

import Image from 'next/image';
import { useState } from 'react';
import JoeProfileScreenContact from '@/app/assets/images/JoeProfileScreenContact.png';
import JoeProfileScreenHome from '@/app/assets/images/JoeProfileScreenHome.png';
import JoeProfileScreenPodcasts from '@/app/assets/images/JoeProfileScreenPodcasts.png';
import JoeProfileScreenStory from '@/app/assets/images/JoeProfileScreenStory.png';
import JoeProfileScreenStrategy from '@/app/assets/images/JoeProfileScreenStrategy.png';

const PROFILE_TAGS = [
  'Profile website',
  'Design by TAAN',
  'Motion system',
  'Z-index layers',
  'Smooth transitions',
] as const;

const PROFILE_STATS = [
  { value: '3D', label: 'layered scenes' },
  { value: '60fps', label: 'motion target' },
  { value: '100%', label: 'design by TAAN' },
] as const;

const PROFILE_FEATURES = [
  'Custom personal-brand design created by our team for Joe Mkhitaryan.',
  'Animation-heavy page flow with cinematic transitions between profile, podcast, strategy, and contact sections.',
  'Layered z-index composition where foreground content, background depth, and motion elements move as one system.',
] as const;

const MOTION_STAGES = [
  {
    label: 'Profile',
    title: 'Profile intro',
    caption: 'A high-impact first screen with portrait, layered cards, radial depth, and polished entrance timing.',
    image: JoeProfileScreenHome,
    alt: 'Joe Mkhitaryan profile home screen',
  },
  {
    label: 'Podcasts',
    title: 'Audio content surface',
    caption: 'Podcast sections use depth, active states, and animated audio-style surfaces for stronger storytelling.',
    image: JoeProfileScreenPodcasts,
    alt: 'Joe Mkhitaryan podcasts screen',
  },
  {
    label: 'Strategy',
    title: 'Z-index choreography',
    caption: 'Strategy screens stack cards, media, and background rings to create a premium layered composition.',
    image: JoeProfileScreenStrategy,
    alt: 'Joe Mkhitaryan strategy screen',
  },
  {
    label: 'Story',
    title: 'Full-screen story transition',
    caption: 'Large image sections keep the brand cinematic while text and controls reveal cleanly above the photo.',
    image: JoeProfileScreenStory,
    alt: 'Joe Mkhitaryan story screen',
  },
  {
    label: 'Contact',
    title: 'Contact flow',
    caption: 'The contact section keeps the same animated depth language while making channels and actions clear.',
    image: JoeProfileScreenContact,
    alt: 'Joe Mkhitaryan contact screen',
  },
] as const;

export default function JoeMkProfile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = MOTION_STAGES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? MOTION_STAGES.length - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % MOTION_STAGES.length);
  };

  return (
    <section className="joeProfileSlide">
      <div className="joeProfileShell">
        <div className="joeProfileContent">
          <p className="joeProfileEyebrow">Personal Brand Website</p>
          <h1>Joe Mkhitaryan Profile</h1>
          <p className="joeProfileSubtitle">
            A premium profile website built around story, presence, and motion.
            The design was created by our company and shaped to make Joe&apos;s
            personal brand feel sharp, confident, and memorable.
          </p>
          <p className="joeProfileLead">
            The experience is not just a static portfolio page. It uses layered
            animation, controlled z-index scenes, and polished transitions to
            guide visitors through Joe&apos;s profile, podcast, business ideas,
            and contact flow with a strong visual rhythm.
          </p>

          <div
            className="joeProfileTagRow"
            aria-label="Joe Mkhitaryan profile services"
          >
            {PROFILE_TAGS.map((tag) => (
              <span className="joeProfileTag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="joeProfileStatsGrid">
            {PROFILE_STATS.map((item) => (
              <article className="joeProfileStatCard" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <article className="joeProfileNarrativeCard">
            <p className="joeProfileSectionLabel">What Makes It Different</p>
            <h2>Motion-first profile site with designed transitions.</h2>
            <ul className="joeProfileFeatureList">
              {PROFILE_FEATURES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <a
            className="joeProfileVisitLink"
            href="https://joemk.com/"
            target="_blank"
            rel="noreferrer"
          >
            Open live profile website
          </a>
        </div>

        <div className="joeProfileVisualSide">
          <div className="joeProfileMotionStage">
            <div className="joeProfileStageHeader">
              <div>
                <p>{activeStage.label}</p>
                <strong>{activeStage.title}</strong>
              </div>
              <span>z-index / motion stack</span>
            </div>

            <div
              className="joeProfileLayerPreview"
              aria-label="Joe Mkhitaryan website screen preview"
            >
              <Image
                key={activeStage.label}
                src={activeStage.image}
                alt={activeStage.alt}
                fill
                className="joeProfileScreenImage"
                sizes="(max-width: 980px) 100vw, (max-width: 1400px) 58vw, 780px"
              />
            </div>

            <div className="joeProfileStageMeta">
              <p>{activeStage.caption}</p>
              <div className="joeProfileStageControls">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous motion stage"
                >
                  Prev
                </button>
                <div className="joeProfileDots">
                  {MOTION_STAGES.map((stage, index) => (
                    <button
                      type="button"
                      key={stage.label}
                      className={index === activeIndex ? 'isActive' : ''}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show ${stage.label} stage`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next motion stage"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="joeProfileMotionGrid">
            <article>
              <span>Animation</span>
              <strong>Reveal timing, scroll rhythm, and page-to-page movement.</strong>
            </article>
            <article>
              <span>Design</span>
              <strong>Personal-brand visual system designed by our company.</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
