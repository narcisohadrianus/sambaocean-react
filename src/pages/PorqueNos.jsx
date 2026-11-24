import usePageMeta from '../hooks/usePageMeta';
import { meta, why, quality, images } from '../data/site';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import { Img, MainTitle, WhyGrid, QualityCards, QualityStatement, InsuranceNote } from '../components/Sections';

export default function PorqueNos() {
  usePageMeta(meta.porque);

  return (
    <>
      <PageBanner title="Porquê nós" image={images.transporteCamiao} position="center 40%" crumbs={[{ label: 'Porquê nós' }]} />

      <section className="section" aria-labelledby="porque-title">
        <div className="container">
          <MainTitle id="porque-title" title={why.title} intro={why.intro} />
          <WhyGrid detailed />
        </div>
      </section>

      <section className="grey-band band-pad" aria-labelledby="qualidade-title">
        <div className="container split split-media-left">
          <Reveal className="split-media">
            <Img image={images.equipaCamiao} position="center 35%" />
          </Reveal>
          <div className="split-copy">
            <MainTitle id="qualidade-title" title={quality.title} />
            <QualityStatement />
            <QualityCards />
          </div>
        </div>
      </section>

      <section className="section" aria-label="Protecção e responsabilidade operacional">
        <div className="container">
          <InsuranceNote />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
