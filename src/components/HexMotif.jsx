/* Motivo decorativo: hexágono do símbolo SAMBA OCEAN, em traço fino. */
export default function HexMotif({ className = '' }) {
  return (
    <svg className={`hex-motif ${className}`} viewBox="0 0 200 230" aria-hidden="true" focusable="false">
      <path d="M100 6 192 59v112l-92 53-92-53V59z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M100 34 168 73v84l-68 39-68-39V73z" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".6" />
      <path d="M100 62 144 87v56l-44 25-44-25V87z" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".35" />
    </svg>
  );
}
