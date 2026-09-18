/**
 * Iconos de las secciones. Trazo minimal sobre lienzo de 150x150,
 * heredan el color del texto con `currentColor`.
 */

type IconoProps = { className?: string };

const base = {
  viewBox: "0 0 150 150",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
};

export function IconoFrase({ className }: IconoProps) {
  return (
    <svg {...base} className={className}>
      <path d="M75 112C75 112 38 88 38 64c0-12 9-21 20-21 8 0 14 4 17 10 3-6 9-10 17-10 11 0 20 9 20 21 0 24-37 48-37 48Z" />
      <path d="M75 112v18" />
      <path d="M75 122c-9 0-16-5-18-13 9-2 16 3 18 13Z" />
      <path d="M75 122c9 0 16-5 18-13-9-2-16 3-18 13Z" />
    </svg>
  );
}

export function IconoAnillos({ className }: IconoProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="61" cy="86" r="25" />
      <circle cx="93" cy="86" r="25" />
      <path d="M61 61 71 49 61 37 51 49Z" />
      <path d="M51 49h20" />
    </svg>
  );
}

export function IconoFiesta({ className }: IconoProps) {
  return (
    <svg {...base} className={className}>
      <g transform="rotate(-14 62 75)">
        <path d="M48 38h28l-4 30a10 10 0 0 1-20 0Z" />
        <path d="M62 78v26" />
        <path d="M51 108h22" />
      </g>
      <g transform="rotate(14 88 75)">
        <path d="M74 38h28l-4 30a10 10 0 0 1-20 0Z" />
        <path d="M88 78v26" />
        <path d="M77 108h22" />
      </g>
      <path d="M75 24v8M64 30l4 6M86 30l-4 6" />
    </svg>
  );
}

export function IconoDressCode({ className }: IconoProps) {
  return (
    <svg {...base} className={className}>
      {/* Traje */}
      <path d="M52 40 34 50v60h36V50Z" />
      <path d="M40 46 52 66 64 46" />
      <path d="M52 70 44 76l8 6 8-6Z" />
      {/* Vestido */}
      <path d="M100 38c-5 0-9 4-9 9l3 18-10 45h32l-10-45 3-18c0-5-4-9-9-9Z" />
      <path d="M94 65h12" />
    </svg>
  );
}

export function IconoInstagram({ className }: IconoProps) {
  return (
    <svg {...base} className={className}>
      <rect x="42" y="42" width="66" height="66" rx="19" />
      <circle cx="75" cy="75" r="17" />
      <circle cx="95" cy="55" r="3.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconoRegalo({ className }: IconoProps) {
  return (
    <svg {...base} className={className}>
      <rect x="40" y="62" width="70" height="17" rx="3" />
      <path d="M47 79v32a3 3 0 0 0 3 3h50a3 3 0 0 0 3-3V79" />
      <path d="M67 62v52M83 62v52" />
      <path d="M75 62c-14 0-21-4-21-11 0-5 4-8 9-8 7 0 11 8 12 19Z" />
      <path d="M75 62c14 0 21-4 21-11 0-5-4-8-9-8-7 0-11 8-12 19Z" />
    </svg>
  );
}

export function IconoCanciones({ className }: IconoProps) {
  return (
    <svg {...base} className={className}>
      <path d="M64 100V49l44-9v51" />
      <path d="M64 63l44-9" />
      <ellipse cx="53" cy="103" rx="11" ry="9" />
      <ellipse cx="97" cy="94" rx="11" ry="9" />
    </svg>
  );
}

export function IconoPlay({ className }: IconoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="32" cy="32" r="30" fill="var(--color-primario)" />
      <path d="M26 21 46 32 26 43Z" fill="#ffffff" />
    </svg>
  );
}

export function IconoPausa({ className }: IconoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="32" cy="32" r="30" fill="var(--color-primario)" />
      <rect x="24" y="21" width="6" height="22" rx="2" fill="#ffffff" />
      <rect x="35" y="21" width="6" height="22" rx="2" fill="#ffffff" />
    </svg>
  );
}
