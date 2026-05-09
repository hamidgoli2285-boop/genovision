/**
 * ProductIllustration
 * Lightweight SVG-based visual for each product card.
 * All illustrations use GenoVision's brand palette and abstract medical shapes.
 * No external images, no copyrighted assets.
 */

type Props = {
  productId: string;
  /** Alt text forwarded to the wrapping figure */
  alt: string;
  className?: string;
};

/* ─── Individual illustrations ─────────────────────────────────────────── */

function DNAHelix({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#061B3A" />
          <stop offset="100%" stopColor="#1547C0" />
        </linearGradient>
        <linearGradient id={`sh-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#155EEF" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Dot grid */}
      {[40,80,120,160,200,240,280,320,360].map(x =>
        [30,75,120,165,210].map(y => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.2" fill="#fff" opacity="0.08" />
        ))
      )}
      {/* Shield */}
      <path d="M310 60 L340 75 L340 110 Q340 135 310 148 Q280 135 280 110 L280 75 Z"
        fill="none" stroke="#14B8A6" strokeWidth="2.5" opacity="0.7" strokeLinejoin="round" />
      <path d="M310 82 L325 90 L325 112 Q325 126 310 133 Q295 126 295 112 L295 90 Z"
        fill="#14B8A6" opacity="0.12" />
      {/* DNA strand A */}
      <path d="M80 30 C100 50 120 80 140 60 C160 40 180 70 200 90 C220 110 240 70 260 90"
        fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
      {/* DNA strand B */}
      <path d="M80 120 C100 100 120 130 140 110 C160 90 180 120 200 140 C220 160 240 120 260 140"
        fill="none" stroke={`url(#sh-${uid})`} strokeWidth="2.5" opacity="0.8" strokeLinecap="round" />
      {/* Rungs */}
      {[100,140,180,220].map((x, i) => {
        const y1 = [45, 68, 82, 102][i];
        const y2 = [108, 118, 128, 132][i];
        return <line key={x} x1={x} y1={y1} x2={x} y2={y2} stroke="#14B8A6" strokeWidth="1.8" opacity="0.55" />;
      })}
      {/* Family nodes */}
      {[[60,170],[120,195],[180,170],[120,140]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i===3?5:4} fill="#fff" opacity={i===3?0.5:0.3} />
      ))}
      <line x1="120" y1="145" x2="60" y2="166" stroke="#fff" strokeWidth="1" opacity="0.2" />
      <line x1="120" y1="145" x2="180" y2="166" stroke="#fff" strokeWidth="1" opacity="0.2" />
      <line x1="60" y1="170" x2="120" y2="191" stroke="#fff" strokeWidth="1" opacity="0.2" />
      <line x1="180" y1="170" x2="120" y2="191" stroke="#fff" strokeWidth="1" opacity="0.2" />
      {/* Glow */}
      <circle cx="200" cy="112" r="80" fill="#155EEF" opacity="0.07" />
    </svg>
  );
}

function CardioLungs({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B2D6B" />
          <stop offset="100%" stopColor="#0E4B8A" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Heart outline */}
      <path d="M200 100 C200 100 175 78 160 78 C140 78 128 92 128 108 C128 138 200 170 200 170 C200 170 272 138 272 108 C272 92 260 78 240 78 C225 78 200 100 200 100 Z"
        fill="none" stroke="#E05C7A" strokeWidth="2.5" opacity="0.75" />
      <path d="M200 110 C200 110 183 96 174 96 C162 96 155 104 155 113 C155 130 200 152 200 152 C200 152 245 130 245 113 C245 104 238 96 226 96 C217 96 200 110 200 110 Z"
        fill="#E05C7A" opacity="0.12" />
      {/* Left lung */}
      <path d="M110 95 C95 95 82 108 82 125 C82 158 110 175 130 182 L140 182 L140 95 Z"
        fill="none" stroke="#fff" strokeWidth="2" opacity="0.35" strokeLinejoin="round" />
      <path d="M122 110 C115 115 110 125 110 138" stroke="#fff" strokeWidth="1.2" opacity="0.25" strokeLinecap="round" />
      <path d="M128 120 C121 125 116 135 116 148" stroke="#fff" strokeWidth="1.2" opacity="0.25" strokeLinecap="round" />
      {/* Right lung */}
      <path d="M290 95 C305 95 318 108 318 125 C318 158 290 175 270 182 L260 182 L260 95 Z"
        fill="none" stroke="#fff" strokeWidth="2" opacity="0.35" strokeLinejoin="round" />
      <path d="M278 110 C285 115 290 125 290 138" stroke="#fff" strokeWidth="1.2" opacity="0.25" strokeLinecap="round" />
      <path d="M272 120 C279 125 284 135 284 148" stroke="#fff" strokeWidth="1.2" opacity="0.25" strokeLinecap="round" />
      {/* Trachea */}
      <line x1="200" y1="55" x2="200" y2="90" stroke="#fff" strokeWidth="2.5" opacity="0.4" />
      <path d="M200 90 C185 90 158 93 140 95" fill="none" stroke="#fff" strokeWidth="2" opacity="0.3" />
      <path d="M200 90 C215 90 242 93 260 95" fill="none" stroke="#fff" strokeWidth="2" opacity="0.3" />
      {/* Molecular dots */}
      {[[340,40],[360,80],[330,130],[370,150],[355,55]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#14B8A6" opacity="0.45" />
      ))}
      {[[340,40],[360,80],[330,130]].map(([cx1,cy1],i) => {
        const next = [[360,80],[330,130],[370,150]][i];
        return <line key={i} x1={cx1} y1={cy1} x2={next[0]} y2={next[1]} stroke="#14B8A6" strokeWidth="1" opacity="0.3" />;
      })}
      <circle cx="200" cy="120" r="90" fill="#155EEF" opacity="0.06" />
    </svg>
  );
}

