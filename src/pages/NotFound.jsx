import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { meta, nav } from '../data/site';
import HexMotif from '../components/HexMotif';
import Icon from '../components/Icon';

export default function NotFound() {
  usePageMeta(meta.notFound);
  return (
    <section className="not-found">
      <HexMotif className="not-found-hex" />
      <div className="container not-found-inner">
        <p className="not-found-code" aria-hidden="true">
          404
        </p>
        <p className="eyebrow eyebrow-light">Erro 404</p>
        <h1>Esta rota não está no nosso mapa.</h1>
        <p className="not-found-text">
          A página que procura não existe ou foi movida. Use os atalhos abaixo para continuar.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary btn-lg">
            <Icon name="home" size={20} /> Voltar ao início
          </Link>
          <Link to="/contactos" className="btn btn-ghost-light btn-lg">
            Contactos
          </Link>
        </div>
        <nav aria-label="Páginas do site" className="not-found-links">
          <ul>
            {nav.slice(1).map((n) => (
              <li key={n.to}>
                <Link to={n.to}>
                  {n.label} <Icon name="arrowRight" size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
