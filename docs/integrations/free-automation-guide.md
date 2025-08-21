# 🆓 Guia de Automação Gratuita para Chat

## 💡 Alternativas Gratuitas ao N8n

Entendo que estão no início do projeto! Aqui estão **soluções 100% gratuitas** para automatizar o chat:

---

## 🎯 **Opção 1: Zapier Gratuito (Recomendado)**

### ✅ **Por que Zapier?**
- **100 tarefas/mês grátis** (suficiente para começar)
- **Interface super simples** (drag & drop)
- **Integrações prontas** com Gmail, WhatsApp, Sheets
- **Sem código necessário**

### 🚀 **Configuração Rápida (15 minutos)**

#### **Passo 1: Criar Conta**
1. Acesse [zapier.com](https://zapier.com)
2. Crie conta gratuita
3. Confirme email

#### **Passo 2: Criar Webhook**
1. **Novo Zap** → **Webhooks by Zapier**
2. **Trigger**: "Catch Hook"
3. **Copie a URL** (ex: `https://hooks.zapier.com/hooks/catch/123456/abcdef/`)

#### **Passo 3: Configurar Ação**
1. **Adicionar ação** → **Gmail**
2. **Send Email**
3. **Configurar**:
   ```
   To: contato@brandifratelli.com.br
   Subject: 💬 Nova mensagem - {{segment}}
   Body: 
   Nova mensagem do chat:
   
   📍 Página: {{segment}}
   📝 Mensagem: {{message}}
   🕐 Horário: {{timestamp}}
   ```

#### **Passo 4: Conectar ao Site**
```env
# .env.local
NEXT_PUBLIC_ZAPIER_WEBHOOK=https://hooks.zapier.com/hooks/catch/123456/abcdef/
```

---

## 🎯 **Opção 2: Google Apps Script (100% Grátis)**

### ✅ **Vantagens**
- **Totalmente gratuito** (Google)
- **Integração nativa** com Gmail, Sheets, Drive
- **Código simples** JavaScript
- **Sem limites** de execução básicos

### 🚀 **Implementação**

#### **Passo 1: Criar Script**
1. Acesse [script.google.com](https://script.google.com)
2. **Novo projeto** → "Chat Brandi Fratelli"
3. **Cole o código**:

```javascript
function doPost(e) {
  try {
    // Receber dados do chat
    const data = JSON.parse(e.postData.contents);
    
    // Enviar email
    enviarEmail(data);
    
    // Salvar no Sheets
    salvarNoSheets(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function enviarEmail(data) {
  const subject = `💬 Nova mensagem - ${data.segment}`;
  const body = `
    Nova mensagem do chat:
    
    📍 Segmento: ${data.segment}
    📝 Mensagem: ${data.message}
    🕐 Horário: ${data.timestamp}
    
    ---
    Sistema Brandi Fratelli
  `;
  
  GmailApp.sendEmail(
    'contato@brandifratelli.com.br',
    subject,
    body
  );
}

function salvarNoSheets(data) {
  // ID da sua planilha (criar uma nova)
  const sheetId = 'SEU_SHEET_ID_AQUI';
  const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  
  // Adicionar linha
  sheet.appendRow([
    new Date(data.timestamp),
    data.segment,
    data.message,
    data.priority || 'normal'
  ]);
}
```

#### **Passo 2: Deploy**
1. **Deploy** → **New deployment**
2. **Type**: Web app
3. **Execute as**: Me
4. **Access**: Anyone
5. **Deploy** → Copiar URL

#### **Passo 3: Conectar**
```env
# .env.local
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_ID/exec
```

---

## 🎯 **Opção 3: Webhook.site + IFTTT (Gratuito)**

### ✅ **Para Testes Rápidos**
- **Webhook.site**: Receber dados instantaneamente
- **IFTTT**: Automações simples gratuitas

#### **Configuração**
1. **Webhook.site**: Gerar URL única
2. **IFTTT**: Conectar webhook → Gmail/SMS
3. **Testar**: Ver dados em tempo real

---

## 🎯 **Opção 4: Netlify Functions (Gratuito)**

### ✅ **Para Desenvolvedores**
- **125.000 execuções/mês** grátis
- **Deploy automático** com Git
- **Serverless** functions

#### **Exemplo de Function**
```javascript
// netlify/functions/chat-webhook.js
exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body);
  
  // Processar dados do chat
  console.log('Nova mensagem:', data);
  
  // Aqui você pode:
  // - Enviar email via SendGrid (gratuito)
  // - Salvar em Airtable (gratuito)
  // - Notificar via Discord/Slack
  
  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'success' })
  };
};
```

---

## 🎯 **Opção 5: Discord/Slack Webhooks (Gratuito)**

### ✅ **Notificações Instantâneas**
- **Discord**: Webhook gratuito ilimitado
- **Slack**: 10.000 mensagens/mês grátis

#### **Discord Setup**
1. **Criar servidor Discord** (gratuito)
2. **Canal** → **Configurações** → **Integrações** → **Webhooks**
3. **Criar webhook** → Copiar URL

#### **Código para Discord**
```javascript
// Enviar para Discord
const enviarDiscord = async (data) => {
  const webhookUrl = 'https://discord.com/api/webhooks/SEU_WEBHOOK';
  
  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      embeds: [{
        title: `💬 Nova mensagem - ${data.segment}`,
        description: data.message,
        color: 0x00ff00,
        fields: [
          { name: '📍 Segmento', value: data.segment, inline: true },
          { name: '🕐 Horário', value: data.timestamp, inline: true }
        ]
      }]
    })
  });
};
```

---

## 🎯 **Opção 6: EmailJS (Gratuito)**

### ✅ **Envio Direto do Frontend**
- **200 emails/mês** grátis
- **Sem backend** necessário
- **Configuração simples**

#### **Setup EmailJS**
1. **Criar conta** em [emailjs.com](https://emailjs.com)
2. **Configurar serviço** (Gmail)
3. **Criar template** de email
4. **Instalar no projeto**:

```bash
npm install @emailjs/browser
```

#### **Integrar no ChatWidget**
```typescript
// components/ChatWidget.tsx
import emailjs from '@emailjs/browser';

const enviarEmail = async (message: string, segment: string) => {
  try {
    await emailjs.send(
      'SEU_SERVICE_ID',
      'SEU_TEMPLATE_ID',
      {
        message: message,
        segment: segment,
        timestamp: new Date().toLocaleString('pt-BR')
      },
      'SUA_PUBLIC_KEY'
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
  }
};
```

---

## 🎯 **Opção 7: Supabase (Gratuito)**

### ✅ **Banco + Automação**
- **500MB** banco grátis
- **Edge Functions** gratuitas
- **Real-time** subscriptions

#### **Setup Rápido**
1. **Criar projeto** em [supabase.com](https://supabase.com)
2. **Criar tabela** `chat_messages`
3. **Edge Function** para processar

---

## 📊 **Comparação das Opções**

| Opção | Dificuldade | Limite Grátis | Recursos |
|-------|-------------|---------------|----------|
| **Zapier** | ⭐ Fácil | 100 tarefas/mês | Email, Sheets, WhatsApp |
| **Google Script** | ⭐⭐ Médio | Ilimitado* | Gmail, Sheets, Drive |
| **IFTTT** | ⭐ Fácil | 3 applets | Email, SMS básico |
| **Netlify** | ⭐⭐⭐ Difícil | 125k execuções | Serverless completo |
| **Discord** | ⭐ Fácil | Ilimitado | Notificações instantâneas |
| **EmailJS** | ⭐⭐ Médio | 200 emails/mês | Email direto |
| **Supabase** | ⭐⭐⭐ Difícil | 500MB | Banco + Functions |

---

## 🏆 **Recomendação para Começar**

### **Fase 1: Imediato (Hoje mesmo!)**
```
1. Zapier (15 min) → Notificações por email
2. Google Sheets → Histórico de conversas
3. Discord → Notificações da equipe
```

### **Fase 2: Crescimento (Próximas semanas)**
```
1. Google Apps Script → Automação completa
2. EmailJS → Respostas automáticas
3. Supabase → Banco de dados
```

### **Fase 3: Escala (Quando tiver budget)**
```
1. N8n pago → Automação avançada
2. WhatsApp Business API → Integração completa
3. CRM integrado → Gestão de leads
```

---

## 🚀 **Implementação Recomendada (AGORA)**

### **1. Zapier (5 minutos)**
```
1. Criar conta Zapier
2. Webhook → Gmail
3. Testar com uma mensagem
4. Ativar!
```

### **2. Google Sheets (5 minutos)**
```
1. Criar planilha "Chat Brandi Fratelli"
2. Colunas: Data, Segmento, Mensagem
3. Conectar no Zapier
4. Histórico automático!
```

### **3. Discord (5 minutos)**
```
1. Criar servidor "Brandi Fratelli"
2. Canal #chat-notificacoes
3. Webhook → Notificações instantâneas
4. Equipe sempre informada!
```

**Total: 15 minutos para automação completa e gratuita! 🎉**

---

## 💰 **Evolução do Investimento**

### **Agora (R$ 0/mês)**
- Zapier gratuito
- Google Workspace gratuito
- Discord gratuito

### **Crescimento (R$ 50/mês)**
- Zapier Starter (R$ 30)
- EmailJS Pro (R$ 20)

### **Escala (R$ 200/mês)**
- N8n Cloud (R$ 100)
- WhatsApp Business (R$ 100)

---

## 🆘 **Suporte Gratuito**

**Precisa de ajuda?**
- 📧 **Email**: Use nosso próprio chat! 😄
- 📚 **Docs**: Zapier tem ótima documentação
- 🎥 **YouTube**: Tutoriais gratuitos

---

**🎯 Resultado: Sistema profissional de chat com automação completa, gastando R$ 0,00!**

*Perfeito para validar o negócio antes de investir em soluções pagas.*