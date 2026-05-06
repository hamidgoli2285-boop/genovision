"use client";

import SubpanelCard from "./SubpanelCard";
import { SUBPANELS } from "@/lib/subpanels";
import { useLanguage } from "@/lib/language-context";

type Props = {
  className?: string;
};

export default function SubpanelGrid({ className = "" }: Props) {
  const { t } = useLanguage();

  return (
    <div
      className={`grid gap-5 sm:grid-cols-2 lg:gap-6 ${className}`}
    >
      {SUBPANELS.map((sp) => (
        <SubpanelCard
          key={sp.id}
          subpanel={sp}
          translated={t.subpanelData[sp.id]}
        />
      ))}
    </div>
  );
}
