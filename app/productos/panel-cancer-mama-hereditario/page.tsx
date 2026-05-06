import type { Metadata } from "next";
import MamaContent from "./mama-content";

const SLUG = "panel-cancer-mama-hereditario";

export const metadata: Metadata = {
  title: "Panel de Cáncer de Mama y Ovario Hereditario",
  description:
    "Subpanel enfocado en genes asociados con predisposición hereditaria a cáncer de mama, ovario y síndromes familiares relacionados.",
  alternates: { canonical: `/productos/${SLUG}` },
};

export default function MamaHereditarioPage() {
  return <MamaContent />;
}
