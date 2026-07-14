import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ComingSoon() {
  return (
    <section className="pt-16 sm:pt-20 pb-16">
      <Container>
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Projects
          </h1>
          <p className="mt-4 text-base text-on-surface-variant leading-relaxed max-w-2xl">
            A collection of personal and professional projects demonstrating my
            skills in Business Analysis, Data Analysis and Quality Assurance.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="mt-10 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
            <div className="bg-surface-container-high aspect-[4/3] lg:aspect-auto flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-primary-container text-primary-container">
                <Icon name="monitor" className="h-7 w-7" />
              </span>
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <Badge tone="outline" className="w-fit mb-4">
                In Progress
              </Badge>
              <h2 className="text-2xl font-semibold text-primary">
                Projects Coming Soon
              </h2>
              <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">
                I believe every project showcased in this portfolio should represent
                real work and meaningful learning. Rather than filling this page
                with placeholder content, I&apos;m currently building practical
                projects that demonstrate my skills in{" "}
                <strong className="text-primary font-semibold">
                  Business Analysis, SQL, Power BI, Data Analytics and Quality
                  Assurance
                </strong>
                . These projects will be added here as they are completed.
              </p>
              <div className="mt-6 flex gap-3 text-on-surface-variant">
                <Icon name="wrench" className="h-5 w-5" />
                <Icon name="terminal" className="h-5 w-5" />
                <Icon name="database" className="h-5 w-5" />
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
