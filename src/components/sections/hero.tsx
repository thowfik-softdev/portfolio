import { siteConfig, hero } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Main headline area */}
        <div className="md:col-span-8">
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3 sm:mb-4">
            {hero.badge}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-4 sm:mb-6">
            {hero.headline.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
            <span className="italic font-normal">{hero.headlineItalic}</span>
          </h2>
          <div className="editorial-rule-thick mb-4 sm:mb-6" />
          <p className="font-serif text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl drop-cap">
            {hero.summary}
          </p>
        </div>

        {/* Sidebar info */}
        <aside className="md:col-span-4 border-t border-border pt-6 md:border-t-0 md:pt-0 md:border-l md:border-border md:pl-8">
          <div className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-0 md:space-y-6">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-1 sm:mb-2">
                Current Position
              </h3>
              <p className="font-serif text-xs sm:text-sm text-muted-foreground">
                {hero.sidebar.position}
              </p>
              <p className="font-serif text-xs sm:text-sm text-muted-foreground italic">
                at {hero.sidebar.company}
              </p>
            </div>
            <div className="border-l border-border pl-4 md:border-l-0 md:pl-0 md:border-t md:border-border md:pt-6">
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-1 sm:mb-2">
                Location
              </h3>
              <p className="font-serif text-xs sm:text-sm text-muted-foreground">
                {siteConfig.location}
              </p>
            </div>
            <div className="border-l border-border pl-4 md:border-l-0 md:pl-0 md:border-t md:border-border md:pt-6">
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-1 sm:mb-2">
                Availability
              </h3>
              <p className="font-serif text-xs sm:text-sm text-muted-foreground">
                {siteConfig.availability}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
