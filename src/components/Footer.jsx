import { Link } from 'react-router-dom';
import { company, contacts, nav, services, officialData } from '../data/site';
import Icon, { WhatsAppIcon } from './Icon';

export default function Footer() {
  return (
    <footer className="site-footer">
      <img className="footer-symbol" src="/img/simbolo-branco.png" alt="" aria-hidden="true" width="320" height="387" loading="lazy" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" aria-label="SAMBA OCEAN — página inicial">
            <img src="/img/logo-branco.png" alt="SAMBA OCEAN" width="600" height="220" loading="lazy" />
          </Link>
          <p>{company.shortDescription}</p>
          <p className="footer-tagline">{company.tagline}</p>
        </div>

        <nav className="footer-col" aria-label="Menu do rodapé">
          <h2 className="footer-title">Menu</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h2 className="footer-title">Serviços</h2>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/servicos#${s.id}`}>{s.title}</Link>
              </li>
            ))}
            <li>
              <Link to="/servicos#como-actuamos">Como Actuamos</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-title">Contactos</h2>
          <ul className="footer-contacts">
            <li>
              <Icon name="phone" size={18} />
              <a href={contacts.phoneHref}>{contacts.phone}</a>
            </li>
            <li>
              <WhatsAppIcon size={18} />
              <a href={contacts.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={contacts.emailHref}>{contacts.email}</a>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <span>{contacts.address}</span>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-official">
          <h2 className="footer-title">Dados oficiais</h2>
          <dl>
            {officialData.map((d) => (
              <div key={d.label}>
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {company.year} {company.footerName}
        </p>
        <p>{company.location}</p>
      </div>
    </footer>
  );
}
