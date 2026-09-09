import { Check } from "lucide-react"

const points = [
  "Präzise Glasfaser-Spleißungen und LWL-Messungen nach Standard",
  "Schnelle Entstörung – remote und vor Ort",
  "Vollständige, wartbare Netzwerkdokumentation",
  "Herstellerübergreifende Expertise für aktive & passive Komponenten",
  "Sichere Vernetzung mehrerer Standorte und Objekte",
  "Ein Ansprechpartner für Netzwerk, Kameras und Speicher",
]

export function WhyUs() {
  return (
    <section id="warum" className="border-b border-border/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">03 — Warum ITA</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Technisches Handwerk mit Anspruch an Zuverlässigkeit
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Netzwerke sind das Rückgrat jedes Betriebs. ITA sorgt dafür, dass dieses Rückgrat stabil
            bleibt – mit sauberer Arbeit, klarer Dokumentation und schneller Hilfe im Störungsfall.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-border">
          <img
            src="/images/fiber-splice.png"
            alt="Präzises Spleißen einer Glasfaserleitung"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Glasfaser-Spleißen</p>
            <p className="mt-1 text-sm text-foreground">Präzision bis auf den Mikrometer.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
