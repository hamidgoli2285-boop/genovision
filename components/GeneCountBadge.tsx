"use client";

import { useLanguage } from "@/lib/language-context";

type Props = {
  count: number;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

export default function GeneCountBadge({
  count,
  label,
  size = "md",
  className = "",
}: Props) {
  const { t } = useLanguage();
  const displayLabel = label ?? t.common.genesAnalyzed;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cobalt-50 to-teal-50 ring-1 ring-cobalt-100 text-cobalt-800 font-semibold ${sizes[size]} ${className}`}
    >
      <span
        aria-hidden
        className="grid h-5 w-5 place-items-center rounded-full bg-cobalt text-white text-[10px] font-bold"
      >
        {count > 99 ? "G" : count}
      </span>
      <span>
        <span className="font-bold">{count}</span>{" "}
        <span className="font-medium text-cobalt-700">{displayLabel}</span>
      </span>
    </span>
  );
}
