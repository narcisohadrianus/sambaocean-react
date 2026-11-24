import { Link } from 'react-router-dom';
import HexMotif from './HexMotif';

/** Cabeçalho compacto das páginas interiores (título + breadcrumb). */
export default function PageHero({ eyebrow, title, text, image, position = 'center', crumbs = [] }) {
  return (
    <section className="page-hero">
      {image && (
        <img
          className="page-hero-bg"
          src={image.src}
          alt=""
          aria-hidden="true"
          width={image.w}
          height={image.h}
          style={{ objectPosition: position }}
          fetchpriority="high"
        />
      )}
      <div className="page-hero-overlay" aria-hidden="true" />
      <HexMotif className="page-hero-hex" />
      <div className="container page-hero-inner">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol>
            <li>
              <Link to="/">Início</Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label}>
                {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow eyebrow-light">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p className="page-hero-text">{text}</p>}
      </div>
    </section>
  );
}
