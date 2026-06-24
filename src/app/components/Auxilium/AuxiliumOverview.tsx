import AuxiliumHighlightsSlider from '@/app/components/Auxilium/AuxiliumHighlightsSlider';
import {
  AUXILIUM_FEATURES,
  AUXILIUM_HIGHLIGHTS,
  AUXILIUM_PRODUCT_MODULES,
  AUXILIUM_PROJECT_STORY,
  AUXILIUM_STATS,
  AUXILIUM_TAGS,
  AUXILIUM_WORKSTREAMS,
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

      <div className="auxiliumTagRow auxiliumReveal auxiliumDelay5">
        {AUXILIUM_TAGS.map((tag) => (
          <span className="auxiliumTag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="auxiliumStatsGrid auxiliumReveal auxiliumDelay6">
        {AUXILIUM_STATS.map((stat) => (
          <article className="auxiliumStatCard" key={stat.label}>
            <span className="auxiliumStatValue">{stat.value}</span>
            <span className="auxiliumStatLabel">{stat.label}</span>
          </article>
        ))}
      </div>

      <article className="auxiliumNarrativeCard auxiliumReveal auxiliumDelay7">
        <p className="auxiliumDetailLabel">Project Story</p>
        <div className="auxiliumNarrativeText">
          {AUXILIUM_PROJECT_STORY.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <div className="auxiliumModuleGrid auxiliumReveal auxiliumDelay8">
        {AUXILIUM_PRODUCT_MODULES.map((module) => (
          <article className="auxiliumModuleCard" key={module.title}>
            <strong>{module.title}</strong>
            <p>{module.text}</p>
          </article>
        ))}
      </div>

      <div className="auxiliumDetailsGrid auxiliumReveal auxiliumDelay7">
        <article className="auxiliumDetailCard">
          <p className="auxiliumDetailLabel">Core Capabilities</p>

          <ul className="auxiliumFeatureList">
            {AUXILIUM_FEATURES.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>

        <article className="auxiliumDetailCard">
          <p className="auxiliumDetailLabel">Operational Coverage</p>

          <div className="auxiliumCoverageGrid">
            {AUXILIUM_WORKSTREAMS.map((item) => (
              <div className="auxiliumCoverageItem" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="auxiliumOutcomeCard auxiliumReveal auxiliumDelay8">
        <p className="auxiliumDetailLabel">Outcome</p>
        <p className="auxiliumFootnote">
          Auxilium helps coordinators act early, communicate faster, and keep
          service quality consistent across every shift.
        </p>
      </article>

      <AuxiliumHighlightsSlider
        items={AUXILIUM_HIGHLIGHTS}
        className="auxiliumReveal auxiliumDelay9"
      />
    </div>
  );
}
