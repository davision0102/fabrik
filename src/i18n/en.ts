import type { Dictionary } from './fr'

/** Textes du site en anglais. Mêmes clés que fr.ts. */
export const en: Dictionary = {
  nav: {
    home: 'Home',
    homeLabel: 'home',
    components: 'Components',
    github: 'Source code on GitHub',
    language: 'Language',
  },
  languages: { fr: 'Français', en: 'English' },
  theme: {
    toDark: 'Switch to dark theme',
    toLight: 'Switch to light theme',
  },
  copy: { copy: 'Copy command', copied: 'Command copied' },
  footer: {
    license: 'open source under the MIT license',
    code: 'View the code on GitHub →',
  },
  home: {
    tagline: 'Free React template, made for designers',
    titleStart: 'A real React website,',
    titleAccent: 'even if you’re not a developer.',
    description:
      'Fabrik gives you a ready-made base: layout, components, dark mode and hosting are all set up. You describe what you want to your AI assistant, and it writes the code following the project’s rules.',
    useTemplate: 'Use this template',
    viewOnGithub: 'View on GitHub',
    projectName: 'my-project',
    terminal: {
      prompt: 'add a portfolio page',
      reading: 'Reading AGENTS.md and skills…',
      created: 'src/routes/portfolio.tsx created',
      linked: 'link added to the navigation',
    },
    features: {
      eyebrow: 'What’s already set up',
      title: 'Everything that’s scary at first is already handled.',
      text: 'No need to know how to configure a project. You start straight with the part you enjoy most: the design.',
      items: [
        {
          title: 'You describe, the AI codes',
          text: 'Ask Claude, Cursor or Codex for what you want, in plain English. The project includes instructions for them, so they add your pages cleanly instead of breaking everything.',
        },
        {
          title: 'A component library',
          text: 'Buttons, inputs, dialogs, cards: like a Figma library, but real. You can see them all on the Components page and tweak them to your taste.',
        },
        {
          title: 'Your design system in variables',
          text: 'Colors, fonts and corner radius live in a single file, like Figma variables. Change the main color, and the whole site follows.',
        },
        {
          title: 'Light and dark mode',
          text: 'Both themes work from the start, with nothing to do. The site even remembers each visitor’s choice.',
        },
        {
          title: 'Safety nets',
          text: 'If something’s wrong in the code, the project warns you before it goes live. You don’t need to understand how it works to benefit from it.',
        },
        {
          title: 'A link to share',
          text: 'Your site is published automatically and for free on GitHub Pages. You get a real address to send to a client or add to your portfolio.',
        },
      ],
    },
    steps: {
      eyebrow: 'Getting started',
      title: 'How it works',
      items: [
        {
          title: 'Grab the template',
          text: 'On GitHub, click “Use this template”. It’s free, you just need an account.',
        },
        {
          title: 'Open it with your AI assistant',
          text: 'In Claude Code, Cursor or VS Code. If it’s your first time, the README guide walks you through it step by step.',
        },
        {
          title: 'Describe your site',
          text: '“Add a portfolio page with my projects in a grid.” The assistant takes care of it, you fine-tune the result.',
        },
      ],
    },
    cta: {
      title: 'Ready to start?',
      text: 'It’s free and open source. For your portfolio, a prototype to show, or a client’s website.',
      components: 'See the components',
    },
  },
  ui: {
    eyebrow: 'Components',
    title: 'The toolbox',
    intro:
      'Every available component, in light and dark mode. To add one, just ask your AI assistant (“add a Tabs component”) or run',
    command: 'npx shadcn@latest add <name>',
    buttons: {
      default: 'Default',
      secondary: 'Secondary',
      outline: 'Outline',
      ghost: 'Ghost',
      destructive: 'Delete',
      link: 'Link',
    },
    badges: { new: 'New', draft: 'Draft', error: 'Error' },
    fields: { email: 'you@email.com', idea: 'Describe your idea…' },
    dialog: {
      open: 'Open the dialog',
      title: 'New project',
      description: 'Give your project a name to get started.',
      placeholder: 'my-great-project',
      cancel: 'Cancel',
      create: 'Create',
    },
    cards: {
      plans: ['Starter', 'Pro', 'Team'],
      description: 'Example content card.',
      price: (amount: number) => `€${amount}`,
      perMonth: '/month',
      choose: 'Choose',
    },
  },
  notFound: {
    title: 'This page hasn’t been built yet.',
    text: 'The address may be misspelled, or the page has moved.',
    back: 'Back to home',
  },
}
