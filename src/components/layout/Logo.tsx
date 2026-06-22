import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  priority?: boolean;
  variant?: "header" | "footer" | "hero";
}

const variantStyles = {
  header: "h-14 md:h-16 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[340px]",
  footer: "h-24 sm:h-28 md:h-32 w-auto max-w-full",
  hero: "h-24 sm:h-28 md:h-32 w-auto max-w-full",
};

export function Logo({ className, priority = false, variant = "header" }: LogoProps) {
  return (
    <Image
      src="/logo.webp"
      alt="STRADIP SARL — Société de Transformation et de Distribution des Produits Divers"
      width={960}
      height={240}
      unoptimized
      className={cn("object-contain object-left bg-transparent", variantStyles[variant], className)}
      priority={priority}
    />
  );
}
