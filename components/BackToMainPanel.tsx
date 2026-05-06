"use client";

import Link from "next/link";
import { MAIN_PANEL_HREF } from "@/lib/subpanels";
import { useLanguage } from "@/lib/language-context";

type Props = {
  className?: string;
};

export default function BackToMainPanel({ className = "" }: Props) {
  const { t } = useLanguage();

  return (
    <Link
      href={MAIN_PANEL_HREF}
      className={`inline-flex items-center gap-2 text-sm font-semibold text-cobalt hover:text-cobalt-700 ${className}`}
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
        aria-hidden
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      {t.subpanelHero.viewFullPanel}
    </Link>
  );
}
