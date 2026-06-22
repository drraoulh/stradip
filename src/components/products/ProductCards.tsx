import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, Paintbrush, Sparkles } from "lucide-react";
import type { Product } from "@/types/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

const iconMap = {
  layers: Layers,
  paintbrush: Paintbrush,
  sparkles: Sparkles,
} as const;

const images: Record<string, string> = {
  "ciment-colle": "https://images.unsplash.com/photo-1581094794329-cd2e8a8b8d0f?w=800&q=80",
  "peintures-vernis": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
  "produits-beaute": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
};

const accents = ["bg-brand", "bg-accent", "bg-primary"];

export function ProductPreview({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {products.map((product, i) => {
        const Icon = iconMap[product.icon as keyof typeof iconMap] || Layers;
        return (
          <ScrollReveal key={product.id}>
            <Link
              href={`/produits/${product.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden card-shadow transition-all duration-300 h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={images[product.slug] || images["ciment-colle"]}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={`absolute top-4 left-4 p-2.5 rounded-xl text-white ${accents[i % 3]}`}>
                  <Icon size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary group-hover:text-brand transition-colors">
                  {product.title}
                </h3>
                <p className="mt-2 text-slate text-sm leading-relaxed">{product.shortDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  En savoir plus <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = iconMap[product.icon as keyof typeof iconMap] || Layers;
  const img = images[product.slug] || images["ciment-colle"];

  return (
    <div className="bg-white rounded-2xl overflow-hidden card-shadow grid grid-cols-1 lg:grid-cols-2">
      <div className="relative h-64 lg:h-auto min-h-[16rem]">
        <Image src={img} alt={product.title} fill className="object-cover" sizes="50vw" />
      </div>
      <div className="p-8 md:p-10 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2.5 rounded-xl text-white ${accents[index % 3]}`}>
            <Icon size={22} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand">
            Gamme {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-primary">{product.title}</h3>
        <p className="mt-4 text-slate leading-relaxed">{product.description}</p>
        <ul className="mt-6 space-y-2">
          {product.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-accent mt-0.5">✓</span> {b}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/contact" variant="brand" size="sm">
            Demander un devis
          </Button>
        </div>
      </div>
    </div>
  );
}
