import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsComingSoon() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <Card className="p-10 sm:p-14 text-center max-w-2xl mx-auto">
            <Badge tone="outline" className="mb-5">
              Portfolio
            </Badge>
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-high text-primary mb-5">
              <Icon name="monitor" className="h-5 w-5" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary">
              Projects Coming Soon
            </h2>
            <p className="mt-4 text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-lg mx-auto">
              I&apos;m currently building practical projects that demonstrate
              my skills in Business Analysis, SQL, Power BI, Data Analytics
              and Quality Assurance. Real work, added as it&apos;s completed.
            </p>
            <div className="mt-7">
              <Button href="/projects" variant="outline">
                View Roadmap <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
