"use client";

import { useState } from "react";
import { productDomains } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          domain: formData.get("domain"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl p-6 md:p-8 card-shadow">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
            Nom complet *
          </label>
          <input type="text" id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
            Entreprise *
          </label>
          <input type="text" id="company" name="company" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
            Email *
          </label>
          <input type="email" id="email" name="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
            Téléphone *
          </label>
          <input type="tel" id="phone" name="phone" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="domain" className="block text-sm font-semibold text-primary mb-2">
          Produit ou service concerné *
        </label>
        <select id="domain" name="domain" required className={inputClass}>
          <option value="">Sélectionnez un produit ou service</option>
          {productDomains.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
          Message / Demande de devis *
        </label>
        <textarea id="message" name="message" required rows={5} className={`${inputClass} resize-y`} />
      </div>

      {status === "success" && (
        <div className="flex items-center gap-2 text-green-700 bg-green-50 p-4 rounded-xl">
          <CheckCircle size={20} />
          Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-700 bg-red-50 p-4 rounded-xl">
          <AlertCircle size={20} />
          {errorMsg}
        </div>
      )}

      <Button type="submit" size="lg" variant="brand" disabled={status === "loading"}>
        {status === "loading" ? "Envoi en cours..." : "Envoyer la demande"}
        <Send size={18} />
      </Button>
    </form>
  );
}
