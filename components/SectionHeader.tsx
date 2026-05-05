import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <header className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cobalt-700`}
        >
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse-soft"
          />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
