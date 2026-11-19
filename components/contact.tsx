import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Contact() {
  return (
    <section id="kontakt" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 rounded-lg border border-border bg-card p-6 sm:p-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">04 — Kontakt</span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Lassen Sie uns über Ihr Netzwerk sprechen
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Beschreiben Sie kurz Ihr Anliegen – ob Neuplanung, Standortvernetzung, Glasfaser oder
              akute Störung. Wir melden uns zeitnah bei Ihnen zurück.
            </p>

            <div className="mt-8 space-y-4">
              <a href="tel:+4917631349018" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                +49 176 31349018
              </a>
              <a href="mailto:info@ita-net.de" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                  <Mail className="h-4 w-4" />
                </span>
info@ita-net.de
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                Service remote &amp; vor Ort
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-md border border-border bg-background/40 p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-foreground">Schreiben Sie uns eine E-Mail</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Ihr E-Mail-Programm öffnet eine neue Nachricht an info@ita-net.de. Beschreiben Sie darin einfach Ihr Anliegen.
            </p>
            <a
              href="mailto:info@ita-net.de?subject=Anfrage%20an%20IT-Service%20Autsch"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              E-Mail schreiben
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
