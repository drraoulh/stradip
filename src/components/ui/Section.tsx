import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "cream" | "sky" | "navy" | "grid";
}

const backgrounds = {
  white: "bg-white",
  cream: "bg-cream",
  sky: "bg-sky",
  navy: "bg-primary text-white",
  grid: "bg-cream bg-[linear-gradient(rgba(26,108,181,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,108,181,0.04)_1px,transparent_1px)] bg-[size:48px_48px]",
};

export function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", backgrounds[background], className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  badge?: string;
  number?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  badge,
  number,
}: SectionHeaderProps) {
  const label = badge ?? number;
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center")}>
      {label && (
        <span
          className={cn(
            "inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4",
            light ? "bg-white/15 text-white" : "bg-sky text-brand"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-extrabold tracking-tight",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg max-w-2xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-white/75" : "text-slate"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-5 h-1 w-14 rounded-full",
          centered && "mx-auto",
          light ? "bg-accent" : "bg-brand"
        )}
      />
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="page-hero-gradient text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
