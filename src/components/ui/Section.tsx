import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "cream" | "sky" | "navy" | "grid";
}

const backgrounds = {
  white: "bg-white",
  cream: "bg-slate-50",
  sky: "bg-gradient-to-b from-sky-50/70 to-white",
  navy: "bg-slate-950 text-white",
  grid: "bg-slate-50/60 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]",
};

export function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 relative overflow-hidden", backgrounds[background], className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">{children}</div>
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
            "inline-block text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-xs",
            light
              ? "bg-white/15 backdrop-blur-md text-amber-300 border border-white/20"
              : "bg-sky-100 text-sky-800 border border-sky-200"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-5xl font-extrabold tracking-tight",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg max-w-2xl leading-relaxed font-normal",
            centered && "mx-auto",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1.5 w-20 rounded-full",
          centered && "mx-auto",
          light
            ? "bg-gradient-to-r from-amber-400 to-amber-500 shadow-sm"
            : "bg-gradient-to-r from-sky-600 to-emerald-500 shadow-sm"
        )}
      />
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="page-hero-gradient text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_30%_30%,#38bdf8,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed font-light">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
