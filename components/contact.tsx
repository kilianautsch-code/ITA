"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

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
              <a href="tel:+490000000000" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                +49 (0) 000 000 000
              </a>
              <a href="mailto:kontakt@ita-service.de" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                kontakt@ita-service.de
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                Service remote &amp; vor Ort
              </div>
            </div>
          </div>

          {sent ? (
            <div className="flex flex-col items-start justify-center rounded-md border border-primary/30 bg-primary/5 p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Send className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">Vielen Dank!</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Ihre Anfrage ist eingegangen. Wir melden uns so schnell wie möglich bei Ihnen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Ihr Name" required />
                <Field label="Firma" name="firma" placeholder="Firmenname" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="E-Mail" name="email" type="email" placeholder="name@firma.de" required />
                <Field label="Telefon" name="telefon" type="tel" placeholder="Optional" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nachricht" className="text-xs font-medium text-foreground">
                  Ihr Anliegen
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows={4}
                  required
                  placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Störung…"
                  className="rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Anfrage absenden
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary"
      />
    </div>
  )
}
