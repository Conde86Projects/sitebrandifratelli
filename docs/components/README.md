# 🧩 Documentação dos Componentes

## Visão Geral

Esta seção documenta todos os componentes React do projeto, suas responsabilidades, props, e como utilizá-los corretamente.

## Componentes Disponíveis

### 🧭 **Navegação**
- **[Header](./Header.md)** - Navegação principal com menu responsivo

### 🎯 **Seções da Homepage**
- **[Hero](./Hero.md)** - Seção principal de destaque
- **[Services](./Services.md)** - Cards dos serviços oferecidos
- **[About](./About.md)** - Seção sobre a empresa
- **[Contact](./Contact.md)** - Formulário de contato

### 🦶 **Layout**
- **[Footer](./Footer.md)** - Rodapé com informações da empresa

## Hierarquia dos Componentes

```
Layout Principal (layout.tsx)
├── Header
├── Main Content
│   ├── Hero (homepage)
│   ├── Services (homepage)
│   ├── About (homepage)
│   └── Contact (homepage/contato)
└── Footer
```

## Padrões dos Componentes

### 📋 **Estrutura Padrão**
Todos os componentes seguem esta estrutura:

```typescript
'use client' // Se necessário para interatividade

import { useState } from 'react' // Hooks necessários
import { motion } from 'framer-motion' // Animações
import { Icon } from 'lucide-react' // Ícones

const ComponentName = () => {
  // Estado local
  const [state, setState] = useState()

  // Funções auxiliares
  const handleFunction = () => {
    // Lógica do componente
  }

  return (
    <section className="tailwind-classes">
      {/* Conteúdo do componente */}
    </section>
  )
}

export default ComponentName
```

### 🎨 **Padrões de Estilo**
- **Tailwind CSS**: Classes utilitárias para estilização
- **Responsive Design**: Mobile-first com breakpoints
- **Framer Motion**: Animações suaves e profissionais
- **Lucide Icons**: Ícones consistentes e modernos

### 🔄 **Padrões de Estado**
- **useState**: Para estado local simples
- **Props**: Para comunicação entre componentes
- **Event Handlers**: Para interações do usuário

## Responsabilidades dos Componentes

### 🧭 **Header**
- Navegação principal do site
- Menu responsivo mobile/desktop
- Links para todas as páginas
- Logo da empresa

### 🎯 **Hero**
- Primeira impressão do site
- Mensagem principal da empresa
- Call-to-action primário
- Animações de entrada

### 🛠️ **Services**
- Apresentação dos serviços
- Cards informativos
- Links para páginas específicas
- Ícones representativos

### 👥 **About**
- História da empresa
- Valores e missão
- Equipe e experiência
- Credibilidade

### 📞 **Contact**
- Formulário de contato
- Validação de campos
- Informações de contato
- Integração futura com backend

### 🦶 **Footer**
- Informações da empresa
- Links úteis
- Redes sociais
- Copyright

## Guia de Uso

### ✅ **Boas Práticas**
- Sempre importe componentes com PascalCase
- Use props tipadas com TypeScript
- Mantenha componentes focados em uma responsabilidade
- Documente mudanças significativas

### 📝 **Exemplo de Uso**
```typescript
// Em uma página
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
    </div>
  )
}
```

### 🔧 **Customização**
- Estilos podem ser ajustados via Tailwind CSS
- Animações podem ser modificadas no Framer Motion
- Conteúdo pode ser parametrizado via props (futuro)

## Dependências dos Componentes

### 📦 **Principais**
- **React**: Biblioteca base
- **Next.js**: Framework e roteamento
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização
- **Framer Motion**: Animações
- **Lucide React**: Ícones

### 🔗 **Interdependências**
- Header: Independente
- Hero: Independente
- Services: Independente
- About: Independente
- Contact: Independente
- Footer: Independente

## Testes (Futuro)

### 🧪 **Estratégia de Testes**
- **Unit Tests**: Cada componente isoladamente
- **Integration Tests**: Interação entre componentes
- **Visual Tests**: Snapshots de renderização
- **Accessibility Tests**: Conformidade com WCAG

### 📊 **Cobertura Esperada**
- Renderização correta
- Interações do usuário
- Estados diferentes
- Responsividade

## Manutenção

### 🔄 **Atualizações**
- Sempre teste após mudanças
- Mantenha documentação atualizada
- Verifique impacto em outros componentes
- Considere backward compatibility

### 📈 **Evolução**
- Novos componentes seguem padrões estabelecidos
- Refatorações mantêm interface consistente
- Melhorias de performance são bem-vindas
- Acessibilidade é prioridade

---

**Próximos passos**: Consulte a documentação específica de cada componente para detalhes de implementação.
