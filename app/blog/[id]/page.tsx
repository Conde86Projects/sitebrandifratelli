'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, MessageCircle, Tag } from 'lucide-react'

// Mock data - em produção viria de um CMS ou API
const getBlogPost = (id: string) => {
  const posts: { [key: string]: any } = {
    '1': {
      id: 1,
      title: 'Como Vencer Licitações: Guia Completo 2024',
      excerpt: 'Estratégias essenciais para aumentar suas chances de sucesso em processos licitatórios governamentais.',
      content: `
        <h2>Introdução</h2>
        <p>Participar de licitações públicas pode ser um desafio complexo, mas com as estratégias certas, sua empresa pode aumentar significativamente as chances de sucesso. Neste guia completo, vamos abordar todos os aspectos essenciais para vencer licitações em 2024.</p>
        
        <h2>1. Análise Detalhada do Edital</h2>
        <p>O primeiro passo para o sucesso em qualquer licitação é uma análise minuciosa do edital. Muitas empresas falham nesta etapa crucial por não dedicarem tempo suficiente para entender todos os requisitos.</p>
        
        <h3>Pontos Essenciais a Verificar:</h3>
        <ul>
          <li><strong>Objeto da licitação:</strong> Entenda exatamente o que está sendo solicitado</li>
          <li><strong>Critérios de habilitação:</strong> Verifique se sua empresa atende todos os requisitos</li>
          <li><strong>Critérios de julgamento:</strong> Menor preço, melhor técnica ou técnica e preço</li>
          <li><strong>Prazos:</strong> Entrega de propostas, execução do contrato, pagamentos</li>
          <li><strong>Documentação exigida:</strong> Lista completa de documentos necessários</li>
        </ul>
        
        <h2>2. Preparação da Documentação</h2>
        <p>A documentação é um dos principais motivos de desclassificação em licitações. É fundamental manter todos os documentos atualizados e organizados.</p>
        
        <h3>Documentos Essenciais:</h3>
        <ul>
          <li>Certidões negativas (Federal, Estadual, Municipal, Trabalhista)</li>
          <li>Regularidade fiscal (CND, FGTS, etc.)</li>
          <li>Qualificação técnica (atestados, certificados)</li>
          <li>Qualificação econômico-financeira (balanços, certidões)</li>
          <li>Declarações obrigatórias</li>
        </ul>
        
        <h2>3. Estratégias de Precificação</h2>
        <p>A formação de preços é crucial para o sucesso. Não adianta ter o menor preço se não conseguir executar o contrato com qualidade e lucratividade.</p>
        
        <h2>Conclusão</h2>
        <p>Vencer licitações requer preparação, conhecimento técnico e estratégia. Com as dicas apresentadas neste guia, sua empresa estará mais preparada para competir com sucesso no mercado de licitações públicas.</p>
      `,
      author: 'Brandi Fratelli Licitações',
      date: '2024-01-15',
      category: 'Licitações',
      readTime: '8 min',
      tags: ['Licitações', 'Pregões', 'Estratégia', 'Documentação']
    },
    '2': {
      id: 2,
      title: 'Flutter vs React Native: Qual Escolher em 2024?',
      excerpt: 'Comparação detalhada entre as duas principais tecnologias para desenvolvimento mobile multiplataforma.',
      content: `
        <h2>Introdução</h2>
        <p>A escolha da tecnologia certa para desenvolvimento mobile é crucial para o sucesso do seu projeto. Em 2024, Flutter e React Native continuam sendo as principais opções para desenvolvimento multiplataforma.</p>
        
        <h2>Flutter: A Aposta do Google</h2>
        <p>Flutter é o framework de desenvolvimento mobile criado pelo Google, que permite criar aplicativos nativos para iOS e Android com um único código base.</p>
        
        <h3>Vantagens do Flutter:</h3>
        <ul>
          <li><strong>Performance nativa:</strong> Compilação direta para código nativo</li>
          <li><strong>Hot Reload:</strong> Desenvolvimento mais rápido com atualizações instantâneas</li>
          <li><strong>Widgets customizáveis:</strong> Interface totalmente personalizável</li>
          <li><strong>Dart:</strong> Linguagem moderna e fácil de aprender</li>
        </ul>
        
        <h2>React Native: A Solução do Facebook</h2>
        <p>React Native permite usar React para criar aplicativos mobile nativos, aproveitando o conhecimento existente em desenvolvimento web.</p>
        
        <h2>Conclusão</h2>
        <p>Ambas as tecnologias são excelentes escolhas. A decisão deve ser baseada nas necessidades específicas do projeto, experiência da equipe e objetivos de longo prazo.</p>
      `,
      author: 'Brandi Labs',
      date: '2024-01-10',
      category: 'Tecnologia',
      readTime: '12 min',
      tags: ['Flutter', 'React Native', 'Mobile', 'Desenvolvimento']
    },
    '3': {
      id: 3,
      title: 'Automação de Processos Jurídicos: O Futuro é Agora',
      excerpt: 'Como a tecnologia está transformando a prática jurídica e aumentando a eficiência dos escritórios.',
      content: `
        <h2>A Revolução Digital no Direito</h2>
        <p>O setor jurídico está passando por uma transformação digital sem precedentes. A automação de processos não é mais uma tendência futura, mas uma realidade presente.</p>
        
        <h2>Principais Áreas de Automação</h2>
        <h3>1. Gestão de Prazos</h3>
        <p>Sistemas automatizados podem monitorar prazos processuais, enviar alertas e até mesmo gerar petições automáticas para evitar preclusões.</p>
        
        <h3>2. Análise de Contratos</h3>
        <p>Inteligência artificial pode revisar contratos, identificar cláusulas problemáticas e sugerir melhorias em questão de minutos.</p>
        
        <h2>O Futuro da Advocacia</h2>
        <p>Escritórios que abraçarem a automação terão vantagem competitiva significativa. A tecnologia não substitui o advogado, mas potencializa suas capacidades.</p>
      `,
      author: 'Brandi Fratelli Sistemas',
      date: '2024-01-05',
      category: 'Jurídico',
      readTime: '6 min',
      tags: ['Automação', 'Tecnologia', 'Direito', 'Inovação']
    }
  }
  
  return posts[id] || null
}

