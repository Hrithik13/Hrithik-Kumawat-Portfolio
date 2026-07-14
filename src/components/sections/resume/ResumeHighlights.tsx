import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import type { ResumeVariant } from "@/lib/content/resumes";
import { resumes, coreExpertiseLevels } from "@/lib/content/resumes";

export function ResumeHighlights({ variant }: { variant: ResumeVariant }) {
  const content = resumes[variant];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {content.highlights.map((item) => (
          <Card key={item.title} className="p-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-surface-container-high text-primary mb-3">
              <Icon name={item.icon} className="h-4 w-4" />
            </span>
            <h3 className="font-semibold text-primary text-sm">{item.title}</h3>
            <p className="mt-1.5 text-xs text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </Card>
        ))}
      </div>

      <Card className="p-6 sm:p-8 mt-6 bg-surface-container-low shadow-none border border-surface-container-high">
        <p className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant mb-6">
          Core Expertise
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
          {coreExpertiseLevels[variant].map((skill) => (
            <div key={skill.label}>
              <div className="flex justify-between items-end mb-1.5">
                <span className="text-sm font-medium text-primary">
                  {skill.label}
                </span>
              </div>
              <div className="h-1.5 w-full bg-secondary-container rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
