import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'IT-Service Autsch (ITA) | Netzwerk, Glasfaser & IT-Infrastruktur',
  description:
    'ITA – IT-Service Autsch: Netzwerkplanung & Dokumentation, Entstörung, Glasfaser-Spleißen (LWL), Standortvernetzung, Kameratechnik und Speicherlösungen. Zuverlässiger Remote- und Vor-Ort-Service.',
  icons: {
    icon: '/favicon.png',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a2230',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
