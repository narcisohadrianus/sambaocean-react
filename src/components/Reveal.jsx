import { useEffect, useRef, useState } from 'react';

/* Observador partilhado por todos os elementos com animação de entrada. */
let observer;
const callbacks = new WeakMap();

function getObserver() {
  if (observer || typeof IntersectionObserver === 'undefined') return observer;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) cb();
          observer.unobserve(entry.target);
          callbacks.delete(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );
  return observer;
}

/**
 * Revela suavemente o conteúdo quando entra no ecrã.
 * Respeita "prefers-reduced-motion" (ver CSS .reveal).
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const obs = getObserver();
    if (!el || !obs) {
      setVisible(true);
      return undefined;
    }
    callbacks.set(el, () => setVisible(true));
    obs.observe(el);
    return () => {
      obs.unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
