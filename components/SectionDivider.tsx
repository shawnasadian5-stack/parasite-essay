export default function SectionDivider() {
  return (
    <div className="mx-auto my-16 flex max-w-3xl items-center justify-center gap-3 px-6 sm:my-20 sm:px-8 lg:px-12" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-l from-stone/30 to-transparent" />
      <span className="h-1.5 w-1.5 rotate-45 bg-stone/40" />
      <span className="h-px flex-1 bg-gradient-to-r from-stone/30 to-transparent" />
    </div>
  );
}
