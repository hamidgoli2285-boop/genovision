type Item = {
  label: string;
  sub?: string;
};

const items: Item[] = [
  { label: "161 genes", sub: "evaluados" },
  { label: "Tecnología NGS", sub: "secuenciación de nueva generación" },
  { label: "Muestra bucal o saliva", sub: "no invasiva" },
  { label: "Resultados aprox. 28 días", sub: "tiempo estimado" },
  { label: "Interpretación profesional", sub: "incluida" },
];

export default function TrustBar() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((it) => (
          <li
            key={it.label}
            className="flex items-start gap-2.5 text-left"
          >
            <span
              aria-hidden
              className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-navy">{it.label}</div>
              {it.sub && (
                <div className="text-[11px] text-ink-muted">{it.sub}</div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
