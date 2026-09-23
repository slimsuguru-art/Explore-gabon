# ExploreGabon V2

Refonte complète de l'interface du prototype ExploreGabon.

## Ce qui change en V2

- Interface plus proche des plateformes touristiques modernes, sans copier Booking.
- Header plus sobre et professionnel.
- Hero plus immersif avec recherche flottante.
- Recherche séparée par destination et expérience.
- Icônes SVG cohérentes à la place des emojis dans l'interface.
- Cartes destinations plus proches d'une fiche de plateforme de voyage.
- Badges de catégorie et de note plus lisibles.
- Pages Destinations, Expériences, Régions et Favoris harmonisées.
- Swipe de préférences conservé.
- Notes et commentaires conservés en local pour le prototype.
- Architecture compatible avec une future migration Supabase.
- GitHub Pages configuré pour `https://slimsuguru-art.github.io/Explore-gabon/`.

## Installation locale

```bash
npm install
npm run dev
```

Production :

```bash
npm run build
```

## Déploiement GitHub Pages

Le workflow est dans `.github/workflows/deploy.yml`.

Il utilise Node 24, `npm install`, puis `npm run build` et déploie `dist` avec GitHub Pages.

Dans GitHub :

**Settings → Pages → Build and deployment → Source → GitHub Actions**.

## Remplacement du dépôt existant

Cette V2 est conçue pour remplacer entièrement le contenu actuel du dépôt `slimsuguru-art/Explore-gabon`.

1. Sauvegarder l'ancien dépôt si nécessaire.
2. Extraire le ZIP.
3. Copier **tout le contenu du dossier `ExploreGabon-V2`** dans une copie locale du dépôt.
4. Remplacer les fichiers existants et conserver le dossier `.git` du dépôt local.
5. Vérifier :

```bash
npm install
npm run build
```

6. Puis :

```bash
git add .
git commit -m "Refonte complète ExploreGabon V2"
git push origin main
```

7. Ouvrir l'onglet **Actions** sur GitHub et attendre `Deploy ExploreGabon`.

## Supabase

Aucune clé Supabase n'est incluse dans le ZIP. Le fichier `.env.example` indique les deux variables attendues :

- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`

La V2 conserve le client Supabase afin de ne pas casser la suite du projet.

## Important

Les destinations, images, notes et avis présents dans le prototype sont des données de démonstration. Les images sont externes et devront être maîtrisées avant une mise en production.
