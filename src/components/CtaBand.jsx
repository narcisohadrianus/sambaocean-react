import { Link } from 'react-router-dom';
import { contacts, cta, company } from '../data/site';
import { BtnArrow } from './Icon';
import { whatsappDefault } from './WhatsAppFloat';

/** Chamada final para acção: proposta formal em 24h (faixa azul sólida). */
export default function CtaBand({ title = cta.title, text = cta.text }) {
  return (
    <section className="cta-solid" aria-labelledby="cta-title">
      <div className="container cta-solid-inner">
        <div className="cta-solid-text">
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
          <p className="cta-solid-tagline">{company.closingTagline}</p>
        </div>
        <div className="cta-solid-actions">
          <div className="btn-row">
            <Link to="/contactos#proposta" className="main-btn">
              Pedir proposta
              <BtnArrow />
            </Link>
            <a href={whatsappDefault} className="main-btn cta-solid-outline" target="_blank" rel="noopener noreferrer">
              WhatsApp
              <BtnArrow />
              <span className="sr-only"> (abre numa nova janela)</span>
            </a>
          </div>
          <p className="cta-solid-phone">
            Ou ligue <a href={contacts.phoneHref}>{contacts.phone}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
