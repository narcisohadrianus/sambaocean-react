import usePageMeta from '../hooks/usePageMeta';
import { meta, company, about, mission, values, quality, officialData, images } from '../data/site';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import HexMotif from '../components/HexMotif';
import Icon from '../components/Icon';
import CtaBand from '../components/CtaBand';
import { Img, ValuesGrid, QualityCards, QualityStatement, Highlight } from '../components/Sections';

export default function Sobre() {
  usePageMeta(meta.sobre);

  return (
    <>
      <PageHero
        eyebrow="SAMBA OCEAN · Prestação de Serviços, Lda"
        title="Sobre Nós"
        text="Não somos apenas transportadores. Somos parceiros operacionais que actuam na resolução de desafios logísticos críticos."
        image={images.equipaCamiao}
        position="center 30%"
        crumbs={[{ label: 'Sobre Nós' }]}
      />

      {/* Quem somos */}
      <section className="section" aria-labelledby="quem-somos-title">
        <div className="container split split-media-left">
          <Reveal className="split-media media-stack">
            <Img image={images.equipaArmazem} className="media-main" />
          </Reveal>
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* Missão e visão */}
      <section className="section section-dark" aria-labelledby="missao-title">
        <HexMotif className="section-hex" />
        <div className="container mission-layout">
          <Reveal className="mission-photo">
            <Img image={images.supervisao} />
          </Reveal>
          <div>
            <SectionHeading eyebrow={mission.eyebrow} title={mission.title} id="missao-title" light />
            <div className="mission-cards">
              <Reveal as="article" className="mission-card is-accent">
                <h3>
                  <span className="mission-icon">
                    <Icon name="target" size={20} />
                  </span>
                  Missão
                </h3>
                <p>{mission.mission}</p>
              </Reveal>
              <Reveal as="article" className="mission-card" delay={120}>
                <h3>
                  <span className="mission-icon">
                    <Icon name="compass" size={20} />
                  </span>
                  Visão
                </h3>
                <p>{mission.vision}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section" aria-labelledby="valores-title">
        <div className="container">
          <SectionHeading eyebrow={values.eyebrow} title={values.title} intro={values.intro} id="valores-title" split />
          <ValuesGrid />
        </div>
      </section>

      {/* Qualidade e execução */}
      <section className="section section-tint" aria-labelledby="qualidade-title">
        <div className="container quality-layout">
          <Reveal className="quality-photo">
            <Img image={images.responsavelCamiao} />
          </Reveal>
          <div>
            <SectionHeading eyebrow={quality.eyebrow} title={quality.title} id="qualidade-title" />
            <QualityStatement />
            <QualityCards />
          </div>
        </div>
      </section>

      {/* Dados oficiais */}
      <section className="section" aria-labelledby="dados-title">
        <div className="container official-layout">
          <div>
            <SectionHeading
              eyebrow="Identificação"
              title="Dados oficiais"
              intro={`${company.legalName} — sociedade comercial de direito angolano, sediada em Talatona, Luanda.`}
              id="dados-title"
            />
          </div>
          <Reveal className="official-card">
            <img className="official-symbol" src="/img/simbolo-branco.png" alt="" aria-hidden="true" width="320" height="387" loading="lazy" />
            <p className="official-label">Dados oficiais</p>
            <dl>
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
