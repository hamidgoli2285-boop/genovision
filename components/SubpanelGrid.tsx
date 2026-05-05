import SubpanelCard from "./SubpanelCard";
import { SUBPANELS } from "@/lib/subpanels";

type Props = {
  className?: string;
};

export default function SubpanelGrid({ className = "" }: Props) {
  return (
    <div
      className={`grid gap-5 sm:grid-cols-2 lg:gap-6 ${className}`}
    >
      {SUBPANELS.map((sp) => (
        <SubpanelCard key={sp.id} subpanel={sp} />
      ))}
    </div>
  );
}
