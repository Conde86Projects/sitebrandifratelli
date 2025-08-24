// Sistema de respostas automáticas inteligentes por segmento

export interface ChatResponse {
  text: string
  actions?: string[]
  followUp?: string
}

export interface ActionButton {
  id: string
  text: string
  action: string
}

// Palavras-chave por segmento
const KEYWORDS = {
  advocacia: [
    'inss', 'previdencia', 'previdenciario', 'aposentadoria', 'beneficio', 
    'auxilio', 'pensao', 'revisao', 'advogado', 'juridico', 'direito',
    'trabalhista', 'processo', 'recurso', 'pericia'
  ],
  licitacoes: [
    'licitacao', 'pregao', 'concorrencia', 'edital', 'governo', 'publico',
    'municipal', 'estadual', 'federal', 'contrato', 'fornecedor',
    'habilitacao', 'documentacao', 'proposta'
  ],
  'brandi-labs': [
    'app', 'aplicativo', 'mobile', 'flutter', 'android', 'ios',
    'desenvolvimento', 'sistema', 'software', 'tecnologia', 'digital',
    'inovacao', 'startup'
  ],
  sistemas: [
    'site', 'website', 'sistema', 'web', 'desenvolvimento', 'programacao',
    'ecommerce', 'loja', 'virtual', 'plataforma', 'dashboard', 'crm',
    'erp', 'api', 'banco', 'dados'
  ]
}

// Respostas automáticas por segmento
const SEGMENT_RESPONSES = {
  advocacia: {
    greeting: "Olá! Posso ajudar com questões previdenciárias e trabalhistas. 👨‍⚖️",
    mainResponse: "Você gostaria de:",
    actions: [
      { id: 'analise', text: '📋 Análise gratuita do seu caso', action: 'request_analysis' },
      { id: 'consulta', text: '📞 Agendar consulta', action: 'schedule_consultation' },
      { id: 'material', text: '📚 Material informativo', action: 'send_material' },
      { id: 'advogado', text: '💬 Falar com advogado', action: 'contact_lawyer' }
    ]
  },
  licitacoes: {
    greeting: "Perfeito! Ajudamos empresas a vencer licitações. 🏆",
    mainResponse: "Como posso ajudar:",
    actions: [
      { id: 'analise_edital', text: '🎯 Análise gratuita de edital', action: 'analyze_bid' },
      { id: 'cases', text: '📊 Cases de sucesso', action: 'show_cases' },
      { id: 'orcamento', text: '💰 Orçamento personalizado', action: 'request_quote' },
      { id: 'especialista', text: '👨‍💼 Falar com especialista', action: 'contact_specialist' }
    ]
  },
  'brandi-labs': {
    greeting: "Que legal! Desenvolvemos apps incríveis com Flutter. 📱",
    mainResponse: "O que você precisa:",
    actions: [
      { id: 'briefing', text: '📋 Briefing do projeto', action: 'project_briefing' },
      { id: 'portfolio', text: '📱 Ver nossos apps', action: 'show_portfolio' },
      { id: 'orcamento', text: '💰 Orçamento do app', action: 'app_quote' },
      { id: 'desenvolvedor', text: '👨‍💻 Falar com desenvolvedor', action: 'contact_developer' }
    ]
  },
  sistemas: {
    greeting: "Ótimo! Criamos sistemas web personalizados. 💻",
    mainResponse: "Como posso ajudar:",
    actions: [
      { id: 'requisitos', text: '📋 Análise de requisitos', action: 'analyze_requirements' },
      { id: 'portfolio_web', text: '🌐 Ver nossos sites', action: 'show_web_portfolio' },
      { id: 'proposta', text: '📄 Proposta técnica', action: 'technical_proposal' },
      { id: 'programador', text: '👨‍💻 Falar com programador', action: 'contact_programmer' }
    ]
  },
  home: {
    greeting: "Olá! Bem-vindo à Brandi Fratelli. 👋",
    mainResponse: "Em que posso ajudar:",
    actions: [
      { id: 'advocacia', text: '⚖️ Direito Previdenciário', action: 'goto_advocacia' },
      { id: 'licitacoes', text: '📋 Licitações', action: 'goto_licitacoes' },
      { id: 'apps', text: '📱 Desenvolvimento de Apps', action: 'goto_brandi_labs' },
      { id: 'sistemas', text: '💻 Sistemas Web', action: 'goto_sistemas' }
    ]
  }
}

