import {
  Network,
  Wrench,
  Server,
  Link2,
  Cable,
  Camera,
  HardDrive,
  MonitorSmartphone,
} from "lucide-react"

const services = [
  {
    icon: Network,
    title: "Netzwerkplanung & Dokumentation",
    desc: "Saubere Topologie-Pläne und vollständige Netzwerkdokumentation – nachvollziehbar, wartbar und zukunftssicher.",
  },
  {
    icon: Wrench,
    title: "Entstörung & Remote-Service",
    desc: "Effiziente Fehlersuche bei Netzwerkproblemen. Schnelle Diagnose remote oder vor Ort – bevor Ausfälle teuer werden.",
  },
  {
    icon: Server,
    title: "Neue Netzwerkinfrastruktur",
    desc: "Aufbau und Modernisierung kompletter Netzwerke – von der Verkabelung über aktive Komponenten bis zur Inbetriebnahme.",
  },
  {
    icon: Link2,
    title: "Standortvernetzung",
    desc: "Sichere Anbindung mehrerer Firmenstandorte und Objekte untereinander – zuverlässig, verschlüsselt und performant.",
  },
  {
    icon: Cable,
    title: "Glasfaser & LWL",
    desc: "Spleißen, Messen und Reparatur von Glasfaser- und Netzwerkleitungen (LWL) – präzise nach Standard ausgeführt.",
  },
  {
    icon: Camera,
    title: "Kameratechnik & Sicherheit",
    desc: "Planung und Installation von IP-Kamerasystemen für die Überwachung Ihrer Standorte und Objekte.",
  },
  {
    icon: HardDrive,
    title: "Speicherlösungen",
    desc: "NAS- und Server-Speicher, Backups und Datensicherheit – damit Ihre Daten verfügbar und geschützt bleiben.",
  },
  {
    icon: MonitorSmartphone,
    title: "Individuelle Projekte",
    desc: "Wir entwickeln individuelle Lösungen, abgestimmt auf Ihre Anforderungen und die Gegebenheiten vor Ort",
  },
]

export function Services() {
  return (
    <section id="leistungen" className="border-b border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">01 — Leistungen</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Sämtliche IT-Dienstleistungen aus einer Hand
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Ganz gleich, ob geplant oder im Störungsfall – ITA bringt Ihre Netzwerke in Form und hält sie
            am Laufen.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col bg-card p-6 transition-colors hover:bg-secondary"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-medium text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
