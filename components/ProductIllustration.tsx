"use client";

/**
 * ProductIllustration
 * Renders a real Unsplash medical photo for each product card.
 * Falls back to a branded gradient if the image fails to load.
 *
 * Photos are sourced from Unsplash (free to use under the Unsplash License).
 * All images are fetched from images.unsplash.com and optimized via Next.js.
 */

import Image from "next/image";
import { useState } from "react";

type PhotoEntry = {
  id: string;        // Unsplash photo ID
  alt: string;       // Descriptive alt text (English, SEO-friendly)
  /** Tailwind gradient classes used as fallback */
  fallback: string;
};

/* ─── Photo map ─────────────────────────────────────────────────────────── */

const PHOTOS: Record<string, PhotoEntry> = {
  "panel-cancer-hereditario": {
    id: "klUaFqLAcFw",
    alt: "Laboratory scientist loading DNA samples into a genomic sequencing machine for hereditary cancer analysis",
    fallback: "from-[#061B3A] to-[#1547C0]",
  },
  "panel-core-cancer-hereditario": {
    id: "klUaFqLAcFw",
    alt: "Genomic sequencing laboratory for hereditary cancer genetic analysis",
    fallback: "from-[#061B3A] to-[#1547C0]",
  },
  "panel-cancer-mama-hereditario": {
    id: "sN9dPmAUmo8",
    alt: "Female physician in a clinical consultation for women's health and hereditary breast and ovarian cancer genetic evaluation",
    fallback: "from-[#2A0A2E] to-[#3D1055]",
  },
  "panel-cancer-colorrectal-poliposis": {
    id: "RFFIq81e4Ok",
    alt: "Medical professional reviewing digestive health and colorectal anatomy for hereditary colorectal cancer evaluation",
    fallback: "from-[#082030] to-[#0D3344]",
  },
  "panel-cancer-prostata-hereditario": {
    id: "NSBxHRFCvzc",
    alt: "Male healthcare professional reviewing genetic data for hereditary prostate cancer risk assessment",
    fallback: "from-[#071730] to-[#0E2E5C]",
  },
  "panel-cardio-pulmonar": {
    id: "YgY1ITp8PMM",
    alt: "Cardiologist with stethoscope for cardiopulmonary hereditary disease genetic panel",
    fallback: "from-[#0B2D6B] to-[#0E4B8A]",
  },
  "panel-neurologico": {
    id: "8T9d9D5OOZA",
    alt: "Brain MRI neurological imaging for hereditary neurological condition genetic analysis",
    fallback: "from-[#0A1628] to-[#0D2A5E]",
  },
  "neuro-panel-wgs": {
    id: "8T9d9D5OOZA",
    alt: "Advanced neurological brain imaging for whole genome neurological genetic panel",
    fallback: "from-[#04101E] to-[#081428]",
  },
  "panel-inmunologico": {
    id: "8ZGLvwQ-4EQ",
    alt: "Laboratory scientist examining immunological samples for genetic immunology panel analysis",
    fallback: "from-[#093344] to-[#0B4D5E]",
  },
  "panel-diabetes": {
    id: "ZJaK9jQXeDA",
    alt: "Diabetes management tools and glucose monitoring equipment for metabolic genetic panel",
    fallback: "from-[#0C2340] to-[#114068]",
  },
  "reporte-cardiometabolico": {
    id: "YgY1ITp8PMM",
    alt: "Medical professional evaluating cardiometabolic risk factors for genetic polygenic risk score report",
    fallback: "from-[#0B1E3D] to-[#15306A]",
  },
  "panel-oftalmologico": {
    id: "cyMUU_tVZPM",
    alt: "Ophthalmologist performing clinical eye examination for hereditary eye disorder genetic evaluation",
    fallback: "from-[#071C3D] to-[#0A3552]",
  },
  "panel-respiratorio": {
    id: "Pw9aFhc92P8",
    alt: "Human lungs anatomical model for hereditary respiratory disease genetic panel",
    fallback: "from-[#061B3A] to-[#0C3060]",
  },
  "panel-autismo": {
    id: "uEcEYQ43xhI",
    alt: "Healthcare professional in pediatric neurodevelopmental consultation for autism spectrum disorder genetic analysis",
    fallback: "from-[#0D1F42] to-[#162E60]",
  },
  "panel-farmacogenomica": {
    id: "FOSgYGDktlE",
    alt: "Professional pharmacy with precision medicine medications for pharmacogenomics genetic panel",
    fallback: "from-[#0A1E3D] to-[#12336A]",
  },
  "panel-tiroides": {
    id: "tE7_jvK-_YU",
    alt: "Medical professional for endocrinology and thyroid health genetic panel evaluation",
    fallback: "from-[#072838] to-[#0A3D50]",
  },
  "exoma-completo": {
    id: "to8o0bqOA6Q",
    alt: "Automated genomic sequencing laboratory robotics for whole exome sequencing WES genetic analysis",
    fallback: "from-[#050D1A] to-[#091830]",
  },
  "microbiota-intestinal": {
    id: "hGd803570EE",
    alt: "Human intestinal anatomy and gut microbiome visualization for microbiota intestinal analysis",
    fallback: "from-[#073428] to-[#0A4A35]",
  },
};

const DEFAULT: PhotoEntry = {
  id: "klUaFqLAcFw",
  alt: "Medical genetics laboratory for genetic panel analysis",
  fallback: "from-[#061B3A] to-[#1547C0]",
};

/* ─── Component ──────────────────────────────────────────────────────────── */

type Props = {
  productId: string;
  /** Alt override — uses photo's own alt if omitted */
  alt?: string;
  className?: string;
};

export default function ProductIllustration({ productId, alt, className = "" }: Props) {
  const [failed, setFailed] = useState(false);
  const photo = PHOTOS[productId] ?? DEFAULT;
  const src = `https://images.unsplash.com/photo-${photo.id}?auto=format&fit=crop&w=800&q=80`;

  return (
    <figure
      aria-label={alt ?? photo.alt}
      className={`relative w-full overflow-hidden rounded-t-2xl bg-gradient-to-br ${photo.fallback} ${className}`}
      style={{ aspectRatio: "16/9" }}
    >
      {!failed && (
        <Image
          src={src}
          alt={alt ?? photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center"
          onError={() => setFailed(true)}
          priority={false}
        />
      )}

      {/* Subtle dark overlay so card text remains legible if image bleeds */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
      />
    </figure>
  );
}
