"use client";

/**
 * ProductIllustration — photo-style SVG scenes per product card.
 *
 * Design principles (medical photography aesthetic):
 *  • Dark, rich background gradient with warm centre glow
 *  • Bokeh blur circles simulate out-of-focus background lights
 *  • SVG feTurbulence grain layer for film texture
 *  • Shallow depth-of-field via feGaussianBlur on background elements
 *  • Each scene is topic-specific and reads at card thumbnail size
 *
 * Zero external dependencies — renders instantly, works offline.
 */

import type { ReactNode } from "react";

/**
 * Round trig-derived SVG coordinates to a fixed precision so the value
 * serializes identically on the server and the client. Without this, tiny
 * floating-point string differences (e.g. 166.11027254265818 vs
 * 166.1102725426582) trigger React hydration warnings on the illustrations.
 */
const r = (n: number) => Math.round(n * 100) / 100;

/* ─── Shared scene shell ─────────────────────────────────────────────────── */

type SceneProps = {
  uid: string;
  /** Dark-stop colour (edges / shadows) */
  dark: string;
  /** Mid-stop colour */
  mid: string;
  /** Accent glow colour */
  accent: string;
  /** Foreground SVG elements (drawn sharp, in front of bokeh) */
  children: ReactNode;
  /** Optional second bokeh accent colour */
  accent2?: string;
};

function Scene({ uid, dark, mid, accent, accent2, children }: SceneProps) {
  const a2 = accent2 ?? accent;
  return (
    <svg
      viewBox="0 0 800 450"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        {/* Film grain */}
        <filter id={`grain-${uid}`} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="overlay" result="blended" />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>
        {/* Bokeh blur */}
        <filter id={`blur-${uid}`}>
          <feGaussianBlur stdDeviation="18" />
        </filter>
        {/* Background gradient */}
        <radialGradient id={`bg-${uid}`} cx="50%" cy="42%" r="70%">
          <stop offset="0%" stopColor={mid} />
          <stop offset="100%" stopColor={dark} />
        </radialGradient>
        {/* Hero glow */}
        <radialGradient id={`glow-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        {/* Edge vignette */}
        <radialGradient id={`vig-${uid}`} cx="50%" cy="50%" r="70%">
          <stop offset="60%" stopColor="transparent" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.55" />
        </radialGradient>
        {/* Warm highlight */}
        <radialGradient id={`hl-${uid}`} cx="50%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill={dark} />
      <rect width="800" height="450" fill={`url(#bg-${uid})`} />

      {/* Bokeh layer — blurred coloured circles */}
      <g filter={`url(#blur-${uid})`} opacity="0.55">
        <circle cx="680" cy="80"  r="60" fill={accent}  opacity="0.5" />
        <circle cx="120" cy="360" r="50" fill={a2}      opacity="0.45" />
        <circle cx="720" cy="350" r="40" fill={a2}      opacity="0.3" />
        <circle cx="90"  cy="100" r="35" fill={accent}  opacity="0.35" />
        <circle cx="420" cy="30"  r="28" fill="#fff"    opacity="0.12" />
        <circle cx="560" cy="420" r="32" fill={accent}  opacity="0.28" />
      </g>

      {/* Hero glow behind subject */}
      <ellipse cx="400" cy="230" rx="260" ry="200" fill={`url(#glow-${uid})`} />

      {/* Foreground medical content */}
      {children}

      {/* Warm highlight at top */}
      <rect width="800" height="450" fill={`url(#hl-${uid})`} />
      {/* Vignette */}
      <rect width="800" height="450" fill={`url(#vig-${uid})`} />
      {/* Film grain overlay */}
      <rect width="800" height="450" fill="#888" opacity="0.045" filter={`url(#grain-${uid})`} />
    </svg>
  );
}

/* ─── Individual scenes ──────────────────────────────────────────────────── */

/** DNA double helix — hereditary cancer / genomics */
function SceneDNA({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#030D1C" mid="#0C2550" accent="#155EEF" accent2="#14B8A6">
      {/* Helix strand A */}
      <path
        d="M260 80 C300 130 340 180 280 230 C220 280 260 330 300 370"
        fill="none" stroke="#6BAAFF" strokeWidth="3.5" strokeLinecap="round" opacity="0.9"
      />
      {/* Helix strand B */}
      <path
        d="M400 80 C360 130 320 180 380 230 C440 280 400 330 360 370"
        fill="none" stroke="#14B8A6" strokeWidth="3.5" strokeLinecap="round" opacity="0.9"
      />
      {/* Rungs */}
      {[
        [291,115,376,115],[275,152,356,157],[269,192,364,195],
        [275,232,363,237],[285,272,368,272],[292,308,360,308],
      ].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#fff" strokeWidth="2" opacity={0.55 - i * 0.04} />
      ))}
      {/* Atom nodes */}
      {[[291,115],[376,115],[269,192],[364,195],[285,272],[368,272]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="#14B8A6" opacity="0.9" />
      ))}
      {/* Lab bokeh — distant equipment silhouettes */}
      <rect x="560" y="80" width="14" height="280" rx="7" fill="#1547C0" opacity="0.35" />
      <rect x="590" y="140" width="10" height="200" rx="5" fill="#14B8A6" opacity="0.25" />
      <rect x="140" y="100" width="12" height="240" rx="6" fill="#1547C0" opacity="0.25" />
      {/* Shield */}
      <path d="M490 120 L540 142 L540 196 Q540 234 490 252 Q440 234 440 196 L440 142 Z"
        fill="none" stroke="#14B8A6" strokeWidth="2.5" opacity="0.7" strokeLinejoin="round" />
      <path d="M477 185 L488 197 L510 169"
        fill="none" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    </Scene>
  );
}

