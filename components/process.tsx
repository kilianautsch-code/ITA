const steps = [
  {
    n: "01",
    title: "Analyse & Bestandsaufnahme",
    desc: "Wir erfassen Ihre Infrastruktur, hören zu und identifizieren Schwachstellen sowie Ziele.",
  },
  {
    n: "02",
    title: "Planung & Dokumentation",
    desc: "Sie erhalten eine klare Netzwerk-Topologie und Dokumentation als solide Entscheidungsgrundlage.",
  },
  {
    n: "03",
    title: "Umsetzung & Installation",
    desc: "Verkabelung, Spleißen, Konfiguration und Inbetriebnahme – sauber und nach Standard ausgeführt.",
  },
  {
    n: "04",
    title: "Betrieb & Entstörung",
    desc: "Laufender Support per Remote-Service oder vor Ort – schnelle Reaktion, wenn es darauf ankommt.",
  },
]

export function Process() {
  return (
    <section id="vorgehen" className="border-b border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">02 — Vorgehen</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Strukturiert von der Idee bis zum stabilen Betrieb
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n} className="relative bg-card p-6">
              <span className="font-mono text-2xl font-semibold text-primary/40">{step.n}</span>
              <h3 className="mt-4 text-base font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
