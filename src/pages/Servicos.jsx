import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { meta, services, servicesIntro, process as processInfo, images } from '../data/site';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import CtaBand from '../components/CtaBand';
import { Img, ProcessSteps, InsuranceNote } from '../components/Sections';

export default function Servicos() {
  usePageMeta(meta.servicos);

  return (
    <>
      <PageHero
        eyebrow={servicesIntro.eyebrow}
        title="Serviços"
        text={servicesIntro.text}
        image={images.operacaoContentor}
        crumbs={[{ label: 'Serviços' }]}
      />

      {/* Índice rápido dos serviços */}
      <nav className="service-jump" aria-label="Serviços nesta página">
        <div className="container">
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/servicos#${s.id}`}>
                  <span className="service-jump-icon">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <span>
                    <small>{s.number}</small>
                    {s.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`section service-detail${idx % 2 === 1 ? ' section-tint is-reversed' : ''}`}
          aria-labelledby={`${s.id}-title`}
        >
          <div className="container service-detail-grid">
            <Reveal className="service-detail-media">
              <Img image={s.image} />
              <div className="service-highlight">
                <span className="service-highlight-icon">
                  <Icon name={s.icon} size={22} />
                </span>
                <div>
                  <small>{s.highlight.label}</small>
                  <strong>{s.highlight.text}</strong>
                </div>
              </div>
            </Reveal>
            <div className="service-detail-copy">
              <SectionHeading eyebrow={s.eyebrow} title={s.title} id={`${s.id}-title`} />
              <Reveal>
                <p className="lead">{s.intro}</p>
                <ul className="feature-list">
                  {s.items.map((item, i) => (
                    <li key={item.title}>
                      <span className="feature-icon">
                        {s.id === 'maquinas' ? (
                          <span className="feature-num">{String(i + 1).padStart(2, '0')}</span>
                        ) : (
                          <Icon name={item.icon} size={22} />
                        )}
                      </span>
                      <div>
                        <h3>{item.title}</h3>
                        {item.text && <p>{item.text}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
                <Link to="/contactos#proposta" className="btn btn-primary">
                  Pedir proposta para {s.title.toLowerCase()} <Icon name="arrowRight" size={18} />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* Como actuamos */}
      <section className="section section-dark" id="como-actuamos" aria-labelledby="como-title">
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
          <InsuranceNote />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