/** Heart + ECG — cardio-pulmonary */
function SceneCardio({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#030A1A" mid="#0A1F3D" accent="#E05C7A" accent2="#155EEF">
      {/* Heart */}
      <path
        d="M400 320 C400 320 245 238 230 178 C215 118 250 88 285 92 C315 92 345 115 400 155 C455 115 485 92 515 92 C550 88 585 118 570 178 C555 238 400 320 400 320 Z"
        fill="none" stroke="#E05C7A" strokeWidth="3" opacity="0.85"
      />
      <path
        d="M400 300 C400 300 270 232 258 185 C246 138 270 115 295 117 C320 117 348 136 400 170 C452 136 480 117 505 117 C530 115 554 138 542 185 C530 232 400 300 400 300 Z"
        fill="#E05C7A" opacity="0.12"
      />
      {/* ECG line */}
      <polyline
        points="60,230 150,230 190,130 218,310 244,230 310,230 340,195 360,265 400,230 640,230"
        fill="none" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"
      />
      {/* Pulse dot */}
      <circle cx="400" cy="230" r="6" fill="#14B8A6" opacity="0.9" />
      <circle cx="400" cy="230" r="18" fill="none" stroke="#14B8A6" strokeWidth="1.5" opacity="0.3" />
      {/* Lung silhouettes — background */}
      <path d="M180 170 C155 170 130 192 130 225 C130 270 162 295 190 304 L205 304 L205 170 Z"
        fill="none" stroke="#6BAAFF" strokeWidth="2" opacity="0.3" />
      <path d="M620 170 C645 170 670 192 670 225 C670 270 638 295 610 304 L595 304 L595 170 Z"
        fill="none" stroke="#6BAAFF" strokeWidth="2" opacity="0.3" />
    </Scene>
  );
}

/** Brain scan — neurology */
function SceneNeuro({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#020810" mid="#071830" accent="#5B8DEF" accent2="#14B8A6">
      {/* Brain outer */}
      <path
        d="M320 350 C270 350 215 318 200 275 C185 232 205 196 235 185 C240 155 260 132 290 130 C308 105 335 92 365 100 C388 88 418 95 434 118 C465 118 488 145 488 175 C510 183 525 212 518 248 C512 284 488 312 456 322 Z"
        fill="none" stroke="#7AAEFF" strokeWidth="2.5" opacity="0.7"
      />
      <path
        d="M320 350 C270 350 215 318 200 275 C185 232 205 196 235 185 C240 155 260 132 290 130 C308 105 335 92 365 100 C388 88 418 95 434 118 C465 118 488 145 488 175 C510 183 525 212 518 248 C512 284 488 312 456 322 Z"
        fill="#0D2A5E" opacity="0.4"
      />
      {/* Gyri / fold lines */}
      {[
        "M290 145 C298 165 292 185 308 200",
        "M340 125 C348 145 342 168 360 182",
        "M265 200 C280 210 284 228 272 240",
        "M418 205 C406 215 408 234 420 245",
        "M330 265 C345 275 350 295 338 308",
      ].map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#7AAEFF" strokeWidth="1.8" opacity="0.5" strokeLinecap="round" />
      ))}
      {/* Neural network outside brain */}
      {[[150,120],[100,230],[140,350],[560,110],[620,240],[580,360]].map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="5.5" fill="#14B8A6" opacity="0.65" />
          <line x1={cx} y1={cy} x2={[265,265,265,488,488,488][i]} y2={[185,185,300,175,175,300][i]}
            stroke="#14B8A6" strokeWidth="1" opacity="0.22" />
        </g>
      ))}
      {/* Centre pulse */}
      <circle cx="344" cy="225" r="8" fill="#14B8A6" opacity="0.8" />
      <circle cx="344" cy="225" r="22" fill="none" stroke="#14B8A6" strokeWidth="1.5" opacity="0.25" />
      <circle cx="344" cy="225" r="40" fill="none" stroke="#14B8A6" strokeWidth="1" opacity="0.12" />
    </Scene>
  );
}

