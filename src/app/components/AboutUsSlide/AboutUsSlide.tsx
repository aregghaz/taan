'use client';

import { type CSSProperties, useEffect, useRef } from 'react';
import Link from 'next/link';

const ABOUT_US_HERO_CHIPS = [
  'Yerevan office',
  'Projects for USA, Russia, and Armenia',
  'Brand, product, and service websites',
  'Design + frontend delivery',
] as const;

const ABOUT_US_MOCKUP_TAGS = [
  'Brand Websites',
  'Landing Pages',
  'Product Pages',
  'Service Platforms',
] as const;

const ABOUT_US_CAPABILITY_CARDS = [
  {
    id: '01',
    title: 'Company Websites',
    description:
      'Clear, structured presentation for businesses that need trust from the first screen.',
  },
  {
    id: '02',
    title: 'Landing Pages',
    description:
      'Focused pages for launches, offers, and campaigns where every block supports one action.',
  },
  {
    id: '03',
    title: 'Product Showcases',
    description:
      'Modern layouts for features, demos, and product stories that need stronger visual pacing.',
  },
  {
    id: '04',
    title: 'Responsive Frontend',
    description:
      'Implementation that stays clean and convincing across desktop, tablet, and mobile.',
  },
  {
    id: '05',
    title: 'Cross-Market Delivery',
    description:
      'Projects shaped for audiences in the United States, Russia, and Armenia without falling into generic messaging.',
    layout: 'wide',
  },
] as const;

const ABOUT_US_NETWORK_LEFT = [
  {
    title: 'Strategy',
    description: 'Positioning, structure, and direction before design starts.',
  },
  {
    title: 'UI Design',
    description: 'Visual systems with hierarchy, contrast, and rhythm.',
  },
  {
    title: 'Motion',
    description:
      'Subtle animation that supports the page instead of distracting.',
  },
  {
    title: 'Frontend',
    description: 'Responsive implementation with attention to detail.',
  },
] as const;

const ABOUT_US_NETWORK_RIGHT = [
  {
    title: 'United States',
    description:
      'Presentation-first websites for teams working in the US market.',
  },
  {
    title: 'Russia',
    description:
      'Projects with clearer information flow and confident messaging.',
  },
  {
    title: 'Armenia',
    description: 'Local and regional delivery from our office in Yerevan.',
  },
  {
    title: 'Launch',
    description:
      'Final polish that keeps the site ready for real use, not just review.',
  },
] as const;

