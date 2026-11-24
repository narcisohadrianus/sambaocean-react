import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { contacts, footer } from '../data/site';
import Icon, { WhatsAppIcon } from './Icon';

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

/** Ícone de um botão redondo / de um contacto */
function FooterIcon({ name, size }) {
  return name === 'whatsapp' ? <WhatsAppIcon size={size} /> : <Icon name={name} size={size} strokeWidth={1.6} />;
}

/**
 * Rodapé em 4 colunas (ao estilo do site HONESUS): marca + descrição + botões
 * redondos de contacto, Empresa, Serviços e Contactos; por baixo, uma barra com
 * os direitos reservados e os dados oficiais (NIF e matrícula).
 */
export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo" aria-label="SAMBA OCEAN — página inicial">
                <img src="/img/logo-branco.png" alt="SAMBA OCEAN" width="600" height="220" loading="lazy" />
              </Link>
              <p className="footer-desc">{footer.description}</p>
              <ul className="footer-social" aria-label="Contactos directos">
                {footer.quickLinks.map((q) => (
                  <li key={q.icon}>
                    <a
                      href={q.href}
                      aria-label={q.label}
                      {...(q.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <FooterIcon name={q.icon} size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {footer.columns.map((col, i) => (
              <nav className="footer-col" key={col.title} aria-labelledby={`rodape-col-${i}`}>
                <h2 className="footer-heading" id={`rodape-col-${i}`}>
                  {col.title}
                </h2>
                <ul className="footer-links">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="footer-col">
              <h2 className="footer-heading">{footer.contactsTitle}</h2>
              <ul className="footer-contacts">
                <li>
                  <Icon name="pin" size={18} strokeWidth={1.6} className="footer-contact-icon" />
                  <address>
                    {footer.addressLines.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </address>
                </li>
                <li>
                  <Icon name="phone" size={18} strokeWidth={1.6} className="footer-contact-icon" />
                  <a href={contacts.phoneHref}>{contacts.phone}</a>
                </li>
                <li>
                  <Icon name="mail" size={18} strokeWidth={1.6} className="footer-contact-icon" />
                  <a href={contacts.emailHref}>{contacts.email}</a>
                </li>
                <li>
                  <WhatsAppIcon size={18} className="footer-contact-icon" />
                  <a href={contacts.whatsapp} target="_blank" rel="noopener noreferrer">
                    WhatsApp<span className="sr-only"> (abre numa nova janela)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <div className="container footer-container footer-bar-inner">
            <p>{footer.copyright}</p>
            <ul className="footer-legal">
              {footer.legal.map((d) => (
                <li key={d.label}>
                  {d.label} {d.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <ScrollTop />
    </>
  );
}
