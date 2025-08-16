# 📝 Padrões de Código - Brandi Fratelli

## Visão Geral

Este documento estabelece os padrões de código para manter consistência, legibilidade e qualidade no projeto.

## 🎯 Princípios Fundamentais

### 1. **Clareza sobre Inteligência**
- Código deve ser fácil de ler e entender
- Prefira soluções simples e diretas
- Evite otimizações prematuras

### 2. **Consistência**
- Siga os padrões estabelecidos
- Use convenções uniformes
- Mantenha estrutura previsível

### 3. **Manutenibilidade**
- Escreva código pensando no futuro
- Documente decisões complexas
- Facilite modificações

## 📁 Convenções de Nomenclatura

### **Arquivos e Pastas**
```typescript
// ✅ Correto
components/Header.tsx
pages/licitacoes/page.tsx
docs/architecture/overview.md

// ❌ Evitar
components/header.tsx
pages/Licitacoes/Page.tsx
docs/Architecture/Overview.md
```

### **Componentes React**
```typescript
// ✅ Correto - PascalCase
const Header = () => { ... }
const ServiceCard = () => { ... }
const ContactForm = () => { ... }

// ❌ Evitar
const header = () => { ... }
const servicecard = () => { ... }
const contact_form = () => { ... }
```

### **Variáveis e Funções**
```typescript
// ✅ Correto - camelCase
const userName = 'João'
const isMenuOpen = false
const handleSubmit = () => { ... }

// ❌ Evitar
const user_name = 'João'
const IsMenuOpen = false
const HandleSubmit = () => { ... }
```

### **Constantes**
```typescript
// ✅ Correto - UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com'
const MAX_RETRY_ATTEMPTS = 3
const COMPANY_NAME = 'Brandi Fratelli'

// ❌ Evitar
const apiBaseUrl = 'https://api.example.com'
const maxRetryAttempts = 3
```

## 🏗️ Estrutura de Componentes

### **Template Padrão**
```typescript
'use client' // Apenas se necessário

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Icon } from 'lucide-react'

// Interfaces/Types (se necessário)
interface ComponentProps {
  title: string
  isVisible?: boolean
}

const ComponentName = ({ title, isVisible = true }: ComponentProps) => {
  // 1. Estado local
  const [isLoading, setIsLoading] = useState(false)
  
  // 2. Effects
  useEffect(() => {
    // Lógica de efeito
  }, [])
  
  // 3. Funções auxiliares
  const handleClick = () => {
    setIsLoading(true)
    // Lógica da função
  }
  
  // 4. Early returns
  if (!isVisible) return null
  
  // 5. Render principal
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          {title}
        </h2>
        {/* Conteúdo do componente */}
      </div>
    </section>
  )
}

export default ComponentName
```

## 🎨 Padrões de Estilização

### **Tailwind CSS**
```typescript
// ✅ Correto - Classes organizadas
<div className="
  flex items-center justify-between
  w-full max-w-4xl mx-auto
  p-4 md:p-6 lg:p-8
  bg-white shadow-lg rounded-lg
  hover:shadow-xl transition-shadow duration-300
">

// ❌ Evitar - Classes desorganizadas
<div className="flex bg-white p-4 w-full items-center rounded-lg shadow-lg max-w-4xl mx-auto justify-between md:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300">
```

### **Ordem das Classes Tailwind**
1. **Layout**: `flex`, `grid`, `block`
2. **Positioning**: `relative`, `absolute`, `top-0`
3. **Sizing**: `w-full`, `h-screen`, `max-w-4xl`
4. **Spacing**: `p-4`, `m-2`, `gap-4`
5. **Typography**: `text-lg`, `font-bold`, `text-center`
6. **Colors**: `bg-blue-500`, `text-white`
7. **Effects**: `shadow-lg`, `rounded-lg`
8. **Interactions**: `hover:`, `focus:`, `active:`
9. **Responsive**: `md:`, `lg:`, `xl:`

### **Classes Customizadas**
```css
/* globals.css */
.gradient-text {
  @apply bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent;
}

.btn-primary {
  @apply px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200;
}
```

