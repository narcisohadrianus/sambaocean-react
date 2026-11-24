import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/site';
import Icon, { BtnArrow } from './Icon';

/* Todas as sub-áreas dos serviços, cada uma marcada com o serviço a que pertence */
const allCards = services.flatMap((s) =>
  s.items.map((item) => ({
    ...item,
    service: s.id,
    serviceTitle: s.title,
    text: item.text || s.short,
  }))
);

/**
 * "Os nossos serviços": filtros em texto (Todos · Transporte · Estiva · Máquinas)
 * e uma faixa cinzenta com cartões quadrados que deslizam com as setas.
 */
export default function ServiceSlider({ titleId }) {
  const [filter, setFilter] = useState('todos');
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const cards = useMemo(
    () => (filter === 'todos' ? allCards : allCards.filter((c) => c.service === filter)),
    [filter]
  );

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({ start: el.scrollLeft <= 2, end: el.scrollLeft >= max - 2 });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    el.scrollLeft = 0;
    updateEdges();
    el.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    return () => {
      el.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
    };
  }, [cards, updateEdges]);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.service-card');
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' });
  };

  const filters = [{ id: 'todos', label: 'Todos' }, ...services.map((s) => ({ id: s.id, label: s.filterLabel }))];

  return (
    <>
      <div className="container">
        <ul className="filter-pills" aria-label="Filtrar serviços">
          {filters.map((f) => (
            <li key={f.id}>
              <button
                type="button"
                className={filter === f.id ? 'is-active' : undefined}
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="grey-band slider-band">
        <div className="container">
          <div
            className="card-track"
            ref={trackRef}
            role="region"
            aria-labelledby={titleId}
            tabIndex={0}
          >
            {cards.map((c) => (
              <article className="service-card" key={c.title}>
                <div className="service-card-media">
                  <img src={c.image.src} alt={c.image.alt} width={c.image.w} height={c.image.h} loading="lazy" decoding="async" />
                </div>
                <div className="service-card-body">
                  <p className="card-tag">
                    <Icon name={c.icon} size={16} strokeWidth={1.5} />
                    {c.serviceTitle}
                  </p>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <Link to={`/servicos#${c.service}`} className="card-link">
                    Saiba mais<span className="sr-only">: {c.title}</span>
                    <BtnArrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="slider-controls">
            <button type="button" className="square-arrow" onClick={() => scroll(-1)} disabled={edges.start} aria-label="Cartões anteriores">
              <Icon name="chevronLeft" size={22} strokeWidth={1.8} />
            </button>
            <button type="button" className="square-arrow" onClick={() => scroll(1)} disabled={edges.end} aria-label="Cartões seguintes">
              <Icon name="chevronRight" size={22} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
