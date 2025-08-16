# 🏗️ Visão Geral da Arquitetura

## Arquitetura do Sistema

O site da Brandi Fratelli segue uma arquitetura moderna baseada em **Next.js 14** com **App Router**, priorizando performance, SEO e manutenibilidade.

## Princípios Arquiteturais

### 1. **Separação de Responsabilidades**
- **Componentes**: Lógica de UI reutilizável
- **Páginas**: Estrutura de rotas e layout
- **Estilos**: Design system centralizado
- **Configurações**: Arquivos de configuração isolados

### 2. **Componentização**
```
Layout Principal (layout.tsx)
├── Header (navegação global)
├── Main Content (páginas dinâmicas)
└── Footer (informações globais)
```

### 3. **Estrutura de Páginas**
```
Homepage (/)
├── Hero (seção principal)
├── Services (serviços oferecidos)
├── About (sobre a empresa)
└── Contact (formulário de contato)

Páginas Específicas
├── /licitacoes (especialidade principal)
├── /advocacia (serviços jurídicos)
├── /sistemas (desenvolvimento)
├── /brandi-labs (apps Flutter)
├── /blog (conteúdo)
└── /contato (formulário dedicado)
```

## Fluxo de Dados

### 1. **Renderização**
- **SSR**: Páginas estáticas para SEO
- **CSR**: Interações dinâmicas (formulários, animações)
- **Hydration**: Componentes interativos no cliente

### 2. **Estado**
- **Local State**: useState para componentes isolados
- **Props**: Comunicação entre componentes
- **Context**: Dados globais (quando necessário)

### 3. **Navegação**
- **Next.js Router**: Navegação otimizada
- **Link Components**: Prefetch automático
- **Dynamic Routes**: Rotas parametrizadas (blog)

## Padrões de Design

### 1. **Atomic Design**
```
Atoms (elementos básicos)
├── Buttons
├── Icons
├── Typography
└── Colors

Molecules (combinações simples)
├── Navigation Items
├── Service Cards
└── Form Fields

Organisms (seções completas)
├── Header
├── Hero
├── Services
├── About
├── Contact
└── Footer
```

### 2. **Responsive Design**
- **Mobile First**: Design prioritário para mobile
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Flexbox/Grid**: Layout flexível
- **Tailwind Classes**: Utilitários responsivos

### 3. **Performance**
- **Code Splitting**: Carregamento sob demanda
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts otimizadas
- **Bundle Analysis**: Monitoramento de tamanho

## Tecnologias Core

### **Frontend**
- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Framework CSS utilitário
- **Framer Motion**: Animações suaves

### **Desenvolvimento**
- **ESLint**: Linting de código
- **Prettier**: Formatação automática
- **Git**: Controle de versão
- **npm**: Gerenciamento de dependências

### **Deploy**
- **Vercel**: Plataforma recomendada
- **GitHub**: Repositório e CI/CD
- **Domain**: Configuração de domínio

## Estrutura de Arquivos

```
site-brandi-fratelli/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Homepage
│   └── [pages]/           # Páginas específicas
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Navegação principal
│   ├── Hero.tsx           # Seção hero
│   ├── Services.tsx       # Cards de serviços
│   ├── About.tsx          # Sobre a empresa
│   ├── Contact.tsx        # Formulário de contato
│   └── Footer.tsx         # Rodapé
├── docs/                  # Documentação técnica
├── public/                # Assets estáticos
└── [config files]        # Configurações do projeto
```

## Decisões Arquiteturais

### **Por que Next.js 14?**
- **App Router**: Nova arquitetura mais flexível
- **Server Components**: Performance otimizada
- **Built-in SEO**: Meta tags e otimizações automáticas
- **TypeScript**: Suporte nativo completo

### **Por que Tailwind CSS?**
- **Utility-First**: Classes utilitárias rápidas
- **Responsive**: Sistema de breakpoints integrado
- **Customização**: Fácil personalização da marca
- **Performance**: CSS otimizado automaticamente

### **Por que Framer Motion?**
- **Animações Suaves**: Transições profissionais
- **Performance**: Animações otimizadas
- **API Simples**: Fácil implementação
- **Responsive**: Animações adaptáveis

## Escalabilidade

### **Horizontal**
- Novos componentes seguem padrões estabelecidos
- Páginas adicionais usam estrutura consistente
- Estilos mantêm design system

### **Vertical**
- Otimizações de performance contínuas
- Monitoramento de Core Web Vitals
- Análise de bundle size

### **Manutenção**
- Documentação atualizada
- Testes automatizados (futuro)
- Code review process

---

**Próximos passos**: Consulte `folder-structure.md` para detalhes da organização de arquivos.
