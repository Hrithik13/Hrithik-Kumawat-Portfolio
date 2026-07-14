import type { Metadata } from "next";
import { ResumeToggle } from "@/components/sections/resume/ResumeToggle";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { resumes } from "@/lib/content/resumes";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Business Analyst and QA Analyst resumes — role-specific summaries, expertise, and downloadable PDFs.",
};

export default function ResumePage() {
  return (
    <>
      <ResumeToggle />
      <CtaBanner
        title="Interested in learning more?"
        description="Let's discuss how my analytical thinking, business understanding and quality-focused mindset can contribute to your team."
      >
        <Button href="/contact" variant="secondary">
          Contact Me
        </Button>
        <Button
          href={resumes.ba.pdfPath}
          variant="outline-inverse"
          download={resumes.ba.pdfFileName}
        >
          <Icon name="download" className="h-4 w-4" />
          Download Resume
        </Button>
      </CtaBanner>
    </>
  );
}
