import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav, contacts } from '../data/site';
import Icon from './Icon';

/**
 * Cabeçalho fixo (fundo azul da marca): logótipo à esquerda, linha de utilidades
 * (telefone, e-mail, pedir proposta) em cima à direita e, por baixo, o menu
 * principal centrado na largura do cabeçalho.
 * Abaixo de 980px o menu passa a um painel que abre com o botão "hambúrguer".
 */
export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const barRef = useRef(null);
  const toggleRef = useRef(null);

  /* Sombra depois de algum scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Altura real da barra -> variável CSS --header-h (usada pelo carrossel e pelos banners) */
  useEffect(() => {
    const el = barRef.current;
    if (!el) return undefined;
    const set = () => {
      const h = Math.round(el.getBoundingClientRect().height);
      if (h) document.documentElement.style.setProperty('--header-h', `${h}px`);
    };
    set();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', set);
      return () => window.removeEventListener('resize', set);
    }
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* Fecha o menu ao mudar de página */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus && toggleRef.current) toggleRef.current.focus();
  }, []);

  /* Menu móvel: Esc fecha; fecha também se a janela crescer */
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close(true);
      }
    };
    const onResize = () => {
      if (window.innerWidth > 980) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open, close]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="header-bar" ref={barRef}>
        <div className="container header-inner">
          <Link to="/" className="header-logo" aria-label="SAMBA OCEAN — página inicial">
            <img src="/img/logo-branco.png" alt="SAMBA OCEAN" width="600" height="220" />
          </Link>

          <ul className="header-utility" aria-label="Contactos rápidos">
            <li>
              <a href={contacts.phoneHref}>
                <Icon name="phone" size={13} strokeWidth={1.6} />
                {contacts.phone}
              </a>
            </li>
            <li>
              <a href={contacts.emailHref}>
                <Icon name="mail" size={13} strokeWidth={1.6} />
                {contacts.email}
              </a>
            </li>
            <li>
              <Link to="/contactos#proposta" className="utility-cta">
                Pedir proposta
              </Link>
            </li>
          </ul>

          <nav className="main-nav" aria-label="Menu principal">
            <ul>
              {nav.map((item) => (
                <li key={item.to} className={item.children ? 'has-dropdown' : undefined}>
                  <NavLink to={item.to} end={item.to === '/'}>
                    {item.label}
                    {item.children && <Icon name="chevronDown" size={12} strokeWidth={2} className="nav-caret" />}
                  </NavLink>
                  {item.children && (
                    <ul className="dropdown">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link to={c.to}>{c.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={26} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div id="menu-movel" className="mobile-panel" hidden={!open}>
        <nav aria-label="Menu móvel" className="container">
          <ul className="mobile-main">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} onClick={() => close(false)}>
                  {item.label}
                </NavLink>
                {item.children && (
                  <ul className="mobile-sub">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <Link to={c.to} onClick={() => close(false)}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <ul className="mobile-utility">
            <li>
              <a href={contacts.phoneHref}>
                <Icon name="phone" size={16} /> {contacts.phone}
              </a>
            </li>
            <li>
              <a href={contacts.emailHref}>
                <Icon name="mail" size={16} /> {contacts.email}
              </a>
            </li>
            <li>
              <Link to="/contactos#proposta" onClick={() => close(false)}>
                Pedir proposta
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
