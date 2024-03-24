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

export default function Projects() {
  return (
    <div id="projects" className="grid md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <Card key={project.title} className="flex flex-row">
          <div className="flex flex-col gap-2 p-2">
            <CardHeader>
              <CardTitle className="flex gap-2">
                {project.title}
                {project.underConstruction && (
                  <p className="text-muted-foreground">
                    🏗️👷‍♂️ (under construction)
                  </p>
                )}
              </CardTitle>
              <CardDescription className="text-sm p-2 space-y-2">
                {project.description}
              </CardDescription>
              <span className="text-sm font-semibold">Tools used:</span>
              <div className="flex gap-2">
                {project.stack.map((stack) => (
                  <span key={stack.title} className="h-6 w-6">
                    {stack.logo}
                  </span>
                ))}
              </div>
            </CardHeader>
          </div>
          <CardContent className="flex flex-grow flex-col gap-2 items-center justify-center">
            <Link
              href={project.link}
              target="_blank"
              className="relative group hover:scale-110 hover:shadow-2xl ease-in-out transform transition w-36"
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
            <Button asChild>
              <Link
                href={project.githubLink}
                target="_blank"
                className=" space-x-2 w-36"
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