function NeuralBrain({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A1628" />
          <stop offset="100%" stopColor="#0D2A5E" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Brain silhouette */}
      <path d="M145 165 C120 165 90 148 85 122 C80 96 95 78 115 72 C118 58 130 48 148 48 C158 36 175 30 195 35 C210 28 230 32 242 45 C262 45 278 60 278 78 C295 82 308 100 305 120 C302 145 282 162 258 165 Z"
        fill="none" stroke="#6E9EFF" strokeWidth="2" opacity="0.55" />
      {/* Brain fold lines */}
      <path d="M170 55 C175 70 168 85 178 95" fill="none" stroke="#6E9EFF" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
      <path d="M210 45 C215 60 208 78 220 90" fill="none" stroke="#6E9EFF" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
      <path d="M145 90 C158 95 160 112 150 120" fill="none" stroke="#6E9EFF" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
      <path d="M245 90 C235 100 238 118 248 125" fill="none" stroke="#6E9EFF" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
      {/* Neural network nodes */}
      {[[85,50],[50,100],[70,155],[330,60],[355,110],[320,165],[200,185]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#14B8A6" opacity="0.6" />
      ))}
      {/* Neural connections */}
      {[
        [85,50,50,100],[50,100,70,155],[85,50,145,80],
        [330,60,355,110],[355,110,320,165],[330,60,265,78],
        [70,155,200,185],[320,165,200,185]
      ].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#14B8A6" strokeWidth="1" opacity="0.3" />
      ))}
      {/* Pulse dot */}
      <circle cx="195" cy="108" r="6" fill="#14B8A6" opacity="0.5" />
      <circle cx="195" cy="108" r="14" fill="none" stroke="#14B8A6" strokeWidth="1.5" opacity="0.2" />
      <circle cx="195" cy="108" r="24" fill="none" stroke="#14B8A6" strokeWidth="1" opacity="0.1" />
      <circle cx="200" cy="112" r="95" fill="#155EEF" opacity="0.06" />
    </svg>
  );
}

function ImmuneShield({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#093344" />
          <stop offset="100%" stopColor="#0B4D5E" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Shield */}
      <path d="M200 38 L268 65 L268 128 Q268 175 200 198 Q132 175 132 128 L132 65 Z"
        fill="none" stroke="#14B8A6" strokeWidth="2.5" opacity="0.7" strokeLinejoin="round" />
      <path d="M200 58 L248 78 L248 128 Q248 160 200 175 Q152 160 152 128 L152 78 Z"
        fill="#14B8A6" opacity="0.08" />
      {/* Check inside shield */}
      <path d="M178 118 L193 133 L222 102" fill="none" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      {/* Antibody Y shapes */}
      {[[60,80],[330,75],[45,155],[345,150]].map(([cx,cy],i) => (
        <g key={i} transform={`translate(${cx},${cy}) rotate(${i*90})`} opacity="0.4">
          <line x1="0" y1="0" x2="0" y2="-18" stroke="#fff" strokeWidth="1.5" />
          <line x1="0" y1="-10" x2="-10" y2="-20" stroke="#fff" strokeWidth="1.5" />
          <line x1="0" y1="-10" x2="10" y2="-20" stroke="#fff" strokeWidth="1.5" />
        </g>
      ))}
      {/* Cell dots */}
      {[[80,185],[120,205],[290,195],[340,180],[360,80],[50,45]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="4.5" fill="#14B8A6" opacity="0.3" />
      ))}
      <circle cx="200" cy="118" r="100" fill="#14B8A6" opacity="0.05" />
    </svg>
  );
}

