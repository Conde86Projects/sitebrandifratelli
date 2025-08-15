import Link from 'next/link'
import { ArrowRight, Award, Users, Target } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brandi-blue to-blue-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Brandi Fratelli
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Especialistas em licitações governamentais, advocacia empresarial e desenvolvimento de sistemas personalizados
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contato"
              className="bg-brandi-gold hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Fale Conosco
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/licitacoes"
              className="border-2 border-white hover:bg-white hover:text-brandi-blue text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Saiba Mais
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-brandi-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-blue-100">Licitações Vencidas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-brandi-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-2">200+</h3>
              <p className="text-blue-100">Clientes Atendidos</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-brandi-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-2">15+</h3>
              <p className="text-blue-100">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
