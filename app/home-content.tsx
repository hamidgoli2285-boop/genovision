"use client";

import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import ContactCTA from "@/components/ContactCTA";
import DoctorReferralCard from "@/components/DoctorReferralCard";
import DnaVideoBackground from "@/components/hero/DnaVideoBackground";
import Reveal from "@/components/Reveal";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

/* ─── Brand tokens ─── */
const NAVY = "#0A2240";
const CYAN = "#00C2D1";
const GRAY = "#F6F9FC";

/* ─── Services (icons/links/featured flag; text comes from translations, by index) ─── */
const SERVICE_META = [
  {
    href: "/productos/panel-cancer-hereditario",
    featured: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
        <path d="M9 3v2h6V3" />
        <path d="m9.5 13 1.8 1.8L14.5 11" />
      </svg>
    ),
  },
  {
    href: "/productos",
    featured: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5c2.6 3.3 5.5 7.2 5.5 10.6a5.5 5.5 0 1 1-11 0c0-3.4 2.9-7.3 5.5-10.6Z" />
        <path d="M9.6 14.2a2.4 2.4 0 0 0 2.4 2.4" />
      </svg>
    ),
  },
  {
    href: "/productos",
    featured: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="16" height="8" rx="4" />
        <path d="M12 8v8" />
      </svg>
    ),
  },
  {
    href: "/productos",
    featured: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20.5s-7.5-4.3-7.5-10A4.5 4.5 0 0 1 12 7.7a4.5 4.5 0 0 1 7.5 2.8c0 5.7-7.5 10-7.5 10Z" />
        <path d="M9.2 12h1.4l1-2 1.6 4 1-2h1.6" />
      </svg>
    ),
  },
  {
    href: "/productos",
    featured: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="4.5" rx="1.4" />
        <rect x="4" y="9.75" width="16" height="4.5" rx="1.4" />
        <rect x="4" y="15.5" width="16" height="4.5" rx="1.4" />
      </svg>
    ),
  },
  {
    href: "/productos/microbiota-intestinal",
    featured: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="2.3" />
        <circle cx="16" cy="8.5" r="1.6" />
        <circle cx="15" cy="15.5" r="2.5" />
        <circle cx="8.5" cy="16" r="1.5" />
      </svg>
    ),
  },
];

