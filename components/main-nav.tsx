import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Avatar>
          <AvatarImage src={siteConfig.avatar} alt={siteConfig.name} />
          <AvatarFallback>{siteConfig.name[0]}</AvatarFallback>
        </Avatar>
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="#about"
          className="transition-colors hover:text-foreground/80"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="transition-colors hover:text-foreground/60"
        >
          Projects
        </Link>
      </nav>
    </div>
  );
}
