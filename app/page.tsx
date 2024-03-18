import Resume from "@/components/resume";
import About from "@/components/about";
export default function Home() {
  return (
    <div className="flex-grow flex flex-col items-center px-12 py-16">
      <About />
      <Resume />
    </div>
  );
}
