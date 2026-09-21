# ExploreGabon — V1

Prototype d'une plateforme touristique du Gabon construite avec Astro, JavaScript et Tailwind CSS.

## Fonctionnalités

- Accueil avec hero et recherche
- Catalogue de destinations
- Recherche sur destination, province, catégorie et activités
- Filtres par province et catégorie
- Catégories et expériences
- Exploration des 9 provinces
- Fiches destination statiques
- Destinations à proximité
- Favoris avec `localStorage`
- Responsive mobile-first
- Motion design léger avec support de `prefers-reduced-motion`
- Architecture prête pour une future intégration Supabase
- Déploiement automatique sur GitHub Pages via GitHub Actions

## Stack

- Astro
- JavaScript
- Tailwind CSS
- GitHub Actions
- GitHub Pages

## Installation locale

```bash
npm install
npm run dev
```

Build de production :

```bash
npm run build
```

Prévisualisation :

```bash
npm run preview
```

## Déploiement GitHub Pages

Le dépôt est configuré pour une publication sur :

`https://slimsuguru-art.github.io/Gabon-horizon/`

Le fichier `.github/workflows/deploy.yml` :

1. se déclenche sur chaque push vers `main` ou manuellement depuis GitHub Actions ;
2. installe les dépendances avec `npm install` ;
3. lance `npm run build` ;
4. publie le dossier `dist` sur GitHub Pages.

Dans GitHub :

**Settings → Pages → Build and deployment → Source → GitHub Actions**.

Après le premier push, consulte **Actions** pour vérifier le workflow de déploiement.

## Configuration GitHub Pages

`astro.config.mjs` contient :

- `site: "https://slimsuguru-art.github.io"`
- `base: "/Gabon-horizon"`
- `trailingSlash: "always"`

Les liens internes utilisent `import.meta.env.BASE_URL` afin de fonctionner correctement sous le sous-chemin du dépôt.

## Données

La V1 utilise des données locales dans `src/data/`. Les textes, images, notes et nombres d'avis sont des données de prototype et doivent être vérifiés/remplacés avant une mise en production.

Les images actuelles utilisent des URLs externes de démonstration. Pour une version production, il est recommandé de centraliser les médias dans un stockage maîtrisé.

## Suite prévue

La prochaine étape logique est de remplacer progressivement les données locales par Supabase, puis d'ajouter authentification, avis réels, administration, partenaires et fonctionnalités de réservation.

## Nouveautés — V2 UX
- Sélecteur d'activités sous forme de cartes à swiper.
- Préférences mémorisées en local pour préparer les recommandations.
- Notes de destination de 1 à 5 étoiles.
- Commentaires locaux par destination.
- Sélection d'activités directement sur les fiches destinations.
- Architecture prête à migrer ces données vers Supabase.
