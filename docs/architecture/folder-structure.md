# 📁 Estrutura de Pastas Detalhada

## Visão Geral

Esta documentação detalha a organização completa do projeto, explicando o propósito de cada pasta e arquivo para facilitar navegação e manutenção.

## Estrutura Completa

```
site-brandi-fratelli/
├── .env.local                  # Variáveis de ambiente locais
├── .gitignore                  # Arquivos ignorados pelo Git
├── next-env.d.ts              # Tipos do Next.js
├── next.config.js             # Configuração do Next.js
├── package.json               # Dependências e scripts
├── package-lock.json          # Lock das dependências
├── postcss.config.js          # Configuração do PostCSS
├── README.md                  # Documentação principal
├── tailwind.config.js         # Configuração do Tailwind CSS
├── tsconfig.json              # Configuração do TypeScript
├── .git/                      # Controle de versão Git
├── .vscode/                   # Configurações do VS Code
├── node_modules/              # Dependências instaladas
├── app/                       # App Router (Next.js 14)
│   ├── globals.css           # Estilos globais
│   ├── layout.tsx            # Layout raiz da aplicação
│   ├── page.tsx              # Homepage principal
│   ├── advocacia/            # Página de advocacia
│   │   └── page.tsx
│   ├── blog/                 # Sistema de blog
│   │   ├── page.tsx          # Lista de posts
│   │   └── [id]/             # Post individual
│   │       └── page.tsx
│   ├── brandi-labs/          # Página Brandi Labs
│   │   └── page.tsx
│   ├── contato/              # Página de contato
│   │   └── page.tsx
│   ├── licitacoes/           # Página de licitações
│   │   └── page.tsx
│   └── sistemas/             # Página de sistemas
│       └── page.tsx
├── components/               # Componentes reutilizáveis
│   ├── About.tsx            # Seção sobre a empresa
│   ├── Contact.tsx          # Formulário de contato
│   ├── Footer.tsx           # Rodapé global
│   ├── Header.tsx           # Navegação principal
│   ├── Hero.tsx             # Seção hero principal
│   └── Services.tsx         # Cards de serviços
├── docs/                    # Documentação técnica
│   ├── README.md           # Índice da documentação
│   ├── architecture/       # Documentação da arquitetura
│   ├── components/         # Documentação dos componentes
│   ├── pages/             # Documentação das páginas
│   ├── styles/            # Documentação de estilos
│   ├── development/       # Guias de desenvolvimento
│   └── maintenance/       # Guias de manutenção
└── public/                # Assets estáticos (futuro)
```

## Detalhamento por Pasta

### 📱 `/app` - App Router (Next.js 14)

**Propósito**: Contém todas as páginas e layouts usando o novo App Router do Next.js 14.

#### Arquivos Principais:
- **`layout.tsx`**: Layout raiz que envolve todas as páginas
- **`page.tsx`**: Homepage principal com Hero, Services, About e Contact
- **`globals.css`**: Estilos globais e configurações do Tailwind

#### Subpastas:
- **`/advocacia`**: Página dedicada aos serviços jurídicos
- **`/blog`**: Sistema de blog com lista e posts individuais
- **`/brandi-labs`**: Página dos aplicativos Flutter
- **`/contato`**: Formulário de contato dedicado
- **`/licitacoes`**: Página principal sobre licitações
- **`/sistemas`**: Página sobre desenvolvimento de sistemas

### 🧩 `/components` - Componentes Reutilizáveis

**Propósito**: Componentes React modulares e reutilizáveis.

#### Componentes Atuais:
- **`Header.tsx`**: Navegação principal com menu responsivo
- **`Hero.tsx`**: Seção principal da homepage
- **`Services.tsx`**: Cards dos serviços oferecidos
- **`About.tsx`**: Seção sobre a empresa
- **`Contact.tsx`**: Formulário de contato
- **`Footer.tsx`**: Rodapé com informações da empresa

### 📚 `/docs` - Documentação Técnica

**Propósito**: Documentação completa para manutenção e desenvolvimento.

#### Estrutura:
- **`/architecture`**: Arquitetura e decisões técnicas
- **`/components`**: Documentação de cada componente
- **`/pages`**: Documentação de cada página
- **`/styles`**: Guia de estilos e design system
- **`/development`**: Guias para desenvolvedores
- **`/maintenance`**: Procedimentos de manutenção

### 🎨 `/public` - Assets Estáticos

**Propósito**: Imagens, ícones, fontes e outros arquivos estáticos.

**Status**: Pasta será criada conforme necessidade de assets.

## Arquivos de Configuração

### 📦 `package.json`
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build", 
    "start": "next start",
    "lint": "next lint"
  }
}
```

### ⚙️ `next.config.js`
- Configurações específicas do Next.js
- Otimizações de build
- Configurações de imagem

### 🎨 `tailwind.config.js`
- Configuração do Tailwind CSS
- Cores personalizadas da marca
- Breakpoints responsivos
- Plugins e extensões

### 📝 `tsconfig.json`
- Configuração do TypeScript
- Paths de importação
- Regras de compilação

## Convenções de Nomenclatura

### 📁 **Pastas**
- **kebab-case**: `brandi-labs`, `blog-posts`
- **Descritivas**: Nome claro do propósito

### 📄 **Arquivos**
- **PascalCase**: Componentes React (`Header.tsx`)
- **kebab-case**: Páginas e utilitários (`page.tsx`)
- **lowercase**: Configurações (`next.config.js`)

### 🏷️ **Componentes**
- **PascalCase**: `Header`, `Hero`, `Services`
- **Descritivos**: Nome indica função clara
- **Consistentes**: Padrão mantido em todo projeto

## Fluxo de Importação

### **Componentes**
```typescript
// Importação de componentes
import Header from '../components/Header'
import Hero from '../components/Hero'
```

### **Páginas**
```typescript
// Navegação entre páginas
import Link from 'next/link'
<Link href="/licitacoes">Licitações</Link>
```

### **Estilos**
```typescript
// Estilos globais
import './globals.css'
```

## Regras de Organização

### ✅ **Boas Práticas**
- Um componente por arquivo
- Nomes descritivos e consistentes
- Estrutura de pastas lógica
- Separação clara de responsabilidades

### ❌ **Evitar**
- Arquivos muito grandes
- Nomes genéricos ou confusos
- Misturar responsabilidades
- Quebrar convenções estabelecidas

## Expansão Futura

### 📈 **Crescimento Planejado**
```
Futuras adições:
├── /lib                    # Utilitários e helpers
├── /hooks                  # Custom React hooks
├── /types                  # Definições TypeScript
├── /api                    # API routes (se necessário)
├── /tests                  # Testes automatizados
└── /public                 # Assets estáticos
    ├── /images            # Imagens otimizadas
    ├── /icons             # Ícones SVG
    └── /fonts             # Fontes customizadas
```

---

**Próximos passos**: Consulte `tech-stack.md` para detalhes das tecnologias utilizadas.
