import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | IT-Dienstleistung Autsch (ITA)",
  description:
    "Datenschutzerklärung der IT-Dienstleistung Autsch (ITA) – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Rechtliches</span>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Datenschutzerklärung
            </h1>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Wir freuen uns über Ihr Interesse an unserem Unternehmen. Der Schutz Ihrer personenbezogenen
              Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über die Verarbeitung
              Ihrer Daten im Zusammenhang mit der Nutzung dieser Website.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              <Block title="1. Verantwortlicher">
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p>IT-Dienstleistung Autsch (ITA)</p>
                <p>Kilian Autsch</p>
                <p>Musterstraße 1, 00000 Musterstadt</p>
                <p>E-Mail: info@ita-net.de</p>
              </Block>

              <Block title="2. Erhebung und Verarbeitung personenbezogener Daten">
                <p>
                  Personenbezogene Daten werden nur erhoben, wenn Sie uns diese im Rahmen einer Anfrage
                  freiwillig mitteilen. Dies betrifft insbesondere Angaben wie Name, Firma, E-Mail-Adresse
                  und Telefonnummer, die Sie über unser Kontaktformular übermitteln.
                </p>
              </Block>

              <Block title="3. Kontaktformular und Anfragen">
                <p>
                  Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden Ihre Angaben
                  zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert.
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung bzw. Erfüllung eines Vertrags)
                  sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer
                  Anfrage).
                </p>
              </Block>

              <Block title="4. Server-Logfiles">
                <p>
                  Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Informationen
                  in Server-Logfiles gespeichert (z. B. Browsertyp, Betriebssystem, Referrer-URL,
                  Uhrzeit der Anfrage, IP-Adresse). Diese Daten dienen der technischen Bereitstellung und
                  Sicherheit der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </Block>

              <Block title="5. Speicherdauer">
                <p>
                  Wir verarbeiten und speichern Ihre personenbezogenen Daten nur so lange, wie es für die
                  Erfüllung des jeweiligen Zwecks erforderlich ist oder gesetzliche Aufbewahrungsfristen
                  dies vorsehen. Danach werden die Daten gelöscht.
                </p>
              </Block>

              <Block title="6. Ihre Rechte">
                <p>
                  Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung
                  (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
                  Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch (Art. 21 DSGVO). Zudem steht
                  Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.
                </p>
              </Block>

              <Block title="7. Widerruf Ihrer Einwilligung">
                <p>
                  Sofern die Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit
                  Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                  Verarbeitung bleibt hiervon unberührt.
                </p>
              </Block>

              <p className="text-xs leading-relaxed text-muted-foreground">
                Hinweis: Diese Datenschutzerklärung ist eine allgemeine Vorlage und ersetzt keine
                Rechtsberatung. Bitte passen Sie die Angaben an Ihre tatsächlichen Verhältnisse an.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-medium text-foreground">{title}</h2>
      <div className="mt-3 flex flex-col gap-1 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}
