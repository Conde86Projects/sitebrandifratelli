# 🔄 Guia de Atualizações e Manutenção

## Visão Geral

Este documento fornece diretrizes para realizar atualizações seguras no projeto, mantendo a estrutura perfeita e evitando quebras no sistema.

## 🎯 Princípios de Manutenção

### 1. **Preservar o Esqueleto**
- Nunca altere a estrutura base sem documentar
- Mantenha a arquitetura de componentes consistente
- Preserve as convenções estabelecidas

### 2. **Mudanças Incrementais**
- Faça uma alteração por vez
- Teste cada mudança isoladamente
- Documente o que foi alterado

### 3. **Backup Antes de Mudanças**
- Sempre faça commit antes de grandes alterações
- Use branches para features experimentais
- Mantenha backups da documentação

## 📋 Checklist Pré-Atualização

### **Antes de Qualquer Mudança**
- [ ] Ler documentação relevante em `/docs`
- [ ] Verificar impacto em outros componentes
- [ ] Fazer backup/commit do estado atual
- [ ] Testar funcionalidade atual
- [ ] Planejar rollback se necessário

### **Para Atualizações de Dependências**
- [ ] Verificar changelog das dependências
- [ ] Testar em ambiente de desenvolvimento
- [ ] Verificar compatibilidade com Next.js 14
- [ ] Atualizar documentação se necessário

## 🔧 Tipos de Atualizações

### **1. Atualizações de Conteúdo**
Mudanças em textos, imagens ou informações da empresa.

#### **Processo Seguro:**
```typescript
// ✅ Exemplo: Atualizar texto do Hero
// Localizar o componente
components/Hero.tsx

// Identificar a seção específica
const heroTitle = "Especialistas em Licitações"

// Fazer a alteração
const heroTitle = "Líderes em Licitações Governamentais"

// Testar visualmente
npm run dev
```

#### **Arquivos Comumente Alterados:**
- `components/Hero.tsx` - Mensagens principais
- `components/About.tsx` - Informações da empresa
- `components/Services.tsx` - Descrição dos serviços
- `components/Contact.tsx` - Informações de contato
- `components/Footer.tsx` - Dados da empresa

### **2. Atualizações de Estilo**
Mudanças visuais mantendo a estrutura.

#### **Processo Seguro:**
```css
/* ✅ Exemplo: Atualizar cores da marca */
/* app/globals.css */

/* Antes */
.gradient-text {
  @apply bg-gradient-to-r from-blue-600 to-purple-600;
}

/* Depois */
.gradient-text {
  @apply bg-gradient-to-r from-blue-700 to-indigo-600;
}
```

#### **Arquivos de Estilo:**
- `app/globals.css` - Estilos globais
- `tailwind.config.js` - Configurações do Tailwind
- Classes inline nos componentes

### **3. Atualizações de Funcionalidade**
Novas features ou melhorias de comportamento.

#### **Processo Seguro:**
1. **Planejar a mudança**
   - Documentar o que será alterado
   - Identificar componentes afetados
   - Definir testes necessários

2. **Implementar incrementalmente**
   - Fazer uma mudança pequena
   - Testar imediatamente
   - Commit se funcionando

3. **Validar integração**
   - Testar com outros componentes
   - Verificar responsividade
   - Testar navegação

### **4. Atualizações de Dependências**
Atualizar bibliotecas e frameworks.

#### **Processo Seguro:**
```bash
# ✅ Verificar versões atuais
npm list

# ✅ Atualizar uma dependência por vez
npm update framer-motion

# ✅ Testar após cada atualização
npm run dev
npm run build

# ✅ Commit se tudo funcionando
git add .
git commit -m "Update framer-motion to latest version"
```

## 🚨 Cenários de Risco

### **Alto Risco - Requer Cuidado Extra**
- Mudanças no `layout.tsx`
- Alterações na estrutura de pastas
- Atualizações do Next.js
- Mudanças no `tailwind.config.js`
- Modificações no sistema de roteamento

### **Médio Risco - Teste Bem**
- Novos componentes
- Mudanças em componentes existentes
- Atualizações de bibliotecas
- Alterações no `package.json`

### **Baixo Risco - Seguro**
- Mudanças de texto
- Ajustes de cores
- Atualizações de documentação
- Correções de typos

## 🛠️ Procedimentos Específicos

