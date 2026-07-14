import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { profile } from "@/lib/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/40 py-10 mt-auto">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-primary">{profile.name}</p>
          <p className="text-xs text-on-surface-variant mt-1 font-mono">
            © {new Date().getFullYear()} {profile.footerTagline}
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-on-surface-variant">
          <Link
            href={profile.linkedinUrl}
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href={profile.githubUrl}
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className="hover:text-primary transition-colors"
          >
            Email
          </Link>
        </div>
      </Container>
    </footer>
  );
}
