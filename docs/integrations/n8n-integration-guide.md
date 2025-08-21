# 🔗 Guia Completo: Integração Chat + N8n

## 📋 Pré-requisitos

### O que você precisa ter:
- ✅ Sistema de chat já implementado (feito!)
- ✅ Conta no N8n (cloud ou self-hosted)
- ✅ Conhecimento básico de automação
- ✅ WhatsApp Business API (opcional)

---

## 🚀 Passo 1: Configurando N8n

### 1.1 Criando Conta N8n

1. **Acesse**: [n8n.cloud](https://n8n.cloud) ou instale localmente
2. **Crie conta gratuita** (50 execuções/mês)
3. **Faça login** no dashboard

### 1.2 Primeiro Workflow

1. **Clique em "New Workflow"**
2. **Nomeie**: "Chat Brandi Fratelli - Advocacia"
3. **Salve** o workflow

---

## 🎯 Passo 2: Criando Webhooks por Segmento

### 2.1 Webhook para Advocacia

1. **Adicione nó "Webhook"**:
   - Arraste da barra lateral
   - Clique no nó para configurar

2. **Configure o Webhook**:
   ```
   HTTP Method: POST
   Path: advocacia-chat
   Authentication: None (por enquanto)
   ```

3. **Copie a URL gerada**:
   ```
   https://seu-usuario.app.n8n.cloud/webhook/advocacia-chat
   ```

4. **Teste o webhook**:
   - Clique em "Listen for calls"
   - Use Postman ou curl para testar:
   
   ```bash
   curl -X POST https://seu-usuario.app.n8n.cloud/webhook/advocacia-chat \
   -H "Content-Type: application/json" \
   -d '{
     "message": "Teste de mensagem",
     "segment": "advocacia",
     "timestamp": "2024-01-20T10:30:00.000Z"
   }'
   ```

### 2.2 Repita para outros segmentos

Crie workflows separados para:
- **Licitações**: `/webhook/licitacoes-chat`
- **Brandi Labs**: `/webhook/brandi-labs-chat`
- **Sistemas**: `/webhook/sistemas-chat`
- **Geral**: `/webhook/geral-chat`

---

## 🧠 Passo 3: Lógica de Automação Básica

### 3.1 Estrutura do Workflow

```
Webhook → Processar Dados → Decidir Ação → Responder/Notificar
```

### 3.2 Nó de Processamento

1. **Adicione nó "Code"** após o webhook
2. **Configure o código**:

```javascript
// Processar dados do chat
const chatData = $input.first().json;

// Extrair informações
const message = chatData.message.toLowerCase();
const segment = chatData.segment;
const timestamp = new Date(chatData.timestamp);

// Classificar urgência
let priority = 'normal';
if (message.includes('urgente') || message.includes('emergência')) {
  priority = 'high';
}

// Detectar intenção
let intent = 'general';
if (segment === 'advocacia') {
  if (message.includes('aposentadoria')) intent = 'aposentadoria';
  if (message.includes('benefício')) intent = 'beneficio';
  if (message.includes('revisão')) intent = 'revisao';
}

// Retornar dados processados
return {
  originalMessage: chatData.message,
  segment: segment,
  priority: priority,
  intent: intent,
  timestamp: timestamp,
  needsHumanResponse: priority === 'high'
};
```

### 3.3 Nó de Decisão

1. **Adicione nó "IF"** após o código
2. **Configure condições**:
   ```
   Condition: {{ $json.needsHumanResponse }}
   ```

---

## 📱 Passo 4: Integração com WhatsApp

### 4.1 Configurando WhatsApp Business API

1. **Crie conta no Meta Business**
2. **Configure WhatsApp Business API**
3. **Obtenha token de acesso**

### 4.2 Nó WhatsApp no N8n

1. **Adicione nó "WhatsApp Business"**
2. **Configure credenciais**:
   ```
   Access Token: seu_token_aqui
   Phone Number ID: seu_numero_id
   ```

3. **Configure mensagem**:
   ```
   To: +5511999999999 (seu número)
   Message: 
   🚨 Nova mensagem - {{ $json.segment }}
   
   📝 Mensagem: {{ $json.originalMessage }}
   🎯 Intenção: {{ $json.intent }}
   ⚡ Prioridade: {{ $json.priority }}
   🕐 Horário: {{ $json.timestamp }}
   ```

---

## 📧 Passo 5: Notificações por Email

### 5.1 Configurando Gmail

1. **Adicione nó "Gmail"**
2. **Conecte sua conta Google**
3. **Configure email**:

```
To: contato@brandifratelli.com.br
Subject: 💬 Nova mensagem do chat - {{ $json.segment }}

Body:
Olá equipe!

Nova mensagem recebida no chat do site:

📍 Segmento: {{ $json.segment }}
📝 Mensagem: {{ $json.originalMessage }}
🎯 Intenção detectada: {{ $json.intent }}
⚡ Prioridade: {{ $json.priority }}
🕐 Recebida em: {{ $json.timestamp }}

---
Sistema automatizado Brandi Fratelli
```

---

## 🗄️ Passo 6: Salvando Conversas

### 6.1 Google Sheets (Simples)

1. **Crie planilha no Google Sheets**:
   - Colunas: Data, Segmento, Mensagem, Intenção, Prioridade

2. **Adicione nó "Google Sheets"**
3. **Configure para adicionar linha**:
   ```
   Spreadsheet: Chat Brandi Fratelli
   Sheet: Conversas
   Values: 
   - {{ $json.timestamp }}
   - {{ $json.segment }}
   - {{ $json.originalMessage }}
   - {{ $json.intent }}
   - {{ $json.priority }}
   ```

### 6.2 Banco de Dados (Avançado)

1. **Adicione nó "MySQL" ou "PostgreSQL"**
2. **Configure conexão**
3. **Query de inserção**:
   ```sql
   INSERT INTO chat_messages 
   (timestamp, segment, message, intent, priority) 
   VALUES 
   ('{{ $json.timestamp }}', '{{ $json.segment }}', '{{ $json.originalMessage }}', '{{ $json.intent }}', '{{ $json.priority }}')
   ```

---

## 🔄 Passo 7: Respostas Automáticas

### 7.1 Webhook de Resposta

1. **Crie novo nó "HTTP Request"**
2. **Configure para responder ao chat**:
   ```
   Method: POST
   URL: https://seu-site.com/api/chat/response
   Headers: 
     Content-Type: application/json
   Body:
   {
     "sessionId": "{{ $json.sessionId }}",
     "response": "Obrigado pela mensagem! Nossa equipe entrará em contato em breve.",
     "segment": "{{ $json.segment }}"
   }
   ```

### 7.2 Respostas Inteligentes

```javascript
// Nó Code para gerar respostas automáticas
const intent = $json.intent;
const segment = $json.segment;

let autoResponse = '';

if (segment === 'advocacia') {
  switch(intent) {
    case 'aposentadoria':
      autoResponse = 'Entendi que você tem dúvidas sobre aposentadoria. Nossa equipe especializada entrará em contato em até 2 horas úteis!';
      break;
    case 'beneficio':
      autoResponse = 'Sobre benefícios do INSS, vamos analisar seu caso. Aguarde nosso contato!';
      break;
    default:
      autoResponse = 'Recebemos sua mensagem sobre direito previdenciário. Em breve entraremos em contato!';
  }
}

return { autoResponse };
```

---

## ⚙️ Passo 8: Conectando com o Site

### 8.1 Atualizando Variáveis de Ambiente

No arquivo `.env.local` do seu projeto:

```env
# URLs dos webhooks criados no N8n
NEXT_PUBLIC_N8N_WEBHOOK_ADVOCACIA=https://seu-usuario.app.n8n.cloud/webhook/advocacia-chat
NEXT_PUBLIC_N8N_WEBHOOK_LICITACOES=https://seu-usuario.app.n8n.cloud/webhook/licitacoes-chat
NEXT_PUBLIC_N8N_WEBHOOK_BRANDI_LABS=https://seu-usuario.app.n8n.cloud/webhook/brandi-labs-chat
NEXT_PUBLIC_N8N_WEBHOOK_SISTEMAS=https://seu-usuario.app.n8n.cloud/webhook/sistemas-chat
NEXT_PUBLIC_N8N_WEBHOOK_GERAL=https://seu-usuario.app.n8n.cloud/webhook/geral-chat
```

### 8.2 Ativando Integração

1. **Reinicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

2. **Teste em cada página**:
   - Advocacia: `http://localhost:3000/advocacia`
   - Brandi Labs: `http://localhost:3000/brandi-labs`
   - Licitações: `http://localhost:3000/licitacoes`
   - Sistemas: `http://localhost:3000/sistemas`

---

## 🧪 Passo 9: Testando a Integração

### 9.1 Teste Manual

1. **Abra uma página do site**
2. **Clique no chat flutuante**
3. **Digite uma mensagem de teste**
4. **Verifique**:
   - ✅ Webhook recebeu dados no N8n
   - ✅ Email foi enviado
   - ✅ WhatsApp recebeu notificação
   - ✅ Dados salvos na planilha/banco

### 9.2 Teste por Segmento

**Advocacia**:
```
Mensagem: "Preciso de ajuda com minha aposentadoria"
Esperado: Intent = 'aposentadoria', Priority = 'normal'
```

**Brandi Labs**:
```
Mensagem: "Quero desenvolver um app urgente"
Esperado: Intent = 'app', Priority = 'high'
```

---

## 📊 Passo 10: Dashboard e Métricas

### 10.1 Google Data Studio

1. **Conecte com Google Sheets**
2. **Crie gráficos**:
   - Mensagens por segmento
   - Horários de pico
   - Intenções mais comuns
   - Taxa de resposta

### 10.2 Relatórios Automáticos

**Workflow semanal no N8n**:
```
Cron Trigger (toda segunda 9h) → 
Google Sheets (buscar dados) → 
Code (processar métricas) → 
Gmail (enviar relatório)
```

---

## 🔒 Passo 11: Segurança

### 11.1 Autenticação de Webhooks

1. **Gere token secreto**:
   ```bash
   openssl rand -hex 32
   ```

2. **Configure no N8n**:
   ```
   Authentication: Header Auth
   Name: X-Webhook-Secret
   Value: seu_token_secreto
   ```

3. **Atualize no site**:
   ```env
   WEBHOOK_SECRET=seu_token_secreto
   ```

### 11.2 Rate Limiting

```javascript
// Nó Code para controle de rate
const sessionId = $json.sessionId;
const now = Date.now();

// Verificar se não está spammando
const lastMessage = global.get(`lastMessage_${sessionId}`) || 0;
if (now - lastMessage < 5000) { // 5 segundos
  return { error: 'Rate limit exceeded' };
}

global.set(`lastMessage_${sessionId}`, now);
return $input.all();
```

---

## 🚀 Passo 12: Deploy e Produção

### 12.1 Ativando Workflows

1. **No N8n, ative todos os workflows**
2. **Teste em produção**
3. **Configure alertas de erro**

### 12.2 Monitoramento

**Webhook de saúde**:
```
Cron (a cada 5 min) → 
HTTP Request (testar webhook) → 
IF (erro) → 
WhatsApp/Email (alerta)
```

---

## 🎯 Próximos Passos Avançados

### Fase 2: IA e Automação
- **OpenAI Integration**: Respostas mais inteligentes
- **Sentiment Analysis**: Detectar urgência emocional
- **Auto-scheduling**: Agendar reuniões automaticamente

### Fase 3: CRM Integration
- **HubSpot/Pipedrive**: Criar leads automaticamente
- **Calendar Integration**: Sincronizar agendamentos
- **Follow-up automático**: Sequências de email

---

## 🆘 Troubleshooting

### Problemas Comuns

**Webhook não recebe dados**:
- ✅ Verificar URL no .env.local
- ✅ Testar webhook manualmente
- ✅ Verificar logs do N8n

**Emails não chegam**:
- ✅ Verificar credenciais Gmail
- ✅ Conferir caixa de spam
- ✅ Testar nó isoladamente

**WhatsApp não funciona**:
- ✅ Verificar token de acesso
- ✅ Confirmar número verificado
- ✅ Testar API diretamente

---

## 📞 Suporte

**Dúvidas sobre implementação?**
- 📧 Email: dev@brandifratelli.com.br
- 💬 Chat: Use nosso próprio sistema! 😄
- 📚 Docs: [Documentação N8n](https://docs.n8n.io)

---

**🎉 Parabéns! Seu sistema de chat está totalmente integrado com N8n!**

*Agora você tem um sistema profissional de atendimento automatizado que qualifica leads, notifica a equipe e mantém histórico completo de todas as conversas.*