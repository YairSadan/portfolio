import { stack } from "@/components/about";
import { projects } from "./consts";

export const siteConfig = {
  name: "Sadan Portfolio",
  avatar: "avatars/avatar.png",
  url: "https://sadan.vercel.app", // todo: update this
  ogImage: "/og-image.png", // todo: update this
  description: "Sadan's portfolio",
  links: {
    github: "https://github.com/YairSadan",
    linkedin: "https://linkedin.com/in/yair-sadan",
    facebook: "https://facebook.com/profile.php?id=100004369271980",
    instagram: "https://instagram.com/yair_sadan1",
  },
  navLinks: [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Projects",
      href: "#projects",
    },
  ],
  stack: stack,
  projects: projects,
};

export type siteConfig = typeof siteConfig;
