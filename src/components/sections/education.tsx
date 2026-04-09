import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="editorial-rule-double mb-6 sm:mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 md:gap-12">
        {/* Section title */}
        <div className="md:col-span-3">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold md:sticky md:top-28">
            Education
          </h2>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1 mb-4 md:mb-0">
            Academic Background
          </p>
        </div>

        {/* Education content */}
        <div className="md:col-span-9">
          <article className="relative">
            {/* Period badge */}
            <div className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 gap-y-1 mb-2 sm:mb-3">
              <span className="text-xs tracking-[0.2em] uppercase font-semibold bg-primary text-primary-foreground px-2 py-0.5">
                {education.period}
              </span>
              <span className="text-xs text-muted-foreground tracking-wide">
                {education.location}
              </span>
            </div>

            {/* Degree & Institution */}
            <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold leading-tight">
              {education.degree}
            </h3>
            <p className="font-serif text-sm text-muted-foreground italic mt-1 mb-2 sm:mb-3">
              {education.institution}
            </p>

            {/* Description */}
            <p className="font-serif text-sm leading-relaxed text-muted-foreground mb-3 sm:mb-4">
              {education.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-1.5">
              {education.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-foreground flex items-start gap-2"
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
