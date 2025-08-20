import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brandi Fratelli - Licitações, Sistemas e Advocacia',
  description: 'Especialistas em licitações governamentais, desenvolvimento de sistemas e serviços jurídicos especializados.',
  keywords: 'licitações, sistemas, advocacia, governo, flutter, aplicativos',
  icons: {
    icon: '/images/logo-flaicon.svg',
    shortcut: '/images/logo-flaicon.svg',
    apple: '/images/logo-flaicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
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
