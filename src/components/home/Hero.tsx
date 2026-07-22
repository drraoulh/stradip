import Image from "next/image";
import { QuickCalculator } from "@/components/home/QuickCalculator";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, Grid, Droplet, Layers, Paintbrush, MessageSquare, ShieldCheck } from "lucide-react";

const highlights = [
  { text: "Carreaux polis 60x60, 80x80 & faïence", icon: Grid },
  { text: "Pots W.C. monoblocs, lave-mains & robinetterie", icon: Droplet },
  { text: "Ciment colle STRADIP 25kg haute adhésion", icon: Layers },
  { text: "Peintures bâtiment & étanchéité façades", icon: Paintbrush },
];

export function Hero({ tagline, description }: { tagline: string; description: string }) {
  return (
    <section className="hero-gradient text-white relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/hero-background.jpg"
          alt="STRADIP SARL Showroom Douala"
          fill
          className="object-cover mix-blend-overlay"
          priority
          sizes="100vw"
        />
      </div>

      <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Main Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              {tagline} · Akwa, Douala, Cameroun
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight">
              Grossiste en <span className="text-amber-400 underline decoration-amber-400 underline-offset-8">Carreaux</span>, <span className="text-sky-300 underline decoration-sky-300 underline-offset-8">Sanitaires</span> &amp; Ciment Colle
            </h1>

            <p className="text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
              {description}
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/15 hover:bg-white/20 transition-all">
                  <div className="p-2 rounded-xl bg-amber-400/20 text-amber-300">
                    <item.icon size={18} />
                  </div>
                  <span className="text-xs font-bold text-white">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Direct Action CTAs */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="https://wa.me/237697272108?text=Bonjour%20STRADIP,%20je%20souhaite%20commander%20des%20mat%C3%A9riaux."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-black text-sm bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-7 py-4 rounded-xl shadow-xl transition-all"
              >
                <MessageSquare size={20} />
                Devis WhatsApp Instantané
              </a>
              <Button href="/produits" size="lg" variant="outline-light">
                Explorer le catalogue
              </Button>
            </div>
          </div>

          {/* Right Hero Calculator Widget */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuickCalculator />
          </div>

        </div>
      </div>
    </section>
  );
}
