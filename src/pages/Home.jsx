import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { meta, company, contacts, capacity, process as processInfo, why, values, images } from '../data/site';
import Icon, { BtnArrow } from '../components/Icon';
import Reveal from '../components/Reveal';
import HeroCarousel from '../components/HeroCarousel';
import ServiceSlider from '../components/ServiceSlider';
import FeatureBand from '../components/FeatureBand';
import AngolaMap from '../components/AngolaMap';
import { DecorTruck, DecorCrane } from '../components/Decor';
import { MainTitle, WhyGrid, ValuesGrid } from '../components/Sections';

export default function Home() {
  usePageMeta(meta.home);

  return (
    <>
      <h1 className="sr-only">
        {company.name} — {company.tagline}
      </h1>

      {/* ---------- Carrossel ---------- */}
      <HeroCarousel />

      {/* ---------- Os nossos serviços ---------- */}
      <section className="section services-home" aria-labelledby="servicos-title">
        <div className="container">
          <MainTitle id="servicos-title" title="Os nossos serviços" />
        </div>
        <ServiceSlider titleId="servicos-title" />
      </section>

      {/* ---------- Como actuamos (fotografia + cartão) ---------- */}
      <FeatureBand
        id="como-actuamos-home"
        image={images.hero}
        position="center 40%"
        align="right"
        titleId="como-title"
        title={processInfo.title}
      >
        <p>{processInfo.intro}</p>
        <p className="feature-strong">
          <Icon name="fileClock" size={22} strokeWidth={1.5} /> Proposta comercial formal em 24h
        </p>
        <Link to="/servicos#como-actuamos" className="main-btn-reverse">
          Saiba mais
          <BtnArrow />
        </Link>
      </FeatureBand>

      {/* ---------- Onde estamos / cobertura nacional ---------- */}
      <section className="section where" aria-labelledby="onde-title">
        <DecorTruck className="decor-bl" />
        <DecorCrane className="decor-tr" />
        <div className="container where-grid">
          <div className="where-copy">
            <MainTitle id="onde-title" title="Onde estamos" />
            <Reveal>
              <p className="big-sub">Cobertura nacional</p>
              <p className="big-label">De Luanda para todas as províncias e vice‑versa</p>
              <p>{capacity.paragraphs[0]}</p>
              <div className="address-block">
                <Icon name="pin" size={22} strokeWidth={1.5} />
                <div>
                  <h3>Sede</h3>
                  <address>
                    {contacts.addressLines.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </address>
                </div>
              </div>
              <Link to="/sectores" className="main-btn">
                Rede e sectores
                <BtnArrow />
              </Link>
            </Reveal>
          </div>
          <Reveal className="where-map" delay={100}>
            <AngolaMap />
          </Reveal>
        </div>
      </section>

      {/* ---------- Porquê a Samba Ocean + valores ---------- */}
      <section className="grey-band band-pad" aria-labelledby="porque-title">
        <div className="container">
          <MainTitle id="porque-title" title={why.title} intro={why.intro} />
          <WhyGrid />
          <div className="values-head">
            <h2 className="sub-title" id="valores-title">
              {values.title}
            </h2>
          </div>
          <ValuesGrid />
          <div className="center-row">
            <Link to="/porque-nos" className="main-btn-reverse">
              Porquê nós
              <BtnArrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
