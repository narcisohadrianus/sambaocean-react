import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../data/site';
import Icon, { BtnArrow } from './Icon';

const INTERVAL = 6000;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Carrossel da página inicial (4 destaques).
 * Transição em "crossfade", avanço automático a cada 6s (pára ao passar o rato,
 * com o foco lá dentro, com o botão de pausa ou com "reduzir movimento"),
 * setas do teclado, deslizar no ecrã táctil e indicadores em ponto.
 */
export default function HeroCarousel() {
  const count = heroSlides.length;
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null); // slide anterior fica por baixo durante a transição
  const [paused, setPaused] = useState(() => prefersReducedMotion()); // pausa pedida pelo utilizador
  const [hovering, setHovering] = useState(false);
  const [focusInside, setFocusInside] = useState(false);
  const [loaded, setLoaded] = useState(() => new Set([0, 1])); // imagens já pedidas
  const touch = useRef(null);

  const go = useCallback(
    (i) => {
      const next = (i + count) % count;
      setIndex((cur) => {
        if (cur !== next) setPrev(cur);
        return next;
      });
      setLoaded((prev) => {
        if (prev.has(next) && prev.has((next + 1) % count)) return prev;
        const s = new Set(prev);
        s.add(next);
        s.add((next + 1) % count);
        return s;
      });
    },
    [count]
  );

  const running = !paused && !hovering && !focusInside;

  /* Avanço automático */
  useEffect(() => {
    if (!running) return undefined;
    const t = setTimeout(() => {
      if (!document.hidden) go(index + 1);
    }, INTERVAL);
    return () => clearTimeout(t);
  }, [running, index, go]);

  /* Se o utilizador activar "reduzir movimento" a meio, pára */
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => mq.matches && setPaused(true);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(index + 1);
    }
  };

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(index + (dx < 0 ? 1 : -1));
  };

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carrossel"
      aria-label="Destaques da SAMBA OCEAN"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocusInside(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocusInside(false);
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="carousel-track" aria-live={running ? 'off' : 'polite'}>
        {heroSlides.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={s.title}
              className={`carousel-slide${active ? ' is-active' : ''}${i === prev && !active ? ' is-prev' : ''}`}
              role="group"
              aria-roledescription="destaque"
              aria-label={`${i + 1} de ${count}: ${s.title}`}
              aria-hidden={active ? undefined : 'true'}
              inert={active ? undefined : ''}
            >
              {loaded.has(i) && (
                <img
                  className="carousel-img"
                  src={s.image.src}
                  alt=""
                  width={s.image.w}
                  height={s.image.h}
                  style={{ objectPosition: s.position }}
                  fetchpriority={i === 0 ? 'high' : undefined}
                  decoding={i === 0 ? 'sync' : 'async'}
                />
              )}
              <div className="carousel-overlay" aria-hidden="true" />
              <div className="container carousel-caption">
                <h2 className="carousel-title">{s.title}</h2>
                <p className="carousel-text">{s.text}</p>
                <Link to={s.cta.to} className="main-btn">
                  {s.cta.label}
                  <BtnArrow />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <button type="button" className="carousel-control is-prev" onClick={() => go(index - 1)} aria-label="Destaque anterior">
        <Icon name="chevronLeft" size={30} strokeWidth={1.6} />
      </button>
      <button type="button" className="carousel-control is-next" onClick={() => go(index + 1)} aria-label="Destaque seguinte">
        <Icon name="chevronRight" size={30} strokeWidth={1.6} />
      </button>

      <div className="carousel-indicators">
        {heroSlides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            className={i === index ? 'is-active' : undefined}
            aria-label={`Ver destaque ${i + 1}: ${s.title}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => go(i)}
          />
        ))}
        <button
          type="button"
          className="carousel-pause"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? 'Retomar a passagem automática' : 'Pausar a passagem automática'}
        >
          <Icon name={paused ? 'play' : 'pause'} size={12} strokeWidth={2.2} />
        </button>
      </div>
    </section>
  );
}
