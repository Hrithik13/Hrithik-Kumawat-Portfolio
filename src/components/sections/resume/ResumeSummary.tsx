import { Card } from "@/components/ui/Card";
import type { ResumeVariant } from "@/lib/content/resumes";
import { resumes } from "@/lib/content/resumes";

export function ResumeSummary({ variant }: { variant: ResumeVariant }) {
  return (
    <Card className="p-6 sm:p-8 bg-surface-container-low shadow-none border border-surface-container-high">
      <p className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant mb-3">
        Professional Summary
      </p>
      <p className="text-base text-primary leading-relaxed font-medium">
        {resumes[variant].summary}
      </p>
    </Card>
  );
}
