"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { property } from "@/lib/data";

const stats = [
  { value: String(property.beds), label: "Bedrooms" },
  { value: String(property.baths), label: "Bathrooms" },
  { value: property.sqftFormatted, label: "Square Feet" },
  { value: property.lotFormatted, label: "Lot Sq Ft" },
  { value: property.yearBuilt, label: "Year Built" },
  { value: property.mls, label: "MLS Number" },
];

export default function StatsBar() {
  const ref = useScrollReveal();

  return (
    <section className="py-12 bg-white border-t border-b border-[#C9A96E]/20">
      <div ref={ref} className="fade-up mx-auto max-w-5xl px-8">
        {/* Mobile: 3-column grid, no dividers */}
        <div className="grid grid-cols-3 gap-y-8 gap-x-4 md:hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl text-charcoal">
                {stat.value}
              </div>
              <div className="font-body uppercase text-[10px] tracking-[2px] text-muted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: flex row with gold dividers */}
        <div className="hidden md:flex items-center justify-center gap-12">
          {stats.map((stat, i) => (
            <div key={stat.label} className="contents">
              {i > 0 && (
                <div className="w-[1px] h-12 bg-[#C9A96E]/30 self-center" />
              )}
              <div className="text-center">
                <div className="font-display text-3xl text-charcoal">
                  {stat.value}
                </div>
                <div className="font-body uppercase text-[10px] tracking-[2px] text-muted mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
