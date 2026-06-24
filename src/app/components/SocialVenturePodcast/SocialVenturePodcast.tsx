'use client';

import Image from 'next/image';
import { useState } from 'react';
import SocialPodcastAdminDashboard2026 from '@/app/assets/images/SocialPodcastAdminDashboard2026.png';
import SocialPodcastAdminFaqs2026 from '@/app/assets/images/SocialPodcastAdminFaqs2026.png';
import SocialPodcastAdminLogin2026 from '@/app/assets/images/SocialPodcastAdminLogin2026.png';
import SocialPodcastAdminShorts2026 from '@/app/assets/images/SocialPodcastAdminShorts2026.png';
import SocialPodcastAudioNotes2026 from '@/app/assets/images/SocialPodcastAudioNotes2026.png';
import SocialPodcastHome2026 from '@/app/assets/images/SocialPodcastHome2026.png';
import SocialPodcastPrograms2026 from '@/app/assets/images/SocialPodcastPrograms2026.png';
import SocialPodcastQuiz2026 from '@/app/assets/images/SocialPodcastQuiz2026.png';

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

const PODCAST_ADMIN_FEATURES = [
  'Update website content from a private admin panel without changing code.',
  'Manage podcast shorts, audio notes, programs, quiz content, and FAQs from one backend workspace.',
  'Control where content appears across the public website, including home and podcast sections.',
  'Keep the site fresh as new episodes, programs, and audience resources are published.',
] as const;

const PODCAST_QUIZ_SCREENS = [
  {
    title: 'Quiz experience',
    image: SocialPodcastQuiz2026,
    alt: 'Social Venture Podcast quiz library page',
  },
  {
    title: 'Programs carousel',
    image: SocialPodcastPrograms2026,
    alt: 'Social Venture Podcast programs page carousel',
  },
  {
    title: 'Audio notes',
    image: SocialPodcastAudioNotes2026,
    alt: 'Social Venture Podcast audio notes page',
  },
] as const;

const PODCAST_SCREEN_SLIDES = [
  {
    label: 'Home',
    title: 'Podcast landing page',
    caption:
      'Hero story, host introduction, and quick path into featured episodes.',
    image: SocialPodcastHome2026,
    alt: 'Social Venture Podcast home page hero screen',
  },
  {
    label: 'Quiz',
    title: 'Quiz library',
    caption:
      'A quiz hub that turns business, risk, leadership, and discipline themes into interactive paths.',
    image: SocialPodcastQuiz2026,
    alt: 'Social Venture Podcast quiz cards page',
  },
  {
    label: 'Podcasts',
    title: 'Audio notes',
    caption:
      'A dark editorial podcast page with audio-note cards, playback controls, and principle-led episode framing.',
    image: SocialPodcastAudioNotes2026,
    alt: 'Social Venture Podcast audio notes screen',
  },
  {
    label: 'Programs',
    title: 'Principles carousel',
    caption:
      'Program cards bring Joe’s principles into guided learning paths beyond the podcast feed.',
    image: SocialPodcastPrograms2026,
    alt: 'Social Venture Podcast programs carousel screen',
  },
  {
    label: 'Admin',
    title: 'Admin dashboard',
    caption:
      'The backend dashboard tracks published content, active sections, podcast shorts, quizzes, programs, and FAQs.',
    image: SocialPodcastAdminDashboard2026,
    alt: 'Social Venture Podcast admin dashboard screen',
  },
  {
    label: 'Shorts CMS',
    title: 'Podcast shorts manager',
    caption:
      'Content managers can add YouTube short links, display text, and placement rules from the admin panel.',
    image: SocialPodcastAdminShorts2026,
    alt: 'Social Venture Podcast admin podcast shorts manager screen',
  },
  {
    label: 'FAQs CMS',
    title: 'FAQ content library',
    caption:
      'A focused FAQ admin screen supports question-and-answer content for the public programs page.',
    image: SocialPodcastAdminFaqs2026,
    alt: 'Social Venture Podcast admin FAQs manager screen',
  },
  {
    label: 'Login',
    title: 'Admin access',
    caption:
      'A branded admin login screen gives the content team a private entry point for managing the podcast website.',
    image: SocialPodcastAdminLogin2026,
    alt: 'Social Venture Podcast admin login screen',
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

          <article className="socialPodcastNarrativeCard socialPodcastAdminCard">
            <p className="socialPodcastSectionLabel">Admin Panel</p>
            <h2>Content management for the full podcast website.</h2>
            <p className="socialPodcastAdminText">
              We also built a custom admin panel so the team can update the
              website content themselves. From the backend, they can add and
              edit podcast shorts, audio podcast items, programs, FAQs, and
              page content that appears on the live site.
            </p>
            <ul className="socialPodcastFeatureList">
              {PODCAST_ADMIN_FEATURES.map((item) => (
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
