import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { specializations } from "@/lib/content/home";

export function Specializations() {
  return (
    <section className="py-16 sm:py-20 bg-surface-container-lowest">
      <Container>
        <SectionHeading
          align="center"
          title="Strategic Specializations"
          subtitle="Bridging the gap between technical complexity and business value through systematic, data-led methodologies."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {specializations.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="border-l-2 border-primary-container pl-6 h-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-container-high text-primary mb-4">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
