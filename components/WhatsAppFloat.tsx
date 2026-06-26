"use client";

import { useEffect, useRef, useState } from "react";
import InstagramIcon from "./InstagramIcon";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE, SITE } from "@/lib/site";

export default function WhatsAppFloat() {
  // Hides the floating icons while the hero (id="home-hero") or the
  // clinical decision-pathway section (id="decision-pathway") is in view,
  // so they don't clutter either section's visuals. On pages without these
  // elements, the icons stay visible as before.
  const [hideOverHero, setHideOverHero] = useState(false);
  const intersectingMap = useRef(new Map<Element, boolean>());

  useEffect(() => {
    const watchedIds = ["home-hero", "decision-pathway"];
    const elements = watchedIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) {
      setHideOverHero(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersectingMap.current.set(entry.target, entry.isIntersecting);
        });
        setHideOverHero(Array.from(intersectingMap.current.values()).some(Boolean));
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-opacity duration-300 sm:bottom-6 sm:right-6 ${
        hideOverHero ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <a
        href={SITE.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Instagram ${SITE.instagramHandle}`}
        className="grid h-12 w-12 place-items-center rounded-full text-white shadow-lg transition-transform hover:-translate-y-0.5"
        style={{
          background:
            "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        }}
      >
        <InstagramIcon size={22} />
      </a>
      <a
        href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Escríbenos por WhatsApp al ${SITE.phoneDisplay}`}
        title="Hablar por WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[#1eb858]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9.9.9-2.8-.2-.3A9 9 0 1 1 12 20.5Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3 1 2.6 1.1 2.7.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
        </svg>
      </a>
    </div>
  );
}
