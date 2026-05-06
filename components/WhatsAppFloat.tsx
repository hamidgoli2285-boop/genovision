"use client";

import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE, SITE } from "@/lib/site";
import { useT } from "@/lib/i18n/useT";

export default function WhatsAppFloat() {
  const { t } = useT();
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.whatsappFloat.aria} ${SITE.phoneDisplay}`}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3.5 pr-4 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[#1eb858] sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden
        className="grid h-7 w-7 place-items-center rounded-full bg-white/15"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9.9.9-2.8-.2-.3A9 9 0 1 1 12 20.5Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3 1 2.6 1.1 2.7.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
        </svg>
      </span>
      <span className="hidden sm:inline">{t.contactCTA.writeWhatsapp}</span>
      <span className="sm:hidden">{t.nav.whatsapp}</span>
    </a>
  );
}
