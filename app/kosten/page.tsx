import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Kosten & Preise | IT-Dienstleistung Autsch (ITA)",
  description:
    "Transparente Kosten für Netzwerkplanung, Glasfaser, Standortvernetzung und IT-Service. Stundensätze, Service-Pakete und individuelle Projektangebote von ITA.",
}

const packages = [
  {
    name: "Remote-Service",
    price: "ab 60 €",
    unit: "/ Stunde",
    desc: "Schnelle Hilfe bei Netzwerkproblemen – ohne Anfahrt, direkt aus der Ferne.",
    features: [
      "Fehlerdiagnose & Entstörung remote",
      "Konfiguration & Optimierung",
      "Abrechnung im 15-Minuten-Takt",
      "Reaktion in der Regel am selben Tag",
    ],
    featured: false,
  },
  {
    name: "Vor-Ort-Service",
    price: "ab 85 €",
    unit: "/ Stunde",
    desc: "Installation, Verkabelung und Entstörung direkt bei Ihnen am Standort.",
    features: [
      "Alle Leistungen des Remote-Service",
      "Verkabelung & aktive Komponenten",
      "Glasfaser spleißen & messen (LWL)",
      "Anfahrt nach Aufwand, transparent kalkuliert",
    ],
    featured: true,
  },
  {
    name: "Projekt & Planung",
    price: "individuell",
    unit: "",
    desc: "Neuaufbau, Modernisierung oder Standortvernetzung als Festpreis-Projekt.",
    features: [
      "Analyse, Planung & Dokumentation",
      "Verbindliches Festpreis-Angebot",
      "Standortvernetzung & Kameratechnik",
      "Feste Ansprechperson über die Laufzeit",
    ],
    featured: false,
  },
]

const priceTable = [
  { label: "IT-Service / Arbeitszeit", private: "85 €/h", business: "85 €/h" },
  { label: "Fahrtkosten", private: "0,45 €/km", business: "0,45 €/km" },
  { label: "Reisezeit", private: "inklusive", business: "60 €/h" },
]

const notes = [
  "Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.",
  "Der genaue Aufwand hängt vom Umfang und den Gegebenheiten vor Ort ab.",
  "Für wiederkehrende Betreuung bieten wir individuelle Service-Vereinbarungen an.",
  "Fahrtkosten: innerhalb Schwerins pauschal 15 €, außerhalb 0,45 €/km ab Betriebsstandort.",
]

export default function KostenPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-border/60 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">Kosten</span>
              <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Transparente Preise – ohne versteckte Kosten
              </h1>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Sie zahlen nur, was Sie wirklich brauchen. Ob schnelle Entstörung per Remote-Service,
                Einsatz vor Ort oder ein geplantes Netzwerkprojekt – Sie erhalten vorab eine klare
                Einschätzung des Aufwands.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
              {packages.map((p) => (
                <div
                  key={p.name}
                  className={`flex flex-col bg-card p-6 sm:p-8 ${p.featured ? "ring-1 ring-inset ring-primary/40" : ""}`}
                >
                  {p.featured && (
                    <span className="mb-4 inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                      Beliebt
                    </span>
                  )}
                  <h2 className="text-base font-medium text-foreground">{p.name}</h2>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-semibold tracking-tight text-foreground">{p.price}</span>
                    {p.unit && <span className="text-sm text-muted-foreground">{p.unit}</span>}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/#kontakt"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 ${
                      p.featured
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-secondary text-foreground"
                    }`}
                  >
                    Angebot anfragen
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-3xl">
              <h2 className="text-balance text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Preise für Privat- und Gewerbekunden
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                Privatkunden erhalten einen einfachen Endpreis, während bei Gewerbekunden die
                tatsächlich aufgewendete Zeit vollständig abgebildet wird.
              </p>

              <div className="mt-6 overflow-hidden rounded-lg border border-border">
                <div className="grid grid-cols-3 border-b border-border bg-secondary">
                  <div className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:px-6">
                    Leistung
                  </div>
                  <div className="px-4 py-3 text-right font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:px-6">
                    Privatkunden
                  </div>
                  <div className="px-4 py-3 text-right font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:px-6">
                    Gewerbekunden
                  </div>
                </div>
                {priceTable.map((row, i) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-3 items-center bg-card ${
                      i !== priceTable.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <div className="px-4 py-4 text-sm text-foreground sm:px-6">{row.label}</div>
                    <div className="px-4 py-4 text-right text-sm tabular-nums text-muted-foreground sm:px-6">
                      {row.private}
                    </div>
                    <div className="px-4 py-4 text-right text-sm tabular-nums text-muted-foreground sm:px-6">
                      {row.business}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ul className="mt-10 flex flex-col gap-2">
              {notes.map((n) => (
                <li key={n} className="text-xs leading-relaxed text-muted-foreground">
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-border bg-card p-6 sm:p-10 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Nicht sicher, was Ihr Vorhaben kostet?
                </h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  Schildern Sie uns kurz Ihr Anliegen – wir erstellen Ihnen eine unverbindliche und
                  nachvollziehbare Kosteneinschätzung.
                </p>
              </div>
              <Link
                href="/#kontakt"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Kostenlose Einschätzung
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
