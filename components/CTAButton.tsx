import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: never;
};

type ButtonProps = CommonProps & {
  href?: undefined;
  external?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

type Props = LinkProps | ButtonProps;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-cobalt text-white shadow-sm hover:bg-cobalt-600 hover:-translate-y-px hover:shadow-md",
  secondary:
    "bg-white text-navy border border-navy-100 hover:border-cobalt-300 hover:text-cobalt-700 hover:-translate-y-px",
  ghost:
    "bg-transparent text-navy hover:bg-navy-50/60 hover:text-cobalt-700",
  whatsapp:
    "bg-[#25D366] text-white shadow-sm hover:bg-[#1eb858] hover:-translate-y-px hover:shadow-md",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-7 text-base sm:h-[3.25rem]",
};

export default function CTAButton(props: Props) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    icon,
    iconPosition = "right",
    fullWidth,
    children,
  } = props;

  const cls = [
    baseClasses,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && <span aria-hidden>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span aria-hidden>{icon}</span>}
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={cls}
    >
      {content}
    </button>
  );
}