/** Immune shield + lab */
function SceneImmune({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#020E12" mid="#072530" accent="#14B8A6" accent2="#155EEF">
      {/* Test tube */}
      <rect x="360" y="100" width="38" height="220" rx="19" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.45" />
      <rect x="360" y="210" width="38" height="110" rx="19" fill="#14B8A6" opacity="0.35" />
      {/* Liquid surface */}
      <ellipse cx="379" cy="212" rx="19" ry="5" fill="#14B8A6" opacity="0.5" />
      {/* Gloves hand silhouette */}
      <path d="M310 100 C310 80 325 72 335 80 L335 200 C335 212 325 218 310 210 Z"
        fill="none" stroke="#fff" strokeWidth="2" opacity="0.3" />
      {/* Shield large */}
      <path d="M200 80 L290 112 L290 210 Q290 270 200 300 Q110 270 110 210 L110 112 Z"
        fill="none" stroke="#14B8A6" strokeWidth="3" opacity="0.65" strokeLinejoin="round" />
      <path d="M200 108 L262 132 L262 210 Q262 252 200 272 Q138 252 138 210 L138 132 Z"
        fill="#14B8A6" opacity="0.1" />
      <path d="M175 192 L192 210 L228 170"
        fill="none" stroke="#14B8A6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      {/* Antibody Y shapes */}
      {[[490,130],[540,240],[600,140],[560,340],[480,320]].map(([cx,cy],i) => (
        <g key={i} transform={`translate(${cx},${cy})`} opacity="0.45">
          <line x1="0" y1="0" x2="0" y2="-22" stroke="#fff" strokeWidth="2" />
          <line x1="0" y1="-13" x2="-13" y2="-24" stroke="#fff" strokeWidth="2" />
          <line x1="0" y1="-13" x2="13" y2="-24" stroke="#fff" strokeWidth="2" />
        </g>
      ))}
      {/* Cell dots */}
      {[[600,80],[650,180],[620,300],[440,380]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="#14B8A6" opacity="0.5" />
      ))}
    </Scene>
  );
}

/** Glucose hexagon — diabetes / metabolic */
function SceneMetabolic({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#020C1E" mid="#081A3A" accent="#3B82F6" accent2="#14B8A6">
      {/* Hexagonal glucose ring */}
      {[0,1,2,3,4,5].map(i => {
        const rad = 110;
        const a1 = (i * 60 - 30) * Math.PI / 180;
        const a2 = ((i + 1) * 60 - 30) * Math.PI / 180;
        return (
          <line key={i}
            x1={r(400 + rad * Math.cos(a1))} y1={r(225 + rad * Math.sin(a1))}
            x2={r(400 + rad * Math.cos(a2))} y2={r(225 + rad * Math.sin(a2))}
            stroke="#6BAAFF" strokeWidth="3" opacity="0.75"
          />
        );
      })}
      {/* Atom nodes */}
      {[0,1,2,3,4,5].map(i => {
        const a = (i * 60 - 30) * Math.PI / 180;
        return (
          <circle key={i} cx={r(400 + 110 * Math.cos(a))} cy={r(225 + 110 * Math.sin(a))}
            r="9" fill="#6BAAFF" opacity="0.8" />
        );
      })}
      <circle cx="400" cy="225" r="18" fill="#3B82F6" opacity="0.5" />
      <circle cx="400" cy="225" r="45" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.25" />
      <circle cx="400" cy="225" r="80" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.12" />
      {/* Side molecules */}
      {[[180,160],[180,290],[620,160],[620,290]].map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="7" fill="#14B8A6" opacity="0.6" />
          <line x1={cx} y1={cy} x2={r(400 + 110 * Math.cos([210,150,330,30][i] * Math.PI/180))}
                              y2={r(225 + 110 * Math.sin([210,150,330,30][i] * Math.PI/180))}
            stroke="#14B8A6" strokeWidth="1.2" opacity="0.2" strokeDasharray="6 5" />
        </g>
      ))}
      {/* Glucose label glow */}
      <text x="374" y="232" fill="#6BAAFF" fontSize="22" fontFamily="monospace" fontWeight="bold" opacity="0.55">C₆H₁₂O₆</text>
    </Scene>
  );
}

/** Eye / iris — ophthalmology */
function SceneEye({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#020810" mid="#061528" accent="#1D5FAD" accent2="#14B8A6">
      {/* Eye whites */}
      <path d="M60 225 C160 100 260 60 400 60 C540 60 640 100 740 225 C640 350 540 390 400 390 C260 390 160 350 60 225 Z"
        fill="none" stroke="#fff" strokeWidth="2" opacity="0.2" />
      {/* Iris outer */}
      <circle cx="400" cy="225" r="130" fill="#0D2A5C" opacity="0.9" />
      {/* Iris gradient ring */}
      <circle cx="400" cy="225" r="128" fill="none" stroke="#2E6FBF" strokeWidth="22" opacity="0.75" />
      {/* Iris detail spokes */}
      {Array.from({length:18},(_,i) => {
        const a = i * 20 * Math.PI / 180;
        return (
          <line key={i} x1={r(400+68*Math.cos(a))} y1={r(225+68*Math.sin(a))}
            x2={r(400+118*Math.cos(a))} y2={r(225+118*Math.sin(a))}
            stroke="#4A9EFF" strokeWidth="1.5" opacity="0.4" />
        );
      })}
      <circle cx="400" cy="225" r="68" fill="none" stroke="#1D5FAD" strokeWidth="12" opacity="0.6" />
      {/* Pupil */}
      <circle cx="400" cy="225" r="48" fill="#04080F" />
      {/* Catch light */}
      <circle cx="418" cy="206" r="14" fill="#fff" opacity="0.28" />
      <circle cx="414" cy="202" r="6" fill="#fff" opacity="0.45" />
      {/* Corneal reflection arc */}
      <path d="M340 170 C370 158 430 158 460 170" fill="none" stroke="#fff" strokeWidth="2" opacity="0.25" />
      {/* DNA coil side */}
      {[0,1,2,3].map(i => {
        const y = 105 + i * 40;
        return (
          <g key={i}>
            <path d={`M590 ${y} C606 ${y+8} 618 ${y+18} 608 ${y+30}`}
              fill="none" stroke="#4A9EFF" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
            <line x1="594" y1={y+15} x2="612" y2={y+16} stroke="#14B8A6" strokeWidth="1.5" opacity="0.4" />
          </g>
        );
      })}
    </Scene>
  );
}

