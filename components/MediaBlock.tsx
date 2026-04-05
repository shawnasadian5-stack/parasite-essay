"use client";

import { useRef } from "react";
import useFadeIn from "@/hooks/useFadeIn";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  note?: string;
  fullWidth?: boolean;
};

export default function MediaBlock({ src, alt, caption, note, fullWidth }: Props) {
  const ref = useRef<HTMLElement>(null);
  useFadeIn(ref);

  return (
    <figure
      ref={ref}
      className={`fade-in-element my-12 sm:my-16 ${
        fullWidth ? "w-full" : "mx-auto max-w-4xl px-6 sm:px-8 lg:px-12"
      }`}
    >
      <div
        className={`overflow-hidden rounded-lg bg-charcoal/5 ${
          fullWidth ? "" : "shadow-media"
        }`}
      >
        {/* ✏️ Replace src with your image path */}
        <img
          src={src}
          alt={alt}
          className="h-auto w-full object-cover"
          loading="lazy"
        />
      </div>

      {(caption || note) && (
        <figcaption className={`mt-4 ${fullWidth ? "mx-auto max-w-4xl px-6 sm:px-8 lg:px-12" : ""}`}>
          {caption && (
            <p className="text-sm font-medium text-charcoal/70">{caption}</p>
          )}
          {note && (
            <p className="mt-1 text-xs text-muted italic">{note}</p>
          )}
        </figcaption>
      )}
    </figure>
  );
}
