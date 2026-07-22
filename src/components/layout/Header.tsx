"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, MessageSquare, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/produits", label: "Catalogue & Produits" },
  { href: "/services", label: "Services & Import-Export" },
  { href: "/contact", label: "Contact & Devis" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center group">
            <Logo priority />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200",
                    isActive
                      ? "bg-white text-sky-700 shadow-sm font-bold"
                      : "text-slate-700 hover:text-sky-600 hover:bg-white/60"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+237697272108"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-xl transition-colors"
            >
              <Phone size={14} className="text-sky-600" />
              +237 697 272 108
            </a>

            <a
              href="https://wa.me/237697272108?text=Bonjour%20STRADIP,%20je%20souhaite%20demander%20un%20devis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-extrabold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <MessageSquare size={15} />
              Devis Express
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2.5 text-slate-800 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden bg-white/98 backdrop-blur-2xl border-t border-slate-200 transition-all duration-300 shadow-xl",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-5 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-3 rounded-xl text-sm font-bold transition-all",
                pathname === link.href
                  ? "bg-sky-50 text-sky-700 border-l-4 border-sky-600"
                  : "text-slate-700 hover:bg-slate-50"
              )}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:+237697272108"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 font-bold text-sm text-slate-800"
              onClick={() => setOpen(false)}
            >
              <Phone size={16} className="text-sky-600" />
              Appeler +237 697 272 108
            </a>

            <a
              href="https://wa.me/237697272108?text=Bonjour%20STRADIP,%20je%20souhaite%20un%20devis."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 text-white font-extrabold text-sm shadow-md"
              onClick={() => setOpen(false)}
            >
              <MessageSquare size={18} />
              Demande WhatsApp Directe
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
