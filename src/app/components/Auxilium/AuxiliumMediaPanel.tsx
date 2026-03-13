import Image from 'next/image';
import Aux1 from '@/app/assets/images/Aux1.jpg';
import Aux2 from '@/app/assets/images/Aux2.jpg';
import Aux3 from '@/app/assets/images/Aux3.jpg';
import Aux4 from '@/app/assets/images/Aux4.jpg';
import { AUXILIUM_VIDEO_URL } from '@/app/components/Auxilium/auxilium.data';

const AUXILIUM_GALLERY = [
  { src: Aux1, alt: 'Auxilium dashboard view 1', caption: 'Dispatcher overview' },
  { src: Aux2, alt: 'Auxilium dashboard view 2', caption: 'Live ride tracking' },
  { src: Aux3, alt: 'Auxilium dashboard view 3', caption: 'Status and alerts' },
  { src: Aux4, alt: 'Auxilium dashboard view 4', caption: 'Operations summary' },
];

const DELAY_CLASSES = [
  'auxiliumDelay4',
  'auxiliumDelay5',
  'auxiliumDelay6',
  'auxiliumDelay7',
];

const AUXILIUM_MEDIA_TAGS = [
  'Ride board',
  'Member ops',
  'Status alerts',
  'Shift visibility',
] as const;

export default function AuxiliumMediaPanel() {
  return (
    <div className="auxiliumRightContent">
      <div className="auxiliumMediaIntro auxiliumReveal auxiliumDelay1">
        <p className="auxiliumMediaEyebrow">Product Surfaces</p>

        <div className="auxiliumMediaTagRow">
          {AUXILIUM_MEDIA_TAGS.map((tag) => (
            <span className="auxiliumMediaTag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="auxiliumEmbedCard auxiliumReveal auxiliumDelay2">
        <div className="auxiliumEmbedViewport">
          <iframe
            className="auxiliumEmbedFrame auxiliumEmbedFrameVideoOnly"
            src={AUXILIUM_VIDEO_URL}
            title="Auxilium Embedded Demo"
            loading="lazy"
            scrolling="no"
            allowFullScreen
          />
        </div>
      </div>

      <div className="auxiliumVideoMeta auxiliumReveal auxiliumDelay3">
        <span className="auxiliumMetaPill">Auxilium Demo</span>
        <span className="auxiliumMetaText">Product walkthrough preview</span>
      </div>

      <div className="auxiliumPhotoGrid">
        {AUXILIUM_GALLERY.map((photo, index) => (
          <article
            className={`auxiliumPhotoCard auxiliumReveal ${DELAY_CLASSES[index]}`}
            key={photo.alt}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="auxiliumPhotoImage"
              sizes="(max-width: 960px) 48vw, 280px"
            />
            <span className="auxiliumPhotoCaption">{photo.caption}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