## 📱 Responsividade

### **Breakpoints Padrão**
```typescript
// Mobile First - sempre comece sem prefixo
<div className="
  text-sm          // Mobile (default)
  md:text-base     // Tablet (768px+)
  lg:text-lg       // Desktop (1024px+)
  xl:text-xl       // Large Desktop (1280px+)
">
```

### **Padrões Responsivos**
```typescript
// ✅ Layout responsivo padrão
<div className="
  grid grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-4 md:gap-6 lg:gap-8
">

// ✅ Padding responsivo
<section className="
  py-8 px-4
  md:py-12 md:px-6
  lg:py-16 lg:px-8
">
```

## 🔄 Gerenciamento de Estado

### **Estado Local**
```typescript
// ✅ Correto - useState para estado simples
const [isOpen, setIsOpen] = useState(false)
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
})

// ✅ Handlers descritivos
const handleMenuToggle = () => setIsOpen(!isOpen)
const handleFormSubmit = (e: FormEvent) => {
  e.preventDefault()
  // Lógica de submit
}
```

### **Props Interface**
```typescript
// ✅ Correto - Interface tipada
interface HeaderProps {
  isFixed?: boolean
  showLogo?: boolean
  menuItems: MenuItem[]
}

interface MenuItem {
  href: string
  label: string
  isActive?: boolean
}
```

## 🎭 Animações

### **Framer Motion Padrões**
```typescript
// ✅ Animações consistentes
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// ✅ Uso no componente
<motion.div
  variants={fadeInUp}
  initial="initial"
  animate="animate"
>
  Conteúdo animado
</motion.div>
```

## 📝 Comentários e Documentação

### **Comentários no Código**
```typescript
// ✅ Comentários úteis
// Calcula o desconto baseado no valor total e tipo de cliente
const calculateDiscount = (total: number, customerType: string) => {
  // Clientes premium recebem 15% de desconto
  if (customerType === 'premium') {
    return total * 0.15
  }
  
  // Desconto padrão de 5% para pedidos acima de R$ 1000
  return total > 1000 ? total * 0.05 : 0
}

// ❌ Comentários desnecessários
// Incrementa o contador
setCounter(counter + 1)
```

### **JSDoc para Funções Complexas**
```typescript
/**
 * Valida e formata dados do formulário de contato
 * @param formData - Dados brutos do formulário
 * @returns Objeto com dados validados e erros
 */
const validateContactForm = (formData: FormData) => {
  // Implementação da validação
}
```

## 🚫 Anti-Padrões

### **Evitar**
```typescript
// ❌ Componentes muito grandes (>200 linhas)
// ❌ Lógica complexa no JSX
// ❌ Props drilling excessivo
// ❌ Estado global desnecessário
// ❌ Inline styles
// ❌ Magic numbers/strings
// ❌ Funções anônimas em props
```

### **Preferir**
```typescript
// ✅ Componentes pequenos e focados
// ✅ Lógica extraída em funções
// ✅ Composição de componentes
// ✅ Estado local quando possível
// ✅ Classes Tailwind
// ✅ Constantes nomeadas
// ✅ Handlers nomeados
```

## 🔍 Linting e Formatação

### **ESLint Rules**
```json
{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "prefer-const": "error",
    "no-unused-vars": "error",
    "no-console": "warn"
  }
}
```

### **Prettier Config**
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

## ✅ Checklist de Code Review

### **Antes de Commit**
- [ ] Código segue padrões estabelecidos
- [ ] Componentes são reutilizáveis
- [ ] Responsividade testada
- [ ] Sem console.logs desnecessários
- [ ] Imports organizados
- [ ] TypeScript sem erros
- [ ] Documentação atualizada

### **Durante Review**
- [ ] Lógica está clara
- [ ] Performance adequada
- [ ] Acessibilidade considerada
- [ ] Testes passando (futuro)
- [ ] Sem duplicação de código

---

**Lembre-se**: Estes padrões existem para manter a qualidade e consistência. Quando em dúvida, priorize clareza e simplicidade.
