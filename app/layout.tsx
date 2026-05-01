import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair"
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat"
})

export const metadata: Metadata = {
  title: 'Dr. Valentín Luna Domínguez | Cirugía de Mano — Chihuahua, Chih.',
  description: 'Especialista en Cirugía de Mano y Muñeca en Chihuahua. Hospital Star Médica, Consultorio 1010. Quistes ganglionares, dedo en gatillo, artritis reumatoide. Tel: 614 425 2100.',
  keywords: 'cirugía de mano Chihuahua, dedo en gatillo, quiste ganglionar, artritis reumatoide mano, Star Médica consultorio 1010, Dr. Valentín Luna',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth bg-dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Physician", "LocalBusiness"],
              "name": "Dr. Valentín Luna Domínguez — Cirugía de Mano",
              "telephone": "+526144252100",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hospital Star Médica, Consultorio 1010",
                "addressLocality": "Chihuahua",
                "addressRegion": "Chihuahua",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.6353,
                "longitude": -106.0889
              },
              "url": "https://drlunacirugiademano.mx",
              "medicalSpecialty": "Cirugía de Mano",
              "openingHours": "Mo-Fr 09:00-18:00"
            })
          }}
        />
      </head>
      <body className={`${playfair.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
