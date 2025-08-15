'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Users } from 'lucide-react'

export default function ContatoPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Resposta em até 24h',
      contact: 'contato@brandifratelli.com.br',
      action: 'mailto:contato@brandifratelli.com.br'
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Seg-Sex: 8h às 18h',
      contact: '(11) 9999-9999',
      action: 'tel:+5511999999999'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Atendimento rápido',
      contact: '(11) 9999-9999',
      action: 'https://wa.me/5511999999999'
    }
  ]

  const services = [
    'Licitações Públicas',
    'Advocacia Empresarial',
    'Desenvolvimento de Sistemas',
    'Aplicativos Flutter',
    'Consultoria Jurídica',
    'Automação de Processos'
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
            <h1 className="text-5xl font-bold text-brandi-dark mb-6">
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Pronto para transformar suas ideias em realidade? Nossa equipe está 
              aqui para ajudar você a alcançar seus objetivos com soluções personalizadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brandi-dark mb-4">
              Como Falar Conosco
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a forma mais conveniente para você
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300 group block"
              >
                <method.icon className="text-brandi-blue mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
                <h3 className="text-xl font-bold text-brandi-dark mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <p className="text-brandi-blue font-semibold">{method.contact}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-brandi-dark mb-6">
                Vamos Conversar
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Preencha o formulário ao lado e nossa equipe entrará em contato 
                em até 24 horas para discutir seu projeto e como podemos ajudar.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="text-brandi-gold mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-brandi-dark">Localização</div>
                    <div className="text-gray-600">São Paulo, SP - Brasil</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="text-brandi-gold mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-brandi-dark">Horário de Atendimento</div>
                    <div className="text-gray-600">Segunda a Sexta: 8h às 18h</div>
                    <div className="text-gray-600">Sábado: 8h às 12h</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Users className="text-brandi-gold mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-brandi-dark">Equipe Especializada</div>
                    <div className="text-gray-600">Advogados e Desenvolvedores</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandi-blue focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandi-blue focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandi-blue focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandi-blue focus:border-transparent"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Serviço de Interesse</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandi-blue focus:border-transparent">
                    <option value="">Selecione um serviço</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandi-blue focus:border-transparent"
                    placeholder="Descreva seu projeto, necessidades ou dúvidas..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-brandi-blue hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center group"
                >
                  Enviar Mensagem
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}