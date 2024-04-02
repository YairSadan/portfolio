"use client";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const stack = [
  {
    title: "csharp",
    href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    start: new Date(2022, 10),
    level: 7,
  },
  {
    title: "javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    start: new Date(2023, 3),
    level: 8,
  },
  {
    title: "typescript",
    href: "https://www.typescriptlang.org/",
    start: new Date(2023, 4),
    level: 9,
  },
  {
    title: "python",
    href: "https://www.python.org/",
    start: new Date(2023, 7),
    level: 4,
  },
  {
    title: "nextjs",
    href: "https://nextjs.org/",
    start: new Date(2023, 8),
    level: 10,
  },
  {
    title: "react",
    href: "https://reactjs.org/",
    start: new Date(2023, 7),
    level: 7,
  },
  {
    title: "nodejs",
    href: "https://nodejs.org/",
    start: new Date(2023, 7),
    level: 6,
  },
  {
    title: "mongodb",
    href: "https://www.mongodb.com/",
    start: new Date(2023, 7),
    level: 6,
  },
  {
    title: "tailwindcss",
    href: "https://tailwindcss.com/",
    start: new Date(2023, 9),
    level: 9,
  },
  {
    title: "framer motion",
    href: "https://www.framer.com/motion/",
    start: new Date(2024, 3),
    level: 3,
  },
  {
    title: "git",
    href: "https://git-scm.com/",
    start: new Date(2023, 4),
    level: 8,
  },
  {
    title: "prisma",
    href: "https://www.prisma.io/",
    start: new Date(2023, 9),
    level: 7,
  },
  {
    title: "openai",
    href: "https://www.openai.com/",
    start: new Date(2024, 2),
    level: 6,
  },
  {
    title: "postgresql",
    href: "https://www.postgresql.org/",
    start: new Date(2024, 1),
    level: 4,
  },
  {
    title: "azure",
    href: "https://azure.microsoft.com/",
    start: new Date(2023, 7),
    level: 4,
  },
];
const MyStack = () => {
  const radius = 120; // Radius of the circle
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      className="z-10"
    >
      <h3 className="text-3xl font-semibold">My Stack:</h3>
      <div className="h-80 flex justify-center items-center rounded-full">
        <div className="relative">
          {stack.map((logo, index) => {
            const angle = (index / stack.length) * 2 * Math.PI; // Angle in radians for each logo
            const x = radius * Math.cos(angle); // Calculate x position
            const y = radius * Math.sin(angle); // Calculate y position

            return (
              <motion.li key={logo.title} variants={item}>
                <div
                  key={logo.title}
                  style={{
                    position: "absolute",
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <LogoLink title={logo.title} href={logo.href} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-semibold">
                          {logo.title.toLocaleUpperCase()}
                        </p>
                        <p>Expertise Level: {logo.level}0%</p>
                        <p>Started Using: {format(logo.start, "MMMM yyyy")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </motion.li>
            );
          })}
        </div>
      </div>
    </motion.ul>
  );
};

export default MyStack;

type LogoLinkProps = {
  href: string;
  title: string;
};
const LogoLink = ({ href, title }: LogoLinkProps) => {
  let className = "";

  switch (title) {
    case "nextjs":
      className += " icon-[logos--nextjs-icon]";
      break;
    case "react":
      className += " icon-[logos--react]";
      break;
    case "nodejs":
      className += " icon-[logos--nodejs-icon-alt]";
      break;
    case "mongodb":
      className += " icon-[logos--mongodb-icon]";
      break;
    case "tailwindcss":
      className += "  icon-[logos--tailwindcss-icon]";
      break;
    case "framer motion":
      className += " icon-[logos--framer]";
      break;
    case "git":
      className += " icon-[logos--git-icon]";
      break;
    case "csharp":
      className += " icon-[logos--c-sharp]";
      break;
    case "javascript":
      className += " icon-[logos--javascript]";
      break;
    case "typescript":
      className += " icon-[logos--typescript-icon]";
      break;
    case "python":
      className += " icon-[logos--python]";
      break;
    case "prisma":
      className += " icon-[logos--prisma]";
      break;
    case "openai":
      className += " icon-[logos--openai-icon]";
      break;
    case "postgresql":
      className += " icon-[logos--postgresql]";
      break;
    case "azure":
      className += " icon-[logos--azure-icon]";
      break;
  }

  className +=
    " size-16 -translate-x-1/2 -translate-y-1/2 absolute cursor-pointer border-2 bg-black/40 dark:bg-white/40 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out";

  return <Link href={href} target="_blank" className={className} />;
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
