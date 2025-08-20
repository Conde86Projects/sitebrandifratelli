'use client'

import { motion } from 'framer-motion'
import { Smartphone, Palette, Zap, Users, Star, Code2, Layers, Rocket } from 'lucide-react'
import Image from 'next/image'

export default function BrandiLabsPage() {
  const features = [
    {
      icon: Smartphone,
      title: 'Flutter Nativo',
      description: 'Apps multiplataforma com performance nativa para iOS e Android'
    },
    {
      icon: Palette,
      title: 'Design Moderno',
      description: 'Interfaces elegantes e intuitivas seguindo as melhores práticas de UX/UI'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Aplicativos rápidos e responsivos com otimização avançada'
    },
    {
      icon: Users,
      title: 'Experiência do Usuário',
      description: 'Foco total na satisfação e engajamento dos usuários finais'
    }
  ]

  const portfolio = [
    {
      title: 'LicitaApp',
      category: 'Produtividade',
      description: 'App para acompanhamento de licitações em tempo real',
      features: ['Notificações Push', 'Filtros Avançados', 'Offline Mode', 'Dashboard Analytics']
    },
    {
      title: 'JurisControl',
      category: 'Jurídico',
      description: 'Gestão de processos jurídicos mobile para advogados',
      features: ['Controle de Prazos', 'Sincronização Cloud', 'Relatórios PDF', 'Multi-usuário']
    },
    {
      title: 'BizFlow',
      category: 'Negócios',
      description: 'Automação de workflows empresariais via mobile',
      features: ['Workflows Visuais', 'Integração APIs', 'Aprovações Mobile', 'Métricas em Tempo Real']
    }
  ]

  const process = [
    {
      icon: Users,
      title: 'Discovery',
      description: 'Entendemos sua visão, usuários e objetivos do aplicativo'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Criamos protótipos interativos e design system completo'
    },
    {
      icon: Code2,
      title: 'Desenvolvimento',
      description: 'Codificação em Flutter com testes automatizados'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Deploy nas stores e suporte pós-lançamento'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Image
              src="/images/logo-brandi-Labs.svg" 
              alt="Logo Brandi Labs" 
              width={64} 
              height={64} 
              className="logo-page mx-auto mb-6"
            />
            <h1 className="text-5xl font-bold text-brandi-dark mb-6">
              <span className="gradient-text">Brandi Labs</span>
              <br />Inovação Mobile
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Nosso laboratório de inovação especializado em desenvolvimento de aplicativos Flutter. 
              Transformamos ideias em experiências mobile extraordinárias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold"
              >
                Desenvolver App
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brandi-dark mb-4">
              Por que Flutter?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolhemos Flutter por sua capacidade de criar aplicativos nativos 
              de alta qualidade para múltiplas plataformas com um único código.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <feature.icon className="text-blue-500 mx-auto group-hover:scale-110 transition-transform duration-300" size={48} />
                </div>
                <h3 className="text-xl font-bold text-brandi-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brandi-dark mb-4">
              Nossos Projetos
            </h2>
            <p className="text-xl text-gray-600">
              Alguns dos aplicativos que desenvolvemos com Flutter
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{project.category}</span>
                    <Star className="text-yellow-300" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-100">{project.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Principais Funcionalidades:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brandi-dark mb-4">
              Nosso Processo de Desenvolvimento
            </h2>
            <p className="text-xl text-gray-600">
              Metodologia ágil e transparente para garantir o sucesso do seu app
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl inline-block mb-4 relative z-10">
                  <phase.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-brandi-dark mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Tem uma Ideia de App?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Vamos transformar sua visão em um aplicativo Flutter incrível. 
              Entre em contato e vamos começar a inovar juntos!
            </p>
            <a
              href="/contato"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Começar Projeto
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}