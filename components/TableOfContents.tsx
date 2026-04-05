"use client";

import { useEffect, useState } from "react";
import type { Section } from "@/content/essay";

type Props = {
  sections: Section[];
};

export default function TableOfContents({ sections }: Props) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first section that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      className="fixed top-1/2 right-8 z-40 hidden -translate-y-1/2 xl:block"
      aria-label="فهرست مطالب"
    >
      <div className="rounded-lg border border-charcoal/5 bg-cream/80 px-5 py-4 shadow-sm backdrop-blur-sm">
        <p className="mb-3 text-[11px] font-medium tracking-wider text-muted uppercase">
          فهرست
        </p>
        <ul className="space-y-2">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`block text-sm transition-colors duration-200 ${
                  activeId === s.id
                    ? "font-semibold text-accent"
                    : "text-muted hover:text-charcoal"
                }`}
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
