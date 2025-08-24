# 🤖 Sistema de Chat Inteligente Conversacional

## 🎯 **Visão Geral**

Sistema de chat inteligente desenvolvido para capturar leads qualificados através de conversas naturais e contextualizadas por segmento de negócio. O sistema utiliza um fluxo conversacional sequencial que simula uma conversa real, coletando dados de contato de forma gradual e não intrusiva. Opera de forma completamente independente, sem necessidade de ferramentas externas.

---

## ✅ **Funcionalidades Implementadas**

### **💬 Fluxo Conversacional Natural**
- **Conversa sequencial** que simula interação humana
- **Coleta gradual** de dados de contato
- **Experiência não intrusiva** sem formulários complexos
- **Estados de conversa** controlados automaticamente

### **🧠 Chat Inteligente**
- **Respostas automáticas** baseadas em palavras-chave
- **Detecção de intenção** do usuário
- **Botões de ação** interativos
- **Personalização** por segmento
- **Contexto** específico por página

### **📋 Fluxo de Captura de Dados**
- **Etapa 1**: Mensagem inicial do usuário
- **Etapa 2**: Apresentação de opções específicas
- **Etapa 3**: Coleta do nome para contato
- **Etapa 4**: Coleta do telefone
- **Etapa 5**: Coleta do email
- **Etapa 6**: Confirmação e envio automático

### **📧 Sistema de Email Integrado**
- **Envio após coleta completa** de dados de contato
- **Templates personalizados** por segmento
- **Múltiplos destinatários** por área
- **Dados completos** do lead qualificado
- **Informações de contato** para follow-up direto

### **🎯 Segmentação Inteligente**
- **Advocacia**: andrei.brandi@brandifratelli.com.br
- **Licitações**: andrei.brandi@brandifratelli.com.br
- **Brandi Labs**: brandi.labs@brandifratelli.com.br
- **Sistemas**: adrian.andreas@brandifratelli.com.br
- **Home**: contato@brandifratelli.com.br + andrei.brandi + adrian.andreas

---

## 🔧 **Arquitetura do Sistema**

### **📁 Estrutura de Arquivos**

```
/app
  /api
    /send-notification
      route.ts              # API para envio de emails
/components
  ChatWidget.tsx            # Widget de chat inteligente
/lib
  chatConfig.ts            # Configurações básicas
  chatResponses.ts         # Sistema de respostas inteligentes
```

### **🔄 Fluxo de Funcionamento**

1. **Usuário** envia mensagem
2. **Sistema** detecta intenção e segmento
3. **Resposta automática** é gerada
4. **Email** é enviado para equipe específica
5. **Botões de ação** são exibidos
6. **Follow-up** automático baseado na ação

---

## 🎯 **Respostas por Segmento**

### **⚖️ Advocacia**

#### **Palavras-chave:**
- INSS, previdência, aposentadoria, benefício
- Auxílio, pensão, revisão, advogado
- Jurídico, direito, trabalhista, processo

#### **Resposta Automática:**
```
Olá! Posso ajudar com questões previdenciárias e trabalhistas. 👨‍⚖️

Você gostaria de:
📋 Análise gratuita do seu caso
📞 Agendar consulta
📚 Material informativo
💬 Falar com advogado
```

### **📋 Licitações**

#### **Palavras-chave:**
- Licitação, pregão, concorrência, edital
- Governo, público, municipal, estadual
- Federal, contrato, fornecedor, habilitação

#### **Resposta Automática:**
```
Perfeito! Ajudamos empresas a vencer licitações. 🏆

Como posso ajudar:
🎯 Análise gratuita de edital
📊 Cases de sucesso
💰 Orçamento personalizado
👨‍💼 Falar com especialista
```

### **📱 Brandi Labs**

#### **Palavras-chave:**
- App, aplicativo, mobile, Flutter
- Android, iOS, desenvolvimento, sistema
- Software, tecnologia, digital, inovação

#### **Resposta Automática:**
```
Que legal! Desenvolvemos apps incríveis com Flutter. 📱

O que você precisa:
📋 Briefing do projeto
📱 Ver nossos apps
💰 Orçamento do app
👨‍💻 Falar com desenvolvedor
```

### **💻 Sistemas**

#### **Palavras-chave:**
- Site, website, sistema, web
- Desenvolvimento, programação, e-commerce
- Loja virtual, plataforma, dashboard

#### **Resposta Automática:**
```
Ótimo! Criamos sistemas web personalizados. 💻

Como posso ajudar:
📋 Análise de requisitos
🌐 Ver nossos sites
📄 Proposta técnica
👨‍💻 Falar com programador
```

---

## 📧 **Templates de Email**

### **⚖️ Advocacia**
```html
<h2>⚖️ NOVO LEAD ADVOCACIA - Direito Previdenciário</h2>
<p><strong>🎯 LEAD QUALIFICADO!</strong></p>

<h3>📋 Detalhes do Lead:</h3>
<ul>
  <li><strong>📝 Mensagem:</strong> {message}</li>
  <li><strong>📍 Interesse:</strong> Direito Previdenciário</li>
  <li><strong>🕐 Horário:</strong> {timestamp}</li>
  <li><strong>📄 Página:</strong> {page}</li>
</ul>

<h3>🔥 AÇÃO NECESSÁRIA:</h3>
<ul>
  <li>✅ Responder em até 2 horas</li>
  <li>📞 Agendar consulta gratuita</li>
  <li>📚 Enviar material informativo</li>
</ul>
```

