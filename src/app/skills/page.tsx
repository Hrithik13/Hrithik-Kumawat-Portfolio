import type { Metadata } from "next";
import { SkillsHero } from "@/components/sections/skills/SkillsHero";
import { SkillCategoryAccordion } from "@/components/sections/skills/SkillCategoryAccordion";
import { ProfessionalStrengths } from "@/components/sections/skills/ProfessionalStrengths";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { resumes } from "@/lib/content/resumes";

export const metadata: Metadata = {
  title: "Skills & Expertise",
  description:
    "A comprehensive overview of business analysis, data validation, reporting, quality assurance, and technical competencies.",
};

export default function SkillsPage() {
  return (
    <>
      <SkillsHero />
      <SkillCategoryAccordion />
      <ProfessionalStrengths />
      <CtaBanner
        title="Let's Build Better Business Solutions"
        description="Seeking opportunities where business analysis, data-driven decision making, and cross-functional collaboration create measurable business value."
      >
        <Button href="/contact" variant="secondary">
          <Icon name="arrow-right" className="h-4 w-4" />
          Get in Touch
        </Button>
        <Button href={resumes.ba.pdfPath} variant="outline-inverse">
          <Icon name="download" className="h-4 w-4" />
          Download Resume
        </Button>
      </CtaBanner>
    </>
  );
}
