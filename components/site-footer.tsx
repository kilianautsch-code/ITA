import { Logo } from "./logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-sidebar">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="flex flex-col leading-none">
                <span className="font-mono text-sm font-semibold tracking-widest text-foreground">ITA</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  IT-Dienstleistung Autsch
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Netzwerkplanung, Glasfaser, Standortvernetzung, Kameratechnik und Speicherlösungen –
              zuverlässig per Remote-Service und vor Ort.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-foreground">Leistungen</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#leistungen" className="transition-colors hover:text-foreground">Netzwerkplanung</a></li>
                <li><a href="#leistungen" className="transition-colors hover:text-foreground">Glasfaser / LWL</a></li>
                <li><a href="#leistungen" className="transition-colors hover:text-foreground">Standortvernetzung</a></li>
                <li><a href="#leistungen" className="transition-colors hover:text-foreground">Kameratechnik</a></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-foreground">Unternehmen</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="/#vorgehen" className="transition-colors hover:text-foreground">Vorgehen</a></li>
                <li><a href="/#warum" className="transition-colors hover:text-foreground">Warum ITA</a></li>
                <li><a href="/kosten" className="transition-colors hover:text-foreground">Kosten</a></li>
                <li><a href="/#kontakt" className="transition-colors hover:text-foreground">Kontakt</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} IT-Dienstleistung Autsch (ITA). Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="/impressum" className="transition-colors hover:text-foreground">Impressum</a>
            <a href="/datenschutz" className="transition-colors hover:text-foreground">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
