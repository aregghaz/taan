'use client';

import { useAppSelector } from "@/app/store/hooks";
import { selectHomeFeatureCards } from "@/app/store/homeFeaturesSelectors";

type HighlightedCellVariant = "order" | "solved";
type HighlightedCellMap = Record<number, { label: string; variant: HighlightedCellVariant }>;

export default function HomeFeatureCards() {
  const cards = useAppSelector(selectHomeFeatureCards);

  const highlightedCells = cards.fastDevelopment.highlightedCells.reduce<HighlightedCellMap>(
    (acc, cell) => {
      acc[cell.index] = { label: cell.label, variant: cell.variant };
      return acc;
    },
    {}
  );

  return (
    <div className="homePageContentRight">
      <div className="homeFeatureGrid">
        <article className="homeFeatureCard cleanCode">
          <h3>{cards.cleanCode.title}</h3>
          <p>{cards.cleanCode.description}</p>
          <div className="cleanCodeMark">
            <span>{cards.cleanCode.mark}</span>
          </div>
        </article>

        <article className="homeFeatureCard uxFocused">
          <h3>{cards.uxFocused.title}</h3>
          <p>{cards.uxFocused.description}</p>
          <div className="uxFlow">
            <span className="uxBubble user">{cards.uxFocused.userLabel}</span>
            <span className="uxBubble button">{cards.uxFocused.buttonLabel}</span>
          </div>
        </article>

        <article className="homeFeatureCard reliableSupport">
          <h3>{cards.reliableSupport.title}</h3>
          <p>{cards.reliableSupport.description}</p>
          <div className="supportChat">
            <span className="chatLine">{cards.reliableSupport.messages[0]}</span>
            <span className="chatLine answer">{cards.reliableSupport.messages[1]}</span>
          </div>
        </article>

        <article className="homeFeatureCard fastDevelopment">
          <h3>{cards.fastDevelopment.title}</h3>
          <p>{cards.fastDevelopment.description}</p>
          <div className="speedCells">
            {Array.from({ length: cards.fastDevelopment.cellCount }).map((_, index) => {
              const highlightedCell = highlightedCells[index];
              const className = highlightedCell ? `cellAccent ${highlightedCell.variant}` : "";

              return (
                <span className={className} key={index}>
                  {highlightedCell?.label ?? ""}
                </span>
              );
            })}
          </div>
        </article>

        <article className="homeFeatureCard modernStack">
          <div className="stackBadges">
            {cards.modernStack.badges.map((badge) => (
              <span className="stackBadge" key={badge}>
                {badge}
              </span>
            ))}
          </div>
          <h3>{cards.modernStack.title}</h3>
          <p>{cards.modernStack.description}</p>
        </article>
      </div>
    </div>
  );
}
