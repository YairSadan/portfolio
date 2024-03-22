"use client";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function MainNav() {
  const pathname = usePathname();
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
          href="#work"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "#work" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Work
        </Link>
        <Link
          href="#about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "#about" ? "text-foreground" : "text-foreground/60"
          )}
        >
          About
        </Link>
        <Link
          href="#resume"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "#resume" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Resume
        </Link>
      </nav>
    </div>
  );
}