### **📋 Licitações**
```html
<h2>📋 NOVO LEAD LICITAÇÕES - Pregões e Concorrências</h2>
<p><strong>💼 CLIENTE POTENCIAL!</strong></p>

<h3>🎯 PRÓXIMOS PASSOS:</h3>
<ul>
  <li>🔍 Análise gratuita de edital</li>
  <li>📊 Apresentar cases de sucesso</li>
  <li>💰 Proposta comercial</li>
</ul>
```

---

## ⚙️ **Configuração**

### **📧 Configuração de Email**

No arquivo `.env.local`:

```env
# Configurações SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-app
SMTP_FROM=noreply@brandifratelli.com.br

# Emails por Segmento
EMAIL_ADVOCACIA=andrei.brandi@brandifratelli.com.br
EMAIL_LICITACOES=andrei.brandi@brandifratelli.com.br
EMAIL_BRANDI_LABS=brandi.labs@brandifratelli.com.br
EMAIL_SISTEMAS=adrian.andreas@brandifratelli.com.br
EMAIL_HOME_1=contato@brandifratelli.com.br
EMAIL_HOME_2=andrei.brandi@brandifratelli.com.br
EMAIL_HOME_3=adrian.andreas@brandifratelli.com.br
```

### **🔧 Configuração do Gmail**

1. **Ativar** autenticação de 2 fatores
2. **Gerar** senha de app específica
3. **Usar** a senha de app no `SMTP_PASS`

---

## 🧪 **Como Testar**

### **1. Teste por Segmento**

#### **Advocacia** (`/advocacia`):
- Digite: "Preciso de ajuda com INSS"
- **Esperado**: Resposta sobre previdência + botões de ação
- **Email**: Enviado para andrei.brandi@brandifratelli.com.br

#### **Licitações** (`/licitacoes`):
- Digite: "Quero participar de pregões"
- **Esperado**: Resposta sobre licitações + botões
- **Email**: Enviado para andrei.brandi@brandifratelli.com.br

#### **Brandi Labs** (`/brandi-labs`):
- Digite: "Preciso de um app"
- **Esperado**: Resposta sobre desenvolvimento mobile
- **Email**: Enviado para brandi.labs@brandifratelli.com.br

#### **Sistemas** (`/sistemas`):
- Digite: "Quero um site"
- **Esperado**: Resposta sobre desenvolvimento web
- **Email**: Enviado para adrian.andreas@brandifratelli.com.br

### **2. Teste de Ações**

1. **Envie** uma mensagem
2. **Clique** em um botão de ação
3. **Verifique** a resposta específica
4. **Confirme** o email de notificação

### **3. Verificação de Emails**

- **Verifique** a caixa de entrada dos destinatários
- **Confirme** o template correto
- **Valide** os dados do lead

---

## 🚀 **Vantagens do Sistema**

### **✅ Para o Usuário:**
- **Conversa natural** sem formulários intrusivos
- **Resposta imediata** e contextualizada
- **Botões interativos** para ações rápidas
- **Experiência fluida** e natural
- **Direcionamento inteligente**
- **Coleta gradual** de informações

### **✅ Para a Equipe:**
- **Leads 100% qualificados** com dados completos
- **Contato direto** via email e telefone
- **Notificações automáticas** por email
- **Dados completos** do contato
- **Templates profissionais** com informações de contato
- **Follow-up eficiente** com dados reais

### **✅ Para o Negócio:**
- **Taxa de conversão aumentada** com fluxo natural
- **Abandono reduzido** sem formulários complexos
- **Sem dependências externas**
- **Controle total** do sistema
- **Customização completa**
- **Custo zero** de ferramentas
- **Leads de alta qualidade** com dados verificados

---

## 🔧 **Manutenção**

### **📝 Adicionar Novas Respostas:**

Edite `/lib/chatResponses.ts`:

```typescript
// Adicionar nova palavra-chave
KEYWORDS.advocacia.push('nova-palavra')

// Adicionar nova resposta de ação
ACTION_RESPONSES.nova_acao = "Nova resposta..."
```

### **📧 Alterar Destinatários:**

Edite `/app/api/send-notification/route.ts`:

```typescript
EMAIL_CONFIG.advocacia.to = ['novo-email@brandifratelli.com.br']
```

### **🎨 Personalizar Templates:**

Edite os templates HTML em `EMAIL_TEMPLATES`

---

## 📊 **Métricas Disponíveis**

### **📈 Dados Coletados:**
- **Mensagem** do usuário
- **Segmento** identificado
- **Página** de origem
- **Timestamp** da conversa
- **User Agent** do navegador
- **Ações** selecionadas

### **📋 Relatórios Possíveis:**
- **Leads por segmento**
- **Palavras-chave mais usadas**
- **Ações mais clicadas**
- **Horários de maior atividade**

---

**🎉 Sistema completamente integrado e funcionando! Chat inteligente + Email automático + Zero dependências externas!**