export interface ChatConfig {
  segment: 'advocacia' | 'licitacoes' | 'brandi-labs' | 'sistemas' | 'home'
  welcomeMessage: string
  placeholder: string
  color: string
  webhookUrl?: string
}

export const chatConfigs: Record<string, ChatConfig> = {
  advocacia: {
    segment: 'advocacia',
    welcomeMessage: '👋 Olá! Vi que você está interessado em Direito Previdenciário. Posso ajudar com aposentadoria, benefícios por incapacidade, pensões ou revisão de benefícios?',
    placeholder: 'Digite sua dúvida sobre previdência...',
    color: '#D4AF37',
    webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_ADVOCACIA
  },
  
  licitacoes: {
    segment: 'licitacoes',
    welcomeMessage: '🏛️ Oi! Precisa de ajuda com licitações governamentais? Posso orientar sobre editais, elaboração de propostas, acompanhamento de processos ou estratégias de participação.',
    placeholder: 'Conte sobre sua necessidade em licitações...',
    color: '#1E40AF',
    webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_LICITACOES
  },
  
  'brandi-labs': {
    segment: 'brandi-labs',
    welcomeMessage: '🚀 E aí! Quer desenvolver um aplicativo mobile? Vamos conversar sobre sua ideia! Trabalho com Flutter para iOS e Android.',
    placeholder: 'Descreva sua ideia de app...',
    color: '#7C3AED',
    webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_BRANDI_LABS
  },
  
  sistemas: {
    segment: 'sistemas',
    welcomeMessage: '💻 Olá! Precisa de um sistema personalizado? Posso ajudar com desenvolvimento web, automações, integrações ou soluções sob medida para sua empresa.',
    placeholder: 'Qual sistema você precisa?...',
    color: '#059669',
    webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_SISTEMAS
  },
  
  home: {
    segment: 'home',
    welcomeMessage: '👋 Olá! Bem-vindo à Brandi Fratelli! Em qual área posso ajudar você hoje: Advocacia, Licitações, Desenvolvimento de Apps ou Sistemas?',
    placeholder: 'Como posso ajudar você?...',
    color: '#D4AF37',
    webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_GERAL
  }
}

export const getChatConfig = (segment: string): ChatConfig => {
  return chatConfigs[segment] || chatConfigs.home
}

export const detectSegmentFromPath = (pathname: string): ChatConfig => {
  if (pathname.includes('/advocacia')) {
    return chatConfigs.advocacia
  } else if (pathname.includes('/licitacoes')) {
    return chatConfigs.licitacoes
  } else if (pathname.includes('/brandi-labs')) {
    return chatConfigs['brandi-labs']
  } else if (pathname.includes('/sistemas')) {
    return chatConfigs.sistemas
  } else {
    return chatConfigs.home
  }
}

export const generateSmartResponse = (userInput: string, segment: string): string => {
  const input = userInput.toLowerCase()
  
  const responses: Record<string, Record<string, string>> = {
    advocacia: {
      'aposentadoria': 'Perfeito! Posso ajudar com aposentadoria. Você já contribuiu por quantos anos? Vou conectar você com nosso especialista.',
      'beneficio': 'Entendi! Sobre benefícios do INSS. Qual tipo de benefício você precisa? Auxílio-doença, aposentadoria ou pensão?',
      'inss': 'Ótimo! Somos especialistas em questões do INSS. Qual sua situação específica? Vou agendar uma consulta gratuita.',
      'revisao': 'Excelente! Revisão de benefícios pode aumentar muito o valor. Quando você se aposentou? Vou verificar suas possibilidades.'
    },
    licitacoes: {
      'edital': 'Perfeito! Sobre editais de licitação. Você quer participar de algum específico ou precisa de acompanhamento geral?',
      'proposta': 'Ótimo! Elaboração de propostas é nossa especialidade. Qual o tipo de licitação? Menor preço, técnica ou técnica e preço?',
      'documentacao': 'Entendi! A documentação é crucial. Você já tem a habilitação jurídica e fiscal em dia? Posso ajudar com isso.',
      'pregao': 'Excelente! Pregões eletrônicos são nossa área forte. Você já está cadastrado no portal? Vou te orientar.'
    },
    'brandi-labs': {
      'app': 'Que legal! Desenvolvimento de apps é nossa paixão. Você já tem o conceito definido? iOS, Android ou ambos?',
      'flutter': 'Perfeito! Trabalhamos com Flutter, a melhor tecnologia para apps multiplataforma. Qual sua ideia?',
      'mobile': 'Ótimo! Aplicativos mobile são o futuro. Você tem alguma referência de app que gosta? Vou entender melhor sua visão.',
      'sistema': 'Excelente! Que tipo de sistema mobile você imagina? E-commerce, produtividade, social? Vou conectar você com nosso Product Manager.'
    },
    sistemas: {
      'web': 'Perfeito! Sistemas web são nossa especialidade. Você precisa de um site institucional, e-commerce ou sistema interno?',
      'automacao': 'Ótimo! Automações podem revolucionar sua empresa. Qual processo você quer automatizar? Vou entender melhor.',
      'integracao': 'Excelente! Integrações entre sistemas são fundamentais. Quais sistemas você precisa conectar?',
      'crm': 'Perfeito! CRM personalizado pode transformar suas vendas. Quantos usuários vão usar? Vou dimensionar a solução.'
    }
  }
  
  const fallbacks: Record<string, string> = {
    advocacia: 'Entendi sua situação! Vou conectar você com nosso advogado especialista em Direito Previdenciário. Ele pode esclarecer tudo. Qual o melhor horário para contato?',
    licitacoes: 'Entendi sua necessidade! Somos especialistas em licitações governamentais. Vou conectar você com nosso consultor para uma análise detalhada. Quando podemos conversar?',
    'brandi-labs': 'Adorei sua ideia! Nosso time do Brandi Labs pode transformar isso em realidade. Vou agendar uma conversa com nosso especialista em Flutter. Quando você está disponível?',
    sistemas: 'Entendi sua necessidade! Desenvolvemos sistemas sob medida para empresas. Vou conectar você com nosso arquiteto de soluções. Qual o melhor horário?'
  }
  
  const segmentResponses = responses[segment]
  if (segmentResponses) {
    for (const [keyword, response] of Object.entries(segmentResponses)) {
      if (input.includes(keyword)) {
        return response
      }
    }
    return fallbacks[segment] || 'Obrigado pela mensagem! Vou conectar você com nossa equipe especializada.'
  }
  
  return 'Obrigado pela mensagem! Vou conectar você com nossa equipe especializada. Como prefere ser contatado?'
}