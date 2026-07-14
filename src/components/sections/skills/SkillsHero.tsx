import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { profile } from "@/lib/content/profile";
import { resumes } from "@/lib/content/resumes";

export function SkillsHero() {
  return (
    <section className="pt-16 sm:pt-20 pb-16">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Badge tone="outline" className="mb-6">
            Expertise Landscape
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Skills &amp; Expertise
          </h1>
          <p className="mt-6 text-base text-on-surface-variant leading-relaxed max-w-xl">
            A comprehensive overview of the business analysis, data validation,
            reporting, quality assurance, and technical competencies developed
            through {profile.yearsExperience} years of enterprise IT experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/projects" variant="primary">
              View Portfolio
            </Button>
            <Button href={resumes.ba.pdfPath} variant="outline">
              Download CV
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/hero-illustration.svg"
              alt="Illustration representing a competency landscape"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
          <div className="absolute -bottom-4 left-4 flex items-center gap-3 bg-surface-container-lowest rounded-lg shadow-card px-4 py-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
              <Icon name="check-square" className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-primary leading-none">
                {profile.yearsExperience} Years
              </p>
              <p className="font-mono text-[10px] uppercase text-on-surface-variant mt-1">
                Enterprise Experience
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
