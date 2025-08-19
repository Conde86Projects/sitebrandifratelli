'use client'

import { motion } from 'framer-motion'
import { Scale, FileText, Users, Award, CheckCircle, Building, Briefcase, Shield } from 'lucide-react'
import Image from 'next/image'

export default function AdvocaciaPage() {
  const services = [
    'Aposentadorias (Idade, Tempo, Especial, Invalidez)',
    'Benefícios por Incapacidade (Auxílio-doença, Auxílio-acidente)',
    'Pensão por Morte',
    'Revisão de Benefícios Previdenciários',
    'Planejamento Previdenciário',
    'Recursos Administrativos e Judiciais',
    'Auxílio-Reclusão e Salário-Maternidade',
    'Benefício Assistencial (LOAS)'
  ]

  const expertise = [
    {
      icon: Building,
      title: 'Aposentadorias',
      description: 'Análise e acompanhamento de todos os tipos de aposentadoria',
      areas: ['Aposentadoria por Idade', 'Aposentadoria por Tempo de Contribuição', 'Aposentadoria Especial', 'Aposentadoria por Invalidez']
    },
    {
      icon: FileText,
      title: 'Benefícios por Incapacidade',
      description: 'Assessoria completa em benefícios relacionados à incapacidade',
      areas: ['Auxílio-doença', 'Auxílio-acidente', 'Aposentadoria por Invalidez', 'Análise Médica Pericial']
    },
    {
      icon: Shield,
      title: 'Planejamento e Revisão',
      description: 'Estratégias para otimização de benefícios previdenciários',
      areas: ['Planejamento Previdenciário', 'Revisão de Benefícios', 'Recursos Administrativos', 'Ações Judiciais']
    }
  ]

  const cases = [
    {
      title: 'Aposentadoria Especial - Enfermeiro',
      description: 'Reconhecimento de atividade especial e concessão de aposentadoria especial',
      result: 'Benefício concedido - 25 anos de contribuição'
    },
    {
      title: 'Revisão de Aposentadoria',
      description: 'Revisão de cálculo de aposentadoria com inclusão de períodos não computados',
      result: 'Aumento de 40% no valor do benefício'
    },
    {
      title: 'Auxílio-doença Negado',
      description: 'Recurso administrativo e ação judicial para concessão de auxílio-doença',
      result: 'Benefício concedido com pagamento retroativo'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brandi-light to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Image 
              src="/images/logo-advogado.svg" 
              alt="Logo Brandi Fratelli Advocacia" 
              width={64} 
              height={64} 
              className="logo-page mx-auto mb-6"
            />
            <h1 className="text-5xl font-bold text-brandi-dark mb-6">
              Brandi Fratelli <span className="gradient-text">Advocacia</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Escritório especializado em Direito Previdenciário. Assessoria completa em aposentadorias, 
              benefícios por incapacidade, pensões e planejamento previdenciário. Defendemos seus direitos 
              perante o INSS com expertise e dedicação.
            </p>
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
              Especialidades em Direito Previdenciário
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos assessoria jurídica especializada em Direito Previdenciário, 
              com foco na defesa dos seus direitos e na obtenção dos melhores benefícios.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <area.icon className="text-brandi-blue mb-6" size={48} />
                <h3 className="text-2xl font-bold text-brandi-dark mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.areas.map((item) => (
                    <li key={item} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-brandi-blue rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
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
              Nossos Serviços Jurídicos
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
                <span className="text-gray-700">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brandi-dark mb-4">
              Cases de Sucesso
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <motion.div
                key={case_.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-brandi-dark mb-4">{case_.title}</h3>
                <p className="text-gray-600 mb-4">{case_.description}</p>
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg font-semibold">
                  ✓ {case_.result}
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
              Precisa de Assessoria Jurídica Empresarial?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para oferecer soluções jurídicas 
              estratégicas para o crescimento do seu negócio.
            </p>
            <a
              href="/contato"
              className="bg-white text-brandi-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Solicitar Consultoria
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}