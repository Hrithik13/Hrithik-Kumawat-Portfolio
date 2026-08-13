import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ProjectHero } from "@/components/sections/projects/ProjectHero";
import { ProjectFeatureList } from "@/components/sections/projects/ProjectFeatureList";
import { ProjectScreenshotGallery } from "@/components/sections/projects/ProjectScreenshotGallery";
import { MoreProjectsComingSoon } from "@/components/sections/projects/MoreProjectsComingSoon";
import { grimoireProject } from "@/lib/content/projects";
import { resumes } from "@/lib/content/resumes";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Grimoire — a desktop anime tracker built with Electron, React, TypeScript, and SQLite.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectHero />

      <section className="pb-16 sm:pb-20">
        <Container>
          <SectionHeading eyebrow="Under the Hood" title="Engineering Deep-Dive" />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProjectFeatureList
              icon="layout-dashboard"
              title="Key Features"
              items={grimoireProject.keyFeatures}
            />
            <ProjectFeatureList
              icon="cpu"
              title="Technical Highlights"
              items={grimoireProject.technicalHighlights}
              delay={0.06}
            />
            <ProjectFeatureList
              icon="trending-up"
              title="Impact"
              items={grimoireProject.impact}
              delay={0.12}
            />
            <ProjectFeatureList
              icon="sparkles"
              title="Future Enhancements"
              items={grimoireProject.futureEnhancements}
              delay={0.18}
            />
          </div>
        </Container>
      </section>

      <ProjectScreenshotGallery />
      <MoreProjectsComingSoon />

      <section className="pb-20 text-center">
        <Container>
          <Reveal>
            <p className="text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              Follow my journey as I continue building practical, real-world
              projects that showcase continuous learning and professional growth.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary">
                Get in Touch
              </Button>
              <Button href={resumes.ba.pdfPath} variant="outline">
                <Icon name="download" className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
