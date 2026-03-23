"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { neighborhood, property } from "@/lib/data";

function getNeighborhoodIcon(iconName: string) {
  const className = "w-5 h-5 mt-1 flex-shrink-0 text-[#C9A96E]";

  switch (iconName) {
    case "shop":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
      );
    case "water":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12c2-2 4-3 6-3s4 1 6 3 4 3 6 3" />
          <path d="M2 17c2-2 4-3 6-3s4 1 6 3 4 3 6 3" />
          <path d="M2 7c2-2 4-3 6-3s4 1 6 3 4 3 6 3" />
        </svg>
      );
    case "landmark":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="21" x2="21" y2="21" />
          <path d="M5 21V7l7-4 7 4v14" />
          <line x1="9" y1="21" x2="9" y2="14" />
          <line x1="15" y1="21" x2="15" y2="14" />
          <line x1="9" y1="14" x2="15" y2="14" />
        </svg>
      );
    case "anchor":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="5" r="3" />
          <line x1="12" y1="8" x2="12" y2="22" />
          <path d="M5 12H2a10 10 0 0020 0h-3" />
        </svg>
      );
    case "fort":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21V11l3-3V5h3v3l3-3 3 3V5h3v3l3 3v10" />
          <line x1="3" y1="21" x2="21" y2="21" />
          <rect x="9" y="14" width="6" height="7" />
          <line x1="6" y1="5" x2="6" y2="3" />
          <line x1="18" y1="5" x2="18" y2="3" />
        </svg>
      );
    case "lighthouse":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21l1.5-9h3L15 21" />
          <path d="M10 12l1-6h2l1 6" />
          <circle cx="12" cy="4" r="2" />
          <line x1="3" y1="7" x2="9" y2="7" />
          <line x1="15" y1="7" x2="21" y2="7" />
          <line x1="6" y1="21" x2="18" y2="21" />
        </svg>
      );
    case "beach":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="5" r="3" />
          <line x1="12" y1="8" x2="12" y2="14" />
          <path d="M7 14l5 7 5-7" />
          <line x1="4" y1="21" x2="20" y2="21" />
        </svg>
      );
    default:
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
}

export default function Neighborhood() {
  const ref = useScrollReveal();

  return (
    <section id="neighborhood" className="py-24 bg-white">
      <div
        ref={ref}
        className="fade-up max-w-6xl mx-auto px-8"
      >
        <h2 className="font-display text-3xl md:text-4xl text-center">
          The Neighborhood
        </h2>
        <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto mt-6 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {neighborhood.map((item) => (
            <div key={item.name} className="flex items-start gap-4 p-4">
              {getNeighborhoodIcon(item.icon)}
              <div>
                <p className="font-body text-base text-[#2C2C2C] font-medium">
                  {item.name}
                </p>
                <p className="font-body text-sm text-[#6B6B6B]">
                  {item.distance}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-display text-xl text-center mb-6">Location</h3>
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5!2d${property.lng}!3d${property.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQwJzA5LjUiTiA4McKwMjcnNDUuNyJX!5e0!3m2!1sen!2sus!4v1`}
            className="w-full h-[400px] rounded-lg border border-[#C9A96E]/20"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
