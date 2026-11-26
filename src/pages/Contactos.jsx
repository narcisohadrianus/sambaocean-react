import { useRef, useState } from 'react';
import usePageMeta from '../hooks/usePageMeta';
import { meta, contacts, formServices, provinces, images } from '../data/site';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import Icon, { WhatsAppIcon, BtnArrow } from '../components/Icon';
import { MainTitle } from '../components/Sections';

const initial = {
  nome: '',
  empresa: '',
  telefone: '',
  email: '',
  servico: '',
  origem: '',
  destino: '',
  mensagem: '',
};

const labels = {
  nome: 'Nome',
  empresa: 'Empresa',
  telefone: 'Telefone',
  email: 'E-mail',
  servico: 'Serviço',
  origem: 'Província de origem',
  destino: 'Província de destino',
  mensagem: 'Mensagem',
};

function validate(v) {
  const e = {};
  if (v.nome.trim().length < 2) e.nome = 'Indique o seu nome.';
  const phoneDigits = v.telefone.replace(/\D/g, '');
  if (!v.telefone.trim() && !v.email.trim()) {
    e.telefone = 'Indique um telefone ou um e-mail para o contactarmos.';
  }
  if (v.telefone.trim() && (phoneDigits.length < 9 || phoneDigits.length > 15 || /[^\d\s+()-]/.test(v.telefone))) {
    e.telefone = 'Número de telefone inválido (ex.: +244 9XX XXX XXX).';
  }
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) {
    e.email = 'Endereço de e-mail inválido.';
  }
  if (!v.servico) e.servico = 'Escolha o serviço pretendido.';
  if (v.mensagem.trim().length < 10) e.mensagem = 'Descreva brevemente a sua necessidade (mínimo 10 caracteres).';
  return e;
}

function buildMessage(v) {
  const lines = [
    'Pedido de proposta — SAMBA OCEAN',
    '',
    `Nome: ${v.nome.trim()}`,
    v.empresa.trim() ? `Empresa: ${v.empresa.trim()}` : null,
    v.telefone.trim() ? `Telefone: ${v.telefone.trim()}` : null,
    v.email.trim() ? `E-mail: ${v.email.trim()}` : null,
    `Serviço: ${v.servico}`,
    v.origem.trim() ? `Província de origem: ${v.origem.trim()}` : null,
    v.destino.trim() ? `Província de destino: ${v.destino.trim()}` : null,
    '',
    'Mensagem:',
    v.mensagem.trim(),
  ];
  return lines.filter((l) => l !== null).join('\n');
}

