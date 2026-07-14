import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/content/profile";

export function Hero() {
  return (
    <section className="pt-16 sm:pt-20 pb-20">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Badge tone="outline" className="mb-6">
            Available for New Projects
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary leading-tight">
            {profile.heroHeadlineLines[0]} {profile.heroHeadlineLines[1]}{" "}
            <span className="text-on-primary-container">
              {profile.heroHeadlineLines[2]}
            </span>
          </h1>
          <p className="mt-6 text-base text-on-surface-variant leading-relaxed max-w-xl">
            {profile.heroSubtext}
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-wide text-on-surface-variant">
            {profile.heroTags.join("  ·  ")}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/resume" variant="primary">
              View Resume
            </Button>
            <Button href="/contact" variant="outline">
              Contact Me
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative aspect-[4/3] w-full">
          <Image
            src="/images/hero-illustration.svg"
            alt="Abstract illustration representing data analytics and business intelligence"
            fill
            unoptimized
            className="object-contain"
            priority
          />
        </Reveal>
      </Container>
    </section>
  );
}
