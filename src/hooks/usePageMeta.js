import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { company } from '../data/site';

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const [, key, name] = selector.match(/\[(name|property)="([^"]+)"\]/) || [];
    if (key) el.setAttribute(key, name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/** Define o título, a descrição e o URL canónico de cada página. */
export default function usePageMeta({ title, description }) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    const url = company.siteUrl + (pathname === '/' ? '/' : pathname);
    setMeta('meta[property="og:url"]', 'content', url);
    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', url);
  }, [title, description, pathname]);
}
