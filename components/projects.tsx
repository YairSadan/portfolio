import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Projects() {
  return (
    <div
      className="flex-grow flex justify-center items-center px-12"
      id="projects"
    >
      <Button asChild className="gap-x-2">
        <Link href={"/resume.pdf"} target="_blank">
          <span className="font-bold">See my full resume</span>
          <ArrowRightIcon className="mt-0.5 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