function MetabolicDiabetes({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0C2340" />
          <stop offset="100%" stopColor="#114068" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Hexagon glucose molecule */}
      {[0,1,2,3,4,5].map(i => {
        const a1 = (i * 60 - 30) * Math.PI / 180;
        const a2 = ((i+1) * 60 - 30) * Math.PI / 180;
        const r = 52;
        return <line key={i} x1={200 + r*Math.cos(a1)} y1={112 + r*Math.sin(a1)} x2={200 + r*Math.cos(a2)} y2={112 + r*Math.sin(a2)} stroke="#14B8A6" strokeWidth="2.5" opacity="0.65" />;
      })}
      {/* Atoms at corners */}
      {[0,1,2,3,4,5].map(i => {
        const a = (i * 60 - 30) * Math.PI / 180;
        return <circle key={i} cx={200 + 52*Math.cos(a)} cy={112 + 52*Math.sin(a)} r="5" fill="#14B8A6" opacity="0.6" />;
      })}
      {/* Center atom */}
      <circle cx="200" cy="112" r="7" fill="#14B8A6" opacity="0.4" />
      <circle cx="200" cy="112" r="16" fill="none" stroke="#14B8A6" strokeWidth="1" opacity="0.2" />
      {/* Metabolic pathway lines */}
      {[[110,60],[290,60],[320,155],[85,155]].map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="5" fill="#6E9EFF" opacity="0.5" />
          <line x1={cx} y1={cy} x2="200" y2="112" stroke="#6E9EFF" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
        </g>
      ))}
      {/* Molecular bonds */}
      <line x1="115" y1="60" x2="290" y2="60" stroke="#fff" strokeWidth="1" opacity="0.12" />
      <line x1="85" y1="155" x2="320" y2="155" stroke="#fff" strokeWidth="1" opacity="0.12" />
      <circle cx="200" cy="112" r="95" fill="#155EEF" opacity="0.06" />
    </svg>
  );
}

function EyeRetina({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#071C3D" />
          <stop offset="100%" stopColor="#0A3552" />
        </linearGradient>
        <radialGradient id={`iris-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A6BCC" />
          <stop offset="100%" stopColor="#0A2769" />
        </radialGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Eye outline */}
      <path d="M60 112 C100 60 160 42 200 42 C240 42 300 60 340 112 C300 164 240 183 200 183 C160 183 100 164 60 112 Z"
        fill="none" stroke="#fff" strokeWidth="2" opacity="0.3" />
      {/* Iris */}
      <circle cx="200" cy="112" r="55" fill={`url(#iris-${uid})`} opacity="0.8" />
      {/* Iris detail rings */}
      <circle cx="200" cy="112" r="45" fill="none" stroke="#4A9EFF" strokeWidth="0.8" opacity="0.4" />
      <circle cx="200" cy="112" r="35" fill="none" stroke="#4A9EFF" strokeWidth="0.8" opacity="0.3" />
      {/* Iris spokes */}
      {[0,30,60,90,120,150].map(deg => {
        const r1 = 28, r2 = 48;
        const a = deg * Math.PI / 180;
        return <line key={deg} x1={200+r1*Math.cos(a)} y1={112+r1*Math.sin(a)} x2={200+r2*Math.cos(a)} y2={112+r2*Math.sin(a)} stroke="#6EB5FF" strokeWidth="0.8" opacity="0.3" />;
      })}
      {/* Pupil */}
      <circle cx="200" cy="112" r="20" fill="#030A18" />
      <circle cx="208" cy="104" r="5" fill="#fff" opacity="0.3" />
      {/* DNA coil on side */}
      {[0,1,2,3].map(i => {
        const y = 62 + i * 22;
        return <g key={i}>
          <path d={`M340 ${y} C348 ${y+5} 355 ${y+11} 348 ${y+17}`} fill="none" stroke="#14B8A6" strokeWidth="1.5" opacity="0.55" strokeLinecap="round" />
          <line x1="340" y1={y+8} x2="348" y2={y+9} stroke="#14B8A6" strokeWidth="1" opacity="0.4" />
        </g>;
      })}
      <circle cx="200" cy="112" r="90" fill="#155EEF" opacity="0.06" />
    </svg>
  );
}

function LungsRespiratory({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#061B3A" />
          <stop offset="100%" stopColor="#0C3060" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Trachea */}
      <line x1="200" y1="30" x2="200" y2="80" stroke="#fff" strokeWidth="3" opacity="0.4" />
      <path d="M200 80 C180 80 148 85 128 95" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.35" />
      <path d="M200 80 C220 80 252 85 272 95" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.35" />
      {/* Left lung */}
      <path d="M128 95 C100 95 75 115 75 148 C75 178 100 195 128 198 C148 198 160 192 160 185 L160 95 Z"
        fill="none" stroke="#6BBFFF" strokeWidth="2" opacity="0.5" />
      {[110,125,140].map((y,i) => (
        <path key={i} d={`M${130-i*5} ${y} C${118-i*3} ${y+10} ${112-i*2} ${y+22}`} fill="none" stroke="#6BBFFF" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
      ))}
      {/* Right lung */}
      <path d="M272 95 C300 95 325 115 325 148 C325 178 300 195 272 198 C252 198 240 192 240 185 L240 95 Z"
        fill="none" stroke="#6BBFFF" strokeWidth="2" opacity="0.5" />
      {[110,125,140].map((y,i) => (
        <path key={i} d={`M${270+i*5} ${y} C${282+i*3} ${y+10} ${288+i*2} ${y+22}`} fill="none" stroke="#6BBFFF" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
      ))}
      {/* Molecular dots */}
      {[[340,45],[365,90],[355,155],[50,50],[35,110],[55,168]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#14B8A6" opacity="0.45" />
      ))}
      <circle cx="200" cy="130" r="95" fill="#155EEF" opacity="0.06" />
    </svg>
  );
}

