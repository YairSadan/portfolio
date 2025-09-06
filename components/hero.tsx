import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="container mx-auto grid gap-8 py-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Backend Engineer crafting reliable systems
        </h1>
        <p className="text-lg text-muted-foreground max-w-prose">
          I build scalable, well-tested services and APIs with modern tooling.
          Currently shipping production features full-time — here are the side
          projects I loved building.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="#projects">View projects</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={siteConfig.links.github} target="_blank">
              GitHub
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link href={siteConfig.links.linkedin} target="_blank">
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative mx-auto w-56 h-56 md:w-72 md:h-72 rounded-xl overflow-hidden ring-1 ring-border">
        <Image
          src="/avatars/me-behind-mac.png"
          alt="Yair Sadan portrait"
          fill
          sizes="(max-width: 768px) 224px, 288px"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
