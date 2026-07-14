import { Reveal } from "@/components/ui/Reveal";

interface TimelineItemProps {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  isLast?: boolean;
  delay?: number;
}

export function TimelineItem({
  title,
  company,
  location,
  period,
  description,
  isLast = false,
  delay = 0,
}: TimelineItemProps) {
  return (
    <Reveal delay={delay}>
      <div className="relative pl-8">
        {!isLast && (
          <span className="absolute left-[5px] top-3 bottom-0 w-px bg-outline-variant" />
        )}
        <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-primary-container" />
        <h3 className="font-semibold text-primary">{title}</h3>
        <p className="text-xs text-on-surface-variant mt-1">
          {[company, location, period].filter(Boolean).join(" · ")}
        </p>
        <p className="mt-2 text-sm text-on-surface-variant leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </Reveal>
  );
}
