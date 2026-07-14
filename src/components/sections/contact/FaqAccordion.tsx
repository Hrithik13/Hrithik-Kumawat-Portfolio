import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faqItems } from "@/lib/content/contact";

export function FaqAccordion() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Quick answers to common inquiries regarding my professional background and preferences."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {faqItems.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.05}>
              <div className="rounded-xl bg-surface-container-low p-6 h-full">
                <h3 className="font-semibold text-primary text-sm">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
