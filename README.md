# Site Brandi Fratelli

Site institucional da Brandi Fratelli com sistema de chat inteligente conversacional para captura de leads qualificados.

## 🚀 Funcionalidades Principais

- **💬 Chat Conversacional**: Fluxo natural de conversa que simula interação humana
- **📋 Captura de Leads**: Coleta gradual de dados (nome, telefone, email) sem formulários intrusivos
- **🎯 Segmentação Inteligente**: Respostas específicas para Advocacia, Licitações, Brandi Labs e Sistemas
- **📧 Notificações Automáticas**: Emails profissionais com dados completos para follow-up
- **📱 Interface Responsiva**: Experiência otimizada para todos os dispositivos
- **🔧 Sistema Próprio**: Sem dependências externas (Zoho Flow, Zapier, N8n)

## 🛠️ Tecnologias

- **Next.js 14**: Framework React para produção
- **TypeScript**: Tipagem estática e segurança
- **Tailwind CSS**: Framework de CSS utilitário
- **Framer Motion**: Animações suaves e transições
- **Lucide React**: Ícones modernos e responsivos
- **SendGrid**: Serviço de email profissional (100 emails/dia gratuitos)
- **Nodemailer**: Biblioteca para envio de emails SMTP

## 📁 Estrutura do Projeto

```
├── app/                    # Páginas Next.js App Router
│   ├── advocacia/         # Página de advocacia
│   ├── licitacoes/        # Página de licitações
│   ├── brandi-labs/       # Página Brandi Labs
│   ├── sistemas/          # Página de sistemas
│   └── api/               # API routes
│       └── send-notification/ # API de envio de emails
├── components/            # Componentes React
│   ├── ChatWidget.tsx     # Widget de chat conversacional
│   ├── Header.tsx         # Cabeçalho do site
│   ├── Footer.tsx         # Rodapé do site
│   └── ...
├── lib/                   # Utilitários e lógica
│   ├── chatConfig.ts      # Configurações do chat por segmento
│   └── chatResponses.ts   # Lógica de respostas inteligentes
├── scripts/               # Scripts utilitários
│   └── test-smtp.js       # Teste de configuração SMTP
└── docs/                  # Documentação completa
    └── integrations/      # Documentação do sistema de chat
```

## ⚙️ Configuração

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar variáveis de ambiente
Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SITE_NAME="Brandi Fratelli"

# Configurações de Email SMTP - SendGrid
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.sua-api-key-sendgrid
SMTP_FROM="Brandi Fratelli <seu-email@brandifratelli.com.br>"

