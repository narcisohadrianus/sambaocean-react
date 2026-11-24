/* Ícones SVG desenhados à mão (traço 24x24, cor = currentColor). */
const paths = {
  truck: (
    <>
      <path d="M2 6.5h11v9H2z" />
      <path d="M13 9.5h4.2l3.3 3.4v2.6H13z" />
      <circle cx="6" cy="17.5" r="1.9" />
      <circle cx="17" cy="17.5" r="1.9" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 19.5c.4-3.4 2.9-5.5 6-5.5s5.6 2.1 6 5.5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16.2 14.1c2.6-.3 4.5 1.6 4.8 4.4" />
    </>
  ),
  loader: (
    <>
      <path d="M3 17h11.5v-4.5L12 8H6.5v4.5H3z" />
      <path d="M8.5 8V5h3" />
      <path d="M14.5 12.5l3-4 3.5 1.5-1 3.5" />
      <path d="M21 13.5l-1.5 4h-3" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="12" cy="18" r="1.8" />
    </>
  ),
  forklift: (
    <>
      <path d="M4 17V7h5l3 6v4" />
      <path d="M4 12h8" />
      <path d="M16 4v13h5" />
      <circle cx="6" cy="18" r="1.8" />
      <circle cx="11.5" cy="18" r="1.8" />
    </>
  ),
  helmet: (
    <>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="M2.5 16h19v2.5h-19z" />
      <path d="M10 8.3V5.5h4v2.8" />
    </>
  ),
  operator: (
    <>
      <circle cx="12" cy="7.5" r="3.2" />
      <path d="M8.8 6.4a3.4 3.4 0 0 1 6.4 0" />
      <path d="M5 20c.6-3.8 3.4-6 7-6s6.4 2.2 7 6" />
      <path d="M12 14v3" />
    </>
  ),
  box: (
    <>
      <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z" />
      <path d="M3.5 7.5 12 12l8.5-4.5" />
      <path d="M12 12v9" />
    </>
  ),
  package: (
    <>
      <path d="M4 8h16v12H4z" />
      <path d="M3 4.5h18V8H3z" />
      <path d="M10 12h4" />
    </>
  ),
  container: (
    <>
      <path d="M2.5 6h19v12h-19z" />
      <path d="M7 9v6M11 9v6M15 9v6M19 9v6" />
    </>
  ),
  warehouse: (
    <>
      <path d="M2.5 20V9L12 4l9.5 5v11" />
      <path d="M6.5 20v-7h11v7" />
      <path d="M6.5 16.5h11" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <path d="M8.2 18H16a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h7.8" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20.5 20.5-4.8-4.8" />
    </>
  ),
  fileClock: (
    <>
      <path d="M13.5 3H6v18h6" />
      <path d="M13.5 3 18 7.5V10" />
      <path d="M13.5 3v4.5H18" />
      <circle cx="17" cy="17" r="4" />
      <path d="M17 15v2.2l1.4 1" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4.5h12l-2.5 4 2.5 4H5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.2 7.5 9.5 4.4-1.3 7.5-4.9 7.5-9.5V6z" />
      <path d="m8.8 12 2.3 2.3 4.3-4.6" />
    </>
  ),
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.3 2.7 2.7 5.3-5.6" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  star: <path d="m12 3.2 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 17l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" />,
  scale: (
    <>
      <path d="M12 4v16M7 20h10" />
      <path d="M4.5 7.5h15" />
      <path d="M6.5 7.5 3.5 14a3 3 0 0 0 6 0z" />
      <path d="M17.5 7.5l-3 6.5a3 3 0 0 0 6 0z" />
    </>
  ),
  handshake: (
    <>
      <path d="m2.5 11 4-4.5 4 1.5 3-1.5 4 1 4 3.5" />
      <path d="m6.5 13.5 4 4c.8.8 2 .8 2.7 0l4.3-4.5" />
      <path d="M10.5 8 8 11c-.6.8.5 2 1.4 1.4L12 10.5l3.5 3" />
      <path d="M2.5 11l4 2.5M21.5 10.5l-4 3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
    </>
  ),
  steering: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M3.3 10.5c3 .3 5.6.9 6.6 1.5M20.7 10.5c-3 .3-5.6.9-6.6 1.5M12 14.2V21" />
    </>
  ),
  anchor: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v14" />
      <path d="M8 10.5h8" />
      <path d="M4 13.5c0 4.2 3.6 7.5 8 7.5s8-3.3 8-7.5" />
    </>
  ),
  factory: (
    <>
      <path d="M2.5 20.5V10l5.5 3.5V10l5.5 3.5V10l5.5 3.5V4h3v16.5z" />
      <path d="M6.5 17h2M11.5 17h2M16.5 17h2" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5h3l1.5 4.3-2.1 1.4a11.6 11.6 0 0 0 5.8 5.8l1.4-2.1 4.3 1.5v3c0 1.1-.9 2-2 2A16.5 16.5 0 0 1 4.6 5.5c0-1.1.9-2 2-2z" />
  ),
  mail: (
    <>
      <path d="M3 5.5h18v13H3z" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-6.1-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.8" r="2.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </>
  ),
  menu: <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />,
  close: <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />,
  send: (
    <>
      <path d="M21 3 10.5 13.5" />
      <path d="M21 3 14.5 21l-4-7.5L3 9.5z" />
    </>
  ),
  home: (
    <>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M5.5 9.5V20h13V9.5" />
    </>
  ),
};

/* Logótipo do WhatsApp (preenchido) */
export function WhatsAppIcon({ size = 24, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z" />
    </svg>
  );
}

export default function Icon({ name, size = 24, className = '', strokeWidth = 1.75 }) {
  const content = paths[name];
  if (!content) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {content}
    </svg>
  );
}