/** Lungs — respiratory */
function SceneLungs({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#030A1E" mid="#081C40" accent="#4A9EFF" accent2="#14B8A6">
      {/* Trachea */}
      <rect x="388" y="60" width="24" height="100" rx="12" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.45" />
      {/* Bronchi */}
      <path d="M400 160 C370 160 300 170 240 190" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.38" strokeLinecap="round" />
      <path d="M400 160 C430 160 500 170 560 190" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.38" strokeLinecap="round" />
      {/* Left lung */}
      <path d="M240 190 C185 190 130 225 130 290 C130 360 175 395 230 400 C270 400 290 385 290 370 L290 190 Z"
        fill="none" stroke="#6BAAFF" strokeWidth="2.5" opacity="0.65" />
      {/* Left lung fill */}
      <path d="M240 190 C185 190 130 225 130 290 C130 360 175 395 230 400 C270 400 290 385 290 370 L290 190 Z"
        fill="#4A9EFF" opacity="0.1" />
      {/* Left bronchioles */}
      {[0,1,2].map(i => (
        <path key={i} d={`M248 ${215+i*45} C228 ${228+i*45} 212 ${248+i*45}`}
          fill="none" stroke="#6BAAFF" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      ))}
      {/* Right lung */}
      <path d="M560 190 C615 190 670 225 670 290 C670 360 625 395 570 400 C530 400 510 385 510 370 L510 190 Z"
        fill="none" stroke="#6BAAFF" strokeWidth="2.5" opacity="0.65" />
      <path d="M560 190 C615 190 670 225 670 290 C670 360 625 395 570 400 C530 400 510 385 510 370 L510 190 Z"
        fill="#4A9EFF" opacity="0.1" />
      {[0,1,2].map(i => (
        <path key={i} d={`M552 ${215+i*45} C572 ${228+i*45} 588 ${248+i*45}`}
          fill="none" stroke="#6BAAFF" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      ))}
      {/* Molecular dots */}
      {[[80,140],[740,140],[80,380],[740,380]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="7" fill="#14B8A6" opacity="0.5" />
      ))}
    </Scene>
  );
}

/** Pills + DNA — pharmacogenomics */
function ScenePharma({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#030B1C" mid="#091D3E" accent="#2563EB" accent2="#14B8A6">
      {/* Capsule 1 — large, foreground */}
      <rect x="220" y="165" width="200" height="78" rx="39" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.6" />
      <line x1="320" y1="165" x2="320" y2="243" stroke="#fff" strokeWidth="2" opacity="0.3" />
      <rect x="220" y="165" width="100" height="78" rx="39" fill="#3B82F6" opacity="0.4" />
      <rect x="320" y="165" width="100" height="78" rx="39" fill="#14B8A6" opacity="0.3" />
      {/* Capsule 2 — angled */}
      <g transform="translate(500,200) rotate(-20)">
        <rect x="-70" y="-26" width="140" height="52" rx="26" fill="none" stroke="#14B8A6" strokeWidth="2.5" opacity="0.6" />
        <line x1="0" y1="-26" x2="0" y2="26" stroke="#14B8A6" strokeWidth="2" opacity="0.35" />
        <rect x="-70" y="-26" width="70" height="52" rx="26" fill="#14B8A6" opacity="0.3" />
      </g>
      {/* Tablet */}
      <rect x="175" y="290" width="110" height="72" rx="14" fill="none" stroke="#7AAEFF" strokeWidth="2.5" opacity="0.55" />
      <line x1="175" y1="326" x2="285" y2="326" stroke="#7AAEFF" strokeWidth="1.5" opacity="0.4" />
      <line x1="230" y1="290" x2="230" y2="362" stroke="#7AAEFF" strokeWidth="1.5" opacity="0.4" />
      {/* DNA helix right */}
      {[0,1,2,3,4].map(i => {
        const y = 90 + i * 54;
        return (
          <g key={i}>
            <path d={`M600 ${y} C622 ${y+12} 640 ${y+26} 625 ${y+40}`}
              fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />
            <path d={`M660 ${y+5} C638 ${y+17} 620 ${y+31} 635 ${y+45}`}
              fill="none" stroke="#14B8A6" strokeWidth="2.5" opacity="0.55" strokeLinecap="round" />
            <line x1="620" y1={y+20} x2="643" y2={y+22} stroke="#14B8A6" strokeWidth="1.8" opacity="0.45" />
          </g>
        );
      })}
    </Scene>
  );
}

