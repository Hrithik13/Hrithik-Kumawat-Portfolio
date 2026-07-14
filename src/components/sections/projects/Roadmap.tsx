import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const roadmapItems = [
  { label: "Professional Experience", done: true },
  { label: "Skills", done: true },
  { label: "Resume", done: true },
  { label: "Contact", done: true },
  { label: "Case Studies", done: false },
  { label: "Personal Projects", done: false },
];

export function Roadmap() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <Reveal>
          <div className="rounded-2xl bg-primary px-6 py-10 sm:px-12 sm:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white">Roadmap</h2>
              <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-sm">
                My systematic approach to professional documentation and
                portfolio development.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 content-start">
              {roadmapItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <Icon
                    name={item.done ? "check-circle" : "hourglass"}
                    className={`h-4 w-4 flex-none ${
                      item.done ? "text-secondary-container" : "text-white/50"
                    }`}
                  />
                  <span className="text-sm text-white/90">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
