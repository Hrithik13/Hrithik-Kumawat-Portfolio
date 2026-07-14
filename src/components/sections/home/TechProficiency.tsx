import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { techProficiency } from "@/lib/content/home";

export function TechProficiency() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          align="center"
          title="Technical Proficiency"
          subtitle="Specialized toolkit for end-to-end data lifecycle and business optimization."
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {techProficiency.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.04}>
              <Card className="p-6 flex flex-col items-center text-center gap-3" hover>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-high text-primary">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span className="font-semibold text-primary text-sm">
                  {item.label}
                </span>
                {item.sublabel && (
                  <span className="font-mono text-[11px] uppercase text-on-surface-variant">
                    {item.sublabel}
                  </span>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
