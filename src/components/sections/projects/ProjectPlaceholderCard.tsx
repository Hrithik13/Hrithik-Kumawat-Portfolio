import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectPlaceholderGrid() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <Card className="p-5">
                <div className="aspect-[4/3] rounded-md bg-surface-container-high flex items-center justify-center mb-4">
                  <Icon name="lock" className="h-6 w-6 text-on-surface-variant" />
                </div>
                <Badge tone="outline" className="mb-2">
                  In Development
                </Badge>
                <p className="text-sm font-medium text-on-surface-variant">
                  Project Placeholder
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
