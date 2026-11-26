/* Blocos de conteúdo reutilizados em várias páginas (estilo plano e quadrado). */
import { Link } from 'react-router-dom';
import { services, process as processInfo, insurance, sectors, why, quality, values } from '../data/site';
import Icon from './Icon';
import Reveal from './Reveal';

export function Img({ image, className = '', eager = false, sizes, position }) {
  return (
    <img
      className={className}
      src={image.src}
      alt={image.alt}
      width={image.w}
      height={image.h}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      sizes={sizes}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}

/** Título principal de secção (azul da marca, 36px) + introdução opcional. */
export function MainTitle({ id, title, intro, as: H = 'h2', light = false, center = false }) {
  return (
    <Reveal className={`title-block${light ? ' is-light' : ''}${center ? ' is-center' : ''}`}>
      <H className="main-title" id={id}>
        {title}
      </H>
      {intro && <p className="title-intro">{intro}</p>}
    </Reveal>
  );
}

/* --- Como actuamos: 5 passos em mosaico quadrado --- */
export function ProcessSteps() {
  return (
    <ol className="process-steps">
      {processInfo.steps.map((step, i) => (
        <Reveal as="li" key={step.number} delay={i * 60} className={`process-step${step.featured ? ' is-featured' : ''}`}>
          <span className="process-number">{step.number}</span>
          <Icon name={step.icon} size={28} strokeWidth={1.3} className="process-icon" />
          <h3>{step.title}</h3>
        </Reveal>
      ))}
    </ol>
  );
}

/* --- Nota de seguros / responsabilidade --- */
export function InsuranceNote() {
  return (
    <Reveal className="insurance-note">
      <Icon name="shield" size={36} strokeWidth={1.3} className="insurance-icon" />
      <div>
        <h3>{insurance.title}</h3>
        <p>{insurance.text}</p>
      </div>
    </Reveal>
  );
}

/* --- Sectores de actuação --- */
export function SectorCards({ detailed = false }) {
  return (
    <div className="sector-cards">
      {sectors.items.map((s, i) => (
        <Reveal as="article" className="flat-card sector-card" key={s.title} delay={i * 80}>
          <div className="flat-card-media">
            <Img image={s.image} />
          </div>
          <div className="flat-card-body">
            <p className="card-tag">
              <Icon name={s.icon} size={16} strokeWidth={1.5} />
              Sector {s.number}
            </p>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            {detailed && (
              <ul className="tag-list" aria-label="Serviços relacionados">
                {s.related.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* --- Porquê a Samba Ocean: 6 diferenciais em mosaico --- */
export function WhyGrid({ detailed = false }) {
  return (
    <div className={`tile-grid tiles-3${detailed ? ' is-detailed' : ''}`}>
      {why.items.map((item, i) => (
        <Reveal as="article" className="tile" key={item.title} delay={(i % 3) * 60}>
          <Icon name={item.icon} size={34} strokeWidth={1.2} className="tile-icon" />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {detailed && <p className="tile-detail">{item.detail}</p>}
        </Reveal>
      ))}
    </div>
  );
}

/* --- Valores --- */
export function ValuesGrid() {
  return (
    <div className="tile-grid tiles-4">
      {values.items.map((v, i) => (
        <Reveal as="article" className="tile tile-blue" key={v.title} delay={i * 60}>
          <Icon name={v.icon} size={34} strokeWidth={1.2} className="tile-icon" />
          <h3>{v.title}</h3>
          <p>{v.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* --- Qualidade e execução --- */
export function QualityCards() {
  return (
    <div className="tile-grid tiles-3 is-compact">
      {quality.items.map((q, i) => (
        <Reveal as="article" className="tile" key={q.title} delay={i * 60}>
          <Icon name={q.icon} size={30} strokeWidth={1.2} className="tile-icon" />
          <h3>{q.title}</h3>
          <p>{q.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* Declaração de qualidade com destaques a azul (como na apresentação) */
export function QualityStatement() {
  return (
    <Reveal as="blockquote" className="statement">
      <p>
        <Highlight text={quality.statement} phrases={quality.statementHighlights} />
      </p>
    </Reveal>
  );
}

/* Destaca (a azul) as expressões indicadas dentro de um texto */
export function Highlight({ text, phrases = [] }) {
  if (!phrases.length) return text;
  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const parts = text.split(new RegExp(`(${escaped.join('|')})`, 'g'));
  return parts.map((part, i) => (phrases.includes(part) ? <mark key={i}>{part}</mark> : part));
}

/* Lista de serviços como links de texto (estilo dos filtros) */
export function ServiceJump() {
  return (
    <nav aria-label="Serviços nesta página">
      <ul className="filter-pills">
        {services.map((s) => (
          <li key={s.id}>
            <Link to={`/servicos#${s.id}`}>{s.title}</Link>
          </li>
        ))}
        <li>
          <Link to="/servicos#como-actuamos">Como actuamos</Link>
        </li>
      </ul>
    </nav>
  );
}
