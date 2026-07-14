import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { profile } from "@/lib/content/profile";

export function ContactInfoCard() {
  return (
    <Card className="p-6 sm:p-8">
      <Badge tone="outline" className="mb-4">
        {profile.availability === "Actively Seeking Opportunities"
          ? "Available Now"
          : profile.availability}
      </Badge>
      <h2 className="text-xl font-semibold text-primary">{profile.name}</h2>
      <p className="text-sm text-on-surface-variant mt-1">
        {profile.availability}
      </p>

      <div className="mt-6 pt-6 border-t border-outline-variant/40 space-y-5">
        <div className="flex items-start gap-3">
          <Icon name="mail" className="h-4 w-4 text-on-surface-variant mt-0.5" />
          <div>
            <p className="font-mono text-[10px] uppercase text-on-surface-variant">
              Email
            </p>
            <p className="text-sm font-medium text-primary">{profile.email}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Icon name="share" className="h-4 w-4 text-on-surface-variant mt-0.5" />
          <div>
            <p className="font-mono text-[10px] uppercase text-on-surface-variant">
              LinkedIn
            </p>
            <p className="text-sm font-medium text-primary">
              {profile.linkedin}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Icon name="map-pin" className="h-4 w-4 text-on-surface-variant mt-0.5" />
          <div>
            <p className="font-mono text-[10px] uppercase text-on-surface-variant">
              Current Location
            </p>
            <p className="text-sm font-medium text-primary">
              {profile.location}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-outline-variant/40">
        <p className="font-mono text-[10px] uppercase text-on-surface-variant mb-3">
          Preferred Roles
        </p>
        <div className="flex flex-wrap gap-2">
          {profile.preferredRoles.map((role) => (
            <Badge key={role} tone="outline">
              {role}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
