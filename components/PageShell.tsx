"use client";

import { useEffect, useState } from "react";

export default function PageShell({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress((window.scrollY / docHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Reading progress bar */}
      <div
        className="fixed top-0 right-0 z-50 h-[3px] bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="پیشرفت مطالعه"
      />
      {children}
    </>
  );
}
