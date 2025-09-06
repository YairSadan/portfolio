import Image from "next/image";
import AnimatedText from "./framer-components/animated-text";
import FlipAnimation from "./framer-components/flip-animation";

export default function About() {
  return (
    <section id="about" className="grid gap-4 py-10">
      <div className="flex flex-col md:p-5">
        <AnimatedText
          el="h1"
          text="Hi, I'm Yair Sadan"
          once
          repeatDelay={10000}
          className="text-3xl md:text-5xl font-bold mb-4"
        />
        <h2 className="text-lg md:text-2xl font-semibold mb-2">
          Backend & Full‑Stack Developer
        </h2>
        <p className="text-base md:text-lg text-muted-foreground text-balance max-w-3xl mb-2">
          I design and ship production-grade services and APIs with a focus on
          reliability, observability, and clean abstractions. My background
          spans C#/.NET and TypeScript/Node.js, and I&rsquo;m comfortable
          working across the stack when it helps ship value.
        </p>
        <p className="text-base md:text-lg text-muted-foreground text-balance max-w-3xl">
          Always happy to chat about systems design, developer experience, or
          interesting backend problems.
        </p>
      </div>
    </section>
  );
}
