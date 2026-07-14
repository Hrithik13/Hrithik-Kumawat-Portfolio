import type { Metadata } from "next";
import { Bio } from "@/components/sections/about/Bio";
import { CorePrinciples } from "@/components/sections/about/CorePrinciples";
import { Workflow } from "@/components/sections/about/Workflow";
import { ProfessionalJourney } from "@/components/sections/about/ProfessionalJourney";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { resumes } from "@/lib/content/resumes";

export const metadata: Metadata = {
  title: "About",
  description:
    "Business Analyst with 3+ years of experience in requirements analysis, stakeholder collaboration, and SQL-based data validation.",
};

export default function AboutPage() {
  return (
    <>
      <Bio />
      <CorePrinciples />
      <Workflow />
      <ProfessionalJourney />
      <CtaBanner
        title="Let's Build Better Business Solutions"
        description="Currently seeking Business Analyst, Data Analyst, and Quality Assurance opportunities where analytical thinking, structured problem solving, and collaboration can create measurable business value."
      >
        <Button href={resumes.ba.pdfPath} variant="secondary">
          <Icon name="download" className="h-4 w-4" />
          Download Resume
        </Button>
        <Button href="/contact" variant="outline-inverse">
          Let&apos;s Connect
        </Button>
      </CtaBanner>
    </>
  );
}
