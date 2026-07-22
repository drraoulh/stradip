"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/types/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("Tous");

  const categories = ["Tous", ...new Set(items.map((i) => i.category))];

  const filteredItems = filter === "Tous" ? items : items.filter((i) => i.category === filter);

  const currentItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (selectedIndex === 0) {
      setSelectedIndex(filteredItems.length - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex < filteredItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (selectedIndex === filteredItems.length - 1) {
      setSelectedIndex(0);
    }
  };

  return (
    <>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2.5 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setFilter(cat);
              setSelectedIndex(null);
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              filter === cat
                ? "bg-brand text-white shadow-md scale-105"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {cat} {cat === "Tous" ? `(${items.length})` : `(${items.filter(i => i.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Grid of Real STRADIP Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredItems.map((item, idx) => (
          <ScrollReveal key={item.id + idx}>
            <div
              className="group relative aspect-[4/3] bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200/80"
              onClick={() => setSelectedIndex(idx)}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-brand text-white px-2.5 py-1 rounded-md shadow-sm">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <ZoomIn size={16} />
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-bold text-sm line-clamp-1">{item.title}</h4>
                  <p className="text-slate-200 text-xs line-clamp-1 mt-0.5">{item.alt}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-label="Aperçu photo"
        >
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-5 right-5 z-20 text-white hover:text-red-400 bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
            onClick={() => setSelectedIndex(null)}
            aria-label="Fermer"
          >
            <X size={26} />
          </button>

          {/* Navigation Prev */}
          <button
            type="button"
            className="absolute left-3 sm:left-6 z-20 text-white bg-white/10 hover:bg-white/30 p-3 rounded-full transition-all"
            onClick={handlePrev}
            aria-label="Photo précédente"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Navigation Next */}
          <button
            type="button"
            className="absolute right-3 sm:right-6 z-20 text-white bg-white/10 hover:bg-white/30 p-3 rounded-full transition-all"
            onClick={handleNext}
            aria-label="Photo suivante"
          >
            <ChevronRight size={28} />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-slate-950">
              <Image
                src={currentItem.image}
                alt={currentItem.alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>

            <div className="p-5 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  {currentItem.category} · Photo {selectedIndex! + 1} sur {filteredItems.length}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">{currentItem.title}</h3>
                <p className="text-xs text-slate-300 mt-0.5">{currentItem.alt}</p>
              </div>

              <a
                href={`https://wa.me/237697272108?text=${encodeURIComponent(`Bonjour STRADIP, je suis intéressé par ce modèle en photo : ${currentItem.title} (${currentItem.category}). Pouvez-vous me donner le prix et la disponibilité ?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-md shrink-0"
              >
                <MessageSquare size={18} />
                Devis pour cette référence
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
