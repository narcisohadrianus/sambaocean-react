/* Desenhos decorativos em traço fino (azul-claro da marca), atrás do conteúdo. */

export function DecorTruck({ className = '' }) {
  return (
    <svg className={`decor ${className}`} viewBox="0 0 320 150" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        {/* contentor */}
        <path d="M18 22h196v86H18z" />
        <path d="M38 30v70M58 30v70M78 30v70M98 30v70M118 30v70M138 30v70M158 30v70M178 30v70M198 30v70" opacity=".7" />
        {/* chassis */}
        <path d="M10 112h290" />
        <path d="M14 108v8M214 108v4" />
        {/* cabine */}
        <path d="M222 112V56h44l26 30v26" />
        <path d="M232 64h28l18 22h-46z" />
        <path d="M240 98h10" />
        {/* rodas */}
        <circle cx="48" cy="124" r="13" />
        <circle cx="48" cy="124" r="4" />
        <circle cx="82" cy="124" r="13" />
        <circle cx="82" cy="124" r="4" />
        <circle cx="180" cy="124" r="13" />
        <circle cx="180" cy="124" r="4" />
        <circle cx="270" cy="124" r="13" />
        <circle cx="270" cy="124" r="4" />
        {/* estrada */}
        <path d="M0 144h70M90 144h60M170 144h70M260 144h60" opacity=".6" />
      </g>
    </svg>
  );
}

export function DecorCrane({ className = '' }) {
  return (
    <svg className={`decor ${className}`} viewBox="0 0 260 260" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        {/* torre */}
        <path d="M60 250V40M84 250V40" />
        <path d="M60 250l24-30-24-30 24-30-24-30 24-30-24-30 24-10" opacity=".75" />
        {/* lança */}
        <path d="M30 40h220M30 56h220" />
        <path d="M30 40v16M250 40v16" />
        <path d="M84 56l20-16 20 16 20-16 20 16 20-16 20 16 20-16 20 16" opacity=".75" />
        <path d="M72 40l0-26-42 26M72 14l178 26" opacity=".8" />
        {/* cabo e contentor suspenso */}
        <path d="M200 56v90" />
        <path d="M200 146l-26 12M200 146l26 12" />
        <path d="M164 158h72v40h-72z" />
        <path d="M178 162v32M192 162v32M206 162v32M220 162v32" opacity=".7" />
        {/* chão e contentores empilhados */}
        <path d="M0 250h260" />
        <path d="M110 210h80v40h-80z" />
        <path d="M190 220h64v30h-64z" />
        <path d="M124 214v32M138 214v32M152 214v32M166 214v32" opacity=".6" />
      </g>
    </svg>
  );
}
