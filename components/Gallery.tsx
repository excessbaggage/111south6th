"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { photos } from "@/lib/data";
import Lightbox from "./Lightbox";

function getSpanClass(index: number): string {
  switch (index) {
    case 0:
      return "col-span-2 row-span-2";
    case 5:
      return "col-span-2";
    case 12:
      return "row-span-2";
    case 20:
      return "col-span-2";
    default:
      return "";
  }
}

export default function Gallery() {
  const ref = useScrollReveal();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const displayedPhotos = photos.slice(0, 32);

  const handlePhotoClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleViewAll = () => {
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-24 bg-[#FAF7F2]">
      <div ref={ref}>
        <h2 className="font-display text-3xl md:text-4xl text-center">
          The Residence
        </h2>
        <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto mt-6 mb-16" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {displayedPhotos.map((url, index) => (
            <button
              key={index}
              className={`gallery-item cursor-pointer relative overflow-hidden ${getSpanClass(index)}`}
              onClick={() => handlePhotoClick(index)}
            >
              <img
                src={url}
                loading="lazy"
                alt="Interior view of 111 S 6th St"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={handleViewAll}
            className="border-2 border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white px-8 py-3 font-body uppercase tracking-[2px] text-sm transition-all cursor-pointer"
          >
            View All 88 Photos
          </button>
        </div>
      </div>

      <Lightbox
        photos={photos}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </section>
  );
}
