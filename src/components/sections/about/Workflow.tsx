import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { workflowSteps } from "@/lib/content/about";

export function Workflow() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeading
            title="Methodical Workflow"
            subtitle="My approach combines structured business analysis with technical validation to ensure every requirement is accurately understood, implemented, tested, and delivered."
          />
          <ol className="mt-10 space-y-6">
            {workflowSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.05}>
                <li className="flex gap-4">
                  <span className="flex-none flex h-8 w-8 items-center justify-center rounded-full bg-primary-container text-white text-sm font-semibold">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary text-sm">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-on-surface-variant leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.1} className="relative aspect-[4/3] w-full lg:sticky lg:top-24">
          <Image
            src="/images/hero-illustration.svg"
            alt="Illustration representing the analysis workflow pipeline"
            fill
            unoptimized
            className="object-contain"
          />
        </Reveal>
      </Container>
    </section>
  );
}
