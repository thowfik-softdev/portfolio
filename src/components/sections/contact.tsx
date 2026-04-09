import { siteConfig, socialLinks, contact } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="editorial-rule-double mb-6 sm:mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 md:gap-12">
        {/* Section title */}
        <div className="md:col-span-3">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold md:sticky md:top-28">
            Contact
          </h2>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1 mb-4 md:mb-0">
            Get in Touch
          </p>
        </div>

        {/* Contact content */}
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Message */}
            <div>
              <p className="font-serif text-base sm:text-lg leading-relaxed text-muted-foreground mb-5 sm:mb-6 drop-cap">
                {contact.message}
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-block text-xs tracking-[0.2em] uppercase font-semibold border border-foreground px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-foreground hover:text-background active:bg-foreground active:text-background transition-colors duration-300"
              >
                {contact.ctaText}
              </a>
            </div>

            {/* Contact details */}
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <hr className="editorial-rule" />
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                  Location
                </h3>
                <p className="font-serif text-sm text-muted-foreground">
                  {siteConfig.location}
                </p>
              </div>
              <hr className="editorial-rule" />
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                  Social
                </h3>
                <div className="flex flex-col gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {social.label} ↗
                    </a>
                  ))}
                </div>
              </div>
              <hr className="editorial-rule" />
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                  Resume
                </h3>
                <a
                  href="#"
                  className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Download PDF ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
