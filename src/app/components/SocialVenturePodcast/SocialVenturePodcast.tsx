'use client';

import Image from 'next/image';
import { useState } from 'react';
import SocialPodcastQuiz1 from '@/app/assets/images/SocialPodcastQuiz1.png';
import SocialPodcastQuiz2 from '@/app/assets/images/SocialPodcastQuiz2.png';
import SocialPodcastQuiz3 from '@/app/assets/images/SocialPodcastQuiz3.png';
import SocialPodcastScreen1 from '@/app/assets/images/SocialPodcastScreen1.png';
import SocialPodcastScreen2 from '@/app/assets/images/SocialPodcastScreen2.png';
import SocialPodcastScreen3 from '@/app/assets/images/SocialPodcastScreen3.png';
import SocialPodcastScreen4 from '@/app/assets/images/SocialPodcastScreen4.png';

const PODCAST_TAGS = [
  'Website design',
  'Podcast platform',
  'Quizzes',
  'Short videos',
  'Responsive UI',
  'Brand system',
] as const;

const PODCAST_STATS = [
  { value: '01', label: 'complete website' },
  { value: 'All', label: 'screen sizes' },
] as const;

const PODCAST_FEATURES = [
  'Custom visual design created by our company for the full podcast experience.',
  'Responsive website structure for episodes, quizzes, short videos, stories, and clear listening actions.',
  'Editorial-style interface with strong typography, clean content rhythm, and reusable presentation sections.',
] as const;

const PODCAST_QUIZ_SCREENS = [
  {
    title: 'Quiz library',
    image: SocialPodcastQuiz1,
    alt: 'Social Venture Podcast quiz selection page',
  },
  {
    title: 'Question flow',
    image: SocialPodcastQuiz2,
    alt: 'Social Venture Podcast quiz question screen',
  },
  {
    title: 'Result screen',
    image: SocialPodcastQuiz3,
    alt: 'Social Venture Podcast quiz result screen',
  },
] as const;

const PODCAST_SCREEN_SLIDES = [
  {
    label: 'Home',
    title: 'Podcast landing page',
    caption:
      'Hero story, host introduction, and quick path into featured episodes.',
    image: SocialPodcastScreen1,
    alt: 'Social Venture Podcast home page hero screen',
  },
  {
    label: 'Short Videos',
    title: 'Short lessons section',
    caption:
      'Vertical short-video cards for fast lessons, clips, and audience touchpoints.',
    image: SocialPodcastScreen2,
    alt: 'Social Venture Podcast short videos page',
  },
  {
    label: 'Podcasts',
    title: 'Podcast overview',
    caption:
      'Editorial podcast page with featured content, episode cards, and strong visual rhythm.',
    image: SocialPodcastScreen3,
    alt: 'Social Venture Podcast episodes overview screen',
  },
  {
    label: 'Programs',
    title: 'Principles carousel',
    caption:
      'Program and principle cards that extend the brand beyond listening.',
    image: SocialPodcastScreen4,
    alt: 'Social Venture Podcast programs and principles carousel screen',
  },
] as const;

export default function SocialVenturePodcast() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = PODCAST_SCREEN_SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? PODCAST_SCREEN_SLIDES.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % PODCAST_SCREEN_SLIDES.length);
  };

  return (
    <section className="socialPodcastSlide">
      <div className="socialPodcastShell">
        <div className="socialPodcastContent">
          <p className="socialPodcastEyebrow">Podcast Website</p>
          <h1>Social Venture Podcast</h1>
          <p className="socialPodcastSubtitle">
            A branded web experience for Joe Mikitariyan&apos;s podcast, created
            to present conversations, ideas, and episodes with a sharp editorial
            feel.
          </p>
          <p className="socialPodcastLead">
            Our company handled the visual direction and interface design, then
            shaped the site around a clear listening journey: discover the
            podcast, understand the voice of the brand, and open the live show
            without friction.
          </p>

          <div
            className="socialPodcastTagRow"
            aria-label="Social Venture Podcast project services"
          >
            {PODCAST_TAGS.map((tag) => (
              <span key={tag} className="socialPodcastTag">
                {tag}
              </span>
            ))}
          </div>

          <div className="socialPodcastStatsGrid">
            {PODCAST_STATS.map((item) => (
              <article key={item.label} className="socialPodcastStatCard">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <article className="socialPodcastNarrativeCard">
            <p className="socialPodcastSectionLabel">What We Built</p>
            <h2>Design-led podcast website with a clear content flow.</h2>
            <ul className="socialPodcastFeatureList">
              {PODCAST_FEATURES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="socialPodcastQuizBanner">
            <div className="socialPodcastQuizCopy">
              <p className="socialPodcastSectionLabel">Interactive Quizzes</p>
              <h2>
                Interactive quizzes that turn listeners into participants.
              </h2>
              <p>
                Quizzes create a playful way for visitors to explore podcast
                themes, test their perspective, and receive tailored results.
                They add a second layer of engagement beyond listening, helping
                the brand collect attention, encourage sharing, and keep the
                audience connected between episodes.
              </p>
            </div>

            <div
              className="socialPodcastQuizScreens"
              aria-label="Quiz screen placeholders"
            >
              {PODCAST_QUIZ_SCREENS.map((screen, index) => (
                <div className="socialPodcastQuizScreen" key={screen.title}>
                  <div className="socialPodcastQuizScreenHead">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{screen.title}</strong>
                  </div>
                  <div className="socialPodcastQuizShot">
                    <Image
                      src={screen.image}
                      alt={screen.alt}
                      fill
                      className="socialPodcastQuizImage"
                      sizes="(max-width: 720px) 100vw, (max-width: 1400px) 28vw, 360px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <a
            className="socialPodcastVisitLink"
            href="https://socialventurepodcast.com/"
            target="_blank"
            rel="noreferrer"
          >
            Open live podcast website
          </a>
        </div>

        <div className="socialPodcastVisualSide">
          <div className="socialPodcastBrowser">
            <div className="socialPodcastBrowserBar">
              <div className="socialPodcastBrowserDots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="socialPodcastUrl">socialventurepodcast.com</span>
            </div>

            <div
              className="socialPodcastSlider"
              aria-label="Podcast website screens"
            >
              <div
                className="socialPodcastTrack"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {PODCAST_SCREEN_SLIDES.map((slide, index) => (
                  <article
                    className="socialPodcastScreen"
                    key={slide.title}
                    aria-hidden={index !== activeIndex}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      className="socialPodcastScreenImage"
                      sizes="(max-width: 980px) 100vw, (max-width: 1400px) 58vw, 780px"
                    />
                  </article>
                ))}
              </div>
            </div>

            <div className="socialPodcastSliderMeta">
              <div>
                <p>{activeSlide.label}</p>
                <strong>{activeSlide.caption}</strong>
              </div>

              <div className="socialPodcastSliderControls">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous podcast screen"
                >
                  Prev
                </button>
                <div className="socialPodcastDots">
                  {PODCAST_SCREEN_SLIDES.map((slide, index) => (
                    <button
                      type="button"
                      key={`podcast-dot-${slide.label}`}
                      className={index === activeIndex ? 'isActive' : ''}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show ${slide.label} screen`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next podcast screen"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="socialPodcastMiniGrid">
            <article>
              <span>Design</span>
              <strong>Brand, typography, layout, and screen direction.</strong>
            </article>
            <article>
              <span>Short Videos</span>
              <strong>
                Fast video content blocks for clips, promos, and highlights.
              </strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
