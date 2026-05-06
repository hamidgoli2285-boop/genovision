import type { Metadata } from "next";
import HomeContent from "./home-content";

export const metadata: Metadata = {
  title: "GenoVision | Análisis Genético para Riesgo de Cáncer",
  description:
    "Análisis genómico avanzado para evaluar predisposición hereditaria a cáncer y apoyar decisiones preventivas personalizadas.",
};

export default function HomePage() {
  return <HomeContent />;
}
