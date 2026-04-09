import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="editorial-rule-double mb-6 sm:mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 md:gap-12">
        {/* Section title */}
        <div className="md:col-span-3">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold md:sticky md:top-28">
            Skills
          </h2>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1 mb-4 md:mb-0">
            Technical Expertise
          </p>
        </div>

        {/* Skills grid */}
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {skillCategories.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-3 pb-2 border-b border-border">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-none text-xs font-normal tracking-wide px-2.5 sm:px-3 py-1 sm:py-1.5 bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
