"use client";

import { useLanguage } from "@/lib/language-context";

type Props = {
  text?: string;
  className?: string;
};

export default function MedicalDisclaimer({ text, className = "" }: Props) {
  const { t } = useLanguage();
  const displayText = text ?? t.medicalDisclaimer.text;

  return (
    <div
      role="note"
      className={`flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-sm leading-relaxed text-amber-900 sm:p-6 ${className}`}
    >
      <span
        aria-hidden
        className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-800"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      </span>
      <p>
        <strong className="font-semibold">{t.medicalDisclaimer.important}:</strong>{" "}
        {displayText}
      </p>
    </div>
  );
}
