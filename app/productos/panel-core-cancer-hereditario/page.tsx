import type { Metadata } from "next";
import CoreContent from "./core-content";

const SLUG = "panel-core-cancer-hereditario";

export const metadata: Metadata = {
  title: "Panel Core de Cáncer Hereditario",
  description:
    "Selección esencial de genes clínicamente relevantes para evaluación inicial de predisposición hereditaria al cáncer.",
  alternates: { canonical: `/productos/${SLUG}` },
};

export default function PanelCorePage() {
  return <CoreContent />;
}
