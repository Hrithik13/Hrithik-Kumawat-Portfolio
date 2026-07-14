import { ReactNode } from "react";

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: "neutral" | "dark" | "outline";
  className?: string;
}) {
  const toneClasses = {
    neutral: "bg-surface-container-high text-on-surface-variant",
    dark: "bg-primary-container text-white",
    outline: "border border-outline-variant text-on-surface-variant",
  };

  return (
    <span
      className={`inline-flex items-center rounded font-mono text-xs uppercase tracking-wide px-2.5 py-1 ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
