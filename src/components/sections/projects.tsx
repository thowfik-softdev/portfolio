"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectModal from "@/components/ui/project-modal";
import { projects } from "@/data/portfolio";

type ProjectDetails = {
  modules: readonly {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly highlights: readonly string[];
    readonly tech: readonly string[];
  }[];
};

type ActiveProject = {
  title: string;
  details: ProjectDetails;
};

const projectCompany: Record<string, string> = {
  "UAE BodyFlying Association": "Sanyaa Infotech",
  "Cell Health": "Sanyaa Infotech",
  "Sanyaa Infotech Website": "Sanyaa Infotech",
  "Hala Saudi Travel Platform": "Hala Saudi",
  "Property Management System": "Hala Saudi",
};

export default function Projects() {
  const [active, setActive] = useState<ActiveProject | null>(null);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="editorial-rule-double mb-6 sm:mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 md:gap-12">
        {/* Section title */}
        <div className="md:col-span-3">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold md:sticky md:top-28">
            Projects
          </h2>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1 mb-4 md:mb-0">
            Selected Work
          </p>
        </div>

        {/* Projects grid */}
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="rounded-none border-border hover:border-foreground/30 transition-colors duration-300 group flex flex-col"
              >
                <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-semibold">
                      {projectCompany[project.title] ?? ""}
                    </span>
                  </div>
                  <CardTitle className="font-heading text-base sm:text-lg font-bold leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-serif text-xs sm:text-sm leading-relaxed mt-1">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="rounded-none text-[10px] font-normal tracking-wider px-1.5 sm:px-2 py-0.5"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  {"details" in project && project.details && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-none w-fit text-xs tracking-widest uppercase mt-1"
                      onClick={() =>
                        setActive({
                          title: project.title,
                          details: project.details as ProjectDetails,
                        })
                      }
                    >
                      Learn More
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {active && (
        <ProjectModal
          title={active.title}
          modules={active.details.modules}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}
