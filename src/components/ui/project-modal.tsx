"use client";

import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";

type Module = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly tech: readonly string[];
};

type ProjectModalProps = {
  title: string;
  modules: readonly Module[];
  onClose: () => void;
};

export default function ProjectModal({ title, modules, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-6"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 bg-background w-full sm:max-w-3xl max-h-[82vh] flex flex-col border border-border">
        {/* Header */}
        <div className="flex items-start justify-between px-5 sm:px-8 py-5 border-b border-border shrink-0">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-semibold mb-1">
              Project Details
            </p>
            <h2 className="font-heading text-xl sm:text-2xl font-bold leading-tight">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors mt-1 ml-4 shrink-0 text-lg leading-none"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-8">
          {modules.map((module, index) => (
            <div key={module.id}>
              {/* Module header */}
              <div className="flex items-start gap-4 mb-3">
                <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-semibold pt-1 shrink-0">
                  {module.id}
                </span>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold leading-snug">
                    {module.title}
                  </h3>
                  <p className="font-serif text-sm text-muted-foreground mt-1 leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-4 ml-9">
                {module.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-muted-foreground mt-0.5 shrink-0">+</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 ml-9">
                {module.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="rounded-none text-[10px] font-normal tracking-wider px-2 py-0.5"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              {/* Divider between modules */}
              {index < modules.length - 1 && (
                <div className="editorial-rule mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
