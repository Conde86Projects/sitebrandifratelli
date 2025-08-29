'use client'

import React, { useState, useRef, useEffect } from 'react'
import { X, MessageCircle, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { getChatConfig } from '../lib/chatConfig'
import { 
  generateSmartResponse, 
  getActionResponse, 
  getActionButtons, 
  detectIntent, 
  personalizeResponse,
  type ChatResponse,
  type ActionButton
} from '../lib/chatResponses'

// Google Analytics tracking functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

const trackChatEvent = (action: string, step: string, segment?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: 'Chat',
      event_label: step,
      custom_parameter_1: segment || 'unknown',
      page_location: window.location.pathname
    })
  }
}

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
  actions?: string[]
}

interface ContactForm {
  name: string
  email: string
  phone: string
}

type ConversationStep = 'initial' | 'options' | 'asking_name' | 'asking_phone' | 'asking_email' | 'completed'

interface ChatWidgetProps {
  segment: string
}

export default function ChatWidget({ segment }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showActions, setShowActions] = useState<ActionButton[]>([])
  const [conversationStep, setConversationStep] = useState<ConversationStep>('initial')
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: ''
  })
  const [selectedAction, setSelectedAction] = useState<string>('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const config = getChatConfig(segment)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Mensagem de boas-vindas
      const welcomeMessage: Message = {
        id: '1',
        text: config.welcomeMessage,
        isUser: false,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, config.welcomeMessage, messages.length])

  const sendNotification = async (messageText: string, actionType?: string, contactData?: ContactForm) => {
    try {
      await fetch('/api/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          segment: config.segment,
          message: actionType ? `Ação selecionada: ${actionType}` : messageText,
          timestamp: new Date().toISOString(),
          page: window.location.pathname,
          userAgent: navigator.userAgent,
          contactData: contactData || (conversationStep === 'completed' ? contactForm : null)
        })
      })
    } catch (error) {
      console.error('Erro ao enviar notificação:', error)
    }
  }

  const sendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setInputValue('')
    setIsTyping(true)

    // Rastrear envio de mensagem
    trackChatEvent('message_sent', conversationStep, segment)

    // Adicionar mensagem do usuário
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: userMessage,
      isUser: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newUserMessage])

    // Processar baseado no step da conversa
    if (conversationStep === 'initial') {
      // Primeira mensagem - mostrar opções
      setTimeout(() => {
        const intent = detectIntent(userMessage)
        const baseResponse = generateSmartResponse(userMessage, config.segment)
        const personalizedResponse = personalizeResponse(baseResponse, intent)
        
        const newBotMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: personalizedResponse.text,
          isUser: false,
          timestamp: new Date(),
          actions: personalizedResponse.actions
        }
        setMessages(prev => [...prev, newBotMessage])
        
        if (personalizedResponse.actions) {
          const actionButtons = getActionButtons(config.segment)
          const filteredButtons = actionButtons.filter(btn => 
            personalizedResponse.actions?.includes(btn.id)
          )
          setShowActions(filteredButtons)
        }
        
        setConversationStep('options')
        setIsTyping(false)
      }, 1000)
    } else if (conversationStep === 'asking_name') {
      // Capturar nome
      setContactForm(prev => ({ ...prev, name: userMessage }))
      trackChatEvent('contact_provided', 'name', segment)
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Perfeito! Agora me passe seu telefone para contato:",
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botMessage])
        setConversationStep('asking_phone')
        setIsTyping(false)
      }, 800)
    } else if (conversationStep === 'asking_phone') {
      // Capturar telefone
      setContactForm(prev => ({ ...prev, phone: userMessage }))
      trackChatEvent('contact_provided', 'phone', segment)
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Ótimo! Por último, me passe seu email:",
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botMessage])
        setConversationStep('asking_email')
        setIsTyping(false)
      }, 800)
    } else if (conversationStep === 'asking_email') {
      // Capturar email e finalizar
      const finalContactForm = {
        ...contactForm,
        email: userMessage
      }
      setContactForm(finalContactForm)
      trackChatEvent('contact_provided', 'email', segment)
      
      // Enviar notificação com todos os dados
      await sendNotification(selectedAction, undefined, finalContactForm)
      trackChatEvent('conversion_completed', 'full_contact_data', segment)
      
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: `Obrigado, ${finalContactForm.name}! Recebemos suas informações e entraremos em contato em breve através do email ${finalContactForm.email} ou telefone ${finalContactForm.phone}. Tenha um ótimo dia! 😊`,
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botMessage])
        setConversationStep('completed')
        setIsTyping(false)
      }, 1000)
    }
  }



  const handleActionClick = async (actionId: string) => {
    if (conversationStep !== 'options') return
    
    setSelectedAction(actionId)
    setShowActions([])
    
    // Rastrear seleção de opção
    trackChatEvent('option_selected', actionId, segment)
    
    // Adicionar mensagem do usuário clicando na ação
    const actionButton = getActionButtons(config.segment).find(btn => btn.id === actionId)
    if (actionButton) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: actionButton.text,
        isUser: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, userMessage])
    }
    
    setIsTyping(true)
    
    // Iniciar coleta de dados
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Perfeito! Para melhor atendê-lo, qual seu nome para contato?",
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setConversationStep('asking_name')
      setIsTyping(false)
    }, 1000)
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
          onClick={() => {
            const wasOpen = isOpen
            setIsOpen(!isOpen)
            
            if (!wasOpen) {
              // Rastrear abertura do chat
              trackChatEvent('chat_opened', 'initial', segment)
            }
          }}
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
              
              {/* Botões de Ação */}
              {showActions.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-start">
                  {showActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleActionClick(action.id)}
                      className="px-3 py-1 text-sm border rounded-full hover:opacity-80 transition-opacity"
                      style={{ 
                        borderColor: config.color, 
                        color: config.color 
                      }}
                    >
                      {action.text}
                    </button>
                  ))}
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            {conversationStep !== 'completed' && (
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
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}