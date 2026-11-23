# Journal des changements

Ce qui a changé dans Fabrik, et surtout pourquoi. Les plus récents en haut.

## Novembre 2026

### Nouvelle direction artistique : vert sauge

**Ce qui change** : l'orange terracotta et le fond crème laissent la place à un vert sauge et des gris neutres, en mode clair comme en sombre. Le favicon, l'image de partage et la capture du README suivent.

**Pourquoi** :

- L'orange chaud sur fond crème rappelait trop l'identité de Claude. Pour un template qui parle d'assistants IA, ça prêtait à confusion : Fabrik doit avoir sa propre personnalité.
- On voulait une couleur agréable, qui n'agresse pas les yeux. Le vert sauge est peu saturé, il reste calme même sur de grandes zones.
- Il fallait qu'elle marche aussi bien de nuit. En sombre, le vert devient plus clair et plus pastel : il garde un bon contraste sans éblouir.
- Le vert évoque l'atelier, le fait main, le calme. Ça colle au nom « Fabrik » et au public visé (des designers qui découvrent le code).

**Détails** :

- Une seule teinte (165 dans `oklch`) pour toute la palette. Les gris en sont très légèrement teintés, pour que l'ensemble paraisse cohérent sans qu'on le remarque.
- Clair : vert `oklch(0.52 0.09 165)`, assez foncé pour être lisible en texte sur fond blanc.
- Sombre : vert `oklch(0.8 0.09 165)` sur un fond `oklch(0.17 0.008 160)`.
- Le vert reste un accent (titres, liens, petits détails). Le bouton principal est noir en clair et blanc en sombre.

### Site bilingue

Un sélecteur FR / EN dans l'en-tête. Tous les textes sont dans `src/i18n/fr.ts` et `src/i18n/en.ts`. **Pourquoi** : le projet est partagé au-delà de la France, sur GitHub et LinkedIn. Le README existe aussi en anglais (`README.en.md`).

### Pensé pour les designers

Textes du site et du README réécrits pour les personnes qui ne codent pas, avec un guide pas à pas, un glossaire et des skills design (`from-figma`, `polish-ui`, `add-motion`). **Pourquoi** : c'est le public que Fabrik veut aider, celui qui a des idées de sites mais bloque sur la technique.

### De DA-VISION à Fabrik

Le projet perso (V1, commencé chez Beer Studio) devient un template open source : nouveau nom, logo, dépendances à jour, build réparé, tests, CI, déploiement automatique sur GitHub Pages, et des instructions pour les assistants IA (`AGENTS.md` et les skills). **Pourquoi** : rendre le template utile à d'autres, pas seulement pour un usage perso. L'ancienne version reste disponible avec le tag `v1-avant`.
