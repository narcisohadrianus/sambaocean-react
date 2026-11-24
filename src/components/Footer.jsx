import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { company, contacts, footerNav, officialData } from '../data/site';
import Icon, { WhatsAppIcon } from './Icon';

const nif = officialData.find((d) => d.label === 'NIF')?.value;
const matricula = officialData.find((d) => d.label === 'Matrícula')?.value;

const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Botão quadrado "voltar ao topo" (aparece depois de algum scroll). */
function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      type="button"
      className={`scroll-top${show ? ' is-visible' : ''}`}
      aria-label="Voltar ao topo da página"
      tabIndex={show ? 0 : -1}
      aria-hidden={show ? undefined : 'true'}
      onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' })}
    >
      <Icon name="chevronUp" size={22} strokeWidth={2} />
    </button>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        {/* Faixa azul-clara com ícones de contacto (a SAMBA OCEAN não tem redes sociais) */}
        <div className="footer-strip">
          <ul className="container" aria-label="Contactos directos">
            <li>
              <a href={contacts.phoneHref} aria-label={`Telefone ${contacts.phone}`}>
                <Icon name="phone" size={20} strokeWidth={1.6} />
              </a>
            </li>
            <li>
              <a href={contacts.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (abre numa nova janela)">
                <WhatsAppIcon size={20} />
              </a>
            </li>
            <li>
              <a href={contacts.emailHref} aria-label={`E-mail ${contacts.email}`}>
                <Icon name="mail" size={20} strokeWidth={1.6} />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-main">
          <div className="container">
            <Link to="/" className="footer-logo" aria-label="SAMBA OCEAN — página inicial">
              <img src="/img/logo-branco.png" alt="SAMBA OCEAN" width="600" height="220" loading="lazy" />
            </Link>

            <nav aria-label="Menu do rodapé">
              <ul className="footer-nav">
                {footerNav.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <hr />

            <ul className="footer-info">
              <li>
                <span className="footer-label">Telefone / WhatsApp</span>
                <a href={contacts.phoneHref}>{contacts.phone}</a>
              </li>
              <li>
                <span className="footer-label">E-mail</span>
                <a href={contacts.emailHref}>{contacts.email}</a>
              </li>
              <li>
                <span className="footer-label">Sede</span>
                <address>{contacts.address}</address>
              </li>
              <li>
                <span className="footer-label">Matrícula</span>
                <span>{matricula}</span>
              </li>
            </ul>

            <div className="footer-bottom">
              <p>
                © {company.year} {company.footerName}
              </p>
              <p>NIF {nif}</p>
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop />
    </>
  );
}
