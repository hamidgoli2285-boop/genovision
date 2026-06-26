"use client";

const PANELS = [
  {
    name: "Liquid Biopsy",
    category: "Oncología Molecular",
    accent: "bg-cobalt-600",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6l3 3-3 3v6" /><circle cx="12" cy="12" r="1" />
        <path d="M5.5 5.5A9 9 0 0 0 12 21a9 9 0 0 0 6.5-15.5" />
      </svg>
    ),
    style: {
      top: "32%", left: "4%", width: "58%",
      zIndex: 5, rotate: "-1.5deg",
      animation: "float 5s ease-in-out infinite",
      animationDelay: "0s",
    },
  },
  {
    name: "Cáncer Hereditario",
    category: "Panel de 161 genes",
    accent: "bg-teal-500",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.35-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.65-7 11-7 11Z" />
      </svg>
    ),
    style: {
      top: "6%", left: "22%", width: "52%",
      zIndex: 4, rotate: "2deg",
      animation: "float 5.5s ease-in-out infinite",
      animationDelay: "0.6s",
    },
  },
  {
    name: "Farmacogenómica",
    category: "Respuesta a medicamentos",
    accent: "bg-navy",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 12h6M12 9v6" />
      </svg>
    ),
    style: {
      top: "57%", left: "28%", width: "50%",
      zIndex: 4, rotate: "-2deg",
      animation: "float 6s ease-in-out infinite",
      animationDelay: "1.1s",
    },
  },
  {
    name: "NIPT",
    category: "Prenatal no invasivo",
    accent: "bg-cobalt-400",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    style: {
      top: "14%", left: "58%", width: "40%",
      zIndex: 3, rotate: "3deg",
      animation: "float 4.5s ease-in-out infinite",
      animationDelay: "1.8s",
    },
  },
  {
    name: "Microbiota",
    category: "Análisis intestinal",
    accent: "bg-teal-600",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="9" />
      </svg>
    ),
    style: {
      top: "73%", left: "2%", width: "38%",
      zIndex: 3, rotate: "-3deg",
      animation: "float 5.8s ease-in-out infinite",
      animationDelay: "2.3s",
    },
  },
];

export default function ServicePanels({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full select-none ${className}`}
      style={{ aspectRatio: "4 / 5" }}
      aria-hidden
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt-100 opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-2/3 h-40 w-40 rounded-full bg-teal-100 opacity-40 blur-3xl" />

      {PANELS.map((p) => (
        <div
          key={p.name}
          className="absolute rounded-xl border border-white/70 bg-white/75 shadow-[0_4px_24px_rgba(6,27,58,0.10)] backdrop-blur-md"
          style={{
            top: p.style.top,
            left: p.style.left,
            width: p.style.width,
            zIndex: p.style.zIndex,
            transform: `rotate(${p.style.rotate})`,
            animation: p.style.animation,
            animationDelay: p.style.animationDelay,
          }}
        >
          <div className="flex items-center gap-2.5 px-3.5 py-3">
            {/* Colored left accent */}
            <div className={`h-8 w-1 shrink-0 rounded-full ${p.accent}`} />
            {/* Icon */}
            <span className="text-navy/60">{p.icon}</span>
            {/* Text */}
            <div className="min-w-0">
              <p className="truncate text-[11px] font-bold leading-tight text-navy">{p.name}</p>
              <p className="truncate text-[9px] text-slate-400">{p.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
