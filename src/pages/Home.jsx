import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { meta, company, about, servicesIntro, process as processInfo, sectors, why, images } from '../data/site';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import HexMotif from '../components/HexMotif';
import SectionHeading from '../components/SectionHeading';
import CtaBand from '../components/CtaBand';
import { Img, ServiceCards, ProcessSteps, SectorCards, WhyGrid, Highlight } from '../components/Sections';

export default function Home() {
  usePageMeta(meta.home);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-bg"
          src={images.hero.src}
          alt=""
          aria-hidden="true"
          width={images.hero.w}
          height={images.hero.h}
          fetchpriority="high"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <HexMotif className="hero-hex" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light hero-eyebrow">Prestação de Serviços, Lda · {company.location}</p>
            <h1 id="hero-title">
              Movemos Angola.
              <span> Com força, segurança e pontualidade.</span>
            </h1>
            <p className="hero-lead">{company.shortDescription}</p>
            <div className="hero-actions">
              <Link to="/contactos#proposta" className="btn btn-primary btn-lg">
                Pedir proposta <Icon name="arrowRight" size={20} />
              </Link>
              <Link to="/servicos" className="btn btn-ghost-light btn-lg">
                Os nossos serviços
              </Link>
            </div>
            <ul className="pill-list pill-list-light" aria-label="Áreas de actuação">
              {company.pills.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <aside className="hero-card" aria-label="Operação em campo">
            <span className="hero-card-label">Operação em campo</span>
            <p>Descarga de contentor acompanhada pela equipa SAMBA OCEAN.</p>
          </aside>
        </div>
        <a href="#quem-somos" className="hero-scroll" aria-label="Descer para Quem Somos">
          <span />
        </a>
      </section>

      {/* ---------- Quem somos (resumo) ---------- */}
      <section className="section" id="quem-somos" aria-labelledby="quem-somos-title">
        <div className="container split split-media-right">
          <div className="split-copy">
            <SectionHeading eyebrow={about.eyebrow} title={about.title} id="quem-somos-title" />
            <Reveal>
              <p className="lead">{about.text}</p>
              <ul className="pill-list">
                {company.pills.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <blockquote className="pull-quote">
                <p>
                  <Highlight text={about.quote} phrases={about.quoteHighlights} />
                </p>
              </blockquote>
              <Link to="/sobre" className="btn btn-outline">
                Conhecer a SAMBA OCEAN <Icon name="arrowRight" size={18} />
              </Link>
            </Reveal>
          </div>
          <Reveal className="split-media media-stack" delay={120}>
            <Img image={images.equipaArmazem} className="media-main" />
            <div className="media-badge">
              <img src="/img/simbolo.png" alt="" aria-hidden="true" width="320" height="387" loading="lazy" />
              <div>
                <strong>Talatona, Luanda</strong>
                <span>Sociedade comercial de direito angolano</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Serviços ---------- */}
      <section className="section section-tint" aria-labelledby="servicos-title">
        <div className="container">
          <SectionHeading
            eyebrow={servicesIntro.eyebrow}
            title="Os nossos serviços"
            intro={servicesIntro.text}
            id="servicos-title"
            split
          />
          <ServiceCards />
        </div>
      </section>

      {/* ---------- Como actuamos ---------- */}
      <section className="section section-dark" aria-labelledby="como-title">
        <HexMotif className="section-hex" />
        <div className="container">
          <SectionHeading
            eyebrow={processInfo.eyebrow}
            title={processInfo.title}
            intro={processInfo.intro}
            id="como-title"
            split
            light
          />
          <ProcessSteps dark />
          <Reveal className="section-footer-link">
            <Link to="/servicos#como-actuamos" className="link-arrow link-arrow-light">
              Ver como trabalhamos <Icon name="arrowRight" size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Sectores ---------- */}
      <section className="section" aria-labelledby="sectores-title">
        <div className="container">
          <SectionHeading eyebrow={sectors.eyebrow} title={sectors.title} intro={sectors.intro} id="sectores-title" split />
          <SectorCards />
          <Reveal className="section-footer-link">
            <Link to="/sectores" className="link-arrow">
              Sectores e capacidade de resposta <Icon name="arrowRight" size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Porquê a Samba Ocean ---------- */}
      <section className="section section-blue" aria-labelledby="porque-title">
        <HexMotif className="section-hex" />
        <div className="container why-layout">
          <div>
            <SectionHeading eyebrow={why.eyebrow} title={why.title} id="porque-title" light />
            <WhyGrid variant="blue" />
          </div>
          <Reveal className="why-photo" delay={150}>
            <Img image={images.colaborador} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
