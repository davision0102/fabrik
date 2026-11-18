/**
 * Identité du projet. C'est le seul endroit à modifier pour renommer le site.
 * Le nom et les liens sont lus d'ici partout dans l'app.
 * Les textes (en français et en anglais) sont dans src/i18n/.
 */
export const site = {
  name: 'Fabrik',
  repo: 'davision0102/fabrik',
  /** Adresse de la démo en ligne (GitHub Pages, voir le skill `deploy`). */
  demoUrl: 'https://davision0102.github.io/fabrik/',
  get githubUrl() {
    return `https://github.com/${this.repo}`
  },
  get templateUrl() {
    return `https://github.com/${this.repo}/generate`
  },
} as const
