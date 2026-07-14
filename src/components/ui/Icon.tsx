import { getIcon } from "@/lib/icon-map";

export function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const LucideIcon = getIcon(name);
  // eslint-disable-next-line react-hooks/static-components -- LucideIcon references an existing, stable component; it is not defined during render.
  return <LucideIcon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
