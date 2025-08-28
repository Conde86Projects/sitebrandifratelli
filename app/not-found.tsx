'use client'

import React from 'react'
import Link from 'next/link'
import { Home } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 pt-20 sm:pt-24">
      <div className="max-w-2xl mx-auto text-center py-8 sm:py-12">
        {/* Título 404 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-purple-600 mb-4">
            4<span className="text-purple-400">0</span>4
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Oops! Não conseguimos encontrar a página que você está procurando
          </h2>
        </motion.div>

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
          className="mb-8"
        >
          <Image
            src="/images/Erro4042.svg"
            alt="Robô Brandi Fratelli - Erro 404"
            width={300}
            height={300}
            className="mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
            priority
          />
        </motion.div>

        {/* Mensagem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-gray-600 text-base sm:text-lg mb-4">
            Desculpe, a página que você está procurando pode ter sido removida ou está temporariamente indisponível
          </p>
        </motion.div>

        {/* Botão de Voltar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Home className="mr-2" size={20} />
            Voltar para a página inicial
          </Link>
        </motion.div>
      </div>
    </div>
  )
}