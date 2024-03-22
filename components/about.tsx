"use client";
import Image from "next/image";
import AnimatedText from "./framer-components/animated-text";
import { motion } from "framer-motion";
import FlipAnimation from "./framer-components/flip-animation";
import { stack } from "@/config/consts";

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
        <motion.ul
          className="grid grid-cols-3 md:grid-cols-5 gap-4 col mt-4 max-w-fit"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {stack.map((tech) => (
            <motion.li
              key={tech.title}
              className="border-2 rounded-full flex justify-center items-center h-16 w-16"
              variants={item}
            >
              {tech.logo}
            </motion.li>
          ))}
        </motion.ul>
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