export default function AboutUsSlide() {
  const rootRef = useRef<HTMLElement | null>(null);
  const getSubtleDelay = (delay: string): CSSProperties =>
    ({ '--about-us-delay': delay }) as CSSProperties;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealItems = Array.from(
      root.querySelectorAll<HTMLElement>('.aboutUsReveal, .aboutUsSubtleReveal')
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('isVisible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root,
        threshold: 0.16,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <article ref={rootRef} className="aboutUsSlide aboutUsSlideTheme">
      <div className="aboutUsAmbient" aria-hidden="true">
        <span className="aboutUsGlow aboutUsGlowPrimary" />
        <span className="aboutUsGlow aboutUsGlowSecondary" />
        <span className="aboutUsCircuit aboutUsCircuitLeft" />
        <span className="aboutUsCircuit aboutUsCircuitRight" />
      </div>

      <div className="aboutUsShell">
        <div className="aboutUsBackdropWord" aria-hidden="true">
          ABOUT
        </div>

        <section className="aboutUsHero aboutUsReveal">
          <div className="aboutUsHeroGrid">
            <div className="aboutUsHeroIntro">
              <p className="aboutUsEyebrow">About Us</p>

              <h1 className="aboutUsHeroTitle">
                Yerevan office creating modern websites for teams in different
                markets.
              </h1>

              <p className="aboutUsHeroText">
                We build company websites, landing pages, product presentations,
                and service-focused experiences for projects connected to the
                United States, Russia, and Armenia. The focus is always the
                same: sharp visuals, clear structure, and delivery that feels
                finished.
              </p>

              <div
                className="aboutUsHeroChipRow"
                aria-label="Office highlights"
              >
                {ABOUT_US_HERO_CHIPS.map((item, index) => (
                  <span
                    className="aboutUsHeroChip aboutUsSubtleReveal"
                    key={item}
                    style={getSubtleDelay(`${80 + index * 45}ms`)}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="aboutUsHeroActions">
                <Link
                  className="aboutUsPrimaryAction aboutUsSubtleReveal"
                  href="/our-projects"
                  style={getSubtleDelay('120ms')}
                >
                  View Projects
                </Link>
                <Link
                  className="aboutUsSecondaryAction aboutUsSubtleReveal"
                  href="/contact-us"
                  style={getSubtleDelay('170ms')}
                >
                  Contact Office
                </Link>
              </div>
            </div>

            <div className="aboutUsHeroStage">
              <div
                className="aboutUsHeroMockup aboutUsSubtleReveal"
                style={getSubtleDelay('120ms')}
              >
                <div className="aboutUsHeroMockupHeader">
                  <span className="aboutUsHeroMockupBrand">
                    Taan Technologies
                  </span>
                  <span className="aboutUsHeroMockupStatus">Yerevan</span>
                </div>

                <div className="aboutUsHeroMockupPanel">
                  <p className="aboutUsHeroMockupLabel">Current Focus</p>
                  <div className="aboutUsHeroMockupBubble">
                    Websites that feel modern, structured, and market-aware from
                    the first view.
                  </div>

                  <p className="aboutUsHeroMockupLabel">Project Types</p>
                  <div className="aboutUsHeroMockupTags">
                    {ABOUT_US_MOCKUP_TAGS.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <div className="aboutUsHeroMockupFooter">
                  <span>USA / RU / AM</span>
                  <span>Launch-ready workflow</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="aboutUsNetwork aboutUsReveal">
          <div className="aboutUsNetworkIntro">
            <p className="aboutUsSectionEyebrow">Connected Workflow</p>
            <h2 className="aboutUsSectionTitle">
              One office, multiple disciplines, one consistent standard.
            </h2>
            <p className="aboutUsSectionText">
              Design, frontend, structure, and market awareness stay connected
              inside one workflow, so every website feels deliberate instead of
              assembled from unrelated parts.
            </p>
          </div>

          <div className="aboutUsNetworkBoard">
            <div className="aboutUsNetworkColumn aboutUsNetworkColumnLeft">
              {ABOUT_US_NETWORK_LEFT.map((item, index) => (
                <article
                  className="aboutUsNetworkNode aboutUsSubtleReveal"
                  key={item.title}
                  style={getSubtleDelay(`${70 + index * 45}ms`)}
                >
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </article>
              ))}
            </div>

            <div className="aboutUsNetworkCenter">
              <div
                className="aboutUsNetworkCore aboutUsSubtleReveal"
                style={getSubtleDelay('120ms')}
              >
                <span className="aboutUsNetworkCoreBadge">Yerevan</span>
                <strong>Taan Technologies</strong>
                <p>
                  Design, frontend, and delivery aligned in one practical
                  workflow.
                </p>
              </div>
            </div>

            <div className="aboutUsNetworkColumn aboutUsNetworkColumnRight">
              {ABOUT_US_NETWORK_RIGHT.map((item, index) => (
                <article
                  className="aboutUsNetworkNode aboutUsSubtleReveal"
                  key={item.title}
                  style={getSubtleDelay(`${90 + index * 45}ms`)}
                >
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </article>
              ))}
            </div>
          </div>

          <div
            className="aboutUsNetworkFooter aboutUsSubtleReveal"
            style={getSubtleDelay('180ms')}
          >
            <p>
              The goal is simple: every website should look sharp, read clearly,
              and feel ready for the market it is built for.
            </p>

            <Link className="aboutUsPrimaryAction" href="/contact-us">
              Start With Us
            </Link>
          </div>
        </section>
        <section className="aboutUsCapabilities aboutUsReveal">
          <div className="aboutUsCapabilitiesIntro">
            <p className="aboutUsSectionEyebrow">Office Focus</p>
            <h2 className="aboutUsSectionTitle">
              A compact office with a broad website scope.
            </h2>
            <p className="aboutUsSectionText">
              We work on presentation-heavy websites that need both strong
              design and practical execution. The result should feel clear for
              the audience and efficient for the business behind it.
            </p>

            <Link
              className="aboutUsSecondaryAction aboutUsSubtleReveal"
              href="/contact-us"
              style={getSubtleDelay('100ms')}
            >
              Discuss A Project
            </Link>
          </div>

          <div className="aboutUsCapabilitiesGrid">
            {ABOUT_US_CAPABILITY_CARDS.map((item, index) => (
              <article
                className={`aboutUsCapabilityCard aboutUsSubtleReveal ${'layout' in item && item.layout === 'wide' ? 'isWide' : ''}`}
                key={item.id}
                style={getSubtleDelay(`${80 + index * 55}ms`)}
              >
                <span className="aboutUsCapabilityIndex">{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
