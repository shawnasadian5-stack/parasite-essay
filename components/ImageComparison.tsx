"use client";

import { useRef } from "react";
import useFadeIn from "@/hooks/useFadeIn";

type Props = {
  src1: string;
  alt1: string;
  src2: string;
  alt2: string;
  caption?: string;
  note?: string;
};

export default function ImageComparison({
  src1,
  alt1,
  src2,
  alt2,
  caption,
  note,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  useFadeIn(ref);

  return (
    <figure ref={ref} className="fade-in-element mx-auto my-12 max-w-5xl px-6 sm:my-16 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {/* ✏️ Replace src1 with your first comparison image */}
        <div className="overflow-hidden rounded-lg bg-charcoal/5 shadow-media">
          <img
            src={src1}
            alt={alt1}
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>
        {/* ✏️ Replace src2 with your second comparison image */}
        <div className="overflow-hidden rounded-lg bg-charcoal/5 shadow-media">
          <img
            src={src2}
            alt={alt2}
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {(caption || note) && (
        <figcaption className="mt-4">
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
