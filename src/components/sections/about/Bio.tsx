import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/content/profile";

export function Bio() {
  return (
    <section className="pt-16 sm:pt-20 pb-20">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Badge tone="outline" className="mb-6">
            Biography
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            About Me
          </h1>
          <p className="mt-6 text-base text-on-surface-variant leading-relaxed">
            {profile.bio}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.bioTags.map((tag) => (
              <Badge key={tag} tone="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative aspect-[4/3] w-full">
          <Image
            src="/images/hero-illustration.svg"
            alt="Illustration representing analytical workflow and data structures"
            fill
            unoptimized
            className="object-contain"
          />
        </Reveal>
      </Container>
    </section>
  );
}
