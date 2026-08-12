import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectFeatureList({
  icon,
  title,
  items,
  delay = 0,
}: {
  icon: string;
  title: string;
  items: string[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <Card className="p-6 sm:p-8 h-full">
        <div className="flex items-center gap-3 mb-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-surface-container-high text-primary flex-none">
            <Icon name={icon} className="h-4 w-4" />
          </span>
          <h3 className="font-semibold text-primary text-sm">{title}</h3>
        </div>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Icon
                name="check-circle"
                className="h-4 w-4 text-on-surface-variant mt-0.5 flex-none"
              />
              <span className="text-sm text-on-surface-variant leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </Reveal>
  );
}
