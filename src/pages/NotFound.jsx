import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { meta, footerNav, images } from '../data/site';
import PageBanner from '../components/PageBanner';
import { BtnArrow } from '../components/Icon';
import { MainTitle } from '../components/Sections';

export default function NotFound() {
  usePageMeta(meta.notFound);
  return (
    <>
      <PageBanner title="Página não encontrada" image={images.armazemCarga} position="center 38%" crumbs={[{ label: 'Erro 404' }]} />
      <section className="section">
        <div className="container not-found">
          <p className="big-label" aria-hidden="true">
            404
          </p>
          <MainTitle title="Esta rota não está no nosso mapa." intro="A página que procura não existe ou foi movida. Use os atalhos abaixo para continuar." />
          <div className="btn-row">
            <Link to="/" className="main-btn-reverse">
              Voltar ao início
              <BtnArrow />
            </Link>
            <Link to="/contactos" className="main-btn">
              Contactos
              <BtnArrow />
            </Link>
          </div>
          <nav aria-label="Páginas do site">
            <ul className="filter-pills is-left">
              {footerNav.slice(1).map((n) => (
                <li key={n.to}>
                  <Link to={n.to}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
