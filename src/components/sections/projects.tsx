import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      <div className="editorial-rule-double mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Section title */}
        <div className="md:col-span-3">
          <h2 className="font-heading text-2xl md:text-3xl font-bold sticky top-28">
            Projects
          </h2>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
            Selected Work
          </p>
        </div>

        {/* Projects grid */}
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="rounded-none border-border hover:border-foreground/30 transition-colors duration-300 group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-semibold">
                      {project.year}
                    </span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                      ↗
                    </span>
                  </div>
                  <CardTitle className="font-heading text-lg font-bold leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-serif text-sm leading-relaxed mt-1">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="rounded-none text-[10px] font-normal tracking-wider px-2 py-0.5"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
