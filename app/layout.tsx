import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brandi Fratelli - Licitações, Advocacia e Sistemas',
  description: 'Empresa especializada em licitações governamentais, advocacia empresarial e desenvolvimento de sistemas personalizados.',
  keywords: 'licitações, advocacia, sistemas, desenvolvimento, software, direito empresarial',
  authors: [{ name: 'Brandi Fratelli' }],
  openGraph: {
    title: 'Brandi Fratelli',
    description: 'Especialistas em licitações, advocacia e sistemas',
    url: 'https://brandifratelli.com.br',
    siteName: 'Brandi Fratelli',
    locale: 'pt_BR',
    type: 'website',
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
        {children}
      </body>
    </html>
  )
}
