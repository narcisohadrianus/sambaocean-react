import { Link } from 'react-router-dom';
import { contacts, cta, company, images } from '../data/site';
import { BtnArrow } from './Icon';
import FeatureBand from './FeatureBand';
import { whatsappDefault } from './WhatsAppFloat';

/** Chamada final para acção: proposta formal em 24h (fotografia + cartão). */
export default function CtaBand({ title = cta.title, text = cta.text, image = images.equipaArmazem, position = 'center 40%' }) {
  return (
    <FeatureBand image={image} position={position} titleId="cta-title" title={title} align="right">
      <p>{text}</p>
      <p className="feature-strong">{company.closingTagline}</p>
      <div className="btn-row">
        <Link to="/contactos#proposta" className="main-btn-reverse">
          Pedir proposta
          <BtnArrow />
        </Link>
        <a href={whatsappDefault} className="main-btn" target="_blank" rel="noopener noreferrer">
          WhatsApp
          <BtnArrow />
          <span className="sr-only"> (abre numa nova janela)</span>
        </a>
      </div>
      <p className="feature-small">
        Ou ligue <a href={contacts.phoneHref}>{contacts.phone}</a>
      </p>
    </FeatureBand>
  );
}
