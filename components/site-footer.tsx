import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 md:h-20 md:flex-row">
        <p className="text-sm text-muted-foreground">
          Let’s build something reliable and fast.
        </p>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="default">
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Contact on LinkedIn
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
