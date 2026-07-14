import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { roles } from "@/lib/content/experience";

export function ExperienceTimeline() {
  return (
    <section className="pt-16 sm:pt-20 pb-16">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant mb-3">
            Track Record
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Professional Experience.
          </h1>
          <p className="mt-4 text-base text-on-surface-variant leading-relaxed max-w-2xl">
            A progression from system configuration and quality assurance to business
            analysis, requirements management, SQL validation, and stakeholder
            collaboration across enterprise IT environments.
          </p>
        </Reveal>

        <div className="mt-12 relative pl-6 space-y-8">
          <span className="absolute left-[7px] top-3 bottom-3 w-px bg-outline-variant" />
          {roles.map((role, i) => (
            <Reveal key={role.id} delay={i * 0.06} className="relative">
              <span
                className={`absolute -left-6 top-6 h-3 w-3 rounded-full ${
                  role.current ? "bg-primary-container" : "bg-outline-variant"
                }`}
              />
              <Card className="p-6 sm:p-8" hover>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-container-high text-primary">
                      <Icon name={role.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="font-semibold text-primary text-lg">
                        {role.title}
                      </h2>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        {role.company} | {role.period}
                      </p>
                    </div>
                  </div>
                  {role.current && (
                    <Badge tone="dark">Current Focus</Badge>
                  )}
                </div>
                <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">
                  {role.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <Badge key={tag} tone="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
