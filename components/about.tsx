import Image from "next/image";
import AnimatedText from "./animated-text";
export default function About() {
  return (
    <div className="flex flex-row md:px-16 py-6">
      <div className="flex flex-col p-5 gap-y-3">
        <AnimatedText
          el="h1"
          text="Hello, I am Yair Sadan"
          once
          repeatDelay={10000}
          className="text-6xl font-bold"
        />
        <h2 className="text-3xl font-semibold">A full-stack developer</h2>
        <p className="text-xl font-normal text-balance max-w-[700px]">
          I am a full-stack developer with a passion for building and
          maintaining web applications. I have experience with a variety of
          technologies including React, Node.js, and MongoDB. I am always
          looking to learn new things and improve my skills.
        </p>
      </div>
      <Image
        src={"/portfolio.jpeg"}
        height={900}
        width={400}
        alt="picture of me"
        className="rounded-lg"
        quality={100}
      />
    </div>
  );
}