/** Thyroid butterfly gland */
function SceneThyroid({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#021018" mid="#063040" accent="#14B8A6" accent2="#0E7490">
      {/* Left lobe */}
      <ellipse cx="320" cy="225" rx="110" ry="145" fill="none" stroke="#14B8A6" strokeWidth="3" opacity="0.7" />
      <ellipse cx="320" cy="225" rx="78" ry="105" fill="#14B8A6" opacity="0.1" />
      {/* Right lobe */}
      <ellipse cx="480" cy="225" rx="110" ry="145" fill="none" stroke="#14B8A6" strokeWidth="3" opacity="0.7" />
      <ellipse cx="480" cy="225" rx="78" ry="105" fill="#14B8A6" opacity="0.1" />
      {/* Isthmus */}
      <rect x="368" y="205" width="64" height="40" rx="20" fill="#14B8A6" opacity="0.4" />
      {/* Gland texture lines */}
      {[[-20,0],[0,-15],[20,0],[0,15]].map(([dx,dy],i) => (
        <ellipse key={i} cx={320+dx} cy={225+dy} rx="28" ry="40" fill="none" stroke="#14B8A6" strokeWidth="1" opacity="0.2" />
      ))}
      {/* Molecular rings */}
      {[[150,120],[650,120],[140,330],[660,330]].map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="22" fill="none" stroke="#14B8A6" strokeWidth="2" opacity="0.45" />
          <circle cx={cx} cy={cy} r="8" fill="#14B8A6" opacity="0.55" />
        </g>
      ))}
      {/* DNA top */}
      {[0,1,2].map(i => {
        const x = 330 + i * 60;
        return (
          <path key={i} d={`M${x} 48 C${x+12} 62 ${x+20} 76 ${x+10} 90`}
            fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        );
      })}
    </Scene>
  );
}

/** Exome sequencing reads — genome browser style */
function SceneExome({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#010610" mid="#050F28" accent="#3B82F6" accent2="#14B8A6">
      {/* Reference bar */}
      <rect x="80" y="68" width="640" height="18" rx="9" fill="#1D4ED8" opacity="0.5" />
      {/* Coverage histogram */}
      {Array.from({length:42},(_,i) => {
        const h = 30 + Math.round(Math.sin(i * 0.5) * 20 + Math.cos(i * 0.3) * 15 + 40);
        return (
          <rect key={i} x={80+i*15} y={108-h} width="13" height={h} rx="3"
            fill="#3B82F6" opacity={0.4 + (i%3)*0.12} />
        );
      })}
      {/* Sequencing reads */}
      {[
        [80,120,380,14],[100,140,420,14],[80,160,350,14],
        [110,180,400,14],[80,200,370,14],[95,220,410,14],
        [80,240,360,14],[105,260,440,14],[80,280,380,14],
        [90,300,420,14],[80,320,350,14],[100,340,410,14],
        [80,360,380,14],[110,380,390,14],
      ].map(([x,y,w,h],i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx="4" fill="#1547C0" opacity="0.6" />
          {/* SNPs */}
          {[80,200,340].map(off => off < w && (
            <rect key={off} x={x+off} y={y} width="6" height={h} rx="2"
              fill="#14B8A6" opacity="0.8" />
          ))}
        </g>
      ))}
      {/* Chromosome ideogram bar */}
      <rect x="80" y="415" width="640" height="10" rx="5" fill="#2563EB" opacity="0.35" />
      {[160,290,380,470,580].map((x,i) => (
        <rect key={i} x={x} y="413" width="24" height="14" rx="3" fill="#14B8A6" opacity="0.55" />
      ))}
      {/* WES label */}
      <text x="620" y="60" fill="#14B8A6" fontSize="26" fontFamily="monospace" fontWeight="bold" opacity="0.65">WES</text>
      {/* Genome position */}
      <text x="82" y="60" fill="#6BAAFF" fontSize="13" fontFamily="monospace" opacity="0.5">chr17:41,196,311–41,277,500</text>
    </Scene>
  );
}

/** Gut microbiome — intestine + bacteria */
function SceneMicrobiome({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#011008" mid="#062818" accent="#10B981" accent2="#14B8A6">
      {/* Intestine coil path */}
      <path
        d="M250 80 L440 80 C490 80 530 118 530 168 C530 218 490 245 440 245 L260 245 C210 245 175 272 175 322 C175 372 210 400 260 400 L520 400 C565 400 600 432 600 450"
        fill="none" stroke="#fff" strokeWidth="5" opacity="0.35" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M250 80 L440 80 C490 80 530 118 530 168 C530 218 490 245 440 245 L260 245 C210 245 175 272 175 322 C175 372 210 400 260 400 L520 400 C565 400 600 432 600 450"
        fill="none" stroke="#10B981" strokeWidth="2" opacity="0.4" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Bacteria — varied shapes */}
      {[
        [100,120,10,6],[680,90,9,5],[700,330,11,6],[85,380,8,5],
        [650,200,9,5],[90,245,10,5],[700,170,8,5],
      ].map(([cx,cy,rx,ry],i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry}
          fill="none" stroke="#10B981" strokeWidth="2" opacity="0.65" />
      ))}
      {/* Bacteria dots */}
      {[
        [130,80],[680,150],[720,280],[60,310],[700,400],[130,430],
        [330,50],[580,440],[200,430],[480,50],
      ].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r={4+i%3} fill="#10B981" opacity={0.45+i%2*0.15} />
      ))}
      {/* Flagella lines */}
      {[[100,120],[680,90],[700,330]].map(([cx,cy],i) => (
        <path key={i} d={`M${cx+12} ${cy} C${cx+28} ${cy-12} ${cx+38} ${cy+4}`}
          fill="none" stroke="#10B981" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
      ))}
      {/* Diversity label */}
      <text x="590" y="60" fill="#10B981" fontSize="14" fontFamily="monospace" opacity="0.55">16S rRNA</text>
    </Scene>
  );
}

