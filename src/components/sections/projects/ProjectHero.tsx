import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { grimoireProject } from "@/lib/content/projects";

export function ProjectHero() {
  const heroShot = grimoireProject.screenshots[0];

  return (
    <section id={grimoireProject.id} className="pt-16 sm:pt-20 pb-16 scroll-mt-20">
      <Container>
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Projects
          </h1>
          <p className="mt-4 text-base text-on-surface-variant leading-relaxed max-w-2xl">
            Real work I&apos;ve shipped, documented as I build it.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 rounded-xl bg-surface-container-lowest shadow-card overflow-hidden">
            <div className="relative w-full bg-surface-container-high aspect-[16/9]">
              <Image
                src={heroShot.src}
                alt={`Grimoire — ${heroShot.label}`}
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge tone="dark">{grimoireProject.status}</Badge>
                <span className="inline-flex items-center gap-1.5 text-xs text-on-surface-variant font-mono">
                  <Icon name="clock" className="h-3.5 w-3.5" />
                  {grimoireProject.timeline}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
                {grimoireProject.title}{" "}
                <span className="text-on-surface-variant font-normal">
                  — {grimoireProject.tagline}
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-2xl">
                {grimoireProject.overview}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {grimoireProject.techStack.map((tech) => (
                  <Badge key={tech} tone="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button
                  href={grimoireProject.download.path}
                  variant="primary"
                  download={grimoireProject.download.fileName}
                >
                  <Icon name="package" className="h-4 w-4" />
                  Download for {grimoireProject.download.platform}
                </Button>
                <span className="text-xs text-on-surface-variant font-mono">
                  {grimoireProject.download.fileName} · {grimoireProject.download.sizeLabel}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
