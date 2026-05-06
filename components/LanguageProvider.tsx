"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/lib/i18n/types";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  ready: boolean;
};

export const LanguageContext = createContext<Ctx>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  ready: false,
});

function readInitialLocale(): Locale {
  if (typeof document === "undefined") return DEFAULT_LOCALE;
  const attr = document.documentElement.getAttribute("data-lang");
  if (attr === "es" || attr === "en") return attr;
  return DEFAULT_LOCALE;
}

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Always start as the default to keep SSR and first-paint markup identical;
  // the no-flicker init script in <head> sets <html data-lang> + lang attrs
  // synchronously before hydration, and the useEffect below reconciles state.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = readInitialLocale();
    setLocaleState(initial);
    setReady(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, l);
    } catch {
      // ignore
    }
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-lang", l);
      document.documentElement.setAttribute(
        "lang",
        l === "en" ? "en" : "es-MX",
      );
    }
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, ready }),
    [locale, setLocale, ready],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