function NeuroDevelopment({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D1F42" />
          <stop offset="100%" stopColor="#162E60" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Abstract brain profile */}
      <path d="M160 170 C135 170 110 152 105 128 C100 104 112 85 130 80 C132 66 142 55 158 55 C165 44 180 38 195 43 C210 36 226 40 236 52 C252 52 265 66 265 82 C278 86 288 102 285 120 C282 142 265 158 245 162 Z"
        fill="none" stroke="#7FAEFF" strokeWidth="2" opacity="0.45" />
      {/* Connections / neural web */}
      {[
        [135,112],[175,65],[215,60],[250,90],[262,130],
        [235,160],[185,165],[148,148],[200,112]
      ].map(([cx,cy],i,arr) => (
        <circle key={i} cx={cx} cy={cy} r="4.5" fill="#14B8A6" opacity={i===8?0.7:0.45} />
      ))}
      {[
        [135,112,175,65],[175,65,215,60],[215,60,250,90],
        [250,90,262,130],[262,130,235,160],[235,160,185,165],
        [185,165,148,148],[148,148,135,112],[135,112,200,112],
        [175,65,200,112],[250,90,200,112],[185,165,200,112]
      ].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7FAEFF" strokeWidth="1" opacity="0.25" />
      ))}
      {/* Outer satellites */}
      {[[65,55],[340,60],[55,175],[345,170]].map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="5" fill="#14B8A6" opacity="0.4" />
          <line x1={cx} y1={cy} x2={[135,250,148,235][i]} y2={[112,90,148,160][i]} stroke="#14B8A6" strokeWidth="0.8" opacity="0.2" />
        </g>
      ))}
      <circle cx="200" cy="112" r="90" fill="#155EEF" opacity="0.07" />
    </svg>
  );
}

