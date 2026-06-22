"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { GalleryItem } from "@/types/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const placeholderImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1581094794329-cd2e8a8b8d0f?w=800&q=80",
  "2": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  "3": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
  "4": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  "5": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
  "6": "https://images.unsplash.com/photo-1521737711862-e3b97375f902?w=800&q=80",
};

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState("Tous");
  const categories = ["Tous", ...new Set(items.map((i) => i.category))];

  const filtered = filter === "Tous" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat
                ? "bg-primary text-white"
                : "bg-white text-primary hover:bg-sky border border-sky"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <ScrollReveal key={item.id}>
            <button
              type="button"
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md w-full cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <Image
                src={placeholderImages[item.id] || placeholderImages["1"]}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <span className="text-xs bg-accent text-white px-2 py-1 rounded">{item.category}</span>
                  <p className="text-white font-medium mt-1 text-sm">{item.title}</p>
                </div>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-label="Aperçu photo"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setSelected(null)}
            aria-label="Fermer"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-4xl w-full aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={placeholderImages[selected.id] || placeholderImages["1"]}
              alt={selected.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
