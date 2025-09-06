import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { projects } from "@/config/consts";

type ProjectsProps = {
  withId?: boolean;
};

export default function Projects({ withId = true }: ProjectsProps) {
  return (
    <div
      {...(withId ? { id: "projects" } : {})}
      className="grid lg:grid-cols-2 gap-4"
    >
      {projects.map((project) => (
        <Card key={project.title} className="lg:flex">
          <div className="flex flex-col gap-2 p-2">
            <CardHeader className="min-w-56 max-w-xl">
              <CardTitle className="md:flex-row flex flex-col gap-2">
                {project.title}
                {project.underConstruction && (
                  <p className="text-muted-foreground text-xs">
                    🏗️👷‍♂️ under construction
                  </p>
                )}
              </CardTitle>
              <CardDescription className="text-sm p-2 space-y-2">
                {project.description}
              </CardDescription>
              <span className="text-sm font-semibold">Tools used:</span>
              <div className="flex gap-2">
                {project.stack.map((stack) => (
                  <span
                    key={stack.title}
                    className="h-6 w-6 dark:bg-primary p-0.5 rounded-sm"
                  >
                    {stack.logo}
                  </span>
                ))}
              </div>
            </CardHeader>
          </div>
          <CardContent className="flex flex-col items-center justify-center space-y-1 pt-3">
            <Link
              href={project.link}
              target="_blank"
              className="relative group hover:scale-110 hover:shadow-2xl ease-in-out transform transition"
            >
              <Image
                className="dark:hidden rounded-sm"
                src={project.previewImageDark}
                alt={project.title}
                height={100}
                width={500}
              />
              <Image
                className="hidden dark:block rounded-sm"
                src={project.previewImageLight}
                alt={project.title}
                height={100}
                width={500}
              />
              <Button
                size={"lg"}
                variant={"outline"}
                className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ExternalLinkIcon />
              </Button>
            </Link>
            <Button size={"lg"} asChild>
              <Link
                href={project.githubLink}
                target="_blank"
                className="space-x-2"
              >
                <GitHubLogoIcon />
                <ExternalLinkIcon />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
