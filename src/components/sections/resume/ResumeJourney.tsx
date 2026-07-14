import { TimelineItem } from "@/components/ui/TimelineItem";
import type { ResumeVariant } from "@/lib/content/resumes";
import { roles } from "@/lib/content/experience";

export function ResumeJourney({ variant }: { variant: ResumeVariant }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-widest text-on-surface-variant mb-8 border-l-4 border-primary-container pl-4">
        Professional Journey
      </h3>
      <div className="space-y-8">
        {roles.map((role, i) => (
          <TimelineItem
            key={role.id}
            title={role.title}
            period={role.period}
            company=""
            description={role.resumeSummary[variant]}
            isLast={i === roles.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
