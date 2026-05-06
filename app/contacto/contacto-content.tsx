"use client";

import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import CTAButton from "@/components/CTAButton";
import InstagramIcon from "@/components/InstagramIcon";
import { SITE, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

const mapsQuery = encodeURIComponent(
  "CÉNIT Medical Center, Calle 15 501-C 919, Altabrisa, 97130 Mérida, Yucatán"
);

export default function ContactoContent() {
  const { t } = useLanguage();
  const c = t.contacto;

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-50" />
        <div className="container-x relative pb-10 pt-12 sm:pt-16 lg:pb-14 lg:pt-20">
          <SectionHeader eyebrow={c.eyebrow} title={c.title} description={c.description} />
        </div>
      </section>

      <section className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <aside className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-8">
              <h3 className="font-display text-xl font-semibold text-navy">
                {c.contactDataTitle}
              </h3>
              <div className="mt-6 space-y-5 text-sm">
                {/* WhatsApp — primary */}
                <div className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Z" />
                    </svg>
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">{c.whatsappLabel}</div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#25D366]/10 px-2 py-0.5 text-[10px] font-semibold text-[#1a9e4f]">
                        <svg width="6" height="6" viewBox="0 0 8 8" fill="currentColor" aria-hidden>
                          <circle cx="4" cy="4" r="4" />
                        </svg>
                        {c.quickResponse}
                      </span>
                    </div>
                    <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-navy hover:text-cobalt-700">
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cobalt-50 text-cobalt-700">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.79a16 16 0 0 0 6 6l2-1.59a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .79 1Z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">{c.phoneLabel}</div>
                    <a href={`tel:${SITE.phoneIntl}`} className="text-base font-semibold text-navy hover:text-cobalt-700">
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">{c.addressLabel}</div>
                    <p className="text-base font-medium text-navy">{SITE.address.line1}</p>
                    <p className="text-sm text-ink-muted">
                      {SITE.address.line2}<br />
                      {SITE.address.zip} {SITE.address.city}, {SITE.address.state}, {SITE.address.country}
                    </p>
                  </div>
                </div>

                {/* Email — secondary, professional use */}
                <div className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-500">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">{c.emailLabel}</div>
                    <a href={`mailto:${SITE.email}`} className="text-base font-semibold text-navy hover:text-cobalt-700">
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <CTAButton href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} external variant="whatsapp" size="md" fullWidth>
                  {c.sendWhatsApp}
                </CTAButton>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-8">
              <h3 className="font-display text-xl font-semibold text-navy">{c.socialTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.socialSubtitle}</p>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.instagramAria}
                className="group mt-5 flex items-center gap-3 rounded-xl p-3 ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:ring-cobalt-200"
              >
                <span
                  aria-hidden
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-white"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  }}
                >
                  <InstagramIcon size={20} />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                    {c.instagramLabel}
                  </div>
                  <div className="truncate text-base font-semibold text-navy group-hover:text-cobalt-700">
                    {SITE.instagramHandle}
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0 text-ink-muted group-hover:text-cobalt-700">
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-card">
              <div className="aspect-[4/3] w-full">
                <iframe
                  title={c.mapTitle}
                  src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <div className="mt-16 lg:mt-24" />
    </>
  );
}
