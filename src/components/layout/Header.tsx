"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/produits", label: "Produits" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-[4.5rem] items-center justify-between">
          <Link href="/" className="shrink-0 flex items-center h-full">
            <Logo priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === link.href
                    ? "bg-sky text-brand font-semibold"
                    : "text-primary hover:bg-cream hover:text-brand"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" size="sm" variant="brand">
              Devis gratuit
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-primary rounded-lg hover:bg-cream"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer" : "Menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border bg-white transition-all duration-300",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-3 rounded-xl text-sm font-medium",
                pathname === link.href ? "bg-sky text-brand" : "text-primary hover:bg-cream"
              )}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 w-full inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 px-5 py-2.5 text-sm bg-brand text-white hover:bg-brand-dark shadow-sm"
            onClick={() => setOpen(false)}
          >
            Demander un devis
          </Link>
        </nav>
      </div>
    </header>
  );
}
