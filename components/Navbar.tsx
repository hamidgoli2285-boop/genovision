"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import CTAButton from "./CTAButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";
import { useT } from "@/lib/i18n/useT";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useT();

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.productos, href: "/productos" },
    { label: t.nav.proceso, href: "/proceso" },
    { label: t.nav.medicos, href: "/medicos" },
    { label: t.nav.faq, href: "/preguntas-frecuentes" },
    { label: t.nav.contacto, href: "/contacto" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-[0_1px_0_rgba(15,23,42,0.06)]"
          : "bg-white/0"
      }`}
    >
      <div className="mx-auto flex h-44 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo size="xl" />

        <nav
          aria-label={t.nav.mainNav}
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-cobalt-700"
                  : "text-navy/80 hover:text-navy"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span
                  aria-hidden
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-cobalt"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <CTAButton
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            external
            variant="whatsapp"
            size="md"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9.9.9-2.8-.2-.3A9 9 0 1 1 12 20.5Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3 1 2.6 1.1 2.7.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
              </svg>
            }
            iconPosition="left"
          >
            {t.nav.whatsapp}
          </CTAButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-navy-50"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`lg:hidden ${
          open ? "block" : "hidden"
        } border-t border-slate-100 bg-white`}
      >
        <nav
          aria-label={t.nav.mobileNav}
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-3 text-base font-medium ${
                isActive(item.href)
                  ? "bg-cobalt-50 text-cobalt-700"
                  : "text-navy hover:bg-navy-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3">
            <CTAButton
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              external
              variant="whatsapp"
              size="lg"
              fullWidth
            >
              {t.nav.whatsapp}
            </CTAButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