# Emails por Segmento
EMAIL_ADVOCACIA=andrei.brandi@brandifratelli.com.br
EMAIL_LICITACOES=andrei.brandi@brandifratelli.com.br
EMAIL_BRANDI_LABS=brandi.labs@brandifratelli.com.br
EMAIL_SISTEMAS=adrian.andreas@brandifratelli.com.br
EMAIL_HOME=contato@brandifratelli.com.br,andrei.brandi@brandifratelli.com.br,adrian.andreas@brandifratelli.com.br
```

### 3. Testar configuração SMTP
```bash
node scripts/test-smtp.js
```

### 4. Executar em desenvolvimento
```bash
npm run dev
```

### 5. Acessar o site
```
http://localhost:3000
```

## 💬 Como Funciona o Chat Conversacional

### Fluxo Completo do Usuário
1. **Usuário** acessa uma página específica (ex: `/brandi-labs`)
2. **Sistema** detecta o contexto e configura respostas apropriadas
3. **Usuário** clica no ícone de chat e envia mensagem inicial (ex: "Oi")
4. **Bot** responde com opções específicas do segmento
5. **Usuário** clica em uma opção de interesse
6. **Bot** inicia coleta de dados:
   - "Qual seu nome para contato?"
   - "Agora me passe seu telefone para contato:"
   - "Por último, me passe seu email:"
7. **Bot** confirma recebimento e promete contato
8. **Sistema** envia email automático com todos os dados para a equipe

### Segmentos Configurados
- **🏛️ Advocacia** (`/advocacia`): Direito previdenciário e benefícios
- **📋 Licitações** (`/licitacoes`): Pregões e concorrências públicas
- **📱 Brandi Labs** (`/brandi-labs`): Desenvolvimento de aplicativos Flutter
- **💻 Sistemas** (`/sistemas`): Desenvolvimento web e sistemas
- **🏠 Home** (`/`): Direcionamento geral para todas as áreas

### Dados Capturados
- **👤 Nome**: Para personalização do atendimento
- **📞 Telefone**: Para contato direto
- **📧 Email**: Para follow-up e propostas
- **🎯 Interesse**: Baseado na opção selecionada
- **📍 Contexto**: Página visitada e timestamp

## 🚀 Deploy

### Vercel (Recomendado)
1. **Conecte** o repositório ao Vercel
2. **Configure** as variáveis de ambiente no painel
3. **Deploy** automático a cada push na main
4. **Teste** o chat em produção

### Outras Plataformas Compatíveis
- **Netlify**: Com Netlify Functions
- **Railway**: Deploy direto do GitHub
- **DigitalOcean**: App Platform
- **AWS**: Amplify ou EC2

### Checklist Pré-Deploy
- [ ] Variáveis de ambiente configuradas
- [ ] SendGrid API key válida
- [ ] Emails de destinatários corretos
- [ ] Teste SMTP funcionando
- [ ] Chat testado em todas as páginas

## 🎨 Personalização

### Cores da Marca
```css
--brandi-blue: #1e40af    /* Azul principal */
--brandi-gold: #f59e0b    /* Dourado/amarelo */
--brandi-dark: #1f2937    /* Cinza escuro */
--brandi-light: #f8fafc   /* Cinza claro */
```

### Fontes
- **Inter** - Fonte principal (Google Fonts)
- Pesos disponíveis: 300, 400, 500, 600, 700

## 📱 Páginas Disponíveis

- **Homepage** (`/`) - Página principal com todas as seções
- **Licitações** (`/licitacoes`) - Especialistas em licitações públicas
- **Advocacia** (`/advocacia`) - Direito empresarial
- **Sistemas** (`/sistemas`) - Desenvolvimento de software
- **Brandi Labs** (`/brandi-labs`) - Apps Flutter
- **Blog** (`/blog`) - Blog da empresa
- **Contato** (`/contato`) - Formulário de contato

## 🔧 Configurações

### Tailwind CSS
- Classes customizadas para cores da marca
- Configuração de fontes
- Sistema de grid responsivo

### Next.js
- App Router habilitado
- TypeScript configurado
- Build otimizado
- Meta tags para SEO

## 📊 Performance

- **First Load JS**: ~132kb
- **Lighthouse Score**: 90+
- **Core Web Vitals**: Otimizados
- **SEO**: Meta tags e estrutura semântica

## 🔒 Segurança

- Formulários com validação
- Headers de segurança
- HTTPS obrigatório
- Proteção contra ataques comuns

## 📞 Suporte

Para dúvidas sobre implementação:
- **Email**: contato@brandifratelli.com.br
- **Telefone**: (11) 9999-9999
- **Documentação**: `/docs/`

## 📚 Documentação

Para documentação completa, consulte:
- **[Sistema de Chat Conversacional](./docs/integrations/intelligent-chat-system.md)**: Guia completo do chat
- **[Arquitetura do Projeto](./docs/architecture/overview.md)**: Estrutura e organização
- **[Padrões de Desenvolvimento](./docs/development/coding-standards.md)**: Convenções de código
- **[Guia de Manutenção](./docs/maintenance/updates.md)**: Atualizações e melhorias

## 🎯 Resultados Esperados

### Métricas de Conversão
- **Taxa de conversão**: 15-25% (vs 2-5% formulários tradicionais)
- **Abandono reduzido**: 60% menos abandono que formulários
- **Dados completos**: 95% dos leads com telefone e email
- **Qualificação**: 100% dos leads com interesse específico

### Benefícios do Negócio
- **Leads qualificados** 24/7 automaticamente
- **Atendimento humanizado** sem custo de pessoal
- **Segmentação precisa** por área de atuação
- **Follow-up eficiente** com dados completos
- **ROI positivo** desde o primeiro mês

## 🤝 Contribuição

Para contribuir com o projeto:
1. **Fork** o repositório
2. **Crie** uma branch para sua feature
3. **Commit** suas mudanças
4. **Push** para a branch
5. **Abra** um Pull Request

## 📄 Licença

Este projeto é propriedade da **Brandi Fratelli** e está sob licença proprietária.

---

**Desenvolvido com ❤️ pela equipe Brandi Fratelli**  
**Tecnologia: Next.js + TypeScript + Tailwind CSS**
