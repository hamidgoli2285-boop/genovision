import type { Metadata } from "next";
import ProductosContent from "./productos-content";

export const metadata: Metadata = {
  title: "Catálogo de análisis genéticos",
  description:
    "Explora nuestros análisis genómicos diseñados para prevención, riesgo hereditario y medicina personalizada. Panel de cáncer hereditario disponible.",
};

export default function ProductosPage() {
  return <ProductosContent />;
}
