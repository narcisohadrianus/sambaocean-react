import Reveal from './Reveal';

/** Eyebrow (ex.: "03 — Transporte Rodoviário") + título + introdução. */
export default function SectionHeading({ eyebrow, title, intro, align = 'left', as: H = 'h2', id, split = false, light = false }) {
  const cls = ['section-heading', `align-${align}`, split && 'is-split', light && 'is-light'].filter(Boolean).join(' ');
  return (
    <Reveal className={cls}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <H id={id}>{title}</H>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  );
}
