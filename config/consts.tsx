import { stack } from "@/components/about";

export const projects = [
  {
    title: "IsraBot",
    description:
      "Chat bot that helps you to find information about the ongoing events in Israel 🇮🇱, and helps you fight idiots by giving you the right information",
    link: "https://isra-bot.vercel.app",
    githubLink: "https://github.com/YairSadan/IsraBot",
    underConstruction: false,
    previewImageLight: "/previewImages/isra-bot-light.png",
    previewImageDark: "/previewImages/isra-bot-dark.png",
    stack: [stack[1], stack[2], stack[3]],
  },
  {
    title: "Task Manager",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo",
    link: "https://todos-puce-one.vercel.app",
    githubLink: "https://github.com/YairSadan/todos",
    underConstruction: false,
    previewImageLight: "/previewImages/task-manager-light.png",
    previewImageDark: "/previewImages/task-manager-dark.png",
  },
  {
    title: "Clients Manager",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut",
    link: "https://clients-management.vercel.app/",
    githubLink: "https://github.com/YairSadan/clients-management",
    underConstruction: true,
    previewImageLight: "/previewImages/under-construction.png",
    previewImageDark: "/previewImages/under-construction.png",
  },
  {
    title: "Portfolio",
    description:
      "This is the portfolio you are currently looking at, built with Next.js and TailwindCSS 🚀",
    link: "https://yairsadan.vercel.app",
    githubLink: "https://github.com/YairSadan/portfolio",
    underConstruction: false,
    previewImageLight: "/previewImages/portfolio-light.png",
    previewImageDark: "/previewImages/portfolio-dark.png",
  },
];
