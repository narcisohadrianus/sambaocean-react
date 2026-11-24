import Reveal from './Reveal';

/**
 * Secção de largura total com fotografia de fundo e um cartão branco
 * semi-transparente (quadrado) com título, texto e botão.
 */
export default function FeatureBand({ id, image, position = 'center', titleId, title, children, align = 'left' }) {
  return (
    <section className={`feature-band is-${align}`} id={id} aria-labelledby={titleId}>
      <img
        className="feature-band-img"
        src={image.src}
        alt=""
        width={image.w}
        height={image.h}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: position }}
      />
      <div className="container feature-band-inner">
        <Reveal className="feature-card">
          <h2 className="main-title" id={titleId}>
            {title}
          </h2>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
