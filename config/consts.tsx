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
    description:"Developed a Full Stack application leveraging .NET Core for a robust WebAPI backend and Next.js for an interactive frontend. This solution is designed to enhance team productivity and organization by offering advanced task management features. It enables efficient task assignment, progress tracking, and collaborative tools, all within a user-friendly interface. This project highlights my skills in integrating diverse technologies to create a seamless, productive work environment for teams.",
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
      "Web app built with nextjs 14 to manage clients appointments and payments",
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
