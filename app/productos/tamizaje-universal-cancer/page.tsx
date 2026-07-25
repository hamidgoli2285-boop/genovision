import type { Metadata } from "next";
import TamizajeContent from "./tamizaje-content";

export const metadata: Metadata = {
  title: "Tamizaje Universal de Cáncer con Biopsia Líquida",
  description:
    "Estudio de biopsia líquida mediante muestra de sangre para evaluar señales moleculares asociadas con múltiples tipos de cáncer. Atención y orientación personalizada en GenoVision Mérida.",
  alternates: { canonical: "/productos/tamizaje-universal-cancer" },
};

export default function TamizajeUniversalCancerPage() {
  return <TamizajeContent />;
}
