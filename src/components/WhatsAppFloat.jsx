import { contacts } from '../data/site';
import { WhatsAppIcon } from './Icon';

export const whatsappDefault = `${contacts.whatsapp}?text=${encodeURIComponent(
  'Olá, SAMBA OCEAN! Gostaria de pedir uma proposta.'
)}`;

/** Botão flutuante do WhatsApp — quadrado e plano, como o resto do site. */
export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappDefault}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar connosco pelo WhatsApp (abre numa nova janela)"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
