'use client'

import React from 'react'
import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 pt-20 sm:pt-24">
      <div className="max-w-2xl mx-auto text-center py-8 sm:py-12">
        {/* Mascote Robô */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            x: [0, -2, 2, -2, 2, 0],
            y: [0, -1, 1, -1, 1, 0]
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            x: { delay: 1, duration: 0.6, repeat: Infinity, repeatDelay: 3 },
            y: { delay: 1, duration: 0.6, repeat: Infinity, repeatDelay: 3 }
          }}
          className="mb-6 sm:mb-8"
        >
          <Image
            src="/images/Erro404.svg"
            alt="Robô Brandi Fratelli - Erro 404"
            width={200}
            height={200}
            className="mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52"
            priority
          />
        </motion.div>

        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            4<span className="text-blue-600">0</span>4
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 px-4">
            Ops! Página não encontrada
          </h2>
        </motion.div>

        {/* Mensagem do Robô */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 relative mx-4 sm:mx-0"
        >
          {/* Balão de fala */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45 shadow-lg"></div>
          
          <div className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            <p className="mb-3">
              🤖 <strong>Olá! Sou o assistente da Brandi Fratelli.</strong>
            </p>
            <p className="mb-3">
              Parece que a página que você está procurando não existe ou foi movida para outro local.
            </p>
            <p className="text-blue-600 font-medium">
              Mas não se preocupe! Posso te ajudar a encontrar o que você precisa.
            </p>
          </div>
        </motion.div>

        {/* Botões de Ação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4 sm:px-0"
        >
          <Link
            href="/"
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <Home className="mr-2" size={20} />
            Voltar ao Início
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Página Anterior
          </button>
        </motion.div>

        {/* Links Úteis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-white rounded-xl shadow-md p-4 sm:p-6 mx-4 sm:mx-0"
        >
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center">
            <Search className="mr-2" size={20} />
            Páginas Populares
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center sm:text-left">
            <Link
              href="/advocacia"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:underline text-sm sm:text-base block py-1"
            >
              ⚖️ Advocacia
            </Link>
            <Link
               href="/licitacoes"
               className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:underline text-sm sm:text-base block py-1"
             >
               📋 Licitações
             </Link>
             <Link
               href="/brandi-labs"
               className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:underline text-sm sm:text-base block py-1"
             >
               📱 Brandi Labs
             </Link>
             <Link
               href="/sistemas"
               className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:underline text-sm sm:text-base block py-1"
             >
               💻 Sistemas
             </Link>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200 text-center sm:text-left">
            <Link
              href="/contato"
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200 hover:underline text-sm sm:text-base block py-1"
            >
              📞 Entre em Contato
            </Link>
          </div>
        </motion.div>

        {/* Rodapé */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-6 sm:mt-8 text-gray-500 text-xs sm:text-sm px-4 sm:px-0"
        >
          <p>
            Precisa de ajuda? Nosso chat está sempre disponível para te auxiliar! 💬
          </p>
        </motion.div>
      </div>
    </div>
  )
}