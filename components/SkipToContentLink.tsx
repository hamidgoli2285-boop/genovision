"use client";

import { useLanguage } from "@/lib/language-context";

/**
 * Accessibility skip link. Reads its label from the translation system
 * instead of a hardcoded string. Hydration-safe: LanguageProvider's initial
 * state is always "es" on both server and client — any stored preference is
 * applied in a useEffect after mount, so the first render (what hydration
 * compares) is always identical on server and client.
 */
export default function SkipToContentLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
    >
      {t.layout.skipToContent}
    </a>
  );
}
