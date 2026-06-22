# Guide de modification du contenu — BRENTEX SARL

Ce document explique comment modifier les textes, images et activités du site sans compétences en développement avancées.

## 1. Back-office CMS (recommandé pour la Direction)

1. Accédez à `/admin` sur le site (ex. `https://votresite.com/admin`)
2. Connectez-vous avec le mot de passe défini dans `.env.local` (`ADMIN_PASSWORD`)
3. Modifiez :
   - La **barre d'annonce** en haut du site
   - Les **statistiques** de la page d'accueil
   - L'**histoire**, la **mission** et la **vision**
4. Cliquez sur **Sauvegarder**

> **Note** : Le back-office fonctionne sur un serveur Node.js (VPS). Sur Vercel, éditez directement les fichiers JSON (section 2).

## 2. Fichiers de contenu JSON

Tous les fichiers sont dans `src/data/` :

### `site.json` — Informations générales

- Coordonnées (email, téléphone, adresse)
- RCCM, NIU
- Textes À propos (histoire, mission, vision, valeurs)
- Équipe dirigeante
- Témoignages
- Mentions légales
- Statistiques et annonces

### `activities.json` — Les 5 domaines d'activité

Chaque activité contient :
- `title` : nom du domaine
- `shortDescription` : résumé court
- `description` : texte détaillé
- `benefits` : liste des avantages
- `image` : chemin vers la photo

### `services.json` — Services par domaine

Liste des services associés à chaque activité.

### `gallery.json` — Galerie photos

Chaque entrée : `title`, `category`, `image`, `alt` (description pour l'accessibilité).

### `realisations.json` — Projets référencés

Chaque projet : `title`, `client`, `year`, `category`, `description`, `image`.

## 3. Remplacer le logo

1. Préparez votre logo en **SVG** (vectoriel) et **webp** (fond transparent)
2. Remplacez `public/logo.svg`
3. Optionnel : ajoutez `public/logo.webp`

## 4. Ajouter des photos

1. Placez vos images dans `public/images/` :
   - `public/images/activities/` — photos par domaine
   - `public/images/gallery/` — galerie
   - `public/images/realisations/` — projets
   - `public/images/team/` — équipe
2. Mettez à jour le champ `image` dans le fichier JSON correspondant
3. Exemple : `"image": "/images/gallery/mon-photo.jpg"`

**Conseil** : Compressez les images (max 200 Ko) avec [Squoosh](https://squoosh.app) pour un chargement rapide.

## 5. Modifier les couleurs

Les couleurs sont définies dans `src/app/globals.css` (section `:root`).

Palette active — **Maritime Classic** :
- Bleu marine : `#0A2540`
- Or : `#C9A227`
- Blanc / crème : `#F8FAFC`

## 6. Formulaire de contact

Les messages sont sauvegardés dans `data/submissions/`.

Pour recevoir les messages par email, configurez les variables SMTP dans `.env.local`.

## 7. SEO et référencement

- **Sitemap** : généré automatiquement à `/sitemap.xml`
- **Google Search Console** : ajoutez la propriété du site et soumettez le sitemap
- Modifiez les titres/descriptions par page dans chaque fichier `page.tsx` (export `metadata`)

## 8. Fonctionnalités futures (structure prête)

- **Blog/actualités** : créer `src/app/blog/` et `src/data/blog.json`
- **Bilingue FR/EN** : intégrer `next-intl` et dupliquer les JSON
- **Témoignages** : section déjà présente dans `site.json` → `testimonials`
- **Pop-up d'annonce** : activer via composant dédié (à développer)

## 9. Support technique

Pour toute modification structurelle (nouvelle page, nouveau module), contactez votre développeur.
