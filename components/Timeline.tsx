import type { ReactNode } from "react";

export type TimelineItem = {
  title: string;
  description?: string;
  icon?: ReactNode;
};

type Props = {
  items: TimelineItem[];
  className?: string;
};

export default function Timeline({ items, className = "" }: Props) {
  return (
    <ol className={`relative space-y-6 ${className}`}>
      <span
        aria-hidden
        className="absolute left-[18px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cobalt-200 via-cobalt-100 to-transparent"
      />
      {items.map((item, idx) => (
        <li key={idx} className="relative flex gap-5 pl-0">
          <div
            aria-hidden
            className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-cobalt to-cobalt-700 text-sm font-semibold text-white shadow-sm ring-4 ring-white"
          >
            {item.icon ?? idx + 1}
          </div>
          <div className="flex-1 pt-1.5">
            <h3 className="font-display text-base font-semibold text-navy sm:text-lg">
              {item.title}
            </h3>
            {item.description && (
              <p className="mt-1 text-sm leading-relaxed text-ink-muted sm:text-base">
                {item.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
