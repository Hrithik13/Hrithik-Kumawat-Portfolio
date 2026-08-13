import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function MoreProjectsComingSoon() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <Reveal>
          <div className="rounded-xl border border-dashed border-outline-variant p-10 sm:p-12 text-center max-w-2xl mx-auto">
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant mb-4">
              <Icon name="hourglass" className="h-5 w-5" />
            </span>
            <Badge tone="outline" className="mb-4">
              In Progress
            </Badge>
            <h2 className="text-xl font-semibold text-primary">
              More Projects Coming Soon
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant leading-relaxed max-w-md mx-auto">
              I&apos;m continuing to build and document real projects. New
              entries will be added here as they&apos;re completed.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
