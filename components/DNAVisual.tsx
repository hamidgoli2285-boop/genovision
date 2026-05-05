type Props = {
  className?: string;
};

export default function DNAVisual({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 480 520"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ilustración de doble hélice de ADN"
      className={className}
    >
      <defs>
        <linearGradient id="dna-strand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#155EEF" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
        <linearGradient id="dna-strand-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#21D4FD" />
          <stop offset="100%" stopColor="#155EEF" />
        </linearGradient>
        <radialGradient id="dna-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#155EEF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#155EEF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="240" cy="260" r="220" fill="url(#dna-glow)" />

      {/* Strands */}
      <path
        d="M170 30 C 320 130, 120 180, 240 260 S 160 380, 310 480"
        stroke="url(#dna-strand)"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M310 30 C 160 130, 360 180, 240 260 S 320 380, 170 480"
        stroke="url(#dna-strand-2)"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Rungs */}
      {Array.from({ length: 14 }).map((_, i) => {
        const t = i / 13;
        const y = 40 + t * 440;
        const offset = Math.sin(t * Math.PI * 3) * 70;
        return (
          <line
            key={i}
            x1={240 - offset}
            y1={y}
            x2={240 + offset}
            y2={y}
            stroke="#155EEF"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        );
      })}

      {/* Nodes */}
      {Array.from({ length: 14 }).map((_, i) => {
        const t = i / 13;
        const y = 40 + t * 440;
        const offset = Math.sin(t * Math.PI * 3) * 70;
        return (
          <g key={`n-${i}`}>
            <circle
              cx={240 - offset}
              cy={y}
              r="4.5"
              fill="#155EEF"
            />
            <circle
              cx={240 + offset}
              cy={y}
              r="4.5"
              fill="#14B8A6"
            />
          </g>
        );
      })}
    </svg>
  );
}
