import { sections } from "@/content/essay";
import PageShell from "@/components/PageShell";
import HeroHeader from "@/components/HeroHeader";
import EssaySection from "@/components/EssaySection";
import SectionDivider from "@/components/SectionDivider";
import TableOfContents from "@/components/TableOfContents";
import FooterNote from "@/components/FooterNote";

export default function Home() {
  return (
    <PageShell>
      {/* Floating table of contents — visible on desktop */}
      <TableOfContents sections={sections} />

      {/* Hero / header */}
      <HeroHeader />

      {/* Essay body */}
      <main className="pb-20 pt-16 sm:pt-20">
        {sections.map((section, i) => (
          <div key={section.id}>
            {i > 0 && <SectionDivider />}
            <EssaySection section={section} />
          </div>
        ))}
      </main>

      {/* Footer */}
      <FooterNote />
    </PageShell>
  );
}
