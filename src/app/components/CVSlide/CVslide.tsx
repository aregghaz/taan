'use client';

import {
  type ChangeEvent,
  type CSSProperties,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

const CV_CHIPS = [
  'Attach CV if ready',
  'Form works without a file',
  'Reply goes to your email',
  'Projects across USA, Russia, and Armenia',
] as const;

const CV_STEPS = [
  {
    id: '01',
    title: 'Send the essentials',
    description:
      'A CV is welcome, but not required. The form itself is enough to start the review.',
  },
  {
    id: '02',
    title: 'Tell us your direction',
    description:
      'Share the role, strengths, and the kind of work you want to be considered for.',
  },
  {
    id: '03',
    title: 'We review and reply',
    description:
      'If the profile matches what we need, we continue over email before any call.',
  },
] as const;

const CV_FORM_NOTES = [
  'PDF, DOC, or DOCX up to 8MB',
  'File is optional',
  'Manual form submission also works',
] as const;

type SubmissionState = 'idle' | 'sending' | 'success' | 'error';

const DEFAULT_STATUS_MESSAGE =
  'Attach your CV if you have it, or just fill the form and send your profile manually.';

export default function CVslide() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>('idle');
  const [statusMessage, setStatusMessage] = useState(DEFAULT_STATUS_MESSAGE);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const getDelay = (delay: string): CSSProperties =>
    ({ '--cv-delay': delay }) as CSSProperties;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealItems = Array.from(
      root.querySelectorAll<HTMLElement>('.cvReveal, .cvSubtleReveal')
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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFileName(file?.name ?? null);

    if (submissionState === 'error' || submissionState === 'success') {
      setSubmissionState('idle');
      setStatusMessage(DEFAULT_STATUS_MESSAGE);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submissionState === 'sending') return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmissionState('sending');
    setStatusMessage('Sending your profile...');

    try {
      const response = await fetch('/api/cv-submit', {
        method: 'POST',
        body: formData,
      });

      const data = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(
          data?.message ??
            'We could not send the form right now. Please try again.'
        );
      }

      form.reset();
      setSelectedFileName(null);
      setSubmissionState('success');
      setStatusMessage(
        data?.message ??
          'Your profile has been sent. We will review it and reply by email.'
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending the form.';

      setSubmissionState('error');
      setStatusMessage(message);
    }
  };

  return (
    <article ref={rootRef} className="cvSlide cvSlideTheme">
      <div className="cvAmbient" aria-hidden="true">
        <span className="cvGlow cvGlowPrimary" />
        <span className="cvGlow cvGlowSecondary" />
        <span className="cvCircuit cvCircuitLeft" />
        <span className="cvCircuit cvCircuitRight" />
      </div>

      <div className="cvShell">
        <div className="cvBackdropWord" aria-hidden="true">
          Careers
        </div>

        <div className="cvGrid">
          <section className="cvInfoColumn">
            <div className="cvIntro cvReveal">
              <div className="cvBadge">Careers</div>
              <h1 className="cvTitle">
                Send your profile in the format that is easiest for you.
              </h1>
              <p className="cvText">
                If you already have a CV, attach it. If not, just fill the form
                and tell us about your role, experience, and the kind of work
                you want to do with us.
              </p>

              <div className="cvChipRow" aria-label="Submission highlights">
                {CV_CHIPS.map((item, index) => (
                  <span
                    className="cvChip cvSubtleReveal"
                    key={item}
                    style={getDelay(`${90 + index * 45}ms`)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="cvProcessCard cvReveal" style={getDelay('120ms')}>
              <div className="cvProcessHeader">
                <p className="cvSectionEyebrow">How it works</p>
                <h2 className="cvSectionTitle">
                  Clear submission flow without forcing one format.
                </h2>
              </div>

              <div className="cvProcessList">
                {CV_STEPS.map((item, index) => (
                  <article
                    className="cvProcessItem cvSubtleReveal"
                    key={item.id}
                    style={getDelay(`${130 + index * 55}ms`)}
                  >
                    <span className="cvProcessIndex">{item.id}</span>
                    <div className="cvProcessCopy">
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="cvFormColumn cvReveal" style={getDelay('140ms')}>
            <div className="cvFormPanel">
              <div className="cvFormHeader">
                <div>
                  <p className="cvFormEyebrow">Application Form</p>
                  <h2 className="cvFormTitle">Share your details</h2>
                </div>

                <div className="cvFormStatusBadge">Optional file</div>
              </div>

              <form
                className="cvForm"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <div className="cvFormGrid">
                  <label className="cvField">
                    <span>Full name</span>
                    <input
                      autoComplete="name"
                      name="fullName"
                      placeholder="Your full name"
                      required
                      type="text"
                    />
                  </label>

                  <label className="cvField">
                    <span>Email</span>
                    <input
                      autoComplete="email"
                      name="email"
                      placeholder="name@example.com"
                      required
                      type="email"
                    />
                  </label>

                  <label className="cvField">
                    <span>Phone</span>
                    <input
                      autoComplete="tel"
                      name="phone"
                      placeholder="+374 ..."
                      type="tel"
                    />
                  </label>

                  <label className="cvField">
                    <span>Role / Position</span>
                    <input
                      name="role"
                      placeholder="Frontend Developer, UI Designer..."
                      required
                      type="text"
                    />
                  </label>

                  <label className="cvField cvFieldWide">
                    <span>Portfolio or LinkedIn</span>
                    <input
                      autoComplete="url"
                      name="portfolio"
                      placeholder="https://..."
                      type="url"
                    />
                  </label>

                  <label className="cvField cvFieldWide cvFieldLarge">
                    <span>Message</span>
                    <textarea
                      name="message"
                      placeholder="Tell us about your experience, strengths, preferred work, and anything we should know."
                      required
                      rows={6}
                    />
                  </label>

                  <label className="cvUploadField cvFieldWide">
                    <span>Attach CV</span>
                    <input
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="cvUploadInput"
                      name="cvFile"
                      onChange={handleFileChange}
                      type="file"
                    />

                    <span className="cvUploadSurface">
                      <strong>{selectedFileName ?? 'Choose file'}</strong>
                      <small>
                        {selectedFileName
                          ? 'You can change the file before sending.'
                          : 'PDF, DOC, or DOCX. You can leave this empty and still submit the form.'}
                      </small>
                    </span>
                  </label>
                </div>

                <div className="cvFormMeta">
                  {CV_FORM_NOTES.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <p
                  className={`cvFormStatus cvFormStatus${submissionState
                    .charAt(0)
                    .toUpperCase()}${submissionState.slice(1)}`}
                  role="status"
                >
                  {statusMessage}
                </p>

                <button
                  className="cvSubmitButton"
                  disabled={submissionState === 'sending'}
                  type="submit"
                >
                  {submissionState === 'sending'
                    ? 'Sending...'
                    : 'Send Profile'}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
