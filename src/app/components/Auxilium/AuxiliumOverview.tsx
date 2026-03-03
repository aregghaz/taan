import AuxiliumHighlightsSlider from '@/app/components/Auxilium/AuxiliumHighlightsSlider';
import {
  AUXILIUM_FEATURES,
  AUXILIUM_HIGHLIGHTS,
  AUXILIUM_STATS,
} from '@/app/components/Auxilium/auxilium.data';

export default function AuxiliumOverview() {
  return (
    <div className="auxiliumLeftContent">
      <p className="auxiliumEyebrow auxiliumReveal auxiliumDelay1">Core Platform</p>

      <h2 className="auxiliumTitle auxiliumReveal auxiliumDelay2">
        Auxilium Operations Hub
      </h2>

      <p className="auxiliumLead auxiliumReveal auxiliumDelay3">
        Dispatch, monitoring, and member operations in one workspace for
        healthcare transportation teams.
      </p>

      <p className="auxiliumSubLead auxiliumReveal auxiliumDelay4">
        Built for NEMT workflows where every minute matters and teams need one
        clear operational picture.
      </p>

      <div className="auxiliumStatsGrid auxiliumReveal auxiliumDelay5">
        {AUXILIUM_STATS.map((stat) => (
          <article className="auxiliumStatCard" key={stat.label}>
            <span className="auxiliumStatValue">{stat.value}</span>
            <span className="auxiliumStatLabel">{stat.label}</span>
          </article>
        ))}
      </div>

      <ul className="auxiliumFeatureList auxiliumReveal auxiliumDelay6">
        {AUXILIUM_FEATURES.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <p className="auxiliumFootnote auxiliumReveal auxiliumDelay7">
        Auxilium helps coordinators act early, communicate faster, and keep
        service quality consistent across every shift.
      </p>

      <AuxiliumHighlightsSlider
        items={AUXILIUM_HIGHLIGHTS}
        className="auxiliumReveal auxiliumDelay8"
      />
    </div>
  );
}
