import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { grimoireProject } from "@/lib/content/projects";

export function ProjectScreenshotGallery() {
  const rest = grimoireProject.screenshots.slice(1);

  return (
    <section className="py-16 sm:py-20 bg-surface-container-lowest">
      <Container>
        <SectionHeading
          eyebrow="Interface"
          title="A Closer Look"
          subtitle="Every screen from the live application, unedited."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rest.map((shot, i) => (
            <Reveal key={shot.id} delay={i * 0.05}>
              <Card className="overflow-hidden" hover>
                <div className="relative w-full aspect-[16/10] bg-surface-container-high">
                  <Image
                    src={shot.src}
                    alt={`Grimoire — ${shot.label}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="px-5 py-3 text-sm font-medium text-on-surface-variant border-t border-outline-variant/40">
                  {shot.label}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
