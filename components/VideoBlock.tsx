"use client";

import { useRef } from "react";
import useFadeIn from "@/hooks/useFadeIn";

type Props = {
  src: string;
  caption?: string;
  note?: string;
};

export default function VideoBlock({ src, caption, note }: Props) {
  const ref = useRef<HTMLElement>(null);
  useFadeIn(ref);

  return (
    <figure ref={ref} className="fade-in-element mx-auto my-12 max-w-4xl px-6 sm:my-16 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-lg bg-charcoal/5 shadow-media">
        {/* ✏️ Replace src with your video path */}
        <video
          src={src}
          controls
          preload="metadata"
          className="h-auto w-full"
        >
          مرورگر شما از ویدیو پشتیبانی نمی‌کند.
        </video>
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
