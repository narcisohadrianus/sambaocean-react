import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Volta ao topo ao mudar de página e faz scroll suave até às âncoras (#id). */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      let tries = 0;
      let timer;
      const go = () => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (el) {
          el.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
          if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
          el.focus({ preventScroll: true });
        } else if (tries++ < 10) {
          timer = setTimeout(go, 60);
        }
      };
      timer = setTimeout(go, 30);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return undefined;
  }, [pathname, hash]);

  return null;
}
