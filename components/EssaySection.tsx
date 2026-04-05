"use client";

import { useRef } from "react";
import type { Section } from "@/content/essay";
import MediaBlock from "./MediaBlock";
import VideoBlock from "./VideoBlock";
import VideoLoopBlock from "./VideoLoopBlock";
import ImageComparison from "./ImageComparison";
import useFadeIn from "@/hooks/useFadeIn";

export default function EssaySection({ section }: { section: Section }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      {/* Section heading */}
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
        <SectionHeading title={section.title} />
      </div>

      {/* Content blocks */}
      {section.blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return <ParagraphBlock key={i} text={block.text} />;
          case "image":
            return (
              <MediaBlock
                key={i}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
                note={block.note}
                fullWidth={block.fullWidth}
              />
            );
          case "image-comparison":
            return (
              <ImageComparison
                key={i}
                src1={block.src1}
                alt1={block.alt1}
                src2={block.src2}
                alt2={block.alt2}
                caption={block.caption}
                note={block.note}
              />
            );
          case "video":
            return (
              <VideoBlock
                key={i}
                src={block.src}
                caption={block.caption}
                note={block.note}
              />
            );
          case "video-loop":
            return (
              <VideoLoopBlock
                key={i}
                src={block.src}
                caption={block.caption}
                note={block.note}
              />
            );
          default:
            return null;
        }
      })}
    </section>
  );
}

function SectionHeading({ title }: { title: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useFadeIn(ref);

  return (
    <h2
      ref={ref}
      className="fade-in-element mb-8 mt-4 border-b border-stone/20 pb-4 font-heading text-2xl font-bold text-charcoal sm:text-3xl"
    >
      {title}
    </h2>
  );
}

function ParagraphBlock({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  useFadeIn(ref);

  return (
    <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
      <p
        ref={ref}
        className="fade-in-element mb-6 font-body text-base leading-[2] text-charcoal/90 sm:text-lg sm:leading-[2.1]"
      >
        {text}
      </p>
    </div>
  );
}
