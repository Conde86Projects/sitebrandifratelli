import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Licitações Governamentais', href: '/licitacoes' },
    { name: 'Direito Previdenciário', href: '/advocacia' },
    { name: 'Desenvolvimento de Sistemas', href: '/sistemas' },
    { name: 'Brandi Labs', href: '/brandi-labs' },
  ],
  company: [
    { name: 'Sobre Nós', href: '/#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Carreiras', href: '/carreiras' },
    { name: 'Imprensa', href: '/imprensa' },
  ],
  support: [
    { name: 'Central de Ajuda', href: '/ajuda' },
    { name: 'Contato', href: '/contato' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Suporte Técnico', href: '/suporte' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '/termos' },
    { name: 'Política de Privacidade', href: '/privacidade' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'LGPD', href: '/lgpd' },
  ]
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'X (Twitter)', icon: Twitter, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 block">
              <Image
                 src="/images/rodape-labs.svg"
                 alt="Brandi Fratelli"
                 width={240}
                 height={56}
                 className="h-14 w-auto"
               />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em licitações governamentais, direito previdenciário e desenvolvimento 
              de sistemas personalizados. Transformando desafios em oportunidades desde 2008.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brandi-gold" />
                <span className="text-gray-300">contato@brandifratelli.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brandi-gold" />
                <span className="text-gray-300">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brandi-gold" />
                <span className="text-gray-300">Varginha, MG - Brasil</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brandi-gold" />
                <span className="text-gray-300">Atendimento em todo o Brasil</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-brandi-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-brandi-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-brandi-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-brandi-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Brandi Fratelli. Todos os direitos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-brandi-gold transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
