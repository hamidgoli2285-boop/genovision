import type { Metadata } from "next";
import ColorrectalContent from "./ColorrectalContent";

const SLUG = "panel-cancer-colorrectal-poliposis";

export const metadata: Metadata = {
  title: "Panel de Cáncer Colorrectal Hereditario y Poliposis",
  description:
    "Subpanel enfocado en genes asociados con cáncer colorrectal hereditario, síndrome de Lynch, poliposis adenomatosa familiar y otros síndromes gastrointestinales hereditarios.",
  alternates: { canonical: `/productos/${SLUG}` },
};

export default function ColorrectalPoliposisPage() {
  return <ColorrectalContent />;
}
