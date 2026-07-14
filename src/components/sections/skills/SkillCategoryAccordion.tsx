import { Container } from "@/components/ui/Container";
import { SkillCategoryItem } from "@/components/sections/skills/SkillCategoryItem";
import { skillCategories } from "@/lib/content/skills";

export function SkillCategoryAccordion() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container className="max-w-3xl">
        <div className="space-y-4">
          {skillCategories.map((category, i) => (
            <SkillCategoryItem
              key={category.id}
              category={category}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
