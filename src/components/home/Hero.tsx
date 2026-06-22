import Image from "next/image";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Ciment colle pour professionnels",
  "Peintures & vernis toutes natures",
  "Produits de beauté & distribution",
  "Commerce général & import-export",
];

export function Hero({ tagline, description }: { tagline: string; description: string }) {
  return (
    <section className="hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/hero-background.jpg"
          alt=""
          fill
          className="object-cover mix-blend-overlay"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/15 text-white px-4 py-1.5 rounded-full mb-6">
              {tagline} · Douala
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
              Votre partenaire industriel &amp; distribution
            </h1>
            <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-lg">{description}</p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 size={18} className="text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" size="lg" variant="primary">
                Demander un devis <ArrowRight size={18} />
              </Button>
              <Button href="/produits" size="lg" variant="outline-light">
                Voir nos produits
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl p-6 md:p-8 card-shadow w-full max-w-md">
              <Logo variant="hero" className="h-28 sm:h-32 md:h-36 w-full max-w-full object-contain mx-auto" />
              <p className="mt-6 text-center text-xs font-semibold uppercase tracking-widest text-slate">
                Société de Transformation et de Distribution des Produits Divers
              </p>
              <p className="mt-2 text-center text-sm text-brand font-semibold">Depuis 2014</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