function PharmacoGenomics({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A1E3D" />
          <stop offset="100%" stopColor="#12336A" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Capsule 1 */}
      <rect x="130" y="80" width="80" height="34" rx="17" fill="none" stroke="#fff" strokeWidth="2" opacity="0.45" />
      <line x1="170" y1="80" x2="170" y2="114" stroke="#fff" strokeWidth="1.5" opacity="0.3" />
      <rect x="130" y="80" width="40" height="34" rx="17" fill="#155EEF" opacity="0.3" />
      {/* Capsule 2 */}
      <rect x="210" y="108" width="70" height="28" rx="14" fill="none" stroke="#14B8A6" strokeWidth="2" opacity="0.55" />
      <line x1="245" y1="108" x2="245" y2="136" stroke="#14B8A6" strokeWidth="1.5" opacity="0.35" />
      <rect x="210" y="108" width="35" height="28" rx="14" fill="#14B8A6" opacity="0.2" />
      {/* Tablet */}
      <rect x="115" y="138" width="50" height="32" rx="8" fill="none" stroke="#6E9EFF" strokeWidth="2" opacity="0.45" />
      <line x1="115" y1="154" x2="165" y2="154" stroke="#6E9EFF" strokeWidth="1.2" opacity="0.35" />
      {/* DNA helix right side */}
      {[0,1,2,3,4].map(i => {
        const y = 55 + i * 26;
        return <g key={i}>
          <path d={`M310 ${y} C322 ${y+6} 332 ${y+13} 322 ${y+20}`} fill="none" stroke="#fff" strokeWidth="1.8" opacity="0.45" strokeLinecap="round" />
          <path d={`M338 ${y+2} C326 ${y+8} 316 ${y+15} 326 ${y+22}`} fill="none" stroke="#14B8A6" strokeWidth="1.8" opacity="0.5" strokeLinecap="round" />
          <line x1="318" y1={y+10} x2="330" y2={y+11} stroke="#14B8A6" strokeWidth="1.2" opacity="0.4" />
        </g>;
      })}
      {/* Connection lines */}
      <line x1="280" y1="112" x2="308" y2="112" stroke="#6E9EFF" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
      <circle cx="200" cy="112" r="90" fill="#155EEF" opacity="0.06" />
    </svg>
  );
}

function Thyroid({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#072838" />
          <stop offset="100%" stopColor="#0A3D50" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Thyroid butterfly lobes */}
      <ellipse cx="165" cy="112" rx="50" ry="65" fill="none" stroke="#14B8A6" strokeWidth="2.5" opacity="0.6" />
      <ellipse cx="235" cy="112" rx="50" ry="65" fill="none" stroke="#14B8A6" strokeWidth="2.5" opacity="0.6" />
      <ellipse cx="165" cy="112" rx="35" ry="48" fill="#14B8A6" opacity="0.08" />
      <ellipse cx="235" cy="112" rx="35" ry="48" fill="#14B8A6" opacity="0.08" />
      {/* Isthmus */}
      <rect x="178" y="102" width="44" height="20" rx="10" fill="#14B8A6" opacity="0.25" />
      {/* Molecular rings around */}
      {[[80,55],[320,60],[75,168],[325,165]].map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="12" fill="none" stroke="#14B8A6" strokeWidth="1.5" opacity="0.35" />
          <circle cx={cx} cy={cy} r="5" fill="#14B8A6" opacity="0.4" />
        </g>
      ))}
      {/* DNA snippets top */}
      <path d="M175 35 C185 42 195 50 185 58" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
      <path d="M200 33 C210 40 220 48 210 56" fill="none" stroke="#6E9EFF" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
      <line x1="183" y1="44" x2="205" y2="43" stroke="#14B8A6" strokeWidth="1" opacity="0.4" />
      <circle cx="200" cy="112" r="90" fill="#14B8A6" opacity="0.05" />
    </svg>
  );
}

function ExomeSequencing({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#050D1A" />
          <stop offset="100%" stopColor="#091830" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Sequencing read bars — genome browser style */}
      {[
        [55,48,180,12],[55,64,210,12],[55,80,160,12],[55,96,190,12],
        [55,112,175,12],[55,128,200,12],[55,144,155,12],[55,160,215,12],
      ].map(([x,y,w,h],i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx="3" fill="#1547C0" opacity="0.55" />
          {/* SNP marks */}
          {[30,80,130].map(offset => (
            <rect key={offset} x={x+offset} y={y} width="4" height={h} rx="1" fill="#14B8A6" opacity={0.7} />
          ))}
        </g>
      ))}
      {/* Reference bar */}
      <rect x="55" y="30" width="215" height="8" rx="4" fill="#fff" opacity="0.12" />
      {/* Coverage depth chart */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <rect key={i} x={280+i*9} y={225 - [60,85,100,95,110,100,80,75,90,65][i]} width="7" height={[60,85,100,95,110,100,80,75,90,65][i]} rx="2" fill="#155EEF" opacity="0.5" />
      ))}
      {/* Labels dots */}
      <text x="290" y="28" fill="#14B8A6" fontSize="9" fontFamily="monospace" opacity="0.6">WES</text>
      <text x="58" y="22" fill="#fff" fontSize="8" fontFamily="monospace" opacity="0.3">chr17:41,196,311</text>
      <circle cx="335" cy="112" r="55" fill="#155EEF" opacity="0.06" />
    </svg>
  );
}

