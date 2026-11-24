import usePageMeta from '../hooks/usePageMeta';
import { meta, why, quality, process as processInfo, images } from '../data/site';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import { Img, WhyGrid, QualityCards, QualityStatement, InsuranceNote } from '../components/Sections';

export default function PorqueNos() {
  usePageMeta(meta.porque);

  return (
    <>
      <PageHero
        eyebrow={why.eyebrow}
        title="Porquê Nós"
        text={processInfo.intro}
        image={images.transporteCamiao}
        position="center 60%"
        crumbs={[{ label: 'Porquê Nós' }]}
      />

      <section className="section" aria-labelledby="porque-title">
        <div className="container">
          <SectionHeading eyebrow="Seis diferenciais" title={why.title} intro={why.intro} id="porque-title" split />
          <WhyGrid detailed />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="qualidade-title">
        <div className="container quality-layout">
          <Reveal className="quality-photo">
            <Img image={images.equipaCamiao} />
          </Reveal>
          <div>
            <SectionHeading eyebrow={quality.eyebrow} title={quality.title} id="qualidade-title" />
            <QualityStatement />
            <QualityCards />
          </div>
        </div>
      </section>

      <section className="section section-compact" aria-label="Protecção e responsabilidade operacional">
        <div className="container">
          <InsuranceNote />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
