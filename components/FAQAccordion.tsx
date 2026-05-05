"use client";

import { useState } from "react";

export type FAQItem = {
  q: string;
  a: string;
};

type Props = {
  items: FAQItem[];
  className?: string;
};

export default function FAQAccordion({ items, className = "" }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div
      className={`divide-y divide-slate-200 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 ${className}`}
    >
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-slate-50 sm:px-6"
            >
              <span className="font-display text-base font-semibold text-navy sm:text-lg">
                {item.q}
              </span>
              <span
                aria-hidden
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cobalt-50 text-cobalt transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted sm:px-6 sm:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
