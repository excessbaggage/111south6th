"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { features } from "@/lib/data";

function getIcon(iconName: string) {
  const props = {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "#C9A96E",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "w-8 h-8 mb-4",
  };

  switch (iconName) {
    case "kitchen":
      return (
        <svg {...props}>
          {/* Chef hat / stove outline */}
          <rect x="8" y="22" width="16" height="4" rx="1" />
          <line x1="12" y1="22" x2="12" y2="26" />
          <line x1="16" y1="22" x2="16" y2="26" />
          <line x1="20" y1="22" x2="20" y2="26" />
          <path d="M10 22V18a6 6 0 0 1 12 0v4" />
          <circle cx="12" cy="14" r="1" fill="#C9A96E" />
          <circle cx="16" cy="12" r="1" fill="#C9A96E" />
          <circle cx="20" cy="14" r="1" fill="#C9A96E" />
        </svg>
      );

    case "fireplace":
      return (
        <svg {...props}>
          {/* Flame */}
          <path d="M16 4c0 4-6 8-6 14a6 6 0 0 0 12 0c0-6-6-10-6-14Z" />
          <path d="M16 28a3 3 0 0 1-3-3c0-3 3-5 3-7 0 2 3 4 3 7a3 3 0 0 1-3 3Z" />
        </svg>
      );

    case "floor":
      return (
        <svg {...props}>
          {/* Horizontal planks */}
          <line x1="4" y1="8" x2="28" y2="8" />
          <line x1="4" y1="13" x2="28" y2="13" />
          <line x1="4" y1="18" x2="28" y2="18" />
          <line x1="4" y1="23" x2="28" y2="23" />
          <line x1="16" y1="8" x2="16" y2="13" />
          <line x1="10" y1="13" x2="10" y2="18" />
          <line x1="22" y1="13" x2="22" y2="18" />
          <line x1="16" y1="18" x2="16" y2="23" />
        </svg>
      );

    case "studio":
      return (
        <svg {...props}>
          {/* Small building */}
          <path d="M4 16 16 6l12 10" />
          <rect x="7" y="16" width="18" height="12" />
          <rect x="13" y="20" width="6" height="8" />
          <rect x="9" y="18" width="4" height="3" />
          <rect x="19" y="18" width="4" height="3" />
        </svg>
      );

    case "glass":
      return (
        <svg {...props}>
          {/* Window pane */}
          <rect x="6" y="6" width="20" height="20" rx="1" />
          <line x1="16" y1="6" x2="16" y2="26" />
          <line x1="6" y1="16" x2="26" y2="16" />
        </svg>
      );

    case "bedroom":
      return (
        <svg {...props}>
          {/* Bed outline */}
          <path d="M4 24V20a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4" />
          <line x1="4" y1="24" x2="28" y2="24" />
          <path d="M6 18v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
          <path d="M18 18v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
          <line x1="4" y1="24" x2="4" y2="27" />
          <line x1="28" y1="24" x2="28" y2="27" />
        </svg>
      );

    case "dining":
      return (
        <svg {...props}>
          {/* Table with legs */}
          <line x1="4" y1="16" x2="28" y2="16" />
          <rect x="6" y="14" width="20" height="2" rx="1" />
          <line x1="8" y1="16" x2="6" y2="26" />
          <line x1="24" y1="16" x2="26" y2="26" />
          <line x1="14" y1="8" x2="14" y2="14" />
          <line x1="18" y1="8" x2="18" y2="14" />
          <line x1="12" y1="8" x2="20" y2="8" />
        </svg>
      );

    case "doors":
      return (
        <svg {...props}>
          {/* Door with window panes */}
          <rect x="8" y="4" width="16" height="24" rx="1" />
          <line x1="16" y1="4" x2="16" y2="28" />
          <rect x="10" y="7" width="4" height="5" rx="0.5" />
          <rect x="18" y="7" width="4" height="5" rx="0.5" />
          <rect x="10" y="14" width="4" height="5" rx="0.5" />
          <rect x="18" y="14" width="4" height="5" rx="0.5" />
          <circle cx="14" cy="22" r="0.75" fill="#C9A96E" />
          <circle cx="18" cy="22" r="0.75" fill="#C9A96E" />
        </svg>
      );

    case "climate":
      return (
        <svg {...props}>
          {/* Thermometer + snowflake combo */}
          <rect x="6" y="6" width="4" height="16" rx="2" />
          <circle cx="8" cy="24" r="3" />
          <line x1="6" y1="12" x2="4" y2="12" />
          <line x1="6" y1="16" x2="4" y2="16" />
          {/* Snowflake */}
          <line x1="24" y1="8" x2="24" y2="20" />
          <line x1="18" y1="14" x2="30" y2="14" />
          <line x1="20" y1="10" x2="28" y2="18" />
          <line x1="28" y1="10" x2="20" y2="18" />
          <line x1="22" y1="9" x2="24" y2="11" />
          <line x1="26" y1="9" x2="24" y2="11" />
          <line x1="22" y1="19" x2="24" y2="17" />
          <line x1="26" y1="19" x2="24" y2="17" />
        </svg>
      );

    default:
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="10" />
        </svg>
      );
  }
}

export default function Features() {
  const ref = useScrollReveal();

  return (
    <section className="py-24 bg-white">
      <div ref={ref} className="fade-up max-w-6xl mx-auto px-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-[#2C2C2C]">
          Distinctive Details
        </h2>
        <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto mt-6 mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index}>
              {getIcon(feature.icon)}
              <h3 className="font-display text-xl text-[#2C2C2C] mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-[#6B6B6B]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
