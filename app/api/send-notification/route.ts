import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configuração dos emails por segmento
const EMAIL_CONFIG = {
  advocacia: {
    to: ['andrei.brandi@brandifratelli.com.br'],
    subject: '⚖️ LEAD ADVOCACIA - Direito Previdenciário',
    template: 'advocacia'
  },
  licitacoes: {
    to: ['andrei.brandi@brandifratelli.com.br'],
    subject: '📋 LEAD LICITAÇÕES - Pregões e Concorrências', 
    template: 'licitacoes'
  },
  'brandi-labs': {
    to: ['brandi.labs@brandifratelli.com.br'],
    subject: '📱 LEAD BRANDI LABS - Desenvolvimento Mobile',
    template: 'brandi-labs'
  },
  sistemas: {
    to: ['adrian.andreas@brandifratelli.com.br'],
    subject: '💻 LEAD SISTEMAS - Desenvolvimento Web',
    template: 'sistemas'
  },
  home: {
    to: ['contato@brandifratelli.com.br', 'andrei.brandi@brandifratelli.com.br', 'adrian.andreas@brandifratelli.com.br'],
    subject: '💬 Novo Contato - Site Brandi Fratelli',
    template: 'home'
  }
}

// Templates de email
const EMAIL_TEMPLATES = {
  advocacia: (data: any) => `
    <h2>⚖️ NOVO LEAD ADVOCACIA - Direito Previdenciário</h2>
    <p><strong>🎯 LEAD QUALIFICADO!</strong></p>
    
    ${data.contactData ? `
    <h3>👤 Dados de Contato:</h3>
    <ul>
      <li><strong>📝 Nome:</strong> ${data.contactData.name}</li>
      <li><strong>📧 Email:</strong> ${data.contactData.email}</li>
      ${data.contactData.phone ? `<li><strong>📞 Telefone:</strong> ${data.contactData.phone}</li>` : ''}
    </ul>
    ` : ''}
    
    <h3>📋 Detalhes do Lead:</h3>
    <ul>
      <li><strong>📝 Mensagem:</strong> ${data.message}</li>
      <li><strong>📍 Interesse:</strong> Direito Previdenciário</li>
      <li><strong>🕐 Horário:</strong> ${new Date(data.timestamp).toLocaleString('pt-BR')}</li>
      <li><strong>📄 Página:</strong> ${data.page}</li>
      <li><strong>📱 Dispositivo:</strong> ${data.userAgent}</li>
    </ul>
    
    <h3>🔥 AÇÃO NECESSÁRIA:</h3>
    <ul>
      <li>✅ Responder em até 2 horas</li>
      <li>📞 Agendar consulta gratuita</li>
      <li>📚 Enviar material informativo</li>
      ${data.contactData ? `<li>📧 Responder para: ${data.contactData.email}</li>` : ''}
    </ul>
    
    <hr>
    <p><em>Lead gerado automaticamente pelo sistema de chat</em></p>
  `,
  
  licitacoes: (data: any) => `
    <h2>📋 NOVO LEAD LICITAÇÕES - Pregões e Concorrências</h2>
    <p><strong>💼 CLIENTE POTENCIAL!</strong></p>
    
    ${data.contactData ? `
    <h3>👤 Dados de Contato:</h3>
    <ul>
      <li><strong>📝 Nome:</strong> ${data.contactData.name}</li>
      <li><strong>📧 Email:</strong> ${data.contactData.email}</li>
      ${data.contactData.phone ? `<li><strong>📞 Telefone:</strong> ${data.contactData.phone}</li>` : ''}
    </ul>
    ` : ''}
    
    <h3>📋 Detalhes do Lead:</h3>
    <ul>
      <li><strong>📝 Mensagem:</strong> ${data.message}</li>
      <li><strong>📍 Interesse:</strong> Licitações Públicas</li>
      <li><strong>🕐 Horário:</strong> ${new Date(data.timestamp).toLocaleString('pt-BR')}</li>
      <li><strong>📄 Página:</strong> ${data.page}</li>
    </ul>
    
    <h3>🎯 PRÓXIMOS PASSOS:</h3>
    <ul>
      <li>🔍 Análise gratuita de edital</li>
      <li>📊 Apresentar cases de sucesso</li>
      <li>💰 Proposta comercial</li>
      ${data.contactData ? `<li>📧 Responder para: ${data.contactData.email}</li>` : ''}
    </ul>
    
    <hr>
    <p><em>Sistema Automatizado Brandi Fratelli</em></p>
  `,
  
  'brandi-labs': (data: any) => `
    <h2>📱 NOVO LEAD BRANDI LABS - Desenvolvimento Mobile</h2>
    <p><strong>🚀 Novo projeto mobile!</strong></p>
    
    ${data.contactData ? `
    <h3>👤 Dados de Contato:</h3>
    <ul>
      <li><strong>📝 Nome:</strong> ${data.contactData.name}</li>
      <li><strong>📧 Email:</strong> ${data.contactData.email}</li>
      ${data.contactData.phone ? `<li><strong>📞 Telefone:</strong> ${data.contactData.phone}</li>` : ''}
    </ul>
    ` : ''}
    
    <h3>📋 Detalhes do Lead:</h3>
    <ul>
      <li><strong>📝 Mensagem:</strong> ${data.message}</li>
      <li><strong>📍 Interesse:</strong> Apps Flutter</li>
      <li><strong>🕐 Horário:</strong> ${new Date(data.timestamp).toLocaleString('pt-BR')}</li>
      <li><strong>📄 Página:</strong> ${data.page}</li>
    </ul>
    
    <h3>💡 AÇÕES:</h3>
    <ul>
      <li>📋 Briefing técnico</li>
      <li>💰 Orçamento personalizado</li>
      <li>📱 Portfolio de apps</li>
      ${data.contactData ? `<li>📧 Responder para: ${data.contactData.email}</li>` : ''}
    </ul>
    
    <hr>
    <p><em>Brandi Labs - Inovação Mobile</em></p>
  `,
  
  sistemas: (data: any) => `
    <h2>💻 NOVO LEAD SISTEMAS - Desenvolvimento Web</h2>
    <p><strong>🌐 Novo projeto web!</strong></p>
    
    ${data.contactData ? `
    <h3>👤 Dados de Contato:</h3>
    <ul>
      <li><strong>📝 Nome:</strong> ${data.contactData.name}</li>
      <li><strong>📧 Email:</strong> ${data.contactData.email}</li>
      ${data.contactData.phone ? `<li><strong>📞 Telefone:</strong> ${data.contactData.phone}</li>` : ''}
    </ul>
    ` : ''}
    
    <h3>📋 Detalhes do Lead:</h3>
    <ul>
      <li><strong>📝 Mensagem:</strong> ${data.message}</li>
      <li><strong>📍 Interesse:</strong> Sistemas Web</li>
      <li><strong>🕐 Horário:</strong> ${new Date(data.timestamp).toLocaleString('pt-BR')}</li>
      <li><strong>📄 Página:</strong> ${data.page}</li>
    </ul>
    
    <h3>🔧 PRÓXIMOS PASSOS:</h3>
    <ul>
      <li>📋 Análise de requisitos</li>
      <li>📄 Proposta técnica</li>
      <li>📅 Cronograma de desenvolvimento</li>
      ${data.contactData ? `<li>📧 Responder para: ${data.contactData.email}</li>` : ''}
    </ul>
    
    <hr>
    <p><em>Sistemas Brandi Fratelli</em></p>
  `,
  
  home: (data: any) => `
    <h2>💬 Novo Contato - Site Brandi Fratelli</h2>
    <p><strong>Olá equipe!</strong></p>
    
    <p>Nova mensagem recebida através do site:</p>
    
    ${data.contactData ? `
    <h3>👤 Dados de Contato:</h3>
    <ul>
      <li><strong>📝 Nome:</strong> ${data.contactData.name}</li>
      <li><strong>📧 Email:</strong> ${data.contactData.email}</li>
      ${data.contactData.phone ? `<li><strong>📞 Telefone:</strong> ${data.contactData.phone}</li>` : ''}
    </ul>
    ` : ''}
    
    <h3>📋 Detalhes:</h3>
    <ul>
      <li><strong>📝 Mensagem:</strong> ${data.message}</li>
      <li><strong>📍 Página:</strong> Home (${data.page})</li>
      <li><strong>🕐 Horário:</strong> ${new Date(data.timestamp).toLocaleString('pt-BR')}</li>
      <li><strong>🌐 Navegador:</strong> ${data.userAgent}</li>
    </ul>
    
    ${data.contactData ? `
    <h3>🔥 AÇÃO NECESSÁRIA:</h3>
    <ul>
      <li>📧 Responder para: ${data.contactData.email}</li>
      <li>📞 Entrar em contato via telefone</li>
      <li>✅ Responder em até 2 horas</li>
    </ul>
    ` : ''}
    
    <hr>
    <p><em>Sistema de Chat Brandi Fratelli</em></p>
  `
}

