"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { SkillCategory } from "@/lib/content/skills";

export function SkillCategoryItem({
  category,
  defaultOpen = false,
}: {
  category: SkillCategory;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `skill-panel-${category.id}`;

  return (
    <Card className="overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
      >
        <span className="flex-none flex h-10 w-10 items-center justify-center rounded-md bg-surface-container-high text-primary">
          <Icon name={category.icon} className="h-5 w-5" />
        </span>
        <span className="flex-1">
          <span className="block font-semibold text-primary text-sm">
            {category.title}
          </span>
          <span className="block text-xs text-on-surface-variant mt-0.5">
            {category.subtitle}
          </span>
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-none text-on-surface-variant transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div id={panelId} className="px-5 sm:px-6 pb-6 -mt-1">
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {category.description}
          </p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-on-surface-variant mb-2">
                Core Competencies
              </p>
              <div className="flex flex-wrap gap-2">
                {category.competencies.map((c) => (
                  <Badge key={c} tone="outline">
                    {c}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-on-surface-variant mb-2">
                Related Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((t) => (
                  <Badge key={t} tone="dark">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
