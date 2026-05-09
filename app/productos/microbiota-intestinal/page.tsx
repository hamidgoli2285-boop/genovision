import type { Metadata } from "next";
import MicrobiotaContent from "./microbiota-content";

const SLUG = "microbiota-intestinal";

export const metadata: Metadata = {
  title: "Análisis de Microbiota Intestinal | En colaboración con Pangea Laboratory",
  description:
    "Conoce la composición bacteriana de tu intestino con secuenciación 16S. Identifica disbiosis, evalúa diversidad microbiana y recibe orientación para mejorar tu salud digestiva e inmunológica.",
  alternates: { canonical: `/productos/${SLUG}` },
};

export default function MicrobiotaIntestinalPage() {
  return <MicrobiotaContent />;
}