export default function Contactos() {
  usePageMeta(meta.contactos);
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);
  const summaryRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const channel = e.nativeEvent.submitter?.value || 'email';
    const found = validate(values);
    setErrors(found);
    const keys = Object.keys(found);
    if (keys.length) {
      setStatus('');
      const first = formRef.current?.querySelector(`[name="${keys[0]}"]`);
      if (first) first.focus();
      return;
    }
    const text = buildMessage(values);
    if (channel === 'whatsapp') {
      const url = `${contacts.whatsapp}?text=${encodeURIComponent(text)}`;
      const win = window.open(url, '_blank');
      if (win) win.opener = null;
      else window.location.href = url;
      setStatus('A abrir o WhatsApp com a sua mensagem pré-preenchida. Basta carregar em enviar.');
    } else {
      const subject = `Pedido de proposta — ${values.servico}${values.empresa.trim() ? ` · ${values.empresa.trim()}` : ''}`;
      setSending(true);
      setStatus('A enviar o seu pedido…');
      fetch('/enviar.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, subject, website: formRef.current?.website?.value || '' }),
      })
        .then((r) => r.json().catch(() => ({})).then((d) => ({ ok: r.ok && d.ok })))
        .then(({ ok }) => {
          if (!ok) throw new Error('falhou');
          setValues(initial);
          setStatus(`Obrigado! O seu pedido foi enviado para ${contacts.email}. Responderemos com uma proposta formal em 24h.`);
        })
        .catch(() => {
          setStatus(`Não foi possível enviar agora. Tente novamente ou escreva directamente para ${contacts.email}.`);
        })
        .finally(() => {
          setSending(false);
          if (summaryRef.current) summaryRef.current.focus();
        });
      return;
    }
    if (summaryRef.current) summaryRef.current.focus();
  };

  const field = (name) => ({
    id: `f-${name}`,
    name,
    value: values[name],
    onChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `f-${name}-erro` : undefined,
  });

  const fieldError = (name) =>
    errors[name] ? (
      <p className="field-error" id={`f-${name}-erro`}>
        {errors[name]}
      </p>
    ) : null;

  const errorCount = Object.values(errors).filter(Boolean).length;

  const contactCards = [
    { icon: <Icon name="phone" size={24} />, label: 'Telefone', value: contacts.phone, href: contacts.phoneHref },
    {
      icon: <WhatsAppIcon size={24} />,
      label: 'WhatsApp',
      value: contacts.phone,
      href: contacts.whatsapp,
      external: true,
    },
    { icon: <Icon name="mail" size={24} />, label: 'E-mail', value: contacts.email, href: contacts.emailHref },
    { icon: <Icon name="pin" size={24} />, label: 'Morada', value: contacts.address },
  ];

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contacts.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <PageBanner title="Contactos" image={images.hero} position="center 55%" crumbs={[{ label: 'Contactos' }]} />

      <section className="section" aria-labelledby="fale-title">
        <div className="container">
          <MainTitle
            id="fale-title"
            title="Estamos em Talatona, Luanda"
            intro="Ligue, escreva ou envie uma mensagem pelo WhatsApp. Respondemos com uma proposta comercial formal em 24h."
          />
          <ul className="contact-tiles">
            {contactCards.map((c, i) => (
              <Reveal as="li" key={c.label} delay={i * 60} className="contact-tile">
                <span className="contact-icon">{c.icon}</span>
                <h3>{c.label}</h3>
                {c.href ? (
                  <a href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {c.value}
                    {c.external && <span className="sr-only"> (abre numa nova janela)</span>}
                  </a>
                ) : (
                  <address>{c.value}</address>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="grey-band band-pad" id="proposta" aria-labelledby="proposta-title">
        <div className="container contact-layout">
          <div className="form-wrap">
            <MainTitle
              id="proposta-title"
              title="Pedido de proposta"
              intro="Preencha os dados e escolha como prefere enviar: por e-mail ou por WhatsApp. A mensagem abre já pré-preenchida."
            />
            <form ref={formRef} className="quote-form" noValidate onSubmit={onSubmit}>
              <div
                ref={summaryRef}
                tabIndex={-1}
                className={`form-status${errorCount ? ' is-error' : status ? ' is-ok' : ''}`}
                role="status"
                aria-live="polite"
              >
                {errorCount > 0
                  ? `Verifique ${errorCount === 1 ? 'o campo assinalado' : `os ${errorCount} campos assinalados`}.`
                  : status}
              </div>

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="f-nome">
                    {labels.nome} <span aria-hidden="true">*</span>
                  </label>
                  <input type="text" autoComplete="name" required {...field('nome')} />
                  {fieldError('nome')}
                </div>
                <div className="field">
                  <label htmlFor="f-empresa">{labels.empresa}</label>
                  <input type="text" autoComplete="organization" {...field('empresa')} />
                </div>
                <div className="field">
                  <label htmlFor="f-telefone">{labels.telefone}</label>
                  <input type="tel" autoComplete="tel" inputMode="tel" placeholder="+244" {...field('telefone')} />
                  {fieldError('telefone')}
                </div>
                <div className="field">
                  <label htmlFor="f-email">{labels.email}</label>
                  <input type="email" autoComplete="email" inputMode="email" {...field('email')} />
                  {fieldError('email')}
                </div>
                <div className="field field-full">
                  <label htmlFor="f-servico">
                    {labels.servico} <span aria-hidden="true">*</span>
                  </label>
                  <select required {...field('servico')}>
                    <option value="">Seleccione o serviço…</option>
                    {formServices.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {fieldError('servico')}
                </div>
                <div className="field">
                  <label htmlFor="f-origem">{labels.origem}</label>
                  <input type="text" list="lista-provincias" autoComplete="off" placeholder="Ex.: Luanda" {...field('origem')} />
                </div>
                <div className="field">
                  <label htmlFor="f-destino">{labels.destino}</label>
                  <input type="text" list="lista-provincias" autoComplete="off" placeholder="Ex.: Huíla" {...field('destino')} />
                </div>
                <datalist id="lista-provincias">
                  {provinces.map((p) => (
                    <option key={p} value={p} />
                  ))}
                </datalist>
                <div className="field field-full">
                  <label htmlFor="f-mensagem">
                    {labels.mensagem} <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tipo de mercadoria, quantidades, datas previstas, local da operação…"
                    {...field('mensagem')}
                  />
                  {fieldError('mensagem')}
                </div>
              </div>

              <p className="form-note">
                <span aria-hidden="true">*</span> Campos obrigatórios. Indique pelo menos um telefone ou um e-mail. Os dados
                não são guardados neste site: são apenas enviados para a SAMBA OCEAN para responder ao seu pedido.
              </p>

              <div className="hp-field" aria-hidden="true">
                <label htmlFor="f-website">Website</label>
                <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="btn-row">
                <button type="submit" name="canal" value="email" className="main-btn-reverse is-wide" disabled={sending}>
                  <span className="btn-label">
                    <Icon name="mail" size={18} strokeWidth={1.6} /> {sending ? 'A enviar…' : 'Enviar por e-mail'}
                  </span>
                  <BtnArrow />
                </button>
                <button type="submit" name="canal" value="whatsapp" className="main-btn is-wide">
                  <span className="btn-label">
                    <WhatsAppIcon size={18} /> Enviar por WhatsApp
                  </span>
                  <BtnArrow />
                </button>
              </div>
            </form>
          </div>

          <aside className="map-wrap" aria-label="Localização">
            <Reveal className="map-card">
              <div className="map-frame">
                <iframe
                  title="Mapa: Talatona, Luanda"
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="map-info">
                <Icon name="pin" size={26} strokeWidth={1.4} className="map-info-icon" />
                <div>
                  <h3>Sede</h3>
                  <address>
                    {contacts.addressLines.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </address>
                  <a
                    className="card-link"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contacts.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir no Google Maps
                    <BtnArrow />
                    <span className="sr-only"> (abre numa nova janela)</span>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal className="note-box" delay={100}>
              <Icon name="clock" size={26} strokeWidth={1.4} />
              <p>
                <strong>Proposta comercial formal em 24h</strong>
                Após o diagnóstico da sua necessidade.
              </p>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