/** Women's health — breast/ovarian cancer */
function SceneWomensHealth({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#0F0418" mid="#1E0830" accent="#C026D3" accent2="#9333EA">
      {/* DNA helix — left */}
      {[0,1,2,3,4].map(i => {
        const y = 80 + i * 56;
        return (
          <g key={i}>
            <path d={`M120 ${y} C140 ${y+10} 158 ${y+24} 144 ${y+40}`}
              fill="none" stroke="#E879F9" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
            <path d={`M174 ${y+5} C154 ${y+15} 136 ${y+29} 150 ${y+45}`}
              fill="none" stroke="#C026D3" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
            <line x1="140" y1={y+20} x2="157" y2={y+22} stroke="#E879F9" strokeWidth="1.8" opacity="0.5" />
          </g>
        );
      })}
      {/* Awareness ribbon — stylised */}
      <path d="M400 110 C374 110 352 132 352 158 C352 185 374 202 400 202"
        fill="none" stroke="#E879F9" strokeWidth="5" opacity="0.75" strokeLinecap="round" />
      <path d="M400 110 C426 110 448 132 448 158 C448 185 426 202 400 202"
        fill="none" stroke="#C026D3" strokeWidth="5" opacity="0.75" strokeLinecap="round" />
      <path d="M400 202 L381 258 L400 244 L419 258 Z"
        fill="none" stroke="#E879F9" strokeWidth="4" strokeLinejoin="round" opacity="0.7" />
      {/* Shield — prevention */}
      <path d="M510 100 L575 128 L575 200 Q575 248 510 272 Q445 248 445 200 L445 128 Z"
        fill="none" stroke="#C026D3" strokeWidth="2.5" opacity="0.7" strokeLinejoin="round" />
      <path d="M495 185 L508 200 L540 165"
        fill="none" stroke="#E879F9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      {/* Scatter dots */}
      {[[620,80],[660,200],[640,330],[300,380],[480,380]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="#E879F9" opacity="0.35" />
      ))}
    </Scene>
  );
}

/** Colorectal — digestive tract */
function SceneColorectal({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#031210" mid="#072A24" accent="#10B981" accent2="#14B8A6">
      {/* Digestive tract colon silhouette */}
      <path
        d="M220 60 L480 60 C530 60 580 100 580 150 C580 200 540 230 490 230 L310 230 C260 230 220 260 220 310 C220 360 258 390 308 390 L560 390"
        fill="none" stroke="#5EEAD4" strokeWidth="5" opacity="0.5" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Inner wall highlights */}
      <path
        d="M220 60 L480 60 C530 60 580 100 580 150 C580 200 540 230 490 230 L310 230 C260 230 220 260 220 310 C220 360 258 390 308 390 L560 390"
        fill="none" stroke="#fff" strokeWidth="2" opacity="0.18" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray="12 8"
      />
      {/* Microbiome dots along path */}
      {[[350,60],[430,60],[525,110],[570,175],[490,230],[400,230],[310,230],[228,270],
        [220,340],[268,390],[400,390],[490,390]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r={i%2===0?7:5} fill="#10B981" opacity="0.65" />
      ))}
      {/* DNA */}
      {[0,1,2,3].map(i => {
        const y = 70 + i * 60;
        return (
          <g key={i}>
            <path d={`M640 ${y} C656 ${y+10} 668 ${y+22} 656 ${y+35}`}
              fill="none" stroke="#fff" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
            <path d={`M682 ${y+4} C666 ${y+14} 654 ${y+26} 666 ${y+39}`}
              fill="none" stroke="#10B981" strokeWidth="2" opacity="0.45" strokeLinecap="round" />
            <line x1="654" y1={y+18} x2="672" y2={y+19} stroke="#10B981" strokeWidth="1.5" opacity="0.4" />
          </g>
        );
      })}
      {/* Bacteria scatter */}
      {[[90,100],[80,250],[100,380],[700,100],[720,250],[700,380]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="#14B8A6" opacity="0.45" />
      ))}
    </Scene>
  );
}

