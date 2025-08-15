'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Como Vencer Licitações: Guia Completo 2024',
      excerpt: 'Estratégias essenciais para aumentar suas chances de sucesso em processos licitatórios governamentais.',
      author: 'Brandi Fratelli Licitações',
      date: '2024-01-15',
      category: 'Licitações',
      readTime: '8 min',
      image: '/blog/licitacoes-2024.jpg'
    },
    {
      id: 2,
      title: 'Flutter vs React Native: Qual Escolher em 2024?',
      excerpt: 'Comparação detalhada entre as duas principais tecnologias para desenvolvimento mobile multiplataforma.',
      author: 'Brandi Labs',
      date: '2024-01-10',
      category: 'Tecnologia',
      readTime: '12 min',
      image: '/blog/flutter-vs-react.jpg'
    },
    {
      id: 3,
      title: 'Automação de Processos Jurídicos: O Futuro é Agora',
      excerpt: 'Como a tecnologia está transformando a prática jurídica e aumentando a eficiência dos escritórios.',
      author: 'Brandi Fratelli Sistemas',
      date: '2024-01-05',
      category: 'Jurídico',
      readTime: '6 min',
      image: '/blog/automacao-juridica.jpg'
    },
    {
      id: 4,
      title: 'Design System para Apps: Melhores Práticas',
      excerpt: 'Como criar e manter um design system consistente para aplicativos mobile de sucesso.',
      author: 'Brandi Labs',
      date: '2023-12-28',
      category: 'Design',
      readTime: '10 min',
      image: '/blog/design-system.jpg'
    },
    {
      id: 5,
      title: 'Compliance em Licitações: Evitando Armadilhas',
      excerpt: 'Principais cuidados legais que empresas devem ter ao participar de processos licitatórios.',
      author: 'Brandi Fratelli Advocacia',
      date: '2023-12-20',
      category: 'Compliance',
      readTime: '7 min',
      image: '/blog/compliance-licitacoes.jpg'
    },
    {
      id: 6,
      title: 'APIs RESTful: Guia de Desenvolvimento',
      excerpt: 'Boas práticas para criar APIs robustas e escaláveis para sistemas empresariais.',
      author: 'Brandi Fratelli Sistemas',
      date: '2023-12-15',
      category: 'Desenvolvimento',
      readTime: '15 min',
      image: '/blog/apis-restful.jpg'
    }
  ]

  const categories = ['Todos', 'Licitações', 'Tecnologia', 'Jurídico', 'Design', 'Compliance', 'Desenvolvimento']

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
              <span className="gradient-text">Blog</span> Brandi Fratelli
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Insights, tendências e conhecimento especializado em licitações, 
              tecnologia e inovação. Conteúdo criado pelos nossos especialistas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-brandi-blue text-brandi-blue hover:bg-brandi-blue hover:text-white transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-brandi-blue to-brandi-gold relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-brandi-dark px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User size={16} className="mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar size={16} className="mr-1" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-brandi-dark mb-3 group-hover:text-brandi-blue transition-colors duration-200">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-brandi-blue font-semibold hover:underline group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Ler Mais
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <button className="bg-brandi-blue text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Carregar Mais Posts
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-brandi-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Receba Nossos Insights
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Assine nossa newsletter e receba conteúdo exclusivo sobre 
              licitações, tecnologia e inovação diretamente no seu email.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-brandi-gold focus:outline-none"
              />
              <button className="bg-brandi-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-200 font-semibold">
                Assinar
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}