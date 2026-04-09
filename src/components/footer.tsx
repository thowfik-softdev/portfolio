import { siteConfig, navLinks, socialLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-12 sm:mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="editorial-rule-double" />

        <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          {/* Column 1 */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-heading text-lg font-bold mb-3">
              {siteConfig.name}
            </h4>
            <p className="text-muted-foreground font-serif italic text-sm leading-relaxed">
              Crafting scalable web applications with clean architecture and
              modern technologies.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              Connect
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="editorial-rule" />
      </div>
    </footer>
  );
}
