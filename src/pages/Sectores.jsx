import usePageMeta from '../hooks/usePageMeta';
import { meta, sectors, capacity, images } from '../data/site';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import HexMotif from '../components/HexMotif';
import Icon from '../components/Icon';
import AngolaMap from '../components/AngolaMap';
import CtaBand from '../components/CtaBand';
import { Img, SectorCards } from '../components/Sections';

export default function Sectores() {
  usePageMeta(meta.sectores);

  return (
    <>
      <PageHero
        eyebrow={sectors.eyebrow}
        title="Sectores"
        text={sectors.intro}
        image={images.armazemEstiva}
        crumbs={[{ label: 'Sectores' }]}
      />

      <section className="section" aria-labelledby="sectores-title">
        <div className="container">
          <SectionHeading
            eyebrow="Onde actuamos"
            title={sectors.title}
            intro="Portos e terminais, indústria e construção civil: transporte, estiva e equipamentos ao serviço de cada operação."
            id="sectores-title"
            split
          />
          <SectorCards detailed />
        </div>
      </section>

      <section className="section section-dark capacity" id="capacidade" aria-labelledby="capacidade-title">
        <HexMotif className="section-hex" />
        <div className="container capacity-grid">
          <div className="capacity-copy">
            <SectionHeading eyebrow={capacity.eyebrow} title={capacity.title} id="capacidade-title" light />
            <Reveal>
              {capacity.paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="capacity-text">
                  {p}
                </p>
              ))}
            </Reveal>
            <ul className="capacity-items">
              {capacity.items.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 80}>
                  <span className="capacity-icon">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal className="capacity-map" delay={120}>
            <AngolaMap />
          </Reveal>
        </div>

        <div className="container">
          <Reveal className="coverage-card">
            <div className="coverage-media">
              <Img image={images.armazemCarga} />
            </div>
            <div className="coverage-body">
              <p className="eyebrow eyebrow-light">
                <Icon name="globe" size={16} /> Cobertura nacional
              </p>
              <p className="coverage-text">{capacity.coverage}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
