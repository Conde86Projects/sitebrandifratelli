import { CheckCircle, Star, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    title: 'Experiência Comprovada',
    description: '15+ anos de atuação no mercado com resultados consistentes'
  },
  {
    icon: Star,
    title: 'Qualidade Premium',
    description: 'Padrões de excelência em todos os nossos serviços'
  },
  {
    icon: Shield,
    title: 'Segurança e Confiança',
    description: 'Compromisso total com a confidencialidade dos clientes'
  },
  {
    icon: Zap,
    title: 'Inovação Constante',
    description: 'Sempre à frente com as melhores tecnologias e práticas'
  }
]

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre a Brandi Fratelli
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Somos uma empresa especializada em oferecer soluções integradas para o crescimento 
              empresarial, combinando expertise em licitações governamentais, direito previdenciário 
              e desenvolvimento de sistemas personalizados.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa missão é transformar desafios em oportunidades, proporcionando aos nossos 
              clientes as ferramentas e estratégias necessárias para alcançar o sucesso em seus 
              negócios.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-brandi-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-brandi-blue to-blue-900 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
                
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Excelência</h4>
                    <p className="text-blue-100 text-sm">
                      Buscamos sempre a perfeição em tudo que fazemos
                    </p>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Transparência</h4>
                    <p className="text-blue-100 text-sm">
                      Relacionamento baseado na confiança e clareza
                    </p>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Inovação</h4>
                    <p className="text-blue-100 text-sm">
                      Sempre buscando as melhores soluções e tecnologias
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brandi-gold rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brandi-gold rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
