'use client';

import { type CSSProperties, useEffect, useRef } from 'react';
import { PhoneIcon } from '@/app/assets/icons/PhoneIcon';
import { EmailIcon } from '@/app/assets/icons/EmailIcon';
import { LocationIcon } from '@/app/assets/icons/LocationIcon';
import { ArrowIcon } from '@/app/assets/icons/ArrowIcon';

const CONTACT_CHIPS = [
  'Brand websites',
  'Landing pages',
  'Product UI',
  'Launch support',
] as const;

const CONTACT_PHONE = '+374 94 80 60 80';
const CONTACT_PHONE_HREF = `tel:${CONTACT_PHONE.replace(/\s/g, '')}`;
const CONTACT_LOCATION = '12 Vagharsh Vagharshyan St, Yerevan 0012';
const CONTACT_LOCATION_HREF = `https://maps.google.com/?q=${encodeURIComponent(CONTACT_LOCATION)}`;

const CONTACT_CARDS = [
  {
    id: 'email',
    title: 'Email us',
    value: 'info@taan-tech.com',
    hint: 'Best for briefs, timelines, and project scope.',
    href: 'mailto:info@taan-tech.com?subject=Project%20Brief',
    icon: EmailIcon,
  },
  {
    id: 'phone',
    title: 'Call us',
    value: CONTACT_PHONE,
    hint: 'Quick intro calls for active projects and handoff.',
    href: CONTACT_PHONE_HREF,
    icon: PhoneIcon,
  },
  {
    id: 'location',
    title: 'Our location',
    value: CONTACT_LOCATION,
    hint: 'Office-based workflow with remote delivery across markets.',
    href: CONTACT_LOCATION_HREF,
    icon: LocationIcon,
    external: true,
  },
] as const;

const CONTACT_FORM_NOTES = [
  'Usually reply within 1 business day',
  'Projects across USA, Russia, and Armenia',
  'Clear scope before design starts',
] as const;

export default function ContactUsSlide() {
  const rootRef = useRef<HTMLElement | null>(null);
  const getDelay = (delay: string): CSSProperties =>
    ({ '--contact-delay': delay }) as CSSProperties;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealItems = Array.from(
      root.querySelectorAll<HTMLElement>('.contactUsReveal')
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
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <article ref={rootRef} className="contactUsSlide contactUsSlideTheme">
      <div className="contactUsAmbient" aria-hidden="true">
        <span className="contactUsGlow contactUsGlowPrimary" />
        <span className="contactUsGlow contactUsGlowSecondary" />
        <span className="contactUsCircuit contactUsCircuitLeft" />
        <span className="contactUsCircuit contactUsCircuitRight" />
      </div>

      <div className="contactUsShell">
        <div className="contactUsBackdropWord" aria-hidden="true">
          CONTACT
        </div>

        <div className="contactUsGrid">
          <section className="contactUsInfoColumn">
            <div className="contactUsIntro contactUsReveal">
              <div className="contactUsBadge">Contact</div>
              <h1 className="contactUsTitle">Get in touch</h1>
              <p className="contactUsText">
                Tell us what you are building and we will shape the right
                website direction, structure, and delivery path from the first
                conversation.
              </p>

              <div className="contactUsChipRow">
                {CONTACT_CHIPS.map((item, index) => (
                  <span
                    className="contactUsChip contactUsReveal"
                    key={item}
                    style={getDelay(`${90 + index * 45}ms`)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="contactUsCardList">
              {CONTACT_CARDS.map((item, index) => {
                const Icon = item.icon;
                const isExternal = 'external' in item && item.external;

                return (
                  <a
                    id={`contact-${item.id}`}
                    className="contactUsCard contactUsReveal"
                    href={item.href}
                    key={item.id}
                    rel={isExternal ? 'noreferrer' : undefined}
                    style={getDelay(`${120 + index * 70}ms`)}
                    target={isExternal ? '_blank' : undefined}
                  >
                    <div className="contactUsCardIcon">
                      <Icon />
                    </div>

                    <div className="contactUsCardCopy">
                      <strong>{item.title}</strong>
                      <span>{item.value}</span>
                      <p>{item.hint}</p>
                    </div>

                    <div className="contactUsCardArrow">
                      <ArrowIcon />
                    </div>
                  </a>
                );
              })}
            </div>
          </section>

          <section
            className="contactUsFormColumn contactUsReveal"
            id="contact-form"
            style={getDelay('140ms')}
          >
            <div className="contactUsFormPanel">
              <div className="contactUsFormHeader">
                <div>
                  <p className="contactUsFormEyebrow">Project Brief</p>
                  <h2 className="contactUsFormTitle">Tell us about the work</h2>
                </div>

                <div className="contactUsFormStatus">Yerevan office</div>
              </div>

              <form
                className="contactUsForm"
                onSubmit={(event) => event.preventDefault()}
              >
                <label className="contactUsField">
                  <span>Name</span>
                  <input
                    autoComplete="name"
                    name="name"
                    placeholder="Your name"
                    type="text"
                  />
                </label>

                <label className="contactUsField">
                  <span>Email</span>
                  <input
                    autoComplete="email"
                    name="email"
                    placeholder="name@company.com"
                    type="email"
                  />
                </label>

                <label className="contactUsField contactUsFieldLarge">
                  <span>Message</span>
                  <textarea
                    name="message"
                    placeholder="Project type, timeline, references, and what you want the website to communicate."
                    rows={7}
                  />
                </label>

                <div className="contactUsFormMeta">
                  {CONTACT_FORM_NOTES.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <button className="contactUsSubmitButton" type="submit">
                  Send Request
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
