import type { Metadata } from "next";
import MedicosContent from "./medicos-content";

export const metadata: Metadata = {
  title: "Para Médicos | Genómica clínica de apoyo",
  description:
    "GenoVision apoya a médicos en prevención, vigilancia y estratificación de riesgo hereditario al cáncer mediante análisis genético avanzado.",
};

export default function MedicosPage() {
  return <MedicosContent />;
}
