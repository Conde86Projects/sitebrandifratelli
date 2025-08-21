'use client'

import { motion } from 'framer-motion'
import { Code, Database, Zap, Shield, Monitor, Cloud, Cog, Users } from 'lucide-react'
import ChatWidget from '../../components/ChatWidget'
import { chatConfigs } from '../../lib/chatConfig'

export default function SistemasPage() {
  const technologies = [
    { name: 'React/Next.js', icon: Code },
    { name: 'Node.js', icon: Cog },
    { name: 'PostgreSQL', icon: Database },
    { name: 'AWS Cloud', icon: Cloud },
    { name: 'Docker', icon: Monitor },
    { name: 'API REST', icon: Zap }
  ]

  const solutions = [
    {
      icon: Monitor,
      title: 'Sistemas Corporativos',
      description: 'Plataformas completas para gestão empresarial e automação de processos.',
      features: ['ERP Personalizado', 'CRM Integrado', 'Business Intelligence', 'Relatórios Gerenciais']
    },
    {
      icon: Users,
      title: 'Gestão Empresarial',
      description: 'Sistemas especializados para otimização de processos e gestão de equipes.',
      features: ['Controle de Processos', 'Gestão de Projetos', 'Timesheet', 'Dashboard Analytics']
    },
    {
      icon: Zap,
      title: 'Automação de Processos',
      description: 'Soluções para automatizar tarefas repetitivas e otimizar fluxos de trabalho.',
      features: ['Workflows Customizados', 'Integração de Sistemas', 'Notificações Automáticas', 'APIs Personalizadas']
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
            <Code className="text-brandi-gold mx-auto mb-6" size={64} />
            <h1 className="text-5xl font-bold text-brandi-dark mb-6">
              Brandi Fratelli <span className="gradient-text">Sistemas</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Desenvolvemos sistemas personalizados que transformam processos complexos 
              em soluções simples e eficientes. Tecnologia de ponta para impulsionar seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brandi-dark mb-4">
              Tecnologias que Utilizamos
            </h2>
            <p className="text-xl text-gray-600">
              Stack moderno e confiável para máxima performance e escalabilidade
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <tech.icon className="text-brandi-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="font-semibold text-gray-700">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brandi-dark mb-4">
              Nossas Soluções
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistemas desenvolvidos sob medida para atender as necessidades 
              específicas do seu negócio com máxima eficiência.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <solution.icon className="text-brandi-gold mb-6" size={48} />
                <h3 className="text-2xl font-bold text-brandi-dark mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-brandi-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
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
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Análise', desc: 'Entendemos suas necessidades e objetivos' },
              { step: '02', title: 'Planejamento', desc: 'Criamos a arquitetura e cronograma' },
              { step: '03', title: 'Desenvolvimento', desc: 'Codificamos com as melhores práticas' },
              { step: '04', title: 'Entrega', desc: 'Deploy, testes e treinamento da equipe' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brandi-gold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-brandi-dark mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brandi-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Pronto para Digitalizar seu Negócio?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre como nossos sistemas podem 
              otimizar seus processos e impulsionar seus resultados.
            </p>
            <a
              href="/contato"
              className="bg-white text-brandi-gold px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Chat Widget */}
      <ChatWidget config={chatConfigs.sistemas} />
    </div>
  )
}