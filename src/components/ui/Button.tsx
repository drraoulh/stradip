import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "outline-light" | "ghost" | "brand" | "emerald";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-md hover:shadow-lg",
  secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg",
  brand: "bg-gradient-to-r from-sky-600 to-sky-700 text-white hover:from-sky-700 hover:to-sky-800 shadow-md hover:shadow-lg",
  emerald: "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-lg",
  outline: "border-2 border-sky-600 text-sky-600 bg-transparent hover:bg-sky-600 hover:text-white",
  "outline-light": "border-2 border-white/80 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-slate-900",
  ghost: "text-slate-800 bg-transparent hover:bg-slate-100 hover:text-sky-600",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-500/40",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
