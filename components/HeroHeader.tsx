import { essayMeta, heroImage } from "@/content/essay";

export default function HeroHeader() {
  return (
    <header className="relative flex min-h-[85vh] items-end overflow-hidden bg-hero-dark">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* ✏️ Replace heroImage in content/essay.ts with your banner image */}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-hero-dark via-hero-dark/80 to-hero-dark/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16 pt-32 sm:px-8 lg:px-12">
        {/* Course tag */}
        {essayMeta.course && (
          <span className="mb-4 inline-block rounded-sm border border-stone bg-stone/20 px-4 py-1.5 font-sans text-sm font-semibold tracking-widest text-white uppercase">
            {essayMeta.course}
          </span>
        )}

        {/* Title */}
        <h1 className="mb-4 font-heading text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
          {essayMeta.title}
        </h1>

        {/* Subtitle */}
        {essayMeta.subtitle && (
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            {essayMeta.subtitle}
          </p>
        )}

        {/* Author & date */}
        <div className="flex items-center gap-4 text-sm text-white/50">
          <span className="text-base font-bold text-white/90">{essayMeta.author}</span>
          <span className="h-3 w-px bg-white/20" aria-hidden="true" />
          <time>{essayMeta.date}</time>
        </div>
      </div>
    </header>
  );
}
