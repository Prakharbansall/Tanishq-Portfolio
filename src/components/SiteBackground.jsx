function MandalaCorner({ className = "" }) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="120" cy="120" r="112" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      <circle cx="120" cy="120" r="82" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="120" cy="120" r="52" stroke="currentColor" strokeWidth="1" opacity="0.85" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={angle}
          cx="120"
          cy="38"
          rx="11"
          ry="26"
          stroke="currentColor"
          strokeWidth="1"
          transform={`rotate(${angle} 120 120)`}
        />
      ))}
      <path d="M120 68 L168 120 L120 172 L72 120 Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M120 88 L148 120 L120 152 L92 120 Z" stroke="currentColor" strokeWidth="0.9" opacity="0.8" />
      <circle cx="120" cy="120" r="10" fill="currentColor" opacity="0.35" />
      {[0, 90, 180, 270].map((angle) => (
        <circle
          key={`dot-${angle}`}
          cx="120"
          cy="18"
          r="4"
          fill="currentColor"
          opacity="0.5"
          transform={`rotate(${angle} 120 120)`}
        />
      ))}
    </svg>
  );
}

function TempleArch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 800 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 118 C120 40 280 8 400 8 C520 8 680 40 800 118"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.75"
      />
      <path
        d="M40 118 C150 55 270 28 400 28 C530 28 650 55 760 118"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      {[100, 200, 300, 400, 500, 600, 700].map((x) => (
        <path
          key={x}
          d={`M${x} 118 L${x} ${88 + (Math.abs(x - 400) / 400) * 18}`}
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.45"
        />
      ))}
      <circle cx="400" cy="22" r="14" stroke="currentColor" strokeWidth="1" />
      <path d="M386 22 H414 M400 8 V36" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
    </svg>
  );
}

/** Fixed ambient layer — crimson wash + Indian rangoli / jaali motifs. */
export default function SiteBackground() {
  return (
    <div className="site-ambient pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Gradient wash ~20% */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[color-mix(in_oklab,var(--primary)_32%,var(--background))] to-[color-mix(in_oklab,var(--primary)_42%,var(--background))]" />

        <div className="absolute -right-[10%] -top-[6%] h-[min(78vw,620px)] w-[min(78vw,620px)] rounded-full bg-primary/45 blur-[90px]" />
        <div className="absolute -bottom-[16%] -left-[8%] h-[min(70vw,540px)] w-[min(70vw,540px)] rounded-full bg-[var(--blood)]/40 blur-[100px]" />
        <div className="absolute left-[35%] top-[38%] h-80 w-[32rem] -translate-x-1/2 rounded-full bg-primary/30 blur-[80px]" />
        <div className="absolute right-[18%] bottom-[22%] h-64 w-64 rounded-full bg-[color-mix(in_oklab,var(--primary)_55%,var(--blood))]/25 blur-[70px]" />

        <div className="site-ambient-lines absolute inset-0" />

        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[color-mix(in_oklab,var(--primary)_28%,transparent)] to-transparent" />
      </div>

      {/* Indian-style motifs ~10% */}
      <div className="absolute inset-0 text-primary opacity-10">
        <div className="site-jaali-pattern absolute inset-0" />

        <MandalaCorner className="absolute -left-20 -top-20 size-[min(42vw,280px)] sm:-left-12 sm:-top-12 sm:size-64" />
        <MandalaCorner className="absolute -right-20 -top-20 size-[min(42vw,280px)] rotate-90 sm:-right-12 sm:-top-12 sm:size-64" />
        <MandalaCorner className="absolute -bottom-20 -left-20 size-[min(42vw,280px)] -rotate-90 sm:-bottom-12 sm:-left-12 sm:size-64" />
        <MandalaCorner className="absolute -bottom-20 -right-20 size-[min(42vw,280px)] rotate-180 sm:-bottom-12 sm:-right-12 sm:size-64" />

        <TempleArch className="absolute inset-x-0 top-16 h-24 w-full opacity-80 sm:top-20 sm:h-28" />
        <TempleArch className="absolute inset-x-0 bottom-12 h-20 w-full rotate-180 opacity-70" />

        <div className="site-rangoli-center absolute left-1/2 top-1/2 size-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}
