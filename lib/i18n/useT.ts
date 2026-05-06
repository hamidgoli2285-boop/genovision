"use client";

import { useContext } from "react";
import { LanguageContext } from "@/components/LanguageProvider";
import { TRANSLATIONS, type Dictionary } from "./translations";
import type { Locale } from "./types";

/**
 * Hook returning the current locale and the translation dictionary.
 * Usage:
 *   const { t, locale, setLocale } = useT();
 *   <h1>{t.home.heroTitle1}</h1>
 */
export function useT(): {
  t: Dictionary;
  locale: Locale;
  setLocale: (l: Locale) => void;
  ready: boolean;
} {
  const { locale, setLocale, ready } = useContext(LanguageContext);
  return { t: TRANSLATIONS[locale], locale, setLocale, ready };
}
