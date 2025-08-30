import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.brandifratelli.com.br'),
  title: 'Brandi Fratelli - Licitações, Sistemas e Advocacia | Especialistas em Governo',
  description: 'Especialistas em licitações governamentais, desenvolvimento de sistemas web e mobile, e serviços jurídicos especializados. Atendemos todo o Brasil com soluções completas.',
  keywords: 'licitações, pregões, sistemas web, advocacia, governo, flutter, aplicativos mobile, desenvolvimento, direito previdenciário, INSS, concorrências públicas',
  authors: [{ name: 'Brandi Fratelli' }],
  creator: 'Brandi Fratelli',
  publisher: 'Brandi Fratelli',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.brandifratelli.com.br',
    title: 'Brandi Fratelli - Licitações, Sistemas e Advocacia',
    description: 'Especialistas em licitações governamentais, desenvolvimento de sistemas e serviços jurídicos especializados.',
    siteName: 'Brandi Fratelli',
    images: [
      {
        url: '/images/Headlogo.svg',
        width: 1200,
        height: 630,
        alt: 'Brandi Fratelli - Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brandi Fratelli - Licitações, Sistemas e Advocacia',
    description: 'Especialistas em licitações governamentais, desenvolvimento de sistemas e serviços jurídicos especializados.',
    images: ['/images/Headlogo.svg'],
  },
  icons: {
    icon: '/images/logo-flaicon.svg',
    shortcut: '/images/logo-flaicon.svg',
    apple: '/images/logo-flaicon.svg',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google-site-verification-code-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2YM7M0QGXL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2YM7M0QGXL', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
        
        {/* Dados Estruturados JSON-LD */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Brandi Fratelli",
              "url": "https://www.brandifratelli.com.br",
              "logo": "https://www.brandifratelli.com.br/images/Headlogo.svg",
              "description": "Especialistas em licitações governamentais, desenvolvimento de sistemas web e mobile, e serviços jurídicos especializados.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
                "addressLocality": "Brasil"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contato@brandifratelli.com.br"
              },
              "sameAs": [
                "https://www.brandifratelli.com.br"
              ],
              "areaServed": "BR",
              "serviceType": [
                "Licitações Governamentais",
                "Desenvolvimento de Sistemas",
                "Advocacia Especializada",
                "Desenvolvimento Mobile"
              ],
              "knowsAbout": [
                "Licitações",
                "Pregões Públicos",
                "Desenvolvimento Web",
                "Flutter",
                "Direito Previdenciário",
                "INSS"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
