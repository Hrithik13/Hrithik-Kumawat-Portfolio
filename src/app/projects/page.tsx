import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/projects/ComingSoon";
import { ProjectPlaceholderGrid } from "@/components/sections/projects/ProjectPlaceholderCard";
import { Roadmap } from "@/components/sections/projects/Roadmap";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { resumes } from "@/lib/content/resumes";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects demonstrating skills in Business Analysis, Data Analysis and Quality Assurance — coming soon.",
};

export default function ProjectsPage() {
  return (
    <>
      <ComingSoon />
      <ProjectPlaceholderGrid />
      <Roadmap />
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
