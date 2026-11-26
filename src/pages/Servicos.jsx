import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { meta, services, servicesIntro, process as processInfo, images } from '../data/site';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import Icon, { BtnArrow } from '../components/Icon';
import CtaBand from '../components/CtaBand';
import { Img, MainTitle, ProcessSteps, InsuranceNote, ServiceJump } from '../components/Sections';

export default function Servicos() {
  usePageMeta(meta.servicos);

  return (
    <>
      <PageBanner title="Serviços" image={images.operacaoContentor} position="center 40%" crumbs={[{ label: 'Serviços' }]} />

      <section className="section section-tight" aria-labelledby="areas-title">
        <div className="container">
          <MainTitle id="areas-title" title={servicesIntro.title} intro={servicesIntro.text} />
          <ServiceJump />
        </div>
      </section>

      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={idx % 2 === 1 ? 'grey-band band-pad service-block' : 'section service-block'}
          aria-labelledby={`${s.id}-title`}
        >
          <div className={`container split${idx % 2 === 1 ? ' split-media-left' : ''}`}>
            <div className="split-copy">
              <p className="kicker">
                <Icon name={s.icon} size={18} strokeWidth={1.5} /> {s.number} · {s.highlight.label}
              </p>
              <MainTitle id={`${s.id}-title`} title={s.title} />
              <Reveal>
                <p className="lead">{s.intro}</p>
                <ul className="feature-list">
                  {s.items.map((item) => (
                    <li key={item.title}>
                      <Icon name={item.icon} size={26} strokeWidth={1.3} className="feature-icon" />
                      <div>
                        <h3>{item.title}</h3>
                        {item.text && <p>{item.text}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
                <Link to="/contactos#proposta" className="main-btn-reverse is-wide">
                  Pedir proposta
                  <BtnArrow />
                </Link>
              </Reveal>
            </div>
            <Reveal className="split-media" delay={100}>
              <Img image={s.image} />
              <p className="media-caption">{s.highlight.text}</p>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Como actuamos */}
      <section className="grey-band band-pad" id="como-actuamos" aria-labelledby="como-title">
        <div className="container">
          <MainTitle id="como-title" title={processInfo.title} intro={processInfo.intro} />
          <ProcessSteps />
          <InsuranceNote />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
