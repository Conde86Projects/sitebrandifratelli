'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Scale, Code, Smartphone } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-brandi-light to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-brandi-dark mb-6">
              <span className="gradient-text">Brandi Fratelli</span>
              <br />
              Excelência em Negócios
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Especialistas em licitações governamentais, desenvolvimento de sistemas 
              inovadores e serviços jurídicos especializados. Dois irmãos unidos pela 
              paixão em transformar ideias em soluções.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contato"
                className="bg-brandi-blue text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
              >
                Fale Conosco
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/licitacoes"
                className="border-2 border-brandi-blue text-brandi-blue px-8 py-4 rounded-lg hover:bg-brandi-blue hover:text-white transition-colors duration-200 text-center"
              >
                Conheça Nossos Serviços
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Scale className="text-brandi-blue mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Licitações Públicas</h3>
              <p className="text-gray-600">Especialistas em pregões e concorrências governamentais</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Scale className="text-brandi-blue mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Direito Previdenciário</h3>
                <p className="text-gray-600">Aposentadorias, benefícios INSS e planejamento previdenciário</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Code className="text-brandi-gold mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Sistemas Corporativos</h3>
              <p className="text-gray-600">Desenvolvimento de soluções tecnológicas empresariais</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Smartphone className="text-brandi-gold mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Brandi Labs</h3>
              <p className="text-gray-600">Aplicativos Flutter de alta qualidade</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
