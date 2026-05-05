import type { SubpanelIconKey } from "@/lib/subpanels";

type Props = {
  kind: SubpanelIconKey;
  className?: string;
};

export default function SubpanelIcon({ kind, className = "" }: Props) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (kind) {
    case "colon":
      return (
        <svg {...common}>
          <path d="M4 6c3 0 4 4 8 4s5-4 8-4" />
          <path d="M4 12c3 0 4 4 8 4s5-4 8-4" />
          <path d="M4 18c3 0 4 2 8 2s5-2 8-2" />
        </svg>
      );
    case "breast":
      return (
        <svg {...common}>
          <path d="M12 21s-7-4.35-7-11a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 6.65-7 11-7 11Z" />
          <circle cx="12" cy="13" r="1.6" />
        </svg>
      );
    case "core":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5.5" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "prostate":
      return (
        <svg {...common}>
          <path d="M12 3 4 6v6c0 4.5 3.5 8.5 8 9 4.5-.5 8-4.5 8-9V6Z" />
          <path d="M9.5 12.5h5" />
        </svg>
      );
  }
}