// Respostas de follow-up para ações específicas
const ACTION_RESPONSES = {
  request_analysis: "Perfeito! Para análise gratuita, preciso de algumas informações:\n\n📝 Descreva brevemente seu caso\n📞 Seu telefone para contato\n📧 Seu email\n\nNossa equipe entrará em contato em até 2 horas!",
  schedule_consultation: "Ótimo! Vamos agendar sua consulta gratuita:\n\n📅 Horários disponíveis:\n• Segunda a Sexta: 8h às 18h\n• Sábado: 8h às 12h\n\n📞 Telefone: (11) 99999-9999\n📧 Email: andrei.brandi@brandifratelli.com.br",
  send_material: "Aqui estão nossos materiais informativos:\n\n📚 Guia INSS 2024\n📋 Checklist de Documentos\n⚖️ Seus Direitos Previdenciários\n\nEnviaremos por email. Qual seu endereço?",
  contact_lawyer: "Conectando você com nosso advogado especialista...\n\n👨‍⚖️ Dr. Andrei Brandi\n📞 (11) 99999-9999\n📧 andrei.brandi@brandifratelli.com.br\n\nEle responderá em breve!",
  
  analyze_bid: "Excelente! Análise gratuita de edital:\n\n📋 Envie o edital por email\n🎯 Analisaremos viabilidade\n📊 Relatório em 24h\n💰 Orçamento personalizado\n\nEmail: andrei.brandi@brandifratelli.com.br",
  show_cases: "Nossos cases de sucesso:\n\n🏆 95% de aprovação em pregões\n💰 R$ 50M+ em contratos conquistados\n🏢 200+ empresas atendidas\n📈 Aumento médio de 300% nas aprovações\n\nQuer saber mais detalhes?",
  request_quote: "Vamos preparar seu orçamento:\n\n📋 Tipo de licitação\n🎯 Área de atuação\n📊 Porte da empresa\n💰 Valor médio dos editais\n\nEnvie essas informações para: andrei.brandi@brandifratelli.com.br",
  contact_specialist: "Nosso especialista em licitações:\n\n👨‍💼 Andrei Brandi\n📞 (11) 99999-9999\n📧 andrei.brandi@brandifratelli.com.br\n\nEspecialista há 10+ anos!",
  
  project_briefing: "Vamos entender seu projeto:\n\n📱 Tipo de app (iOS/Android/Ambos)\n🎯 Objetivo principal\n👥 Público-alvo\n⚡ Funcionalidades principais\n\nEnvie para: brandi.labs@brandifratelli.com.br",
  show_portfolio: "Nossos apps desenvolvidos:\n\n📱 App de Delivery - 50k+ downloads\n🏥 App Médico - Telemedicina\n🏪 E-commerce Mobile - Flutter\n📊 Dashboard Analytics\n\nQuer ver demos?",
  app_quote: "Orçamento personalizado:\n\n📋 Briefing detalhado\n⏱️ Prazo de desenvolvimento\n💰 Investimento total\n🚀 Suporte pós-lançamento\n\nContato: brandi.labs@brandifratelli.com.br",
  contact_developer: "Nosso desenvolvedor mobile:\n\n👨‍💻 Brandi Labs Team\n📞 (11) 99999-9999\n📧 brandi.labs@brandifratelli.com.br\n\nEspecialistas em Flutter!",
  
  analyze_requirements: "Análise de requisitos:\n\n📋 Funcionalidades necessárias\n👥 Número de usuários\n🔐 Níveis de acesso\n📊 Integrações necessárias\n\nEnvie para: adrian.andreas@brandifratelli.com.br",
  show_web_portfolio: "Nossos sistemas web:\n\n🌐 E-commerce Completo\n📊 Sistema de Gestão (ERP)\n🏥 Plataforma Médica\n📈 Dashboard Analytics\n\nQuer ver demonstrações?",
  technical_proposal: "Proposta técnica detalhada:\n\n🔧 Tecnologias utilizadas\n📅 Cronograma de desenvolvimento\n💰 Investimento por fase\n🛠️ Suporte e manutenção\n\nContato: adrian.andreas@brandifratelli.com.br",
  contact_programmer: "Nosso programador sênior:\n\n👨‍💻 Adrian Andreas\n📞 (11) 99999-9999\n📧 adrian.andreas@brandifratelli.com.br\n\n10+ anos de experiência!",
  
  goto_advocacia: "Redirecionando para Advocacia...\n\n⚖️ Especialistas em Direito Previdenciário\n📋 Análise gratuita de casos\n🏆 95% de sucesso em processos",
  goto_licitacoes: "Redirecionando para Licitações...\n\n📋 Especialistas em Pregões\n🏆 R$ 50M+ em contratos\n📊 95% de aprovação",
  goto_brandi_labs: "Redirecionando para Brandi Labs...\n\n📱 Apps Flutter nativos\n🚀 50+ apps desenvolvidos\n⭐ 4.8 estrelas média",
  goto_sistemas: "Redirecionando para Sistemas...\n\n💻 Sistemas web personalizados\n🔧 Tecnologias modernas\n📈 100+ projetos entregues"
}