export default function HomeContent() {
  const { t } = useLanguage();
  const h = t.home;

  const SERVICES = h.services.map((s, i) => ({ ...s, ...SERVICE_META[i] }));
  const TRUST_POINTS = h.trustPoints;

  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section
        id="home-hero"
        className="relative -mt-[84px] flex min-h-[640px] items-center overflow-hidden lg:min-h-[85vh]"
        style={{ background: `linear-gradient(160deg, #ffffff 0%, ${GRAY} 100%)` }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
          style={{
            width: "900px",
            height: "500px",
            background: `radial-gradient(ellipse at 50% 0%, rgba(0,194,209,0.07) 0%, transparent 65%)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(to right, ${NAVY} 1px, transparent 1px), linear-gradient(to bottom, ${NAVY} 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        <DnaVideoBackground />

        {/* Text-side readability layer — local to the left column only, does not touch the video */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full lg:w-[58%]"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.55) 65%, rgba(255,255,255,0) 100%)",
          }}
        />

        <div className="container-x relative z-10 grid items-center gap-12 pb-20 pt-28 lg:grid-cols-12 lg:gap-16 lg:pb-28 lg:pt-32">
          {/* LEFT */}
          <div className="lg:col-span-6 xl:col-span-6">
            <h1
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.2rem]"
              style={{ color: NAVY, textShadow: "0 1px 24px rgba(255,255,255,0.6)" }}
            >
              {h.heroTitlePart1}
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${CYAN} 0%, #0099B3 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {h.heroTitleHighlight}
              </span>
              {h.heroTitlePart2}
            </h1>

            <p
              className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-ink-muted"
              style={{ textShadow: "0 1px 16px rgba(255,255,255,0.7)" }}
            >
              {h.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CTAButton
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                external
                variant="whatsapp"
                size="lg"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Z" />
                  </svg>
                }
                iconPosition="left"
              >
                {h.ctaWhatsapp}
              </CTAButton>
              <CTAButton href="/productos" variant="secondary" size="lg">
                {h.ctaViewStudies}
              </CTAButton>
            </div>
          </div>

          {/* RIGHT — intentionally empty; DnaHeroBackground fills this area */}
          <div className="hidden lg:col-span-6 xl:col-span-6 lg:block" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CLINICAL DECISION PATHWAY
      ══════════════════════════════════════════════ */}
      <section id="decision-pathway" className="bg-white">
        <div className="mx-auto max-w-[1480px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
              style={{
                background: "linear-gradient(135deg, #ECFCFF 0%, #E3F6FB 38%, #CFEFF7 72%, #BFE9F2 100%)",
              }}
            >
              {/* Soft abstract glow — CSS only, not the hero video */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/70 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-16 h-64 w-64 rounded-full blur-3xl"
                style={{ background: "rgba(10,34,64,0.12)" }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl"
              />

              <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-12">
                {/* LEFT — eyebrow / heading / paragraph / CTA (~40%) */}
                <div className="lg:col-span-5 lg:flex lg:flex-col lg:justify-center">
                  <Reveal>
                    <div
                      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
                      style={{ background: "rgba(10,34,64,0.06)" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: CYAN }} />
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#0B7C93" }}>
                        {h.decision.eyebrow}
                      </p>
                    </div>
                    <h2
                      className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.6rem]"
                      style={{ color: NAVY }}
                    >
                      {h.decision.heading}
                    </h2>
                    <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: "#3B5572" }}>
                      {h.decision.paragraph}
                    </p>
                    <div className="mt-9">
                      <a
                        href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-[15px] font-bold text-white shadow-[0_10px_30px_rgba(10,34,64,0.28)] transition-all duration-300 hover:shadow-[0_14px_36px_rgba(10,34,64,0.36)] hover:-translate-y-0.5"
                        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0E4D8C 100%)` }}
                      >
                        {h.decision.ctaLabel}
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </Reveal>
                </div>

                {/* RIGHT — 2x2 premium card grid with pathway connector (~60%) */}
                <div className="lg:col-span-7">
                  <div className="relative grid gap-5 sm:grid-cols-2">
                    {/* Pathway connector line — decorative, lg only */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute left-[4.5rem] right-[4.5rem] top-[2.1rem] hidden h-px lg:block"
                      style={{ background: "linear-gradient(90deg, rgba(0,194,209,0.5), rgba(10,34,64,0.25))" }}
                    />

                    {h.decision.cards.map((card, i) => {
                      const isAction = Boolean(card.ctaText);
                      const CardTag = isAction ? "a" : "div";
                      return (
                        <Reveal key={card.number} delay={i * 80}>
                          <CardTag
                            {...(isAction
                              ? {
                                  href: whatsappLink(DEFAULT_WHATSAPP_MESSAGE),
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                }
                              : {})}
                            className={`group relative block h-full rounded-[1.5rem] p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                              isAction
                                ? "shadow-[0_18px_40px_rgba(10,34,64,0.28)] hover:shadow-[0_22px_48px_rgba(10,34,64,0.34)]"
                                : "border-l-[3px] bg-white shadow-[0_2px_6px_rgba(10,34,64,0.05),0_18px_38px_rgba(10,34,64,0.10)] ring-1 ring-slate-100 hover:shadow-[0_4px_10px_rgba(10,34,64,0.07),0_26px_52px_rgba(0,194,209,0.18)]"
                            }`}
                            style={
                              isAction
                                ? { background: `linear-gradient(145deg, ${NAVY} 0%, #0B6E92 100%)` }
                                : { borderColor: CYAN }
                            }
                          >
                            {/* Numbered badge */}
                            <span
                              className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-bold"
                              style={
                                isAction
                                  ? { background: "rgba(255,255,255,0.18)", color: "#FFFFFF" }
                                  : { background: `linear-gradient(135deg, ${CYAN} 0%, ${NAVY} 100%)`, color: "#FFFFFF" }
                              }
                            >
                              {card.number}
                            </span>

                            <h3
                              className="mt-4 font-display text-lg font-bold leading-snug"
                              style={{ color: isAction ? "#FFFFFF" : NAVY }}
                            >
                              {card.title}
                            </h3>
                            <p
                              className="mt-2.5 text-sm leading-relaxed"
                              style={{ color: isAction ? "rgba(255,255,255,0.82)" : "#5B7186" }}
                            >
                              {card.body}
                            </p>

                            {isAction ? (
                              <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">
                                {card.ctaText}
                                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform duration-200 group-hover:translate-x-0.5">
                                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                  </svg>
                                </span>
                              </div>
                            ) : (
                              <div
                                className="mt-5 rounded-xl px-3.5 py-2.5"
                                style={{ background: "rgba(0,194,209,0.08)" }}
                              >
                                <p
                                  className="text-[10px] font-bold uppercase tracking-wider"
                                  style={{ color: "#0B7C93" }}
                                >
                                  {card.recommendedLabel}
                                </p>
                                <p className="mt-0.5 text-sm font-semibold" style={{ color: NAVY }}>
                                  {card.recommendedValue}
                                </p>
                              </div>
                            )}
                          </CardTag>
                        </Reveal>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES / TESTS
      ══════════════════════════════════════════════ */}
      <section style={{ background: GRAY }}>
        <div className="container-x py-20 pb-28 lg:py-28 lg:pb-32">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: CYAN }}>
                {h.servicesEyebrow}
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: NAVY }}>
                {h.servicesTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "#475569" }}>
                {h.servicesDescription}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.name} delay={i * 60}>
                <Link
                  href={svc.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-7 transition-all duration-300 ease-out hover:-translate-y-2"
                  style={{
                    boxShadow: svc.featured
                      ? "0 1px 1px rgba(10,34,64,0.04), 0 2px 6px rgba(10,34,64,0.06), 0 18px 40px rgba(10,34,64,0.13)"
                      : "0 1px 1px rgba(10,34,64,0.03), 0 2px 4px rgba(10,34,64,0.04), 0 12px 28px rgba(10,34,64,0.08)",
                    border: svc.featured
                      ? "1px solid rgba(0,194,209,0.35)"
                      : "1px solid rgba(15,23,42,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = svc.featured
                      ? "0 1px 1px rgba(10,34,64,0.05), 0 4px 10px rgba(10,34,64,0.08), 0 28px 56px rgba(0,194,209,0.18)"
                      : "0 1px 1px rgba(10,34,64,0.04), 0 4px 8px rgba(10,34,64,0.06), 0 22px 44px rgba(10,34,64,0.14)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = svc.featured
                      ? "0 1px 1px rgba(10,34,64,0.04), 0 2px 6px rgba(10,34,64,0.06), 0 18px 40px rgba(10,34,64,0.13)"
                      : "0 1px 1px rgba(10,34,64,0.03), 0 2px 4px rgba(10,34,64,0.04), 0 12px 28px rgba(10,34,64,0.08)";
                  }}
                >
                  {/* Top accent bar — featured services only */}
                  {svc.featured && (
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ background: `linear-gradient(90deg, ${CYAN} 0%, ${NAVY} 100%)` }}
                    />
                  )}

                  {/* Glass sheen overlay */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-20 rounded-t-2xl"
                    style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)" }}
                  />

                  {/* Header row: icon + badge */}
                  <div className="relative z-10 mb-5 flex items-start justify-between gap-3">
                    <div
                      className="grid h-[3.25rem] w-[3.25rem] shrink-0 place-items-center rounded-2xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(0,194,209,0.14) 0%, rgba(10,34,64,0.05) 100%)",
                        color: NAVY,
                        boxShadow: "inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -2px 4px rgba(10,34,64,0.06)",
                      }}
                    >
                      {svc.icon}
                    </div>

                    <span
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white"
                      style={{ background: CYAN, boxShadow: "0 2px 6px rgba(0,194,209,0.35)" }}
                    >
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {h.availableLabel}
                    </span>
                  </div>

                  {svc.featured && (
                    <p className="relative z-10 mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: CYAN }}>
                      {h.featuredLabel}
                    </p>
                  )}

                  <h3 className="relative z-10 font-display text-lg font-bold leading-snug" style={{ color: NAVY }}>
                    {svc.name}
                  </h3>
                  <p className="relative z-10 mt-2.5 text-sm font-medium leading-relaxed" style={{ color: "#334155" }}>
                    {svc.purpose}
                  </p>
                  <p className="relative z-10 mt-2 flex-1 text-[13px] leading-relaxed" style={{ color: "#64748B" }}>
                    <span className="font-semibold" style={{ color: "#475569" }}>{h.clinicalUseLabel}</span>
                    {svc.useCase}
                  </p>

                  <div
                    className="relative z-10 mt-6 flex items-center gap-1.5 border-t pt-4 text-[13px] font-bold"
                    style={{ borderColor: "rgba(15,23,42,0.07)", color: NAVY }}
                  >
                    {h.viewDetails}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={CYAN} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOR DOCTORS
      ══════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="container-x py-20 lg:py-24">
          <Reveal>
            <DoctorReferralCard />
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TRUST / LOCAL PRESENCE
      ══════════════════════════════════════════════ */}
      <section style={{ background: NAVY }}>
        <div className="container-x py-20 lg:py-24">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: CYAN }}>
                {h.trustEyebrow}
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {h.trustTitle}
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {TRUST_POINTS.map((point, i) => (
              <Reveal key={point} delay={i * 50}>
                <div
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full"
                    style={{ background: "rgba(0,194,209,0.15)", color: CYAN }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-white/85">{point}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <Reveal>
          <ContactCTA
            title={h.finalCtaTitle}
            subtitle={h.finalCtaSubtitle}
            primaryLabel={h.finalCtaPrimaryLabel}
            secondaryLabel={h.finalCtaSecondaryLabel}
            secondaryHref="/productos"
          />
        </Reveal>
      </section>
    </>
  );
}
