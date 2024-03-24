import Image from "next/image";
import AnimatedText from "./framer-components/animated-text";
import { motion } from "framer-motion";
import FlipAnimation from "./framer-components/flip-animation";
import { cn } from "@/lib/utils";
import UlAnimation from "./framer-components/ul-animation";

export default function About() {
  return (
    <div className="flex flex-row md:px-16 py-6">
      <div className="flex flex-col md:p-5 gap-y-3">
        <AnimatedText
          el="h1"
          text="Hello, I am Yair Sadan"
          once
          repeatDelay={10000}
          className="text-2xl md:text-6xl font-bold"
        />
        <h2 className="text-lg md:text-3xl font-semibold">
          A full-stack developer
        </h2>
        <p className="text-sm md:text-xl font-normal text-balance max-w-[700px]">
          I am a full-stack developer with a passion for building and
          maintaining web applications. I have experience with a variety of
          technologies including React, Node.js, and MongoDB. I am always
          looking to learn new things and improve my skills.
        </p>
        <UlAnimation elements={stack} />
      </div>
      <FlipAnimation>
        <Image
          src={"/avatars/me-waving.png"}
          height={300}
          width={400}
          alt="picture of me"
        />
      </FlipAnimation>
    </div>
  );
}

const className = "h-full w-full";
export const stack = [
  {
    title: "C#",
    logo: <span className={cn(className, "icon-[logos--c-sharp]")} />,
    level: 95,
  },
  {
    title: "JavaScript",
    logo: <span className={cn(className, "icon-[logos--javascript]")} />,
    level: 95,
  },
  {
    title: "TypeScript",
    logo: <span className={cn(className, "icon-[logos--typescript-icon]")} />,
    level: 95,
  },
  {
    title: "Python",
    logo: <span className={cn(className, "icon-[logos--python]")} />,
    level: 95,
  },
  {
    title: "NEXT.JS",
    logo: <span className={cn(className, "icon-[logos--nextjs-icon]")} />,
    level: 95,
  },
  {
    title: "REACT",
    logo: <span className={cn(className, "icon-[logos--react]")} />,
    level: 95,
  },
  {
    title: "NODE.JS",
    logo: <span className={cn(className, "icon-[logos--nodejs-icon-alt]")} />,
    level: 95,
  },
  {
    title: "MONGODB",
    logo: <span className={cn(className, "icon-[logos--mongodb-icon]")} />,
    level: 95,
  },
  {
    title: "TAILWINDCSS",
    logo: <span className={cn(className, "icon-[logos--tailwindcss-icon]")} />,
    level: 95,
  },
  {
    title: "FRAMER MOTION",
    logo: <span className={cn(className, "icon-[logos--framer] m-4")} />,
    level: 95,
  },
];
