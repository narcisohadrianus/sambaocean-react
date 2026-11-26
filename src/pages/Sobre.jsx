import usePageMeta from '../hooks/usePageMeta';
import { meta, company, about, mission, values, quality, officialData, images } from '../data/site';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import CtaBand from '../components/CtaBand';
import { Img, MainTitle, ValuesGrid, QualityCards, QualityStatement, Highlight } from '../components/Sections';

export default function Sobre() {
  usePageMeta(meta.sobre);

  return (
    <>
      <PageBanner title="Quem somos" image={images.equipaPorto} position="center 22%" crumbs={[{ label: 'Quem somos' }]} />

      {/* Quem somos */}
      <section className="section" aria-labelledby="quem-somos-title">
        <div className="container split">
          <div className="split-copy">
            <MainTitle id="quem-somos-title" title={company.name} />
            <Reveal>
              <p className="lead">{about.text}</p>
              <ul className="inline-tags">
                {company.pills.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <blockquote className="statement">
                <p>
                  <Highlight text={about.quote} phrases={about.quoteHighlights} />
                </p>
              </blockquote>
            </Reveal>
          </div>
          <Reveal className="split-media" delay={100}>
            <Img image={images.equipaArmazem} />
          </Reveal>
        </div>
      </section>

      {/* Missão e visão */}
      <section className="grey-band band-pad" aria-labelledby="missao-title">
        <div className="container">
          <MainTitle id="missao-title" title={mission.title} />
          <div className="two-cols">
            <Reveal as="article" className="text-card is-accent">
              <h3>
                <Icon name="target" size={24} strokeWidth={1.4} /> Missão
              </h3>
              <p>{mission.mission}</p>
            </Reveal>
            <Reveal as="article" className="text-card" delay={100}>
              <h3>
                <Icon name="compass" size={24} strokeWidth={1.4} /> Visão
              </h3>
              <p>{mission.vision}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section" aria-labelledby="valores-title">
        <div className="container">
          <MainTitle id="valores-title" title={values.title} intro={values.intro} />
          <ValuesGrid />
        </div>
      </section>

      {/* Qualidade e execução */}
      <section className="grey-band band-pad" aria-labelledby="qualidade-title">
        <div className="container split split-media-left">
          <Reveal className="split-media">
            <Img image={images.responsavelCamiao} position="center 30%" />
          </Reveal>
          <div className="split-copy">
            <MainTitle id="qualidade-title" title={quality.title} />
            <QualityStatement />
            <QualityCards />
          </div>
        </div>
      </section>

      {/* Dados oficiais */}
      <section className="section" aria-labelledby="dados-title">
        <div className="container">
          <MainTitle
            id="dados-title"
            title="Dados oficiais"
            intro={`${company.legalName} — sociedade comercial de direito angolano, sediada em Talatona, Luanda.`}
          />
          <Reveal>
            <dl className="data-table">
              {officialData.map((d) => (
                <div key={d.label}>
                  <dt>{d.label}</dt>
                  <dd>{d.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
