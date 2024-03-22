import { MainNavItem, SidebarNavItem } from "@/types/nav";
interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "#work",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Resume",
      href: "/resume.pdf",
    },
    {
      title: "GitHub",
      href: "https://github.com/YairSadan",
      external: true,
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/yair-sadan",
      external: true,
    },
    {
      title: "Facebook",
      href: "https://facebook.com/profile.php?id=100004369271980",
      external: true,
    },
    {
      title: "Instagram",
      href: "https://instagram.com/yair_sadan1",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/getting-started/introduction",
          items: [],
        },
      ],
    },
  ],
};
