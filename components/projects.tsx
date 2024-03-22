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
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { projects } from "@/config/consts";

export default function Projects() {
  return (
    <div id="projects" className="grid md:grid-cols-2 gap-4 -mt-6">
      {projects.map((project) => (
        <Card key={project.title}>
          <CardHeader>
            <CardTitle className="flex gap-2">
              {project.title}
              {project.underConstruction && (
                <p className="text-muted-foreground">
                  🏗️👷‍♂️ (under construction)
                </p>
              )}
            </CardTitle>
            <CardDescription className="text-sm p-4">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 items-center justify-center">
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
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
