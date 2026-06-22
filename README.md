# STRADIP SARL — Site vitrine

Site web officiel de **STRADIP SARL** (Société de Transformation et de Distribution des Produits Divers), Douala, Cameroun.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Pages

- **Accueil** — Hero, statistiques animées, produits phares, témoignages, fiches techniques
- **À propos** — Histoire, mission, vision, valeurs, équipe dirigeante
- **Nos produits** — Ciment colle, peintures, produits de beauté
- **Nos services** — Commerce général, import-export, prestations
- **Réalisations** — Projets et partenaires
- **Galerie** — Photos produits et installations
- **Contact** — Formulaire de devis, coordonnées, carte Google Maps
- **Mentions légales** — RCCM, NIU, CNPS, CGV

## Fonctionnalités

- Responsive (mobile, tablette, ordinateur)
- Bouton WhatsApp flottant
- Bouton d'appel téléphonique (mobile)
- Barre d'annonce configurable
- Formulaire de contact avec anti-spam
- Téléchargement de fiches techniques (PDF)
- Back-office admin sur `/admin`
- SEO : sitemap.xml, robots.txt, métadonnées

## Configuration

Copiez `.env.example` vers `.env.local` :

```
NEXT_PUBLIC_SITE_URL=https://stradip-sarl.com
ADMIN_PASSWORD=votre-mot-de-passe
CONTACT_EMAIL=stradipsarl2014@yahoo.com
```

## Contenu

Les textes sont dans `src/data/` :
- `site.json` — Informations entreprise, annonces, témoignages
- `products.json` — Catalogue produits
- `services.json`, `gallery.json`, `realisations.json`
- `technical-sheets.json` — Fiches techniques PDF

Remplacez les images placeholder dans `public/images/` et ajoutez vos PDF dans `public/docs/`.

## Production

```bash
npm run build
npm start
```
