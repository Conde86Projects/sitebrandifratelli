'use client'

import { motion } from 'framer-motion'
import { FileText, Search, Award, TrendingUp, CheckCircle, Target, Users, Clock } from 'lucide-react'

export default function LicitacoesPage() {
  const services = [
    'Análise de Editais Completa',
    'Elaboração de Propostas Técnicas',
    'Recursos e Impugnações',
    'Acompanhamento de Processos',
    'Consultoria em Pregões Eletrônicos',
    'Habilitação Jurídica',
    'Compliance Licitatório',
    'Treinamento de Equipes'
  ]

  const expertise = [
    {
      icon: FileText,
      title: 'Pregões Eletrônicos',
      description: 'Especialização em pregões federais, estaduais e municipais',
      stats: '200+ pregões vencidos'
    },
    {
      icon: Search,
      title: 'Tomada de Preços',
      description: 'Análise detalhada e estratégias para tomadas de preços',
      stats: '95% taxa de sucesso'
    },
    {
      icon: Award,
      title: 'Concorrências Públicas',
      description: 'Experiência em grandes concorrências governamentais',
      stats: 'R$ 50M+ em contratos'
    },
    {
      icon: TrendingUp,
      title: 'Convites e Dispensas',
      description: 'Assessoria em processos de menor complexidade',
      stats: '100% aprovação'
    }
  ]

  const results = [
    {
      title: 'Pregão Eletrônico - Equipamentos Médicos',
      value: 'R$ 3.2 milhões',
      description: 'Fornecimento de equipamentos para hospital público',
      result: 'Cliente vencedor - Contrato assinado'
    },
    {
      title: 'Concorrência - Obras de Infraestrutura',
      value: 'R$ 8.5 milhões',
      description: 'Construção de complexo educacional municipal',
      result: 'Primeiro colocado - Obra em andamento'
    },
    {
      title: 'Tomada de Preços - Serviços de TI',
      value: 'R$ 1.8 milhões',
      description: 'Modernização de sistemas governamentais',
      result: 'Contrato renovado por mais 2 anos'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <FileText className="text-brandi-blue mx-auto mb-6" size={64} />
            <h1 className="text-5xl font-bold text-brandi-dark mb-6">
              Brandi Fratelli <span className="gradient-text">Licitações</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Especialistas em licitações públicas com mais de 5 anos de experiência. 
              Aumentamos suas chances de sucesso em pregões, concorrências e tomadas de preços.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="bg-brandi-blue text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                Solicitar Análise Gratuita
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brandi-dark mb-4">
              Nossa Especialização
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dominamos todos os tipos de licitações públicas, desde pregões eletrônicos 
              até grandes concorrências governamentais.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 text-center group"
              >
                <item.icon className="text-brandi-blue mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
                <h3 className="text-xl font-bold text-brandi-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="bg-brandi-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brandi-dark mb-4">
              Nossos Serviços em Licitações
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 flex items-center"
              >
                <CheckCircle className="text-brandi-blue mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brandi-dark mb-4">
              Resultados Comprovados
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-brandi-blue mb-2">{result.value}</div>
                <h3 className="text-xl font-bold text-brandi-dark mb-4">{result.title}</h3>
                <p className="text-gray-600 mb-4">{result.description}</p>
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg font-semibold">
                  ✓ {result.result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brandi-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Pronto para Vencer sua Próxima Licitação?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para analisar seu edital 
              e desenvolver a estratégia perfeita para sua vitória.
            </p>
            <a
              href="/contato"
              className="bg-white text-brandi-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Análise Gratuita do Edital
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}