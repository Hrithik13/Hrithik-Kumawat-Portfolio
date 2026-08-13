import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { grimoireProject } from "@/lib/content/projects";

export function FeaturedProject() {
  const heroShot = grimoireProject.screenshots[0];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Featured Project" title="What I've Been Building" />

        <Reveal delay={0.08}>
          <Card className="mt-10 grid grid-cols-1 lg:grid-cols-2 overflow-hidden" hover>
            <div className="relative w-full aspect-video bg-surface-container-high">
              <Image
                src={heroShot.src}
                alt={`Grimoire — ${heroShot.label}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <Badge tone="dark" className="w-fit mb-4">
                {grimoireProject.status}
              </Badge>
              <h3 className="text-2xl font-semibold text-primary">
                {grimoireProject.title}
                <span className="text-on-surface-variant font-normal">
                  {" "}
                  — {grimoireProject.tagline}
                </span>
              </h3>
              <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">
                {grimoireProject.overview}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {grimoireProject.techStack.map((tech) => (
                  <Badge key={tech} tone="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-4">
                <Button href="/projects#grimoire" variant="primary">
                  View Project <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
                <Button
                  href={grimoireProject.download.path}
                  variant="outline"
                  download={grimoireProject.download.fileName}
                >
                  <Icon name="download" className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}