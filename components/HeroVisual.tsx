"use client";

const NAVY = "#0A2240";
const CYAN = "#00C2D1";

const TILES = [
  {
    name: "Cáncer Hereditario",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
        <path d="M9 3v2h6V3" /><path d="m9.5 13 1.8 1.8L14.5 11" />
      </svg>
    ),
    pos: { top: "2%", left: "6%" },
    rotate: "-1.5deg",
    delay: "0s",
    duration: "6.5s",
  },
  {
    name: "Biopsia Líquida",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5c2.6 3.3 5.5 7.2 5.5 10.6a5.5 5.5 0 1 1-11 0c0-3.4 2.9-7.3 5.5-10.6Z" />
      </svg>
    ),
    pos: { top: "20%", left: "46%" },
    rotate: "1.5deg",
    delay: "0.9s",
    duration: "7s",
  },
  {
    name: "Farmacogenómica",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="16" height="8" rx="4" /><path d="M12 8v8" />
      </svg>
    ),
    pos: { top: "42%", left: "2%" },
    rotate: "-1deg",
    delay: "1.8s",
    duration: "6s",
  },
  {
    name: "NIPT",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20.5s-7.5-4.3-7.5-10A4.5 4.5 0 0 1 12 7.7a4.5 4.5 0 0 1 7.5 2.8c0 5.7-7.5 10-7.5 10Z" />
      </svg>
    ),
    pos: { top: "62%", left: "40%" },
    rotate: "1.2deg",
    delay: "2.6s",
    duration: "6.8s",
  },
  {
    name: "Microbiota",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="2.2" /><circle cx="15.5" cy="8.5" r="1.5" />
        <circle cx="14.5" cy="15" r="2.3" /><circle cx="8.5" cy="15.5" r="1.4" />
      </svg>
    ),
    pos: { top: "82%", left: "10%" },
    rotate: "-1.3deg",
    delay: "3.4s",
    duration: "6.2s",
  },
];

export default function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto w-full select-none ${className}`}
      style={{ maxWidth: "320px", aspectRatio: "4 / 5" }}
      aria-hidden
    >
      {/* Soft ambient glow — no hard card silhouette */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "260px",
          height: "260px",
          background: `radial-gradient(circle, rgba(0,194,209,0.10) 0%, rgba(10,34,64,0.04) 55%, transparent 75%)`,
          filter: "blur(2px)",
        }}
      />

      {TILES.map((tile) => (
        <div
          key={tile.name}
          className="absolute flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5"
          style={{
            top: tile.pos.top,
            left: tile.pos.left,
            background: "rgba(255,255,255,0.78)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.9)",
            boxShadow: "0 1px 2px rgba(10,34,64,0.04), 0 10px 28px rgba(10,34,64,0.09)",
            transform: `rotate(${tile.rotate})`,
            animation: `float ${tile.duration} ease-in-out infinite`,
            animationDelay: tile.delay,
            maxWidth: "190px",
          }}
        >
          <span
            className="grid h-8 w-8 shrink-0 place-items-center rounded-xl"
            style={{ background: "rgba(0,194,209,0.12)", color: NAVY }}
          >
            {tile.icon}
          </span>
          <span className="text-[12px] font-semibold leading-tight" style={{ color: NAVY }}>
            {tile.name}
          </span>
        </div>
      ))}
    </div>
  );
}
