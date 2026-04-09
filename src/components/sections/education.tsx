import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-16">
      <div className="editorial-rule-double mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Section title */}
        <div className="md:col-span-3">
          <h2 className="font-heading text-2xl md:text-3xl font-bold sticky top-28">
            Education
          </h2>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
            Academic Background
          </p>
        </div>

        {/* Education content */}
        <div className="md:col-span-9">
          <article className="relative">
            {/* Period badge */}
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
              <span className="text-xs tracking-[0.2em] uppercase font-semibold bg-primary text-primary-foreground px-2 py-0.5">
                {education.period}
              </span>
              <span className="text-xs text-muted-foreground tracking-wide">
                {education.location}
              </span>
            </div>

            {/* Degree & Institution */}
            <h3 className="font-heading text-xl md:text-2xl font-bold leading-tight">
              {education.degree}
            </h3>
            <p className="font-serif text-sm text-muted-foreground italic mt-1 mb-3">
              {education.institution}
            </p>

            {/* Description */}
            <p className="font-serif text-sm leading-relaxed text-muted-foreground mb-4">
              {education.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-1.5">
              {education.highlights.map((highlight, i) => (
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
        </div>
      </div>
    </section>
  );
}
