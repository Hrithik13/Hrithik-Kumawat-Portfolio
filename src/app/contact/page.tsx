import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactInfoCard } from "@/components/sections/contact/ContactInfoCard";
import { RelocationCard } from "@/components/sections/contact/RelocationCard";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { FaqAccordion } from "@/components/sections/contact/FaqAccordion";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss Business Analyst, Data Analyst, or QA Analyst opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-16 sm:pt-20 pb-16">
        <Container>
          <Reveal>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Let&apos;s Connect
            </h1>
            <p className="mt-4 text-base text-on-surface-variant leading-relaxed max-w-2xl">
              Whether you&apos;re hiring for Business Analysis, Data Analysis, or
              Quality Assurance, I&apos;d be happy to discuss how my experience
              can contribute to your team and business objectives.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-6">
            <div className="space-y-6">
              <Reveal>
                <ContactInfoCard />
              </Reveal>
              <Reveal delay={0.08}>
                <RelocationCard />
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <FaqAccordion />
    </>
  );
}
