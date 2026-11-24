import { Link } from 'react-router-dom';

/**
 * Banner das páginas interiores: fotografia com véu azul, título branco
 * em baixo à esquerda e breadcrumb (Início › Página).
 */
export default function PageBanner({ title, image, position = 'center', crumbs = [] }) {
  return (
    <section className="page-banner">
      {image && (
        <img
          className="page-banner-img"
          src={image.src}
          alt=""
          width={image.w}
          height={image.h}
          style={{ objectPosition: position }}
          fetchpriority="high"
        />
      )}
      <div className="page-banner-overlay" aria-hidden="true" />
      <div className="container page-banner-inner">
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
        <h1>{title}</h1>
      </div>
    </section>
  );
}
