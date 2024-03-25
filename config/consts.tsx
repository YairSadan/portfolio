import { Stack, stack } from "@/components/about";

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
    stack: [stack[12], stack[4], stack[9]] as Stack[],
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
    stack: [stack[0], stack[4], stack[13]] as Stack[],
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
    stack: [stack[0], stack[1], stack[2]] as Stack[],
  },
  {
    title: "Portfolio",
    description:
      "This is the portfolio you are currently looking at, built with Next.js and TailwindCSS 🚀",
    link: "/",
    githubLink: "https://github.com/YairSadan/portfolio",
    underConstruction: true,
    previewImageLight: "/previewImages/portfolio-light.png",
    previewImageDark: "/previewImages/portfolio-dark.png",
    stack: [stack[9], stack[4], stack[8]] as Stack[],
  },
];

export type Project = (typeof projects)[0];
