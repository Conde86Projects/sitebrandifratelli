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
