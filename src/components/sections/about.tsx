import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="editorial-rule-double mb-6 sm:mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 md:gap-12">
        {/* Section title */}
        <div className="md:col-span-3">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold md:sticky md:top-28">
            About
          </h2>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1 mb-4 md:mb-0">
            Who I Am
          </p>
        </div>

        {/* Content columns */}
        <div className="md:col-span-9">
          <div className="columns-1 md:columns-2 gap-8 text-sm leading-relaxed text-muted-foreground font-serif">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`mb-4 last:mb-0 ${index === 0 ? "drop-cap" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
