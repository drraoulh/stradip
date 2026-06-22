import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { getProductBySlug, getProducts } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const images: Record<string, string> = {
  "ciment-colle": "https://images.unsplash.com/photo-1581094794329-cd2e8a8b8d0f?w=1200&q=80",
  "peintures-vernis": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80",
  "produits-beaute": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80",
};

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return createMetadata({
    title: product.title,
    description: product.shortDescription,
    path: `/produits/${slug}`,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const img = images[product.slug] || images["ciment-colle"];

  return (
    <>
      <section className="page-hero-gradient text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={img} alt="" fill className="object-cover mix-blend-overlay" sizes="100vw" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 text-white/70 text-sm font-semibold mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} /> Retour aux produits
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{product.title}</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">{product.shortDescription}</p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden card-shadow">
            <Image src={img} alt={product.title} fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <p className="text-lg text-slate leading-relaxed">{product.description}</p>
            <ul className="mt-8 space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 size={20} className="text-brand shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/contact" size="lg" variant="brand">
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
