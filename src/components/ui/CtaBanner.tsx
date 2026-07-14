import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBanner({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal className="rounded-2xl bg-primary px-6 py-14 sm:px-14 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white max-w-2xl mx-auto">
            {title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
