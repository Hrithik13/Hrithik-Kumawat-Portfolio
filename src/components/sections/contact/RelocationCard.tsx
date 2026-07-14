import { Icon } from "@/components/ui/Icon";
import { profile } from "@/lib/content/profile";

export function RelocationCard() {
  const mapQuery = encodeURIComponent(profile.location);

  return (
    <div className="rounded-xl bg-surface-container-lowest shadow-card overflow-hidden">
      <div className="aspect-[16/10] w-full bg-surface-container-high">
        <iframe
          title={`Map showing ${profile.location}`}
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        />
      </div>

      <div className="p-6 sm:p-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary-container/10 px-3 py-1.5 mb-5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-container" />
          </span>
          <p className="font-mono text-[11px] uppercase tracking-wide text-primary">
            Open to: Remote, Hybrid, Relocation
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Icon name="map-pin" className="h-4 w-4 text-primary mt-0.5 flex-none" />
          <p className="text-sm text-on-surface-variant leading-relaxed">
            <span className="font-semibold text-primary">
              Preferred Relocation Cities:
            </span>{" "}
            {profile.relocationCities.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
