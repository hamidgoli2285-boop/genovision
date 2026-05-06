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
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt-600">
          <span aria-hidden className="h-1 w-4 rounded-full bg-teal opacity-80" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-semibold text-navy text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-[1.75] text-ink-muted sm:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
