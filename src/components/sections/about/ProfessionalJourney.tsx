import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { roles } from "@/lib/content/experience";
import { profile } from "@/lib/content/profile";

export function ProfessionalJourney() {
  return (
    <section className="py-16 sm:py-20 bg-surface-container-lowest">
      <Container>
        <SectionHeading
          align="center"
          title="Professional Journey"
          subtitle="Tracing academic foundations and professional evolution in the analysis domain."
        />
        <div className="mt-12 max-w-2xl mx-auto space-y-10">
          {roles.map((role, i) => (
            <TimelineItem
              key={role.id}
              title={role.title}
              company={role.company}
              location={role.location}
              period={role.period}
              description={role.summary}
              delay={i * 0.06}
            />
          ))}
          <TimelineItem
            title={profile.education.degree}
            company={profile.education.institution}
            period={profile.education.period}
            description="Built a strong foundation in software engineering, database programming, and analytical problem solving."
            isLast
            delay={roles.length * 0.06}
          />
        </div>
      </Container>
    </section>
  );
}
