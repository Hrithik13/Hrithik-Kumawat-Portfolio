import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { professionalStrengths } from "@/lib/content/skills";

export function ProfessionalStrengths() {
  return (
    <section className="py-16 sm:py-20 bg-surface-container-low">
      <Container>
        <h2 className="text-center text-xl font-semibold text-primary">
          Professional Strengths
        </h2>
        <div className="mt-2 flex justify-center">
          <span className="h-0.5 w-10 bg-primary-container rounded-full" />
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionalStrengths.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <Card className="p-6 h-full">
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
