"use client";

import { useT } from "@/lib/i18n/useT";
import type { Locale } from "@/lib/i18n/types";

type Props = {
  className?: string;
  size?: "sm" | "md";
};

export default function LanguageSwitcher({
  className = "",
  size = "sm",
}: Props) {
  const { t, locale, setLocale } = useT();

  const baseBtn =
    size === "md"
      ? "px-3 py-1.5 text-sm"
      : "px-2.5 py-1 text-xs";

  const btnClass = (val: Locale) =>
    `${baseBtn} font-semibold rounded-full transition-colors ${
      locale === val
        ? "bg-navy text-white shadow-sm"
        : "text-navy/70 hover:text-navy"
    }`;

  return (
    <div
      role="group"
      aria-label={t.langSwitcher.label}
      className={`inline-flex items-center gap-0.5 rounded-full bg-white p-0.5 ring-1 ring-slate-200 ${className}`}
    >
      <button
        type="button"
        aria-pressed={locale === "es"}
        aria-label={`${t.langSwitcher.switchTo} ${t.langSwitcher.es}`}
        onClick={() => setLocale("es")}
        className={btnClass("es")}
      >
        {t.langSwitcher.es}
      </button>
      <button
        type="button"
        aria-pressed={locale === "en"}
        aria-label={`${t.langSwitcher.switchTo} ${t.langSwitcher.en}`}
        onClick={() => setLocale("en")}
        className={btnClass("en")}
      >
        {t.langSwitcher.en}
      </button>
    </div>
  );
}