// Configuração do transporter de email
const createTransporter = () => {
  // Configuração original (SendGrid/Zoho)
  const config = {
    host: process.env.SMTP_HOST || 'smtp.sendgrid.net',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'apikey',
      pass: process.env.SMTP_PASS
    }
  }

  // Log das configurações (sem mostrar senhas)
  console.log('=== CONFIGURAÇÃO SMTP ===')
  console.log('Host:', config.host)
  console.log('Port:', config.port)
  console.log('User:', config.auth.user)
  console.log('Pass configurada:', !!config.auth.pass)
  console.log('=========================')

  return nodemailer.createTransport(config)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { segment, message, timestamp, page, userAgent, contactData } = body
    
    // Validação dos dados
    if (!segment || !message) {
      return NextResponse.json(
        { error: 'Segment e message são obrigatórios' },
        { status: 400 }
      )
    }
    
    // Buscar configuração do email para o segmento
    const emailConfig = EMAIL_CONFIG[segment as keyof typeof EMAIL_CONFIG]
    if (!emailConfig) {
      return NextResponse.json(
        { error: 'Segmento não encontrado' },
        { status: 400 }
      )
    }
    
    // Preparar dados para o template
    const templateData = {
      message,
      timestamp: timestamp || new Date().toISOString(),
      page: page || '/',
      userAgent: userAgent || 'Desconhecido',
      contactData: contactData || null
    }
    
    // Gerar conteúdo do email
    const emailTemplate = EMAIL_TEMPLATES[segment as keyof typeof EMAIL_TEMPLATES]
    const htmlContent = emailTemplate(templateData)
    
    // Log dos dados para debug
    console.log('=== NOTIFICAÇÃO DE CHAT ===')
    console.log('Segmento:', segment)
    console.log('Destinatários:', emailConfig.to)
    console.log('Assunto:', emailConfig.subject)
    console.log('Mensagem:', message)
    console.log('Página:', page)
    console.log('Timestamp:', templateData.timestamp)
    console.log('==========================')
    
    // Envio de email via SendGrid/Zoho
    const transporter = createTransporter()
    console.log('=== ENVIANDO EMAILS ===')
    console.log('From:', process.env.SMTP_FROM || 'noreply@brandifratelli.com.br')
    console.log('To:', emailConfig.to)
    console.log('Subject:', emailConfig.subject)
    console.log('=======================')
    
    const emailPromises = emailConfig.to.map(async (email) => {
      try {
        console.log(`Enviando para: ${email}`)
        const result = await transporter.sendMail({
          from: process.env.SMTP_FROM || 'Brandi Fratelli <noreply@brandifratelli.com.br>',
          to: email,
          subject: emailConfig.subject,
          html: htmlContent
        })
        console.log(`✅ Email enviado para ${email}:`, result.messageId)
        return result
      } catch (emailError) {
        console.error(`❌ Erro ao enviar para ${email}:`, emailError)
        throw emailError
      }
    })
    
    const results = await Promise.all(emailPromises)
    console.log('✅ Todos os emails enviados com sucesso!')

    return NextResponse.json({
      success: true,
      message: 'Notificações enviadas com sucesso via SendGrid/Zoho',
      segment,
      recipients: emailConfig.to,
      data: templateData,
      emailResults: results.map(r => r.messageId)
    })
    
  } catch (error) {
    console.error('Erro ao processar notificação:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}