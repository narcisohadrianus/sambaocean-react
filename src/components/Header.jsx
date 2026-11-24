import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav, contacts } from '../data/site';
import Icon from './Icon';

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  /* Fundo sólido depois de algum scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Fecha o menu ao mudar de página */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus && toggleRef.current) toggleRef.current.focus();
  }, []);

  /* Menu móvel: Esc, foco preso no painel e bloqueio do scroll */
  useEffect(() => {
    if (!open) return undefined;
    const panel = panelRef.current;
    const focusables = () =>
      panel ? Array.from(panel.querySelectorAll('a[href], button:not([disabled])')) : [];
    const first = focusables()[0];
    if (first) first.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close(true);
        return;
      }
      if (e.key === 'Tab') {
        const items = [toggleRef.current, ...focusables()].filter(Boolean);
        const idx = items.indexOf(document.activeElement);
        if (e.shiftKey && idx <= 0) {
          e.preventDefault();
          items[items.length - 1].focus();
        } else if (!e.shiftKey && idx === items.length - 1) {
          e.preventDefault();
          items[0].focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth > 1080) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    document.body.classList.add('menu-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.classList.remove('menu-open');
    };
  }, [open, close]);

  const transparent = isHome && !scrolled && !open;

  return (
    <header className={`site-header${transparent ? ' is-transparent' : ' is-solid'}${open ? ' is-open' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="header-logo" aria-label="SAMBA OCEAN — página inicial">
          <img
            className="logo-color"
            src="/img/logo.png"
            alt="SAMBA OCEAN"
            width="600"
            height="220"
          />
          <img
            className="logo-white"
            src="/img/logo-branco.png"
            alt=""
            aria-hidden="true"
            width="600"
            height="220"
          />
        </Link>

        <nav className="main-nav" aria-label="Menu principal">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={contacts.phoneHref} aria-label={`Ligar para ${contacts.phone}`}>
            <Icon name="phone" size={18} />
            <span>{contacts.phone}</span>
          </a>
          <Link to="/contactos#proposta" className="btn btn-primary btn-sm header-cta">
            Pedir proposta
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={26} strokeWidth={2} />
          </button>
        </div>
      </div>

      <div
        id="menu-movel"
        ref={panelRef}
        className="mobile-panel"
        hidden={!open}
      >
        <nav aria-label="Menu móvel">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} onClick={() => close(false)}>
                  {item.label}
                  <Icon name="arrowRight" size={18} />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-panel-footer">
          <Link to="/contactos#proposta" className="btn btn-primary btn-block" onClick={() => close(false)}>
            Pedir proposta
          </Link>
          <a className="btn btn-outline btn-block" href={contacts.phoneHref}>
            <Icon name="phone" size={18} /> {contacts.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
