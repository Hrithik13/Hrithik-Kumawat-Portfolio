import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { continuousLearningTags, resumeEducation } from "@/lib/content/resumes";
import { profile } from "@/lib/content/profile";

export function ResumeContinuousLearning() {
  return (
    <Card className="p-6 sm:p-8 bg-surface-container-low shadow-none border border-surface-container-high">
      <p className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant mb-1 text-center">
        Ongoing Growth
      </p>
      <h3 className="text-xl font-semibold text-primary text-center mb-8">
        Continuous Learning
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {continuousLearningTags.map((tag) => (
          <div
            key={tag}
            className="flex flex-col items-center gap-2 rounded-lg bg-surface-container-lowest p-4 text-center shadow-card border border-transparent hover:border-primary-container/30 hover:shadow-card-hover transition-all duration-200"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high text-primary">
              <Icon name="book-open" className="h-4 w-4" />
            </span>
            <span className="font-mono text-xs text-primary leading-snug">
              {tag}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg bg-surface-container-lowest p-5 shadow-card">
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-container text-white flex-none">
            <Icon name="graduation-cap" className="h-5 w-5" />
          </span>
          <div>
            <p className="font-semibold text-primary text-sm">
              {resumeEducation.degree}
            </p>
            <p className="text-xs text-on-surface-variant mt-0.5">
              {resumeEducation.field} · {profile.education.institution}
            </p>
          </div>
        </div>
        <span className="font-mono text-[11px] uppercase text-on-surface-variant bg-surface-container-high px-2.5 py-1 rounded flex-none w-fit sm:ml-4">
          {resumeEducation.graduated}
        </span>
      </div>
    </Card>
  );
}
