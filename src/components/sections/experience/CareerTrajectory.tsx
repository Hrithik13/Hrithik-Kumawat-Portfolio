import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { roleEvolution } from "@/lib/content/experience";

export function CareerTrajectory() {
  return (
    <section className="py-16 sm:py-20 bg-surface-container-lowest">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Career Trajectory"
          title="How My Role Evolved"
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-4">
          {roleEvolution.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="flex flex-col items-center text-center gap-3">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                    i % 2 === 0
                      ? "bg-primary-container text-white"
                      : "bg-surface-container-high text-primary"
                  }`}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-primary text-xs">
                  {item.title}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
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
