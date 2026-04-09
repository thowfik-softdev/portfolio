"use client";

import { siteConfig, navLinks } from "@/data/portfolio";

export default function Header() {
  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      {/* Mobile Header — clean top bar, nav is in bottom bar */}
      <div className="md:hidden">
        <div className="flex items-center justify-center px-4 py-3">
          <h1 className="font-heading text-lg font-black tracking-tight leading-none">
            {siteConfig.name}
          </h1>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="editorial-rule-double max-w-5xl mx-auto mt-6" />
        <div className="max-w-5xl mx-auto px-6 py-6 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-black tracking-tight leading-none">
            {siteConfig.name}
          </h1>
          <p className="font-serif text-sm lg:text-base text-muted-foreground mt-2 italic">
            {siteConfig.tagline}
          </p>
        </div>
        <div className="editorial-rule-double max-w-5xl mx-auto" />

        {/* Navigation */}
        <nav className="max-w-5xl mx-auto px-6 py-3">
          <ul className="flex items-center justify-center gap-6 lg:gap-10 text-xs tracking-[0.2em] uppercase font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <hr className="editorial-rule max-w-5xl mx-auto" />
      </div>
    </header>
  );
}
