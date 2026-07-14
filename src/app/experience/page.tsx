import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/sections/experience/ExperienceTimeline";
import { CareerTrajectory } from "@/components/sections/experience/CareerTrajectory";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { resumes } from "@/lib/content/resumes";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "A progression from system configuration and quality assurance to business analysis, requirements management, and stakeholder collaboration.",
};

export default function ExperiencePage() {
  return (
    <>
      <ExperienceTimeline />
      <CareerTrajectory />
      <CtaBanner
        title="Ready to discuss how my experience can add value?"
        description="With experience spanning configuration, quality assurance, business analysis, SQL validation, and stakeholder collaboration, I bring a balanced technical and business perspective to solving complex enterprise challenges."
      >
        <Button href={resumes.ba.pdfPath} variant="secondary">
          <Icon name="download" className="h-4 w-4" />
          Download Resume
        </Button>
        <Button href="/contact" variant="outline-inverse">
          Get in Touch
        </Button>
      </CtaBanner>
    </>
  );
}
