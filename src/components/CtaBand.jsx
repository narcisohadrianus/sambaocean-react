import { Link } from 'react-router-dom';
import { contacts, cta, company } from '../data/site';
import Icon, { WhatsAppIcon } from './Icon';
import Reveal from './Reveal';
import { whatsappDefault } from './WhatsAppFloat';

/** Faixa final de chamada para acção: proposta formal em 24h. */
export default function CtaBand({ title = cta.title, text = cta.text }) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="cta-band-bg" aria-hidden="true">
        <img src="/img/armazem-carga.webp" alt="" width="1600" height="1200" loading="lazy" />
      </div>
      <div className="container cta-band-inner">
        <Reveal className="cta-band-copy">
          <p className="eyebrow eyebrow-light">
            <Icon name="clock" size={16} /> Resposta comercial rápida
          </p>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
          <p className="cta-band-tagline">{company.closingTagline}</p>
        </Reveal>
        <Reveal className="cta-band-actions" delay={120}>
          <Link to="/contactos#proposta" className="btn btn-primary btn-lg">
            Pedir proposta <Icon name="arrowRight" size={20} />
          </Link>
          <a className="btn btn-light btn-lg" href={contacts.phoneHref}>
            <Icon name="phone" size={20} /> {contacts.phone}
          </a>
          <a className="btn btn-whatsapp btn-lg" href={whatsappDefault} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={20} /> WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
