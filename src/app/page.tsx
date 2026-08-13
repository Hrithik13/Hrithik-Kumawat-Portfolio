import { Hero } from "@/components/sections/home/Hero";
import { TechProficiency } from "@/components/sections/home/TechProficiency";
import { Specializations } from "@/components/sections/home/Specializations";
import { FeaturedProject } from "@/components/sections/home/FeaturedProject";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { resumes } from "@/lib/content/resumes";

export default function Home() {
  return (
    <>
      <Hero />
      <TechProficiency />
      <Specializations />
      <FeaturedProject />
      <CtaBanner
        title="Let's Build Better Solutions Together"
        description="Currently seeking high-impact opportunities in Business Analysis, Data Strategy, and Software Quality Assurance."
      >
        <Button href="/contact" variant="secondary">
          Get in Touch
        </Button>
        <Button
          href={resumes.ba.pdfPath}
          variant="outline-inverse"
        >
          <Icon name="download" className="h-4 w-4" />
          Download Portfolio PDF
        </Button>
      </CtaBanner>
    </>
  );
}
