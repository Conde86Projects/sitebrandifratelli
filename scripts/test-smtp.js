const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

console.log('🔧 Testando configurações SMTP do Zoho Mail...');
console.log('Host:', process.env.SMTP_HOST);
console.log('Port:', process.env.SMTP_PORT);
console.log('User:', process.env.SMTP_USER);
console.log('Pass:', process.env.SMTP_PASS ? '***configurada***' : 'NÃO CONFIGURADA');
console.log('From:', process.env.SMTP_FROM);
console.log('\n' + '='.repeat(50));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false, // true para 465, false para 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

async function testSMTP() {
  try {
    console.log('📡 Verificando conexão SMTP...');
    
    // Verificar conexão
    await transporter.verify();
    console.log('✅ Conexão SMTP estabelecida com sucesso!');
    
    console.log('\n📧 Enviando email de teste...');
    
    // Enviar email de teste
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'adrian.andreas@brandifratelli.com.br',
      subject: '🧪 Teste SendGrid - Sistema de Chat Brandi Fratelli',
      html: `
        <h2>🎉 Teste de Email Bem-sucedido!</h2>
        <p>Este é um email de teste do sistema de chat.</p>
        <hr>
        <p><strong>Configurações testadas:</strong></p>
        <ul>
          <li>Host: ${process.env.SMTP_HOST}</li>
          <li>Porta: ${process.env.SMTP_PORT}</li>
          <li>Usuário: ${process.env.SMTP_USER}</li>
          <li>Data/Hora: ${new Date().toLocaleString('pt-BR')}</li>
        </ul>
        <hr>
        <p><em>Sistema de Chat Brandi Fratelli</em></p>
      `
    });
    
    console.log('✅ Email enviado com sucesso!');
    console.log('📧 Message ID:', info.messageId);
    console.log('📬 Destinatário:', 'adrian.andreas@brandifratelli.com.br');
    console.log('\n🎉 Teste SMTP concluído com sucesso!');
    console.log('\n💡 Agora você pode ativar o envio real na API.');
    
  } catch (error) {
    console.error('❌ Erro no teste SMTP:');
    console.error('Código:', error.code);
    console.error('Mensagem:', error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\n🔧 Soluções para erro de autenticação:');
      console.log('1. Verificar se a senha é uma "Senha de Aplicativo" do Zoho');
      console.log('2. Gerar nova senha em: https://accounts.zoho.com/home#security/app-passwords');
      console.log('3. Verificar se 2FA está configurado corretamente');
      console.log('4. Tentar host alternativo: smtp.zoho.com');
    }
    
    if (error.code === 'ECONNECTION') {
      console.log('\n🔧 Soluções para erro de conexão:');
      console.log('1. Verificar configurações de firewall');
      console.log('2. Tentar porta 465 com secure: true');
      console.log('3. Verificar se o host está correto');
    }
    
    console.log('\n📋 Configurações atuais:');
    console.log('Host:', process.env.SMTP_HOST);
    console.log('Porta:', process.env.SMTP_PORT);
    console.log('Usuário:', process.env.SMTP_USER);
  }
}

testSMTP();