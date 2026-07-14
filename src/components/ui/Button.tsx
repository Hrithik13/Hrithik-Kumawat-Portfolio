import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "outline-inverse";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary-container text-on-primary hover:bg-primary hover:text-white",
  secondary:
    "bg-secondary-container text-on-secondary-container hover:bg-secondary-container/80",
  outline:
    "border border-outline-variant text-on-surface hover:border-primary-container hover:bg-surface-container-low",
  "outline-inverse":
    "border border-white/30 text-white hover:bg-white/10",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded font-medium text-sm px-6 py-3 transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2";

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

interface LinkButtonProps extends CommonProps {
  href: string;
  onClick?: () => void;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

interface ActionButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: undefined;
}

export function Button(props: LinkButtonProps | ActionButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={classes}
        onClick={props.onClick}
        download={props.download}
        target={props.target}
        rel={props.rel}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ActionButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