function CardioMetabolic({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1E3D" />
          <stop offset="100%" stopColor="#15306A" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Heart outline */}
      <path d="M200 155 C200 155 145 120 135 96 C125 72 140 55 160 58 C175 58 188 70 200 85 C212 70 225 58 240 58 C260 55 275 72 265 96 C255 120 200 155 200 155 Z"
        fill="none" stroke="#E05C7A" strokeWidth="2.5" opacity="0.7" />
      {/* EKG line */}
      <polyline points="55,112 90,112 105,75 118,150 130,112 170,112 180,95 190,130 200,112 340,112"
        fill="none" stroke="#14B8A6" strokeWidth="2" opacity="0.65" strokeLinejoin="round" strokeLinecap="round" />
      {/* Metabolic hexagon */}
      {[0,1,2,3,4,5].map(i => {
        const a1 = (i * 60 - 90) * Math.PI / 180;
        const a2 = ((i+1) * 60 - 90) * Math.PI / 180;
        return <line key={i} x1={340+30*Math.cos(a1)} y1={75+30*Math.sin(a1)} x2={340+30*Math.cos(a2)} y2={75+30*Math.sin(a2)} stroke="#6E9EFF" strokeWidth="1.5" opacity="0.45" />;
      })}
      <circle cx="340" cy="75" r="8" fill="#6E9EFF" opacity="0.25" />
      <line x1="310" y1="90" x2="255" y2="100" stroke="#6E9EFF" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
      <circle cx="200" cy="112" r="90" fill="#155EEF" opacity="0.06" />
    </svg>
  );
}

function WholeGenome({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#04101E" />
          <stop offset="100%" stopColor="#081428" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Chromosome pairs */}
      {[0,1,2,3,4,5,6].map(i => {
        const x = 45 + i * 46;
        const h = [80,95,70,88,75,92,68][i];
        const y = 112 - h/2;
        return (
          <g key={i}>
            <rect x={x} y={y} width="8" height={h} rx="4" fill="#155EEF" opacity="0.5" />
            <rect x={x+12} y={y+4} width="8" height={h-8} rx="4" fill="#1547C0" opacity="0.4" />
            <line x1={x+4} y1={112} x2={x+16} y2={112} stroke="#14B8A6" strokeWidth="1.5" opacity="0.5" />
          </g>
        );
      })}
      {/* Genome spiral right */}
      {[0,1,2,3,4,5,6].map(i => {
        const y = 45 + i * 22;
        return <g key={i}>
          <path d={`M310 ${y} C322 ${y+5} 335 ${y+11} 325 ${y+17}`} fill="none" stroke="#fff" strokeWidth="1.8" opacity="0.4" strokeLinecap="round" />
          <path d={`M345 ${y+2} C333 ${y+7} 320 ${y+13} 330 ${y+19}`} fill="none" stroke="#14B8A6" strokeWidth="1.8" opacity="0.45" strokeLinecap="round" />
          <line x1="320" y1={y+9} x2="334" y2={y+10} stroke="#14B8A6" strokeWidth="1.2" opacity="0.35" />
        </g>;
      })}
      <text x="270" y="28" fill="#14B8A6" fontSize="9" fontFamily="monospace" opacity="0.55">WGS</text>
      <circle cx="200" cy="112" r="90" fill="#155EEF" opacity="0.05" />
    </svg>
  );
}

function GutMicrobiome({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#073428" />
          <stop offset="100%" stopColor="#0A4A35" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Intestine outline — stylized coils */}
      <path d="M120 55 C160 55 185 75 185 105 C185 135 160 145 130 145 C100 145 80 135 80 115 C80 95 100 88 120 88 C140 88 155 100 155 115 C155 130 142 140 128 140"
        fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.35" strokeLinecap="round" />
      <path d="M128 140 C110 142 95 155 100 170 C105 185 125 190 148 188 C175 185 200 170 220 158 C245 143 275 140 295 148"
        fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.35" strokeLinecap="round" />
      <path d="M295 148 C315 156 325 170 315 185 C305 198 282 200 262 195"
        fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.3" strokeLinecap="round" />
      {/* Bacteria dots — varied sizes */}
      {[
        [55,85,5],[350,60,6],[340,160,4],[60,170,5],
        [220,65,4],[270,95,5],[310,120,4],[240,185,5],
        [170,190,4],[90,130,3],[360,115,4],[155,60,3],
      ].map(([cx,cy,r],i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#14B8A6" opacity={0.45 + (i%3)*0.1} />
      ))}
      {/* Oval bacteria */}
      {[[370,85,10,6],[45,145,9,5],[330,185,11,6]].map(([cx,cy,rx,ry],i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke="#14B8A6" strokeWidth="1.5" opacity="0.5" />
      ))}
      {/* DNA coil */}
      {[0,1,2,3].map(i => {
        const y = 40 + i * 22;
        return <g key={i}>
          <path d={`M310 ${y} C320 ${y+5} 328 ${y+11} 320 ${y+17}`} fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
          <line x1="312" y1={y+9} x2="322" y2={y+10} stroke="#14B8A6" strokeWidth="1" opacity="0.4" />
        </g>;
      })}
      {/* Diversity label */}
      <circle cx="200" cy="112" r="85" fill="#14B8A6" opacity="0.05" />
    </svg>
  );
}

