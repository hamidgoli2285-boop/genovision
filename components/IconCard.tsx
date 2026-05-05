import type { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  icon?: ReactNode;
  variant?: "default" | "compact";
  className?: string;
};

export default function IconCard({
  title,
  description,
  icon,
  variant = "default",
  className = "",
}: Props) {
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200/80 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover hover:ring-cobalt-200 ${className}`}
    >
      {icon && (
        <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cobalt-50 to-teal-50 text-cobalt-700 ring-1 ring-cobalt-100 transition-colors group-hover:from-cobalt-100">
          {icon}
        </div>
      )}
      <h3
        className={`font-display font-semibold text-navy ${
          variant === "compact" ? "text-base" : "text-lg"
        }`}
      >
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </div>
  );
}