// Função principal para gerar resposta inteligente
export function generateSmartResponse(message: string, segment: string): ChatResponse {
  const lowerMessage = message.toLowerCase()
  
  // Verificar se a mensagem contém palavras-chave do segmento
  const segmentKeywords = KEYWORDS[segment as keyof typeof KEYWORDS] || []
  const hasKeywords = segmentKeywords.some(keyword => 
    lowerMessage.includes(keyword.toLowerCase())
  )
  
  // Se tem palavras-chave ou está no segmento correto, dar resposta específica
  if (hasKeywords || segment !== 'home') {
    const response = SEGMENT_RESPONSES[segment as keyof typeof SEGMENT_RESPONSES]
    if (response) {
      return {
        text: `${response.greeting}\n\n${response.mainResponse}`,
        actions: response.actions.map(action => action.id)
      }
    }
  }
  
  // Resposta genérica para mensagens sem palavras-chave específicas
  if (segment === 'home') {
    const homeResponse = SEGMENT_RESPONSES.home
    return {
      text: `${homeResponse.greeting}\n\n${homeResponse.mainResponse}`,
      actions: homeResponse.actions.map(action => action.id)
    }
  }
  
  // Resposta padrão
  return {
    text: "Obrigado pela sua mensagem! Nossa equipe entrará em contato em breve. 😊\n\nEnquanto isso, posso ajudar com:",
    actions: ['analise', 'consulta', 'orcamento', 'contato']
  }
}

// Função para obter resposta de ação específica
export function getActionResponse(actionId: string): string {
  return ACTION_RESPONSES[actionId as keyof typeof ACTION_RESPONSES] || 
    "Obrigado! Nossa equipe entrará em contato em breve. 😊"
}

// Função para obter botões de ação por segmento
export function getActionButtons(segment: string): ActionButton[] {
  const response = SEGMENT_RESPONSES[segment as keyof typeof SEGMENT_RESPONSES]
  return response?.actions || []
}

// Função para detectar intenção da mensagem
export function detectIntent(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  // Detectar saudações
  if (/\b(oi|olá|ola|hey|hello|bom dia|boa tarde|boa noite)\b/.test(lowerMessage)) {
    return 'greeting'
  }
  
  // Detectar pedidos de ajuda
  if (/\b(ajuda|help|socorro|duvida|dúvida|problema)\b/.test(lowerMessage)) {
    return 'help_request'
  }
  
  // Detectar interesse em contato
  if (/\b(contato|telefone|email|falar|conversar|ligar)\b/.test(lowerMessage)) {
    return 'contact_request'
  }
  
  // Detectar interesse em orçamento
  if (/\b(orçamento|orcamento|preço|preco|valor|custo|quanto)\b/.test(lowerMessage)) {
    return 'quote_request'
  }
  
  return 'general'
}

// Função para personalizar resposta baseada na intenção
export function personalizeResponse(baseResponse: ChatResponse, intent: string): ChatResponse {
  switch (intent) {
    case 'greeting':
      return {
        ...baseResponse,
        text: baseResponse.text.replace('Olá!', 'Olá! Que bom te ver aqui!')
      }
    case 'help_request':
      return {
        ...baseResponse,
        text: `Claro, estou aqui para ajudar! 😊\n\n${baseResponse.text}`
      }
    case 'contact_request':
      return {
        ...baseResponse,
        text: `${baseResponse.text}\n\n📞 Ou se preferir, entre em contato direto!`
      }
    case 'quote_request':
      return {
        ...baseResponse,
        text: `${baseResponse.text}\n\n💰 Todos nossos orçamentos são gratuitos!`
      }
    default:
      return baseResponse
  }
}