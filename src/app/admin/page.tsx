"use client";

import { useEffect, useState } from "react";
import type { SiteData } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { Lock, Save, LogOut } from "lucide-react";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState<SiteData | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin");
      if (res.ok) {
        const json = await res.json();
        setData(json);
        setAuthenticated(true);
      }
    } catch {
      // not authenticated
    }
    setLoading(false);
  }

  async function login(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthenticated(true);
      fetchContent();
    } else {
      setMessage("Mot de passe incorrect");
    }
  }

  async function logout() {
    await fetch("/api/admin", { method: "DELETE" });
    setAuthenticated(false);
    setData(null);
  }

  async function save() {
    if (!data) return;
    setSaving(true);
    setMessage("");
    const res = await fetch("/api/admin", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSaving(false);
    setMessage(res.ok ? "Contenu sauvegardé avec succès." : "Erreur lors de la sauvegarde.");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <p className="text-slate">Chargement...</p>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream px-4">
        <form onSubmit={login} className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <div className="flex items-center gap-2 mb-6">
            <Lock className="text-primary" />
            <h1 className="font-display text-2xl font-bold text-primary">Administration STRADIP</h1>
          </div>
          <label htmlFor="password" className="block text-sm font-medium text-primary mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate/30 mb-4"
            required
          />
          {message && <p className="text-red-600 text-sm mb-4">{message}</p>}
          <Button type="submit" className="w-full">Se connecter</Button>
        </form>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-cream py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-bold text-primary">Back-office CMS</h1>
          <div className="flex gap-2">
            <Button onClick={save} disabled={saving}>
              <Save size={18} /> {saving ? "Sauvegarde..." : "Sauvegarder"}
            </Button>
            <Button variant="outline" onClick={logout}>
              <LogOut size={18} /> Déconnexion
            </Button>
          </div>
        </div>

        {message && (
          <p className={`mb-6 p-4 rounded-lg ${message.includes("succès") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
            {message}
          </p>
        )}

        <div className="space-y-8">
          <section className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="font-display text-xl font-bold text-primary mb-4">Barre d&apos;annonce</h2>
            <label className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                checked={data.announcement.enabled}
                onChange={(e) =>
                  setData({ ...data, announcement: { ...data.announcement, enabled: e.target.checked } })
                }
              />
              Afficher la barre d&apos;annonce
            </label>
            <textarea
              value={data.announcement.text}
              onChange={(e) =>
                setData({ ...data, announcement: { ...data.announcement, text: e.target.value } })
              }
              rows={2}
              className="w-full px-4 py-3 rounded-lg border border-slate/30"
            />
          </section>

          <section className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="font-display text-xl font-bold text-primary mb-4">À propos — Histoire</h2>
            <textarea
              value={data.about.history}
              onChange={(e) => setData({ ...data, about: { ...data.about, history: e.target.value } })}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-slate/30"
            />
          </section>

          <section className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="font-display text-xl font-bold text-primary mb-4">Mission & Vision</h2>
            <label className="block text-sm font-medium mb-1">Mission</label>
            <textarea
              value={data.about.mission}
              onChange={(e) => setData({ ...data, about: { ...data.about, mission: e.target.value } })}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-slate/30 mb-4"
            />
            <label className="block text-sm font-medium mb-1">Vision</label>
            <textarea
              value={data.about.vision}
              onChange={(e) => setData({ ...data, about: { ...data.about, vision: e.target.value } })}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-slate/30"
            />
          </section>
        </div>

        <p className="mt-8 text-sm text-slate text-center">
          Pour modifier les produits, la galerie ou les réalisations, éditez les fichiers JSON dans <code>src/data/</code>.
          Consultez DOCUMENTATION.md pour plus de détails.
        </p>
      </div>
    </div>
  );
}
