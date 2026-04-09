import { siteConfig, navLinks, socialLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="editorial-rule-double" />

        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Column 1 */}
          <div>
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
            <ul className="space-y-2">
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
