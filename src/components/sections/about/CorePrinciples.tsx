import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { corePrinciples } from "@/lib/content/about";

export function CorePrinciples() {
  return (
    <section className="py-16 sm:py-20 bg-surface-container-lowest">
      <Container>
        <SectionHeading title="Core Principles" />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePrinciples.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <Card className="p-6 h-full" hover>
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-container-high text-primary mb-4">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-primary text-sm">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
