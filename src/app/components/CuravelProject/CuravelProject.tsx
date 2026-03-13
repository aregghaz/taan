'use client';

import Image from 'next/image';
import Curavel1 from '@/app/assets/images/Curavel1.png';
import Curavel2 from '@/app/assets/images/Curavel2.png';
import Curavel6 from '@/app/assets/images/Curavel6.png';
import Curavel7 from '@/app/assets/images/Curavel7.png';
import Curavel8 from '@/app/assets/images/Curavel8.png';

const CURAVEL_FEATURE_CARDS = [
  {
    id: 'architecture',
    title: 'Smart & Structured Architecture',
    description:
      'Scalable frontend modules keep the product maintainable and easy to expand.',
  },
  {
    id: 'responsive',
    title: 'Responsive & User-Focused Design',
    description:
      'Interface behavior stays consistent across desktop, tablet, and mobile touchpoints.',
  },
  {
    id: 'performance',
    title: 'Performance & Clean UI Implementation',
    description:
      'Optimized rendering and precise motion tuning deliver a fast and polished experience.',
  },
];

const CURAVEL_HIGHLIGHTS = [
  'Healthcare-focused user journeys',
  'Clear information hierarchy',
  'Accessible interaction patterns',
];

const CURAVEL_STATS = [
  { value: '03', label: 'core user lanes' },
  { value: '05', label: 'featured screens' },
  { value: 'B2C', label: 'patient-first access' },
] as const;

const CURAVEL_SCOPE_POINTS = [
  'Service overview with clearer trust signals',
  'Ride coordination and support entry points',
  'Responsive layouts across desktop and mobile',
  'Conversion-focused calls to action and navigation',
] as const;

const CURAVEL_AUDIENCE = [
  'Patients',
  'Families',
  'Care coordinators',
] as const;

const CURAVEL_GALLERY_IMAGES = [
  { id: 1, src: Curavel1, layoutClassName: 'curavelGalleryCardFeatured' },
  { id: 2, src: Curavel2, layoutClassName: 'curavelGalleryCardFeatured' },
  { id: 3, src: Curavel6, layoutClassName: 'curavelGalleryCardWide' },
  { id: 4, src: Curavel7, layoutClassName: '' },
  { id: 5, src: Curavel8, layoutClassName: '' },
] as const;

export default function CuravelProject() {
  return (
    <section className="curavelSlide">
      <div className="curavelInfoSide">
        <p className="curavelEyebrow">Case Study</p>
        <h1>Curavel</h1>
        <span>Modern Medical Transportation Platform</span>
        <p className="curavelLead">
          Curavel.com is a modern web platform focused on medical transportation
          and ride coordination. The website is designed to provide a clean user
          experience, intuitive navigation, and structured information flow for
          healthcare-related services.
        </p>

        <ul className="curavelHighlights" aria-label="Project highlights">
          {CURAVEL_HIGHLIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="curavelStatsGrid" aria-label="Curavel content summary">
          {CURAVEL_STATS.map((item) => (
            <article key={item.label} className="curavelStatCard">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>

        <div className="curavelFeatureGrid">
          {CURAVEL_FEATURE_CARDS.map((feature) => (
            <article key={feature.id} className="curavelFeatureCard">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="curavelNarrativeGrid">
          <article className="curavelNarrativeCard">
            <p className="curavelCardLabel">Project Focus</p>
            <h3>Patient-friendly transportation journeys.</h3>
            <p>
              Curavel balances medical service credibility with a calmer visual
              tone, clearer service explanation, and easier decision-making for
              users who need transportation support quickly.
            </p>

            <div className="curavelAudienceRow" aria-label="Primary audiences">
              {CURAVEL_AUDIENCE.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>

          <article className="curavelNarrativeCard">
            <p className="curavelCardLabel">Delivery Scope</p>

            <ul className="curavelScopeList">
              {CURAVEL_SCOPE_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <p className="curavelLead curavelClosingLead">
          The implementation focused on making complex service information easier
          to scan, keeping actions visible, and preserving a clean, trustworthy
          interface across every section of the site.
        </p>

        <button
          type="button"
          className="curavelCtaButton"
          onClick={() =>
            window.open(
              'https://www.curavel.com',
              '_blank',
              'noopener,noreferrer'
            )
          }
        >
          Open Curavel Site
        </button>
      </div>
      <div className="curavelPicturesSide">
        <div className="curavelGalleryFrame">
          <div className="curavelGalleryHead">
            <p>Product Interface Gallery</p>
            <span>
              {String(CURAVEL_GALLERY_IMAGES.length).padStart(2, '0')} Screens
            </span>
          </div>

          <div className="curavelGalleryGrid" aria-label="Curavel screenshots">
            {CURAVEL_GALLERY_IMAGES.map((image) => (
              <article
                key={image.id}
                className={`curavelGalleryCard ${image.layoutClassName}`}
              >
                <Image
                  src={image.src}
                  alt={`Curavel interface screen`}
                  fill
                  className="curavelGalleryImage"
                />
                <span>{String(image.id).padStart(2, '0')}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
