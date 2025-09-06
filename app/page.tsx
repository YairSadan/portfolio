import Projects from "@/components/projects";
import About from "@/components/about";
import MyStack from "@/components/my-stack";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <div className="flex-grow flex flex-col gap-12 px-6 md:px-12 py-12">
      <Hero />
      <About />
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <MyStack />
        <section>
          <Projects />
        </section>
      </div>
    </div>
  );
}
