"use client";

import { useState } from "react";

/**
 * GenoVision hero background — large animated DNA video layer.
 *
 * Self-hosted at /public/videos/dna-video.mp4 (see public/videos/README.md)
 * rather than linked to the original reference CDN, which was returning
 * HTTP 429 (rate-limited) at integration time — self-hosting avoids the
 * hero depending on a third-party CDN's uptime in production.
 *
 * Background layer only: absolute, behind hero content (z-0), non-interactive.
 * Render with hero copy/CTA at `relative z-10` in the parent section.
 * Falls back to a gradient-only layer if the video file is missing or fails to load.
 */
export default function DnaVideoBackground() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {!videoFailed && (
        <video
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoFailed(true)}
          className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-luminosity"
          src="/videos/dna-video.mp4"
        />
      )}

      {/* Tints the grayscale video footage into the GenoVision navy/cyan palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/70 via-cobalt-700/40 to-teal-400/30 mix-blend-color" />

      {/* Readability gradient — fades the video near the headline/CTA column only */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/15" />
    </div>
  );
}