### **Adicionar Nova Página**
```typescript
// 1. Criar arquivo da página
app/nova-pagina/page.tsx

// 2. Seguir estrutura padrão
export default function NovaPagina() {
  return (
    <div className="pt-20">
      {/* Conteúdo da página */}
    </div>
  )
}

// 3. Adicionar ao menu (Header.tsx)
const menuItems = [
  // ... itens existentes
  { href: '/nova-pagina', label: 'Nova Página' }
]

// 4. Documentar em docs/pages/
// 5. Testar navegação
// 6. Commit
```

### **Modificar Componente Existente**
```typescript
// 1. Ler documentação do componente
docs/components/ComponentName.md

// 2. Identificar seção específica
// 3. Fazer backup mental da estrutura atual
// 4. Implementar mudança mínima
// 5. Testar imediatamente
// 6. Se funcionando, continuar
// 7. Se quebrou, reverter e repensar
```

### **Atualizar Informações da Empresa**
```typescript
// Locais comuns para atualizar:

// 1. Footer.tsx - Informações de contato
const companyInfo = {
  phone: "(11) 9999-9999",
  email: "contato@brandifratelli.com.br",
  address: "São Paulo, SP"
}

// 2. About.tsx - História e valores
// 3. Contact.tsx - Formulário e dados
// 4. layout.tsx - Meta tags SEO
```

## 🔍 Testes Após Atualizações

### **Checklist de Testes**
- [ ] Homepage carrega corretamente
- [ ] Navegação funciona (todas as páginas)
- [ ] Menu mobile abre/fecha
- [ ] Formulário de contato funciona
- [ ] Responsividade em diferentes tamanhos
- [ ] Animações funcionam suavemente
- [ ] Build de produção funciona (`npm run build`)

### **Testes de Regressão**
```bash
# Testar build
npm run build
npm run start

# Testar em diferentes dispositivos
# - Mobile (375px)
# - Tablet (768px)  
# - Desktop (1024px+)

# Verificar console do navegador
# - Sem erros JavaScript
# - Sem warnings de React
# - Recursos carregando corretamente
```

## 🚑 Procedimentos de Emergência

### **Se Algo Quebrou**
1. **Não entre em pânico**
2. **Identifique o que mudou**
3. **Reverta a última mudança**
4. **Teste se voltou ao normal**
5. **Analise o que deu errado**
6. **Tente uma abordagem diferente**

### **Comandos de Rollback**
```bash
# Reverter último commit
git reset --hard HEAD~1

# Reverter arquivo específico
git checkout HEAD -- caminho/do/arquivo.tsx

# Reverter para commit específico
git reset --hard <hash-do-commit>
```

## 📝 Documentação de Mudanças

### **Histórico de Atualizações Recentes**

#### **2024-01-20: Correção de Modo Escuro e Melhorias Visuais**

**Mudanças Realizadas:**
- ✅ **Correção Modo Escuro**: Forçado modo claro para compatibilidade total
- ✅ **Inputs Sempre Visíveis**: Background branco e texto escuro garantidos
- ✅ **Título com Gradiente**: "Brandi Fratelli" com gradiente azul-roxo
- ✅ **Rodapé Atualizado**: Copyright alterado para 2025
- ✅ **Licitações Atualizadas**: Removidas modalidades obsoletas (Tomada de preço, Carta convite)
- ✅ **CSS Global**: Regras !important para garantir visibilidade
- ✅ **Placeholders**: Cores adequadas para todos os inputs

**Arquivos Modificados:**
- `app/globals.css` - Correções de modo escuro e forçar modo claro
- `components/Hero.tsx` - Gradiente azul-roxo no título principal
- `components/Footer.tsx` - Copyright atualizado para 2025
- `app/licitacoes/page.tsx` - Remoção de modalidades obsoletas

**Benefícios:**
- Site sempre visível independente do tema do dispositivo
- Identidade visual moderna com gradiente no título
- Informações atualizadas e precisas sobre licitações
- Compatibilidade total com dispositivos móveis e desktop
- Experiência consistente para todos os usuários

#### **2024-01-20: Sistema de Chat Personalizado por Segmento**

