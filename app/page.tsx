import Projects from "@/components/projects";
import Image from "next/image";
import About from "@/components/about";
import MyStack from "@/components/my-stack";
import FlipAnimation from "@/components/framer-components/flip-animation";
export default function Home() {
  return (
    <div className="flex-grow flex flex-col items-center px-12 py-16">
      <About />
      <div className="md:flex items-end lg:gap-96">
        <MyStack />
        <FlipAnimation>
          <Image
            src={"/avatars/me-waving.png"}
            height={300}
            width={400}
            alt="picture of me"
          />
        </FlipAnimation>
      </div>
      <Projects />
    </div>
  );
}
