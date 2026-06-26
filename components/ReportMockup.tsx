import React from "react";

const ROWS = [
  { gene: "BRCA1", panel: "Hereditary Cancer", result: "Detected", risk: "high" },
  { gene: "MLH1",  panel: "Lynch Syndrome",    result: "Negative", risk: "low"  },
  { gene: "PALB2", panel: "Hereditary Cancer", result: "Variant",  risk: "mod"  },
  { gene: "TP53",  panel: "Li-Fraumeni",       result: "Negative", risk: "low"  },
];

const RISK_STYLES: Record<string, string> = {
  high: "bg-red-50 text-red-700 ring-1 ring-red-200",
  mod:  "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  low:  "bg-teal-50 text-teal-700 ring-1 ring-teal-200",
};

function Card({ offset, rotate, opacity = 1, children }: {
  offset: string;
  rotate: string;
  opacity?: number;
  children?: React.ReactNode;
}) {
  return (
    <div
      aria-hidden={!children ? true : undefined}
      style={{
        transform: `${offset} rotate(${rotate})`,
        opacity,
        position: "absolute",
        inset: 0,
        borderRadius: "1rem",
        background: "white",
        boxShadow:
          "0 4px 6px -1px rgba(6,27,58,0.07), 0 10px 28px -4px rgba(6,27,58,0.10)",
      }}
    >
      {children}
    </div>
  );
}

export default function ReportMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full select-none ${className}`} style={{ aspectRatio: "4/5" }}>
      {/* Back card — deepest shadow layer */}
      <Card offset="translate(12px, 14px)" rotate="2.2deg" opacity={0.45} />

      {/* Middle card */}
      <Card offset="translate(6px, 7px)" rotate="1.1deg" opacity={0.72} />

      {/* Front card — full detail */}
      <Card offset="translate(0px, 0px)" rotate="0deg">
        {/* Header bar */}
        <div className="flex items-center justify-between rounded-t-[1rem] bg-navy px-5 py-3.5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-300">
              GenoVision · Genomic Report
            </p>
            <p className="mt-0.5 text-[11px] text-white/50">ID: GV-2024-08471</p>
          </div>
          <div className="rounded-md bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-teal-300 ring-1 ring-white/10">
            Final
          </div>
        </div>

        {/* Body */}
        <div className="px-5 py-4">
          {/* Section label */}
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
            Panel Results — Hereditary Cancer
          </p>

          {/* Column headers */}
          <div className="mb-1.5 grid grid-cols-3 gap-2 border-b border-slate-100 pb-1.5 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
            <span>Gene</span>
            <span>Panel</span>
            <span className="text-right">Result</span>
          </div>

          {/* Data rows */}
          <div className="space-y-1.5">
            {ROWS.map((r) => (
              <div
                key={r.gene}
                className="grid grid-cols-3 items-center gap-2 rounded-md px-1.5 py-1 odd:bg-slate-50"
              >
                <span className="text-[11px] font-bold text-navy">{r.gene}</span>
                <span className="text-[10px] text-slate-500 leading-tight">{r.panel}</span>
                <span className={`ml-auto inline-flex rounded-full px-2 py-0.5 text-[9px] font-semibold ${RISK_STYLES[r.risk]}`}>
                  {r.result}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-4 border-t border-slate-100" />

          {/* Summary badge row */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                Variants of clinical significance
              </p>
              <p className="mt-0.5 text-[13px] font-bold text-navy">1 detected · 3 negative</p>
            </div>
            <div className="rounded-lg bg-cobalt-50 px-3 py-2 text-center ring-1 ring-cobalt-100">
              <p className="text-[9px] font-semibold uppercase tracking-wider text-cobalt-600">
                161 Genes
              </p>
              <p className="text-[10px] font-bold text-cobalt-700">Analyzed</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 ring-1 ring-slate-100">
            <div className="h-2 w-2 rounded-full bg-teal-400" />
            <p className="text-[10px] text-slate-500">
              Certified molecular laboratory · CAP/ISO 15189
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