function BreastOvarianCancer({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A0A2E" />
          <stop offset="100%" stopColor="#3D1055" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Double helix */}
      {[0,1,2,3,4].map(i => {
        const y = 55 + i * 26;
        return <g key={i}>
          <path d={`M60 ${y} C75 ${y+6} 88 ${y+13} 78 ${y+20}`} fill="none" stroke="#E8A0CC" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
          <path d={`M98 ${y+2} C83 ${y+8} 70 ${y+15} 80 ${y+22}`} fill="none" stroke="#C06BA8" strokeWidth="2" opacity="0.55" strokeLinecap="round" />
          <line x1="75" y1={y+10} x2="87" y2={y+11} stroke="#E8A0CC" strokeWidth="1.2" opacity="0.45" />
        </g>;
      })}
      {/* Ribbon / awareness symbol — abstract arc */}
      <path d="M200 62 C185 62 172 75 172 92 C172 110 185 120 200 120"
        fill="none" stroke="#E8A0CC" strokeWidth="3" opacity="0.65" strokeLinecap="round" />
      <path d="M200 62 C215 62 228 75 228 92 C228 110 215 120 200 120"
        fill="none" stroke="#C06BA8" strokeWidth="3" opacity="0.65" strokeLinecap="round" />
      <path d="M200 120 L190 145 L200 138 L210 145 L200 120"
        fill="none" stroke="#E8A0CC" strokeWidth="2.5" opacity="0.6" strokeLinejoin="round" />
      {/* Shield */}
      <path d="M300 55 L335 70 L335 108 Q335 132 300 145 Q265 132 265 108 L265 70 Z"
        fill="none" stroke="#C06BA8" strokeWidth="2" opacity="0.6" strokeLinejoin="round" />
      <path d="M287 100 L296 111 L320 85" fill="none" stroke="#E8A0CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      {/* Scatter dots */}
      {[[60,185],[100,195],[340,185],[355,150],[150,205],[260,205]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#E8A0CC" opacity="0.3" />
      ))}
      <circle cx="200" cy="112" r="95" fill="#8B2BB9" opacity="0.07" />
    </svg>
  );
}

function ColorectalCancer({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#082030" />
          <stop offset="100%" stopColor="#0D3344" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Digestive tract path */}
      <path d="M150 40 L250 40 C275 40 290 58 290 80 C290 102 272 115 250 115 L150 115 C128 115 112 128 112 150 C112 172 128 185 150 185 L280 185"
        fill="none" stroke="#5CB8A0" strokeWidth="3" opacity="0.55" strokeLinecap="round" strokeLinejoin="round" />
      {/* Microbiome dots along path */}
      {[[200,40],[250,40],[275,65],[275,95],[200,115],[150,115],[125,150],[150,185],[215,185],[280,185]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r={i%2===0?4:3} fill="#14B8A6" opacity={0.5} />
      ))}
      {/* Scatter dots — microbiome */}
      {[[55,55],[350,50],[355,180],[45,175],[55,130],[340,130]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#14B8A6" opacity="0.4" />
      ))}
      {/* DNA coil */}
      {[0,1,2,3].map(i => {
        const y = 55 + i * 28;
        return <g key={i}>
          <path d={`M320 ${y} C332 ${y+6} 342 ${y+14} 332 ${y+22}`} fill="none" stroke="#fff" strokeWidth="1.8" opacity="0.4" strokeLinecap="round" />
          <path d={`M348 ${y+3} C336 ${y+9} 326 ${y+17} 336 ${y+25}`} fill="none" stroke="#5CB8A0" strokeWidth="1.8" opacity="0.45" strokeLinecap="round" />
          <line x1="330" y1={y+12} x2="342" y2={y+13} stroke="#14B8A6" strokeWidth="1.2" opacity="0.4" />
        </g>;
      })}
      <circle cx="200" cy="112" r="90" fill="#14B8A6" opacity="0.05" />
    </svg>
  );
}