**Mudanças Realizadas:**
- ✅ **ChatWidget Reutilizável**: Componente React com interface flutuante e animações
- ✅ **Configuração por Segmento**: Mensagens e cores específicas para cada área
- ✅ **Respostas Inteligentes**: Sistema de palavras-chave contextual
- ✅ **Integração N8n**: Estrutura preparada para webhooks e automação
- ✅ **Chat Advocacia**: Contexto Direito Previdenciário (cor dourada)
- ✅ **Chat Brandi Labs**: Contexto desenvolvimento mobile (cor roxa)
- ✅ **Chat Licitações**: Contexto processos licitatórios (cor azul)
- ✅ **Chat Sistemas**: Contexto desenvolvimento web (cor verde)
- ✅ **Chat Home**: Roteamento geral para todas as áreas

**Arquivos Criados:**
- `components/ChatWidget.tsx` - Componente principal do chat
- `lib/chatConfig.ts` - Configurações e lógica inteligente
- `docs/integrations/chat-system.md` - Documentação técnica
- `docs/integrations/n8n-integration-guide.md` - Guia de integração N8n

**Arquivos Modificados:**
- `app/advocacia/page.tsx` - Adicionado ChatWidget específico
- `app/brandi-labs/page.tsx` - Adicionado ChatWidget específico
- `app/licitacoes/page.tsx` - Adicionado ChatWidget específico
- `app/sistemas/page.tsx` - Adicionado ChatWidget específico
- `app/page.tsx` - Adicionado ChatWidget geral

**Benefícios:**
- Sistema completo de qualificação automática de leads
- Experiência personalizada por área de negócio
- Preparado para automação completa com N8n
- Interface profissional com animações suaves
- Respostas contextuais inteligentes
- Estrutura escalável para novos segmentos

#### **2024-01-20: Implementação Completa do Sistema de Branding**

**Mudanças Realizadas:**
- ✅ **Página Advocacia**: Substituído ícone Scale por `logo-advogado.svg` (64x64px)
- ✅ **Card Home - Direito Previdenciário**: Substituído ícone Scale por `logo-advogado.svg` (28x28px)
- ✅ **Página Brandi Labs**: Substituído ícone Smartphone por `logo-brandi-Labs.svg` (64x64px)
- ✅ **Favicon**: Configurado `logo-flaicon.svg` no layout.tsx para ícone do navegador
- ✅ **Rodapé**: Substituído texto "Brandi Fratelli" por `rodape-labs.svg` (240x56px)
- ✅ **CSS Global**: Adicionadas classes `.logo-page`, `.logo-medium`, `.logo-small` para padronização
- ✅ **Otimizações**: Aplicados filtros CSS para compatibilidade com fundos coloridos

**Arquivos Modificados:**
- `components/Services.tsx` - Substituição do ícone no card
- `components/Footer.tsx` - Substituição do texto por logo SVG
- `app/advocacia/page.tsx` - Implementação do logo na página
- `app/brandi-labs/page.tsx` - Substituição do ícone por logo específico
- `app/layout.tsx` - Configuração do favicon
- `app/globals.css` - Classes de estilização do logo
- `public/images/` - Adição de todos os arquivos SVG de branding

**Benefícios:**
- Sistema completo de identidade visual da marca Brandi Fratello
- Logos específicos para cada seção (Advocacia, Brandi Labs)
- Favicon personalizado para reconhecimento da marca
- Logo no rodapé para reforço da identidade
- Formato SVG para qualidade perfeita em qualquer resolução
- Padronização de tamanhos para diferentes contextos
- Consistência visual em todo o site

### **Template de Commit**
```bash
# ✅ Commits descritivos
git commit -m "feat: Add new service card to Services component"
git commit -m "fix: Correct mobile menu alignment issue"
git commit -m "docs: Update component documentation"
git commit -m "style: Adjust hero section spacing"
```

### **Atualizar Documentação**
Sempre que fizer mudanças significativas:
- Atualize `docs/components/` se mudou componentes
- Atualize `docs/pages/` se mudou páginas
- Atualize `README.md` se mudou funcionalidades
- Atualize `docs/architecture/` se mudou estrutura

## 🎯 Melhores Práticas

### **✅ Faça**
- Leia a documentação antes de mudar
- Teste em desenvolvimento antes de produção
- Faça commits pequenos e frequentes
- Documente mudanças importantes
- Mantenha backup do estado funcionando

### **❌ Evite**
- Mudanças múltiplas simultâneas
- Alterações sem testes
- Commits sem mensagens descritivas
- Quebrar convenções estabelecidas
- Ignorar warnings ou erros

---

**Lembre-se**: O objetivo é manter a estrutura perfeita funcionando. Quando em dúvida, prefira mudanças menores e mais seguras.
