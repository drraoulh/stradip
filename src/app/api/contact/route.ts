import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  domain: string;
  message: string;
  website?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    // Honeypot anti-spam
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const { name, company, email, phone, domain, message } = body;

    if (!name || !company || !email || !phone || !domain || !message) {
      return NextResponse.json({ error: "Tous les champs obligatoires doivent être remplis." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
    }

    const submission = {
      ...body,
      website: undefined,
      submittedAt: new Date().toISOString(),
    };

    // Sauvegarde locale des soumissions (à remplacer par envoi email en production)
    const submissionsDir = path.join(process.cwd(), "data", "submissions");
    await fs.mkdir(submissionsDir, { recursive: true });
    const filename = `contact-${Date.now()}.json`;
    await fs.writeFile(
      path.join(submissionsDir, filename),
      JSON.stringify(submission, null, 2),
      "utf-8"
    );

    // Envoi email optionnel si SMTP configuré
    if (process.env.SMTP_HOST && process.env.CONTACT_EMAIL) {
      // Structure prête pour intégration nodemailer ou service tiers
      console.log(`[Contact] Nouvelle soumission de ${email} — domaine: ${domain}`);
    }

    return NextResponse.json({ success: true, message: "Message envoyé avec succès." });
  } catch {
    return NextResponse.json({ error: "Erreur serveur. Veuillez réessayer." }, { status: 500 });
  }
}
