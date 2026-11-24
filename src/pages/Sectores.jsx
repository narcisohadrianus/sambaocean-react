import usePageMeta from '../hooks/usePageMeta';
import { meta, sectors, capacity, images } from '../data/site';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import AngolaMap from '../components/AngolaMap';
import CtaBand from '../components/CtaBand';
import { DecorTruck } from '../components/Decor';
import { Img, MainTitle, SectorCards } from '../components/Sections';

export default function Sectores() {
  usePageMeta(meta.sectores);

  return (
    <>
      <PageBanner title="Sectores" image={images.armazemEstiva} position="center 30%" crumbs={[{ label: 'Sectores' }]} />

      <section className="section" aria-labelledby="sectores-title">
        <div className="container">
          <MainTitle id="sectores-title" title={sectors.title} intro={sectors.intro} />
          <SectorCards detailed />
        </div>
      </section>

      <section className="grey-band band-pad where is-grey" id="capacidade" aria-labelledby="capacidade-title">
        <DecorTruck className="decor-tr" />
        <div className="container where-grid">
          <div className="where-copy">
            <MainTitle id="capacidade-title" title={capacity.title} />
            <Reveal>
              {capacity.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </Reveal>
            <ul className="icon-list">
              {capacity.items.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 60}>
                  <Icon name={item.icon} size={28} strokeWidth={1.3} className="icon-list-icon" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal className="where-map" delay={100}>
            <AngolaMap />
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="cobertura-title">
        <div className="container split split-media-left">
          <Reveal className="split-media">
            <Img image={images.armazemCarga} />
          </Reveal>
          <div className="split-copy">
            <MainTitle id="cobertura-title" title="Cobertura nacional" />
            <Reveal>
              <p className="big-label">De Luanda para todas as províncias e vice‑versa</p>
              <p className="lead">{capacity.coverage}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