interface BlogPostPageProps {
  params: { id: string }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(42)
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'João Silva',
      date: '2024-01-16',
      content: 'Excelente artigo! Muito útil para quem está começando no mundo das licitações.',
      avatar: 'JS'
    },
    {
      id: 2,
      author: 'Maria Santos',
      date: '2024-01-17',
      content: 'Parabéns pelo conteúdo. Vocês poderiam fazer um artigo sobre pregões eletrônicos?',
      avatar: 'MS'
    }
  ])
  const [newComment, setNewComment] = useState('')

  const post = getBlogPost(params.id)

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brandi-dark mb-4">Post não encontrado</h1>
          <Link href="/blog" className="text-brandi-blue hover:underline">
            Voltar para o blog
          </Link>
        </div>
      </div>
    )
  }

  const handleLike = () => {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: 'Visitante',
        date: new Date().toISOString().split('T')[0],
        content: newComment,
        avatar: 'V'
      }
      setComments([...comments, comment])
      setNewComment('')
    }
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-brandi-blue hover:underline mb-6"
          >
            <ArrowLeft className="mr-2" size={20} />
            Voltar para o blog
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-brandi-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <div className="flex items-center text-gray-600 text-sm">
                <Calendar size={16} className="mr-1" />
                <span className="mr-4">{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                <Clock size={16} className="mr-1" />
                <span className="mr-4">{post.readTime}</span>
                <User size={16} className="mr-1" />
                <span>{post.author}</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-brandi-dark mb-4">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="prose prose-lg max-w-none"
                >
                  <div 
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </motion.article>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-8 pt-8 border-t"
                >
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Tag className="mr-2" size={20} />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-brandi-blue hover:text-white transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Social Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-8 pt-8 border-t flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={handleLike}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        liked 
                          ? 'bg-red-50 text-red-600' 
                          : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600'
                      }`}
                    >
                      <Heart className={liked ? 'fill-current' : ''} size={20} />
                      <span>{likes}</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-brandi-blue hover:text-white transition-colors">
                      <Share2 size={20} />
                      <span>Compartilhar</span>
                    </button>
                  </div>
                </motion.div>

                {/* Comments Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-12"
                >
                  <h3 className="text-2xl font-bold text-brandi-dark mb-6 flex items-center">
                    <MessageCircle className="mr-2" size={24} />
                    Comentários ({comments.length})
                  </h3>

                  {/* Comment Form */}
                  <form onSubmit={handleComment} className="mb-8 bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold mb-4">Deixe seu comentário</h4>
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Escreva seu comentário aqui..."
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandi-blue focus:border-transparent resize-none"
                      rows={4}
                      required
                    />
                    <button
                      type="submit"
                      className="mt-4 bg-brandi-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Publicar Comentário
                    </button>
                  </form>

                  {/* Comments List */}
                  <div className="space-y-6">
                    {comments.map((comment) => (
                      <div key={comment.id} className="bg-white p-6 rounded-xl shadow-sm border">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-brandi-blue text-white rounded-full flex items-center justify-center font-semibold">
                            {comment.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h5 className="font-semibold text-brandi-dark">{comment.author}</h5>
                              <span className="text-gray-500 text-sm">
                                {new Date(comment.date).toLocaleDateString('pt-BR')}
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="sticky top-24 space-y-8"
                >
                  {/* Author Info */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold mb-4">Sobre o Autor</h4>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-brandi-blue text-white rounded-full flex items-center justify-center font-semibold">
                        BF
                      </div>
                      <div>
                        <h5 className="font-semibold">{post.author}</h5>
                        <p className="text-sm text-gray-600">Especialistas</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Equipe especializada da Brandi Fratelli com anos de experiência 
                      em licitações, advocacia e tecnologia.
                    </p>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-brandi-blue text-white p-6 rounded-xl">
                    <h4 className="font-semibold mb-4">Newsletter</h4>
                    <p className="text-sm mb-4 text-blue-100">
                      Receba nossos melhores conteúdos diretamente no seu email.
                    </p>
                    <form className="space-y-3">
                      <input
                        type="email"
                        placeholder="Seu email"
                        className="w-full p-3 rounded-lg text-gray-900 text-sm"
                      />
                      <button className="w-full bg-white text-brandi-blue py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                        Assinar
                      </button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}