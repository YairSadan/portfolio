import Image from "next/image";
import AnimatedText from "./framer-components/animated-text";
import FlipAnimation from "./framer-components/flip-animation";
import { cn } from "@/lib/utils";
import UlAnimation from "./framer-components/ul-animation";

export default function About() {
  return (
    <div className="flex flex-row py-6">
      <div className="flex flex-col md:p-5">
        <AnimatedText
          el="h1"
          text="Hi, I'm Yair Sadan"
          once
          repeatDelay={10000}
          className="text-2xl md:text-6xl font-bold mb-4"
        />
        <h2 className="text-lg md:text-3xl font-semibold mb-2">
          Full-Stack Developer
        </h2>
        <p className="text-sm md:text-xl font-normal text-balance max-w-2xl mb-1">
          Passionate Full Stack Developer with a solid grounding in C# and
          JavaScript, ready to tackle complex challenges and contribute to
          meaningful projects. Keen on continuous learning and adapting to new
          technologies.
        </p>
        <p className="text-sm md:text-xl font-normal text-balance max-w-2xl mb-3">
          Located in Tel Aviv, open to local and remote opportunities. Let&apos;s
          connect to discuss how I can contribute to your team!
        </p>
        <h3 className="text-lg md:text-3xl font-semibold">My stack:</h3>
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
    logo: <span className={cn(className, "icon-[logos--framer]")} />,
    level: 95,
  },
  {
    title: "GIT",
    logo: <span className={cn(className, "icon-[logos--git-icon]")} />,
    level: 95,
  },
  {
    title: "PRISMA",
    logo: <span className={cn(className, "icon-[logos--prisma]")} />,
    level: 95,
  },
  {
    title: "OPENAI",
    logo: <span className={cn(className, "icon-[logos--openai-icon]")} />,
    level: 95,
  },
  {
    title: "POSTGRESQL",
    logo: <span className={cn(className, "icon-[logos--postgresql]")} />,
    level: 95,
  },
];

export type Stack = (typeof stack)[0];
