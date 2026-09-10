import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Impressum | IT-Dienstleistung Autsch (ITA)",
  description: "Impressum und Anbieterkennzeichnung der IT-Dienstleistung Autsch (ITA) gemäß § 5 DDG.",
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Rechtliches</span>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Impressum
            </h1>

            <div className="mt-10 flex flex-col gap-8">
              <Block title="Angaben gemäß § 5 DDG">
                <p>IT-Dienstleistung Autsch (ITA)</p>
                <p>Kilian Autsch</p>
                <p>Musterstraße 1</p>
                <p>00000 Musterstadt</p>
                <p>Deutschland</p>
              </Block>

              <Block title="Kontakt">
                <p>Telefon: +49 176 31349018</p>
                <p>E-Mail: info@ita-net.de</p>
              </Block>

              <Block title="Umsatzsteuer-ID">
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                  <br />
                  DE000000000
                </p>
              </Block>

              <Block title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
                <p>Kilian Autsch</p>
                <p>Musterstraße 1</p>
                <p>00000 Musterstadt</p>
              </Block>

              <Block title="Haftung für Inhalte">
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                  Tätigkeit hinweisen.
                </p>
              </Block>

              <Block title="Haftung für Links">
                <p>
                  Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren
                  Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
                  keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </Block>

              <Block title="Urheberrecht">
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </Block>

              <p className="text-xs leading-relaxed text-muted-foreground">
                Hinweis: Bitte ersetzen Sie die Platzhalter (Adresse, USt-IdNr.) durch Ihre tatsächlichen
                Angaben.
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
