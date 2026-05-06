"use client";

import SectionHeader from "@/components/SectionHeader";
import FAQAccordion from "@/components/FAQAccordion";
import ContactCTA from "@/components/ContactCTA";
import { useLanguage } from "@/lib/language-context";

export default function FAQContent() {
  const { t } = useLanguage();
  const f = t.faq;

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-50" />
        <div className="container-x relative pb-10 pt-12 sm:pt-16 lg:pb-14 lg:pt-20">
          <SectionHeader
            eyebrow={f.eyebrow}
            title={f.title}
            description={f.description}
          />
        </div>
      </section>

      <section className="container-x">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={f.items} />
        </div>
      </section>

      <section className="mt-20 lg:mt-28">
        <ContactCTA title={f.ctaTitle} subtitle={f.ctaSubtitle} />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: f.items.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </>
  );
}
