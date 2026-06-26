# DNA hero video

Drop the DNA background video here as `dna-video.mp4`.

It is referenced by [components/hero/DnaVideoBackground.tsx](../../components/hero/DnaVideoBackground.tsx)
as `/videos/dna-video.mp4`. The original reference asset
(`https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4`) was returning
HTTP 429 (rate-limited) at integration time, so it could not be downloaded
and self-hosted automatically — self-hosting it here (rather than linking
the CDN URL directly) keeps the hero background from depending on a
third-party CDN's uptime/rate limits in production.

Until this file is added, the hero falls back to the gradient-only layer
defined in `DnaVideoBackground.tsx`.