/** Prostate — male health */
function SceneProstate({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#020A1C" mid="#08183C" accent="#2563EB" accent2="#3B82F6">
      {/* Abstract gland — walnut shape */}
      <ellipse cx="400" cy="225" rx="140" ry="120" fill="none" stroke="#6BAAFF" strokeWidth="3" opacity="0.6" />
      <ellipse cx="400" cy="225" rx="100" ry="85" fill="#1D4ED8" opacity="0.15" />
      {/* Median line */}
      <line x1="400" y1="108" x2="400" y2="345" stroke="#6BAAFF" strokeWidth="2" opacity="0.25" />
      {/* Inner texture arcs */}
      {[-30,0,30].map((r,i) => (
        <path key={i} d={`M${320+r} 225 A${65-Math.abs(r)} ${70-Math.abs(r)} 0 0 1 ${480-r} 225`}
          fill="none" stroke="#6BAAFF" strokeWidth="1.2" opacity="0.2" />
      ))}
      {/* Prevention shield */}
      <path d="M560 80 L630 108 L630 178 Q630 224 560 244 Q490 224 490 178 L490 108 Z"
        fill="none" stroke="#6BAAFF" strokeWidth="2.5" opacity="0.7" strokeLinejoin="round" />
      <path d="M543 163 L556 178 L584 148"
        fill="none" stroke="#6BAAFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      {/* DNA — left */}
      {[0,1,2,3].map(i => {
        const y = 85 + i * 60;
        return (
          <g key={i}>
            <path d={`M110 ${y} C126 ${y+10} 140 ${y+22} 128 ${y+35}`}
              fill="none" stroke="#fff" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
            <path d={`M152 ${y+4} C136 ${y+14} 122 ${y+26} 134 ${y+39}`}
              fill="none" stroke="#6BAAFF" strokeWidth="2" opacity="0.45" strokeLinecap="round" />
            <line x1="128" y1={y+18} x2="146" y2={y+19} stroke="#6BAAFF" strokeWidth="1.5" opacity="0.4" />
          </g>
        );
      })}
      {/* Dots */}
      {[[240,80],[240,370],[650,300]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill="#6BAAFF" opacity="0.4" />
      ))}
    </Scene>
  );
}

/** Neurodevelopment — pediatric / autism */
function SceneNeuroDev({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#050B20" mid="#0C1A42" accent="#818CF8" accent2="#6366F1">
      {/* Abstract brain */}
      <path
        d="M295 340 C255 340 212 314 200 278 C188 242 205 212 228 202 C232 174 248 156 270 154 C284 128 306 114 330 120 C348 108 372 115 384 132 C410 132 428 154 428 178 C448 186 462 212 456 242 C450 272 428 296 402 306 Z"
        fill="none" stroke="#A5B4FC" strokeWidth="2.5" opacity="0.6"
      />
      {/* Connection web — nurturing/development theme */}
      {[[220,380],[320,410],[420,390],[510,360],[540,270],[500,170],[400,130]].map(([cx,cy],i,arr) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="7" fill="#818CF8" opacity="0.6" />
          {i < arr.length-1 && (
            <line x1={cx} y1={cy} x2={arr[i+1][0]} y2={arr[i+1][1]}
              stroke="#818CF8" strokeWidth="1.5" opacity="0.3" />
          )}
          <line x1={cx} y1={cy} x2={310} y2={235}
            stroke="#818CF8" strokeWidth="1" opacity="0.15" />
        </g>
      ))}
      {/* Centre node */}
      <circle cx="310" cy="235" r="10" fill="#818CF8" opacity="0.75" />
      <circle cx="310" cy="235" r="26" fill="none" stroke="#818CF8" strokeWidth="2" opacity="0.25" />
      {/* Outer satellites */}
      {[[100,140],[680,140],[100,360],[680,360]].map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="6" fill="#6366F1" opacity="0.5" />
          <line x1={cx} y1={cy} x2={[228,428,228,428][i]} y2={[202,178,300,296][i]}
            stroke="#6366F1" strokeWidth="1" opacity="0.2" />
        </g>
      ))}
      {/* Brain folds */}
      {[
        "M252 172 C260 188 255 202 266 214",
        "M296 148 C304 164 300 182 314 194",
        "M336 138 C344 155 340 175 356 186",
      ].map((d,i) => (
        <path key={i} d={d} fill="none" stroke="#A5B4FC" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      ))}
    </Scene>
  );
}

