"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { historyContent, timeline } from "@/lib/data";

export default function History() {
  const ref = useScrollReveal();

  return (
    <section id="history" className="py-24 bg-[#FAF7F2]">
      <div
        ref={ref}
        className="fade-up max-w-6xl mx-auto px-8"
      >
        {/* Heading */}
        <h2 className="font-display text-3xl md:text-4xl text-center">
          {historyContent.headline}
        </h2>

        {/* Gold line */}
        <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto mt-6 mb-16" />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT COLUMN — Narrative */}
          <div>
            <p className="font-body text-lg leading-[1.8] text-[#6B6B6B] mb-8">
              {historyContent.intro}
            </p>

            <p className="font-body text-lg leading-[1.8] text-[#6B6B6B] mb-8">
              {historyContent.silkStocking}
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-[#C9A96E] pl-6 my-8">
              <p className="font-display text-xl italic text-[#2C2C2C]">
                {historyContent.pullQuote}
              </p>
            </blockquote>

            <p className="font-body text-lg leading-[1.8] text-[#6B6B6B]">
              {historyContent.nationalRegister}
            </p>
          </div>

          {/* RIGHT COLUMN — Timeline */}
          <div className="relative pl-8">
            {/* Continuous vertical gold line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C9A96E]/30" />

            {timeline.map((entry, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                {/* Gold dot on the line */}
                <div className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-[#C9A96E]" style={{ transform: "translateX(calc(-50% + 1px))" }} />

                {/* Year */}
                <span className="font-display text-lg text-[#C9A96E] font-semibold">
                  {entry.year}
                </span>

                {/* Event */}
                <p className="font-body text-sm text-[#6B6B6B] leading-relaxed mt-1">
                  {entry.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
