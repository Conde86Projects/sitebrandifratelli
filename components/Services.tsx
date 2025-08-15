import Link from 'next/link'
import { Gavel, Scale, Code, Smartphone } from 'lucide-react'

const services = [
  {
    title: 'Licitações Governamentais',
    description: 'Especialistas em pregões eletrônicos, concorrências e processos licitatórios.',
    icon: Gavel,
    href: '/licitacoes',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Advocacia Empresarial',
    description: 'Direito empresarial, contratos comerciais e consultoria jurídica especializada.',
    icon: Scale,
    href: '/advocacia',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Desenvolvimento de Sistemas',
    description: 'Software personalizado, aplicações web e sistemas empresariais.',
    icon: Code,
    href: '/sistemas',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Brandi Labs',
    description: 'Aplicativos mobile Flutter e soluções digitais inovadoras.',
    icon: Smartphone,
    href: '/brandi-labs',
    color: 'from-orange-500 to-orange-600'
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para empresas que buscam crescimento e excelência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brandi-blue transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-4 flex items-center text-brandi-blue font-medium group-hover:translate-x-2 transition-transform">
                  Saiba mais
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
