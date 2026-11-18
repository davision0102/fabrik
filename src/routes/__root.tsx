import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { GithubIcon } from '@/components/github-icon'
import { LanguageSwitch } from '@/components/language-switch'
import { Logo } from '@/components/logo'
import { NotFound } from '@/components/not-found'
import { ThemeToggle } from '@/components/theme-toggle'
import { buttonVariants } from '@/components/ui/button'
import { site } from '@/config/site'
import { useI18n } from '@/i18n/context'
import { cn } from '@/lib/utils'

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
})

const navLinkClass =
  'rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-secondary [&.active]:text-foreground'

function RootLayout() {
  const { t } = useI18n()

  return (
    <div className="flex min-h-svh flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" aria-label={`${site.name}, ${t.nav.homeLabel}`}>
            <Logo />
          </Link>

          <nav className="flex items-center gap-1">
            <Link
              to="/"
              className={`${navLinkClass} max-sm:hidden`}
              activeOptions={{ exact: true }}
            >
              {t.nav.home}
            </Link>
            <Link to="/ui" className={navLinkClass}>
              {t.nav.components}
            </Link>
            <span
              className="mx-1 h-5 w-px bg-border max-sm:hidden"
              aria-hidden="true"
            />
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={t.nav.github}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon' }),
                'max-sm:hidden',
              )}
            >
              <GithubIcon className="size-4" />
            </a>
            <ThemeToggle />
            <LanguageSwitch />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-6">
          <p>
            {site.name} · {t.footer.license}
          </p>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            {t.footer.code}
          </a>
        </div>
      </footer>
    </div>
  )
}
