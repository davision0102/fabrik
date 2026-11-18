/**
 * Textes du site en français (langue de référence).
 * Toute nouvelle clé ajoutée ici doit aussi être ajoutée dans en.ts :
 * TypeScript signale celles qui manquent.
 */
export const fr = {
  nav: {
    home: 'Accueil',
    homeLabel: 'accueil',
    components: 'Composants',
    github: 'Code source sur GitHub',
    language: 'Langue',
  },
  languages: { fr: 'Français', en: 'English' },
  theme: {
    toDark: 'Passer en thème sombre',
    toLight: 'Passer en thème clair',
  },
  copy: { copy: 'Copier la commande', copied: 'Commande copiée' },
  footer: {
    license: 'open source sous licence MIT',
    code: 'Voir le code sur GitHub →',
  },
  home: {
    tagline: 'Template React gratuit, pensé pour les designers',
    titleStart: 'Un vrai site React,',
    titleAccent: 'même sans être développeur.',
    description:
      'Fabrik te donne une base déjà prête : la mise en page, les composants, le mode sombre et la mise en ligne sont réglés. Tu décris ce que tu veux à ton assistant IA, il écrit le code en respectant le projet.',
    useTemplate: 'Utiliser ce template',
    viewOnGithub: 'Voir sur GitHub',
    projectName: 'mon-projet',
    terminal: {
      prompt: 'ajoute une page portfolio',
      reading: 'Lecture de AGENTS.md et des skills…',
      created: 'src/routes/portfolio.tsx créé',
      linked: 'lien ajouté dans la navigation',
    },
    features: {
      eyebrow: 'Ce qui est déjà prêt',
      title: 'Tout ce qui fait peur au début est déjà réglé.',
      text: 'Pas besoin de savoir configurer un projet. Tu commences directement par la partie que tu préfères : le design.',
      items: [
        {
          title: 'Tu décris, l’IA code',
          text: 'Demande ce que tu veux à Claude, Cursor ou Codex en français. Le projet contient un mode d’emploi pour eux : ils ajoutent tes pages proprement au lieu de tout casser.',
        },
        {
          title: 'Une bibliothèque de composants',
          text: 'Boutons, champs, fenêtres, cartes : comme une librairie Figma, mais en vrai. Tu les vois tous sur la page Composants et tu les personnalises à ton goût.',
        },
        {
          title: 'Ton design system en variables',
          text: 'Couleurs, polices et arrondis sont réglés dans un seul fichier, comme des variables Figma. Tu changes la couleur principale, tout le site suit.',
        },
        {
          title: 'Mode clair et sombre',
          text: 'Les deux thèmes marchent dès le départ, sans rien faire. Le site se souvient même du choix de chaque visiteur.',
        },
        {
          title: 'Des garde-fous',
          text: 'Si quelque chose ne va pas dans le code, le projet te prévient avant que ce soit en ligne. Pas besoin de comprendre comment ça marche pour en profiter.',
        },
        {
          title: 'Un lien à partager',
          text: 'Ton site se publie tout seul et gratuitement sur GitHub Pages. Tu obtiens une vraie adresse à envoyer à un client ou à mettre dans ton portfolio.',
        },
      ],
    },
    steps: {
      eyebrow: 'Démarrage',
      title: 'Comment ça marche',
      items: [
        {
          title: 'Récupère le template',
          text: 'Sur GitHub, clique sur « Utiliser ce template ». C’est gratuit, il te faut juste un compte.',
        },
        {
          title: 'Ouvre-le avec ton assistant IA',
          text: 'Dans Claude Code, Cursor ou VS Code. Si c’est ta première fois, le guide du README t’accompagne pas à pas.',
        },
        {
          title: 'Décris ton site',
          text: '« Ajoute une page portfolio avec mes projets en grille. » L’assistant s’en charge, tu ajustes le rendu.',
        },
      ],
    },
    cta: {
      title: 'Prêt à commencer ?',
      text: 'C’est gratuit et open source. Pour ton portfolio, un prototype à montrer ou le site d’un client.',
      components: 'Voir les composants',
    },
  },
  ui: {
    eyebrow: 'Composants',
    title: 'La boîte à outils',
    intro:
      'Tous les composants disponibles, en clair et en sombre. Pour en ajouter un, demande-le simplement à ton assistant IA (« ajoute un composant Tabs ») ou lance',
    command: 'npx shadcn@latest add <nom>',
    buttons: {
      default: 'Par défaut',
      secondary: 'Secondaire',
      outline: 'Contour',
      ghost: 'Fantôme',
      destructive: 'Supprimer',
      link: 'Lien',
    },
    badges: { new: 'Nouveau', draft: 'Brouillon', error: 'Erreur' },
    fields: { email: 'ton@email.com', idea: 'Décris ton idée…' },
    dialog: {
      open: 'Ouvrir la fenêtre',
      title: 'Nouveau projet',
      description: 'Donne un nom à ton projet pour commencer.',
      placeholder: 'mon-super-projet',
      cancel: 'Annuler',
      create: 'Créer',
    },
    cards: {
      plans: ['Starter', 'Pro', 'Équipe'],
      description: 'Exemple de carte de contenu.',
      price: (amount: number) => `${amount} €`,
      perMonth: '/mois',
      choose: 'Choisir',
    },
  },
  notFound: {
    title: 'Cette page n’a pas encore été fabriquée.',
    text: 'L’adresse est peut-être mal écrite, ou la page a été déplacée.',
    back: 'Retour à l’accueil',
  },
}

export type Dictionary = typeof fr
