"use client";

import CTAButton from "./CTAButton";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";
import { useT } from "@/lib/i18n/useT";

type Props = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryMessage?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "navy" | "cobalt" | "subtle";
};

export default function ContactCTA({
  title,
  subtitle,
  primaryLabel,
  primaryMessage = DEFAULT_WHATSAPP_MESSAGE,
  secondaryLabel,
  secondaryHref,
  variant = "navy",
}: Props) {
  const { t } = useT();
  const resolvedTitle = title ?? t.contactCTA.defaultTitle;
  const resolvedSubtitle = subtitle ?? t.contactCTA.defaultSubtitle;
  const resolvedPrimary = primaryLabel ?? t.contactCTA.defaultPrimary;

  const bg =
    variant === "navy"
      ? "bg-navy text-white"
      : variant === "cobalt"
        ? "bg-gradient-to-br from-cobalt-700 via-cobalt to-cobalt-600 text-white"
        : "bg-gradient-to-br from-slate-50 to-cobalt-50 text-navy ring-1 ring-cobalt-100";

  const subtitleClass =
    variant === "subtle" ? "text-ink-muted" : "text-white/75";

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        className={`relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-16 ${bg}`}
      >
        {variant !== "subtle" && (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cobalt-400/20 blur-3xl"
            />
          </>
        )}
        <div className="relative max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {resolvedTitle}
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${subtitleClass}`}>
            {resolvedSubtitle}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton
              href={whatsappLink(primaryMessage)}
              external
              variant="whatsapp"
              size="lg"
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Z" />
                </svg>
              }
              iconPosition="left"
            >
              {resolvedPrimary}
            </CTAButton>
            {secondaryLabel && secondaryHref && (
              <CTAButton
                href={secondaryHref}
                variant={variant === "subtle" ? "secondary" : "ghost"}
                size="lg"
                className={
                  variant === "subtle"
                    ? ""
                    : "bg-white/10 text-white hover:bg-white/15"
                }
              >
                {secondaryLabel}
              </CTAButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
