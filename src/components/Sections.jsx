/* Blocos de conteúdo reutilizados em várias páginas. */
import { Link } from 'react-router-dom';
import { services, process as processInfo, insurance, sectors, why, quality, values } from '../data/site';
import Icon from './Icon';
import Reveal from './Reveal';

export function Img({ image, className = '', eager = false, sizes }) {
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
    />
  );
}

/* --- 3 serviços em cartões (Início) --- */
export function ServiceCards() {
  return (
    <div className="service-cards">
      {services.map((s, i) => (
        <Reveal as="article" className="service-card" key={s.id} delay={i * 90}>
          <Link to={`/servicos#${s.id}`} className="service-card-link" aria-label={`${s.title}: saber mais`}>
            <div className="service-card-media">
              <Img image={s.cardImage} />
              <span className="service-card-number">{s.number}</span>
            </div>
            <div className="service-card-body">
              <span className="icon-badge">
                <Icon name={s.icon} size={26} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <span className="link-arrow" aria-hidden="true">
                Saber mais <Icon name="arrowRight" size={18} />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

/* --- Como actuamos: linha temporal de 5 passos --- */
export function ProcessSteps({ dark = false }) {
  return (
    <ol className={`process-steps${dark ? ' is-dark' : ''}`}>
      {processInfo.steps.map((step, i) => (
        <Reveal as="li" key={step.number} delay={i * 80} className={`process-step${step.featured ? ' is-featured' : ''}`}>
          <div className="process-step-top">
            <span className="process-number">{step.number}</span>
            <span className="process-icon">
              <Icon name={step.icon} size={24} />
            </span>
          </div>
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
      <div className="insurance-icon">
        <Icon name="shield" size={34} />
      </div>
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
    <div className={`sector-cards${detailed ? ' is-detailed' : ''}`}>
      {sectors.items.map((s, i) => (
        <Reveal as="article" className="sector-card" key={s.title} delay={i * 90}>
          <div className="sector-card-media">
            <Img image={s.image} />
          </div>
          <div className="sector-card-body">
            <div className="sector-card-head">
              <span className="sector-number">{s.number}</span>
              <span className="sector-icon">
                <Icon name={s.icon} size={22} />
              </span>
            </div>
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

/* --- Porquê a Samba Ocean: 6 diferenciais --- */
export function WhyGrid({ detailed = false, variant = 'light' }) {
  return (
    <div className={`why-grid is-${variant}${detailed ? ' is-detailed' : ''}`}>
      {why.items.map((item, i) => (
        <Reveal as="article" className="why-card" key={item.title} delay={(i % 3) * 80}>
          <span className="why-icon">
            <Icon name={item.icon} size={24} />
          </span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {detailed && <p className="why-detail">{item.detail}</p>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* --- Qualidade e execução --- */
export function QualityCards() {
  return (
    <div className="quality-cards">
      {quality.items.map((q, i) => (
        <Reveal as="article" className={`quality-card${i === 2 ? ' is-accent' : ''}`} key={q.title} delay={i * 90}>
          <span className="quality-icon">
            <Icon name={q.icon} size={24} />
          </span>
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
    <Reveal as="blockquote" className="quality-statement">
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

/* --- Valores --- */
export function ValuesGrid() {
  return (
    <div className="values-grid">
      {values.items.map((v, i) => (
        <Reveal as="article" className={`value-card${i === 0 ? ' is-accent' : ''}`} key={v.title} delay={i * 80}>
          <span className="value-icon">
            <Icon name={v.icon} size={22} />
          </span>
          <h3>{v.title}</h3>
          <p>{v.text}</p>
        </Reveal>
      ))}
    </div>
  );
}
