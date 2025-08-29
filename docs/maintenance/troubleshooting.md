# 🔧 Troubleshooting - Brandi Fratelli

## 📧 **Sistema de Email SMTP**

### ❌ **Problema: Missing credentials for "PLAIN"**

#### **🔍 Sintomas:**
- Erro: `Missing credentials for "PLAIN"`
- Log: `Pass configurada: false`
- Code: `EAUTH`
- Command: `API`

#### **🎯 Causa Raiz:**
- Variável `SMTP_PASS` não configurada no Vercel
- Environment Variables perdidas após deploy
- Configuração incompleta no ambiente de produção

#### **✅ Solução:**
1. **Acessar Vercel Dashboard**
2. **Projeto**: sitebrandifratelli
3. **Settings** → **Environment Variables**
4. **Adicionar variáveis necessárias**

#### **📋 Variáveis Obrigatórias:**
```env
# SendGrid Configuration
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.sua-api-key-sendgrid-aqui
SMTP_FROM=Brandi Fratelli <noreply@brandifratelli.com.br>
```

#### **🔧 Configuração no Vercel:**
| Variable | Value | Environment |
|----------|-------|-------------|
| `SMTP_HOST` | `smtp.sendgrid.net` | Production, Preview, Development |
| `SMTP_PORT` | `587` | Production, Preview, Development |
| `SMTP_USER` | `apikey` | Production, Preview, Development |
| `SMTP_PASS` | `SG.sua-api-key-sendgrid-aqui` | Production, Preview, Development |
| `SMTP_FROM` | `Brandi Fratelli <noreply@brandifratelli.com.br>` | Production, Preview, Development |

#### **✅ Verificação de Sucesso:**
```
=== CONFIGURAÇÃO SMTP ===
Host: smtp.sendgrid.net
Port: 587
User: apikey
Pass configurada: true  ← DEVE SER TRUE
=========================

✅ Email enviado para: destinatario@email.com
✅ Todos os emails enviados com sucesso!
```

---

## 📊 **Google Analytics 4**

### ✅ **Status: Funcionando**

#### **🔧 Configuração Atual:**
- **ID**: G-2YM7M0QGXL
- **Status**: ✅ Ativo e coletando dados
- **Implementação**: layout.tsx
- **Eventos**: Chat rastreados

#### **📈 Eventos Configurados:**
- `chat_opened`: Abertura do chat
- `message_sent`: Mensagens enviadas
- `option_selected`: Seleção de opções
- `contact_provided`: Dados de contato
- `conversion_completed`: Conversões finalizadas

#### **📊 Dashboard Analytics:**
- **URL**: `/analytics`
- **Status**: ✅ Funcionando
- **Gráficos**: Recharts implementado
- **Métricas**: Funil de conversão ativo

#### **🔍 Verificação:**
1. **Google Analytics**: analytics.google.com
2. **Propriedade**: G-2YM7M0QGXL
3. **Tempo Real**: Usuários ativos visíveis
4. **Eventos**: Chat interactions sendo registrados

---

## 🚀 **Checklist de Deploy**

### **📋 Antes de Cada Deploy:**
- [ ] Verificar Environment Variables no Vercel
- [ ] Confirmar SMTP_PASS configurada
- [ ] Testar sistema de email localmente
- [ ] Verificar Google Analytics funcionando
- [ ] Validar build sem erros TypeScript

### **📊 Após Deploy:**
- [ ] Testar chat em produção
- [ ] Verificar emails chegando
- [ ] Confirmar Google Analytics coletando
- [ ] Monitorar logs Vercel por 10 minutos
- [ ] Testar fluxo completo de conversão

---

## 🔍 **Logs de Debug**

### **📧 SMTP Funcionando:**
```
=== NOTIFICAÇÃO DE CHAT ===
Segmento: brandi-labs
Destinatários: ['brandi.labs@brandifratelli.com.br']
Assunto: 📱 LEAD BRANDI LABS - Desenvolvimento Mobile
==========================

=== CONFIGURAÇÃO SMTP ===
Host: smtp.sendgrid.net
Port: 587
User: apikey
Pass configurada: true
=========================

=== ENVIANDO EMAILS ===
From: Brandi Fratelli <noreply@brandifratelli.com.br>
To: ['brandi.labs@brandifratelli.com.br']
Subject: 📱 LEAD BRANDI LABS - Desenvolvimento Mobile
=======================

Enviando para: brandi.labs@brandifratelli.com.br
✅ Email enviado para brandi.labs@brandifratelli.com.br: <message-id>
✅ Todos os emails enviados com sucesso!
```

### **❌ SMTP com Erro:**
```
=== CONFIGURAÇÃO SMTP ===
Host: smtp.sendgrid.net
Port: 587
User: apikey
Pass configurada: false  ← PROBLEMA AQUI
=========================

❌ Erro: Missing credentials for "PLAIN"
code: 'EAUTH'
command: 'API'
```

---

## 📞 **Contatos de Suporte**

### **🔧 SendGrid:**
- **Dashboard**: app.sendgrid.com
- **API Keys**: Settings → API Keys
- **Status**: status.sendgrid.com
- **Docs**: docs.sendgrid.com

### **📊 Google Analytics:**
- **Dashboard**: analytics.google.com
- **Property**: G-2YM7M0QGXL
- **Help**: support.google.com/analytics

### **🚀 Vercel:**
- **Dashboard**: vercel.com/dashboard
- **Environment Variables**: Settings → Environment Variables
- **Functions Logs**: Functions → View Function Logs
- **Support**: vercel.com/support

---

## 📈 **Histórico de Problemas**

### **2025-08-29: SMTP Credentials Missing**
- **Problema**: `Pass configurada: false`
- **Causa**: Variável SMTP_PASS não configurada no Vercel
- **Solução**: Adicionada variável no Environment Variables
- **Tempo**: 5 minutos para resolver
- **Status**: ✅ Resolvido

### **2025-08-29: Google Analytics Implementado**
- **Feature**: Sistema completo de analytics
- **ID**: G-2YM7M0QGXL configurado
- **Dashboard**: /analytics criado
- **Eventos**: Chat tracking implementado
- **Status**: ✅ Funcionando

---

## 🎯 **Próximas Melhorias**

### **📧 Sistema de Email:**
- [ ] Implementar SPF no DNS
- [ ] Configurar DKIM
- [ ] Monitoramento automático
- [ ] Alertas de falha

### **📊 Analytics:**
- [ ] Conectar API do Google Analytics
- [ ] Relatórios automáticos
- [ ] Dashboards personalizados
- [ ] A/B testing

### **🔧 Infraestrutura:**
- [ ] Backup automático de configurações
- [ ] Testes automatizados
- [ ] Monitoramento de uptime
- [ ] Documentação de APIs

---

**📝 Documento atualizado em: 2025-08-29**  
**👤 Responsável: Sistema Brandi Fratelli**  
**🔄 Próxima revisão: Mensal**