function ProstateCancer({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#071730" />
          <stop offset="100%" stopColor="#0E2E5C" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#bg-${uid})`} />
      {/* Abstract prostate gland — walnut shape */}
      <ellipse cx="200" cy="112" rx="62" ry="55" fill="none" stroke="#6BAAFF" strokeWidth="2.5" opacity="0.55" />
      <ellipse cx="200" cy="112" rx="44" ry="39" fill="#155EEF" opacity="0.1" />
      {/* Median groove */}
      <line x1="200" y1="58" x2="200" y2="167" stroke="#6BAAFF" strokeWidth="1.5" opacity="0.25" />
      {/* Prevention shield */}
      <path d="M305 50 L338 64 L338 100 Q338 122 305 135 Q272 122 272 100 L272 64 Z"
        fill="none" stroke="#6BAAFF" strokeWidth="2" opacity="0.6" strokeLinejoin="round" />
      <path d="M294 94 L303 104 L326 78" fill="none" stroke="#6BAAFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      {/* DNA coil */}
      {[0,1,2,3].map(i => {
        const y = 55 + i * 28;
        return <g key={i}>
          <path d={`M55 ${y} C67 ${y+6} 77 ${y+14} 67 ${y+22}`} fill="none" stroke="#fff" strokeWidth="1.8" opacity="0.35" strokeLinecap="round" />
          <path d={`M83 ${y+3} C71 ${y+9} 61 ${y+17} 71 ${y+25}`} fill="none" stroke="#6BAAFF" strokeWidth="1.8" opacity="0.4" strokeLinecap="round" />
          <line x1="65" y1={y+12} x2="77" y2={y+13} stroke="#6BAAFF" strokeWidth="1.2" opacity="0.4" />
        </g>;
      })}
      {/* Dots */}
      {[[350,170],[55,175],[350,55]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#6BAAFF" opacity="0.35" />
      ))}
      <circle cx="200" cy="112" r="90" fill="#155EEF" opacity="0.07" />
    </svg>
  );
}

/* ─── Map ─────────────────────────────────────────────────────────────── */

const ILLUSTRATION_MAP: Record<string, (uid: string) => JSX.Element> = {
  "panel-cancer-hereditario":              uid => <DNAHelix uid={uid} />,
  "panel-cancer-mama-hereditario":         uid => <BreastOvarianCancer uid={uid} />,
  "panel-cancer-colorrectal-poliposis":    uid => <ColorectalCancer uid={uid} />,
  "panel-cancer-prostata-hereditario":     uid => <ProstateCancer uid={uid} />,
  "panel-core-cancer-hereditario":         uid => <DNAHelix uid={uid} />,
  "panel-cardio-pulmonar":                 uid => <CardioLungs uid={uid} />,
  "panel-neurologico":                     uid => <NeuralBrain uid={uid} />,
  "neuro-panel-wgs":                       uid => <NeuralBrain uid={uid} />,
  "panel-inmunologico":                    uid => <ImmuneShield uid={uid} />,
  "panel-diabetes":                        uid => <MetabolicDiabetes uid={uid} />,
  "reporte-cardiometabolico":              uid => <CardioMetabolic uid={uid} />,
  "panel-oftalmologico":                   uid => <EyeRetina uid={uid} />,
  "panel-respiratorio":                    uid => <LungsRespiratory uid={uid} />,
  "panel-autismo":                         uid => <NeuroDevelopment uid={uid} />,
  "panel-farmacogenomica":                 uid => <PharmacoGenomics uid={uid} />,
  "panel-tiroides":                        uid => <Thyroid uid={uid} />,
  "exoma-completo":                        uid => <ExomeSequencing uid={uid} />,
  "microbiota-intestinal":                 uid => <GutMicrobiome uid={uid} />,
};

const FALLBACK = (uid: string) => <DNAHelix uid={uid} />;

/* ─── Export ──────────────────────────────────────────────────────────── */

export default function ProductIllustration({ productId, alt, className = "" }: Props) {
  const uid = productId; // stable, unique per card
  const render = ILLUSTRATION_MAP[productId] ?? FALLBACK;

  return (
    <figure
      aria-label={alt}
      className={`relative overflow-hidden rounded-t-2xl ${className}`}
      style={{ aspectRatio: "16/9" }}
    >
      {render(uid)}
    </figure>
  );
}