/** Whole genome sequencing — chromosomes */
function SceneWGS({ uid }: { uid: string }) {
  return (
    <Scene uid={uid} dark="#020610" mid="#06121E" accent="#2563EB" accent2="#14B8A6">
      {/* Chromosome pairs */}
      {[0,1,2,3,4,5,6,7,8].map(i => {
        const x = 80 + i * 74;
        const h = [170,200,145,188,158,195,142,182,168][i];
        const y = 225 - h / 2;
        return (
          <g key={i}>
            <rect x={x} y={y} width="18" height={h} rx="9" fill="#1D4ED8" opacity="0.6" />
            <rect x={x+26} y={y+8} width="18" height={h-16} rx="9" fill="#2563EB" opacity="0.5" />
            {/* Centromere */}
            <line x1={x} y1={225} x2={x+44} y2={225} stroke="#14B8A6" strokeWidth="2.5" opacity="0.65" />
            {/* Bands */}
            {[0.3,0.6].map((f,bi) => (
              <rect key={bi} x={x} y={y+h*f} width="18" height="8" rx="4" fill="#14B8A6" opacity="0.4" />
            ))}
          </g>
        );
      })}
      {/* DNA helix — right */}
      {[0,1,2,3,4,5].map(i => {
        const y = 70 + i * 52;
        return (
          <g key={i}>
            <path d={`M660 ${y} C678 ${y+10} 692 ${y+22} 680 ${y+36}`}
              fill="none" stroke="#fff" strokeWidth="2" opacity="0.45" strokeLinecap="round" />
            <path d={`M712 ${y+5} C694 ${y+15} 678 ${y+27} 690 ${y+41}`}
              fill="none" stroke="#14B8A6" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
            <line x1="678" y1={y+18} x2="696" y2={y+19} stroke="#14B8A6" strokeWidth="1.5" opacity="0.4" />
          </g>
        );
      })}
      <text x="640" y="58" fill="#14B8A6" fontSize="22" fontFamily="monospace" fontWeight="bold" opacity="0.6">WGS</text>
      <text x="82" y="58" fill="#6BAAFF" fontSize="11" fontFamily="monospace" opacity="0.4">Whole Genome · 3.2 Gb · 30× coverage</text>
    </Scene>
  );
}

/* ─── Map ─────────────────────────────────────────────────────────────────── */

const SCENES: Record<string, (uid: string) => React.ReactElement> = {
  /* Detail-page routes (kept) */
  "panel-cancer-hereditario":           uid => <SceneDNA uid={uid} />,
  "panel-core-cancer-hereditario":      uid => <SceneDNA uid={uid} />,
  "panel-cancer-mama-hereditario":      uid => <SceneWomensHealth uid={uid} />,
  "panel-cancer-colorrectal-poliposis": uid => <SceneColorectal uid={uid} />,
  "panel-cancer-prostata-hereditario":  uid => <SceneProstate uid={uid} />,

  /* Cancer & Oncology */
  "familial-cancer-panel":              uid => <SceneDNA uid={uid} />,
  "universal-cancer-screening":         uid => <SceneDNA uid={uid} />,
  "cancer-pgx":                         uid => <ScenePharma uid={uid} />,

  /* Pharmacogenomics */
  "comprehensive-pgx":                  uid => <ScenePharma uid={uid} />,
  "pain-pgx":                           uid => <ScenePharma uid={uid} />,
  "psychiatric-pgx":                    uid => <SceneNeuro uid={uid} />,
  "cardiac-pgx":                        uid => <SceneCardio uid={uid} />,

  /* Reproductive & Family Testing */
  "gender-reveal":                      uid => <SceneWomensHealth uid={uid} />,
  "nipt":                               uid => <SceneWomensHealth uid={uid} />,
  "prenatal-paternity":                 uid => <SceneDNA uid={uid} />,
  "carrier-detection":                  uid => <SceneDNA uid={uid} />,
  "paternity-relationship":             uid => <SceneDNA uid={uid} />,

  /* Infectious Disease Panels */
  "covid-rtpcr":                        uid => <SceneLungs uid={uid} />,
  "covid-flu-rsv":                      uid => <SceneLungs uid={uid} />,
  "respiratory-pathogen":               uid => <SceneLungs uid={uid} />,
  "uti-panel":                          uid => <SceneImmune uid={uid} />,
  "wound-panel":                        uid => <SceneImmune uid={uid} />,
  "vaginitis-panel":                    uid => <SceneImmune uid={uid} />,
  "hpv-panel":                          uid => <SceneImmune uid={uid} />,

  /* Clinical Genomics & Inherited Disorders */
  "clinical-wgs":                       uid => <SceneWGS uid={uid} />,
  "clinical-wes":                       uid => <SceneExome uid={uid} />,
  "inherited-disorders":                uid => <SceneDNA uid={uid} />,
  "immune-panel":                       uid => <SceneImmune uid={uid} />,
  "dementia-neuro":                     uid => <SceneNeuro uid={uid} />,
  "eye-retinopathies":                  uid => <SceneEye uid={uid} />,
  "adult-metabolic":                    uid => <SceneMetabolic uid={uid} />,
  "developmental-metabolic":            uid => <SceneNeuroDev uid={uid} />,

  /* Personalized Health, Metabolism & Microbiota */
  "diabetes-type2":                     uid => <SceneMetabolic uid={uid} />,
  "ancestry-heritage":                  uid => <SceneDNA uid={uid} />,
  "microbiota-intestinal":              uid => <SceneMicrobiome uid={uid} />,
};

/* ─── Export ─────────────────────────────────────────────────────────────── */

type Props = {
  productId: string;
  alt: string;
  className?: string;
};

export default function ProductIllustration({ productId, alt, className = "" }: Props) {
  const render = SCENES[productId] ?? SCENES["panel-cancer-hereditario"];
  return (
    <figure
      aria-label={alt}
      className={`relative w-full overflow-hidden rounded-t-2xl ${className}`}
      style={{ aspectRatio: "16/9" }}
    >
      {render(productId)}
    </figure>
  );
}
