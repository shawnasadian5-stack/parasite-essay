import { essayMeta } from "@/content/essay";

export default function FooterNote() {
  return (
    <footer className="border-t border-stone/15 bg-charcoal py-12">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
        <p className="mb-2 font-heading text-lg font-semibold text-white/80">
          {essayMeta.title}
        </p>
        <p className="text-sm text-white/40">
          {essayMeta.author} — {essayMeta.course} — {essayMeta.date}
        </p>
        <p className="mt-4 text-xs text-white/20">
          فیلم «انگل» ساخته‌ی بونگ جون‌هو (۲۰۱۹) — تمامی تصاویر و کلیپ‌ها متعلق به صاحبان اصلی آن‌هاست
        </p>
      </div>
    </footer>
  );
}
