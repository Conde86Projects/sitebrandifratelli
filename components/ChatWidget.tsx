'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChatConfig, generateSmartResponse } from '../lib/chatConfig'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface ChatWidgetProps {
  config: ChatConfig
}

export default function ChatWidget({ config }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Inicializar com mensagem de boas-vindas
  useEffect(() => {
    const welcomeMsg: Message = {
      id: '1',
      text: config.welcomeMessage,
      isUser: false,
      timestamp: new Date()
    }
    setMessages([welcomeMsg])
  }, [config.welcomeMessage])

  const sendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simular resposta do bot (depois integrar com N8n)
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue, config.segment),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)

    // TODO: Integrar com N8n webhook
    // await sendToN8n(inputValue, config.segment)
  }

  const getBotResponse = (userInput: string, segment: string): string => {
    return generateSmartResponse(userInput, segment)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Botão Flutuante */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110`}
          style={{ backgroundColor: config.color }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.3 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div 
              className="p-4 text-white font-semibold"
              style={{ backgroundColor: config.color }}
            >
              <h3 className="text-lg">Brandi Fratelli</h3>
              <p className="text-sm opacity-90">Como posso ajudar?</p>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-gray-200 text-gray-800'
                        : 'text-white'
                    }`}
                    style={{
                      backgroundColor: message.isUser ? undefined : config.color
                    }}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div 
                    className="px-3 py-2 rounded-lg text-white text-sm"
                    style={{ backgroundColor: config.color }}
                  >
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={config.placeholder}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{ '--tw-ring-color': config.color } as React.CSSProperties}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim()}
                  className="px-3 py-2 rounded-lg text-white transition-opacity disabled:opacity-50"
                  style={{ backgroundColor: config.color }}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}