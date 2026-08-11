/**
 * Ilustrações originais em SVG, estilo aquarela suave, na paleta sálvia/areia.
 * Placeholders até que fotos reais do Dr. Lorenzo e imagens de serviço sejam
 * fornecidas — basta trocar os componentes usados em `src/routes/index.tsx`.
 */

function Blob({
  d,
  fill,
  opacity = 1,
}: Readonly<{ d: string; fill: string; opacity?: number }>) {
  return <path d={d} fill={fill} opacity={opacity} />
}

/** Retrato ilustrado para o hero — silhueta acolhedora, sem rosto real. */
export function HeroPortrait({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 480 560"
      className={className}
      role="img"
      aria-label="Ilustração do Dr. Lorenzo Noronha em tons de verde-sálvia"
    >
      <defs>
        <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eadfc9" />
          <stop offset="100%" stopColor="#d9e2cf" />
        </linearGradient>
        <linearGradient id="heroCoat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c9070" />
          <stop offset="100%" stopColor="#586f4d" />
        </linearGradient>
      </defs>

      <rect width="480" height="560" rx="32" fill="url(#heroBg)" />

      <Blob
        d="M40 480 C 40 380, 120 340, 240 340 C 360 340, 440 380, 440 480 L 440 560 L 40 560 Z"
        fill="#f4ede0"
        opacity={0.6}
      />

      {/* ombros / jaleco */}
      <path
        d="M120 470 C120 380 170 330 240 330 C310 330 360 380 360 470 L360 520 L120 520 Z"
        fill="url(#heroCoat)"
      />
      <path
        d="M240 330 L240 460 M200 345 L240 400 L280 345"
        stroke="#f4ede0"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity={0.85}
      />

      {/* pescoço */}
      <rect x="215" y="270" width="50" height="70" rx="20" fill="#e3b98f" />

      {/* cabeça */}
      <ellipse cx="240" cy="220" rx="78" ry="86" fill="#eec49a" />

      {/* cabelo curto */}
      <path
        d="M162 210 C158 140 200 108 240 108 C284 108 322 140 318 214 C310 190 292 170 240 170 C190 170 172 190 162 210 Z"
        fill="#4b3a2f"
      />

      {/* sorriso sutil + leve indicação de expressão calma */}
      <path
        d="M206 246 Q240 268 274 246"
        stroke="#8a5a3a"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity={0.6}
      />
      <circle cx="205" cy="222" r="6" fill="#4b3a2f" opacity={0.75} />
      <circle cx="275" cy="222" r="6" fill="#4b3a2f" opacity={0.75} />

      {/* folhas decorativas — toque orgânico */}
      <g opacity={0.8}>
        <path
          d="M60 90 C90 60 130 60 150 90 C130 100 90 100 60 90 Z"
          fill="#7c9070"
        />
        <path
          d="M400 470 C430 440 440 400 420 370 C400 400 390 440 400 470 Z"
          fill="#a9b98f"
        />
      </g>
    </svg>
  )
}

const iconStroke = '#3f5a3a'

/** Implante — dente com parafuso de implante */
export function IconImplante({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="54" fill="#dfe6d2" />
      <path
        d="M60 30 C40 30 34 44 38 58 C40 66 36 72 38 82 C40 90 48 92 52 84 C54 80 58 80 60 84 C64 92 74 90 76 80 C78 70 76 64 78 58 C82 44 80 30 60 30 Z"
        fill="#f7f2e6"
        stroke={iconStroke}
        strokeWidth="2.5"
      />
      <path
        d="M60 84 L60 104"
        stroke="#8a7250"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M54 90 L66 90 M53 96 L67 96 M54 102 L66 102"
        stroke="#f7f2e6"
        strokeWidth="2"
      />
    </svg>
  )
}

