"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { storyParagraphs } from "@/lib/data";

export default function Story() {
  const ref = useScrollReveal();

  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div ref={ref} className="max-w-[900px] mx-auto px-8 fade-up">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-[#2C2C2C]">
          A Storied Residence in the Heart of Historic Fernandina
        </h2>
        <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto mt-6 mb-12" />
        {storyParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className="font-body text-lg leading-[1.8] text-[#6B6B6B] mb-8 last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
