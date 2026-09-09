import { ArrowRight, PhoneCall } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-network.png"
          alt="Serverraum mit Netzwerk-Racks und Glasfaser-Verkabelung"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-mono text-xs uppercase tracking-wider text-primary">
              Netzwerk · Glasfaser · Infrastruktur
            </span>
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            IT-Infrastruktur, die läuft. Von der Planung bis zur Entstörung.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            IT-Dienstleistung Autsch (ITA) plant, baut und betreut Ihre Netzwerke – von der
            Topologie-Dokumentation über Standortvernetzung und Glasfaser-Spleißen bis zu
            Kameratechnik und Speicherlösungen. Zuverlässig per Remote-Service und vor Ort.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Kostenlose Erstberatung
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              <PhoneCall className="h-4 w-4" />
              Leistungen ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
