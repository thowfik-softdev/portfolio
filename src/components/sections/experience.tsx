import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-16">
      <div className="editorial-rule-double mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Section title */}
        <div className="md:col-span-3">
          <h2 className="font-heading text-2xl md:text-3xl font-bold sticky top-28">
            Experience
          </h2>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
            Career Timeline
          </p>
        </div>

        {/* Timeline */}
        <div className="md:col-span-9">
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className="relative border-b border-border pb-8 mb-8 last:border-b-0 last:pb-0 last:mb-0"
              >
                {/* Period badge */}
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                  <span className="text-xs tracking-[0.2em] uppercase font-semibold bg-primary text-primary-foreground px-2 py-0.5">
                    {exp.period}
                  </span>
                  <span className="text-xs text-muted-foreground tracking-wide">
                    {exp.location}
                  </span>
                </div>

                {/* Title & Company */}
                <h3 className="font-heading text-xl md:text-2xl font-bold leading-tight">
                  {exp.title}
                </h3>
                <p className="font-serif text-sm text-muted-foreground italic mt-1 mb-3">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="font-serif text-sm leading-relaxed text-muted-foreground mb-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground flex items-start gap-2"
                    >
                      <span className="text-muted-foreground mt-0.5 shrink-0">
                        ✦
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
