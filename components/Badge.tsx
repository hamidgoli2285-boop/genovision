import type { ReactNode } from "react";

type Tone = "navy" | "cobalt" | "teal" | "neutral" | "amber" | "emerald";

type Props = {
  children: ReactNode;
  tone?: Tone;
  icon?: ReactNode;
  size?: "sm" | "md";
  className?: string;
};

const tones: Record<Tone, string> = {
  navy: "bg-navy-50 text-navy-700 ring-navy-100",
  cobalt: "bg-cobalt-50 text-cobalt-700 ring-cobalt-100",
  teal: "bg-teal-50 text-teal-700 ring-teal-100",
  neutral: "bg-slate-100 text-slate-700 ring-slate-200",
  amber: "bg-amber-50 text-amber-800 ring-amber-100",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
};

const sizes = {
  sm: "text-[11px] px-2 py-0.5",
  md: "text-xs px-2.5 py-1",
};

export default function Badge({
  children,
  tone = "navy",
  icon,
  size = "md",
  className = "",
}: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium ring-1 ${tones[tone]} ${sizes[size]} ${className}`}
    >
      {icon && <span aria-hidden>{icon}</span>}
      {children}
    </span>
  );
}
