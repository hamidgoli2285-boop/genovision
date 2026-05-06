"use client";

import { useLanguage } from "@/lib/language-context";

type StepIcon = "sample" | "extract" | "sequence" | "analyze" | "report";

const ICONS: StepIcon[] = ["sample", "extract", "sequence", "analyze", "report"];

const Icon = ({ kind }: { kind: StepIcon }) => {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (kind) {
    case "sample":
      return (
        <svg {...common} aria-hidden>
          <path d="M9 2h6v5l3 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L9 7Z" />
          <path d="M7 14h10" />
        </svg>
      );
    case "extract":
      return (
        <svg {...common} aria-hidden>
          <path d="M5 3v4M19 3v4M5 17v4M19 17v4" />
          <path d="M7 7c4 4 6 6 10 10M17 7C13 11 11 13 7 17" />
        </svg>
      );
    case "sequence":
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M7 10v4M11 10v4M15 10v4M19 10v4" />
        </svg>
      );
    case "analyze":
      return (
        <svg {...common} aria-hidden>
          <path d="M3 12h4l3-8 4 16 3-8h4" />
        </svg>
      );
    case "report":
      return (
        <svg {...common} aria-hidden>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6M9 13h6M9 17h4" />
        </svg>
      );
  }
};

type Props = {
  className?: string;
};

export default function DNAPipeline({ className = "" }: Props) {
  const { t } = useLanguage();
  const steps = t.dnaPipeline.steps;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-8 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-cobalt-200 to-transparent hidden md:block"
      />
      <ol className="relative grid gap-6 md:grid-cols-5 md:gap-3">
        {steps.map((s, i) => (
          <li key={s.label} className="flex items-center gap-4 md:flex-col md:text-center">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cobalt-50 to-teal-50 text-cobalt-700 ring-1 ring-cobalt-100">
              <Icon kind={ICONS[i]} />
            </div>
            <div>
              <div className="flex items-center gap-2 md:justify-center">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  {t.dnaPipeline.step} {i + 1}
                </span>
              </div>
              <div className="mt-0.5 font-display font-semibold text-navy">
                {s.label}
              </div>
              <div className="text-xs text-ink-muted">{s.sub}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
