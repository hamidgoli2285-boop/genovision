import Link from "next/link";

type Props = {
  variant?: "dark" | "light";
  className?: string;
  /** Visual size. Mobile auto-scales smaller. */
  size?: "sm" | "md" | "lg" | "xl";
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-9 w-auto sm:h-10",
  md: "h-11 w-auto sm:h-12",
  lg: "h-12 w-auto sm:h-14",
  // h-40 = 160px, original aspect ratio preserved via w-auto
  xl: "h-40 w-auto object-contain",
};

export default function Logo({
  variant: _variant,
  className = "",
  size = "md",
}: Props) {
  // variant kept for API compatibility; logo renders in its native colors.
  void _variant;

  return (
    <Link
      href="/"
      aria-label="GenoVision - Inicio"
      className={`inline-flex items-center ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/genovision-logo.svg"
        alt="GenoVision"
        className={`${sizes[size]} select-none`}
        decoding="async"
      />
    </Link>
  );
}