/** Sisos — molar com destaque de extração */
export function IconSisos({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="54" fill="#e7ddc4" />
      <path
        d="M42 36 C34 36 30 46 32 56 C33 62 30 66 31 74 C32 82 40 84 44 76 C46 72 50 72 52 76 C56 84 64 84 66 76 C68 72 72 72 74 76 C78 84 86 82 87 74 C88 66 85 62 86 56 C88 46 84 36 76 36 C68 40 58 42 60 42 C60 42 50 40 42 36 Z"
        fill="#f7f2e6"
        stroke={iconStroke}
        strokeWidth="2.5"
      />
      <path
        d="M38 44 L82 88"
        stroke="#b8543f"
        strokeWidth="3"
        strokeLinecap="round"
        opacity={0.6}
      />
    </svg>
  )
}

/** Protocolo — arco dentário fixo sobre implantes */
export function IconProtocolo({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="54" fill="#dfe6d2" />
      <path
        d="M30 66 Q60 40 90 66"
        stroke={iconStroke}
        strokeWidth="3"
        fill="none"
      />
      {[34, 47, 60, 73, 86].map((x) => (
        <rect
          key={x}
          x={x - 5}
          y={x === 60 ? 44 : x === 47 || x === 73 ? 48 : 54}
          width="10"
          height="22"
          rx="4"
          fill="#f7f2e6"
          stroke={iconStroke}
          strokeWidth="2"
        />
      ))}
      <path
        d="M47 88 L47 98 M73 88 L73 98"
        stroke="#8a7250"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Prótese total — arco completo removível */
export function IconProtese({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="54" fill="#e7ddc4" />
      <path
        d="M28 52 C28 74 42 88 60 88 C78 88 92 74 92 52"
        fill="none"
        stroke={iconStroke}
        strokeWidth="2.5"
      />
      <path
        d="M30 50 C30 70 44 82 60 82 C76 82 90 70 90 50 C90 46 86 44 82 46 C78 48 76 52 72 50 C68 48 66 44 62 46 C58 48 58 52 54 50 C50 48 50 44 46 46 C42 48 40 52 36 50 C32 48 30 46 30 50 Z"
        fill="#f7f2e6"
        stroke={iconStroke}
        strokeWidth="2"
      />
    </svg>
  )
}

/** Clínica geral — dente com coração, cuidado contínuo */
export function IconClinicaGeral({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="54" fill="#dfe6d2" />
      <path
        d="M60 32 C42 32 36 46 39 58 C41 68 37 74 39 84 C41 92 49 93 52 85 C54 80 58 80 60 85 C63 93 71 92 73 84 C75 74 71 68 73 58 C76 46 78 32 60 32 Z"
        fill="#f7f2e6"
        stroke={iconStroke}
        strokeWidth="2.5"
      />
      <path
        d="M60 52 C57 47 49 47 47 54 C45 60 52 65 60 72 C68 65 75 60 73 54 C71 47 63 47 60 52 Z"
        fill="#c47a63"
      />
    </svg>
  )
}

/** Ícones de redes sociais (traço simples, monocromático — lucide-react não inclui marcas). */
export function IconWhatsapp({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M12 3a9 9 0 0 0-7.75 13.5L3 21l4.65-1.22A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.4 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4.2.5.6 1.5.6 1.6.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.2.1-.3.3-.1.6.2.3.8 1.2 1.6 1.9 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1.2-.2.7-.8.9-1 .2-.2.4-.2.6-.1.2.1 1.5.7 1.7.8.2.1.4.2.5.3.1.2.1 1-.3 1.5-.3.6-1.6 1.1-2.2 1.1-.6 0-1.4 0-4.3-1.6-2.9-1.6-3.6-4.4-3.8-4.9-.1-.4-.6-1.1-.6-1.9 0-.9.4-1.4.6-1.6Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconInstagram({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function IconFacebook({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M13.8 8.2h1.4V6h-1.7c-1.6 0-2.6 1-2.6 2.6v1.3H9.5v2.2h1.4V19h2.3v-6.9h1.6l.3-2.2h-1.9V8.8c0-.4.2-.6.6-.6Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Marcador de localização decorativo */
export function IconPin({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8Z"
        fill="currentColor"
        opacity={0.15}
      />
      <path
        d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
        fill="currentColor"
      />
    </svg>
  )
}
