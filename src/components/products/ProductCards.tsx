import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, Paintbrush, Sparkles, Grid, Droplet, MessageSquare } from "lucide-react";
import type { Product } from "@/types/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

const iconMap = {
  grid: Grid,
  droplet: Droplet,
  layers: Layers,
  paintbrush: Paintbrush,
  sparkles: Sparkles,
} as const;

const fallbackImages: Record<string, string> = {
  "carreaux-revetements": "/images/products/carreaux.jpg",
  "plomberie-sanitaires": "/images/products/plomberie.jpg",
  "ciment-colle": "/images/products/ciment-colle.jpg",
  "peintures-vernis": "/images/products/peintures.jpg",
  "produits-beaute": "/images/products/beaute.jpg",
};

const accents = ["bg-amber-600", "bg-sky-600", "bg-brand", "bg-emerald-600", "bg-purple-600"];

export function ProductPreview({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {products.map((product, i) => {
        const Icon = iconMap[product.icon as keyof typeof iconMap] || Layers;
        const imgPath = product.image || fallbackImages[product.slug] || "/images/products/carreaux.jpg";
        
        return (
          <ScrollReveal key={product.id}>
            <div className="group flex flex-col bg-white rounded-3xl overflow-hidden card-shadow hover:shadow-2xl border border-slate-100 transition-all duration-300 h-full">
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <Image
                  src={imgPath}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={`absolute top-4 left-4 p-3 rounded-2xl text-white shadow-md ${accents[i % accents.length]}`}>
                  <Icon size={22} />
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                  Dispo Douala
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-primary group-hover:text-brand transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-slate text-sm leading-relaxed line-clamp-3">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href={`https://wa.me/237697272108?text=${encodeURIComponent(`Bonjour STRADIP, je souhaite avoir des informations et un devis pour : ${product.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-3 py-2 rounded-xl transition-colors"
                  >
                    <MessageSquare size={14} />
                    WhatsApp
                  </a>

                  <Link
                    href={`/produits#${product.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
                  >
                    Détails <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = iconMap[product.icon as keyof typeof iconMap] || Layers;
  const imgPath = product.image || fallbackImages[product.slug] || "/images/products/carreaux.jpg";

  return (
    <div id={product.slug} className="bg-white rounded-3xl overflow-hidden card-shadow border border-slate-100 grid grid-cols-1 lg:grid-cols-12 scroll-mt-24">
      <div className="relative lg:col-span-5 h-72 lg:h-auto min-h-[18rem] bg-slate-100">
        <Image src={imgPath} alt={product.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
      </div>
      <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-3 rounded-2xl text-white shadow-md ${accents[index % accents.length]}`}>
            <Icon size={24} />
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-brand">
            Gamme STRADIP 0{index + 1}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold text-primary">{product.title}</h3>
        <p className="mt-4 text-slate leading-relaxed">{product.description}</p>
        
        <div className="mt-6 bg-slate-50 rounded-2xl p-4 border border-slate-200/60">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Points Forts &amp; Avantages</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-xs md:text-sm font-medium text-slate-700">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span> {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <Button href="/contact" variant="brand" size="md">
            Demander un devis formel
          </Button>
          <a
            href={`https://wa.me/237697272108?text=${encodeURIComponent(`Bonjour STRADIP, je suis intéressé par la gamme : ${product.title}. Merci de me recontacter.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <MessageSquare size={18} />
            Commander via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
