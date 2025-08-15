# 🚀 Brandi Fratelli - Site Corporativo

Site corporativo moderno e responsivo para a **Brandi Fratelli**, empresa especializada em licitações governamentais, advocacia empresarial e desenvolvimento de sistemas.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional
- **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Performance Otimizada**: Carregamento rápido e SEO otimizado
- **Componentes Reutilizáveis**: Arquitetura modular e escalável
- **Formulário de Contato**: Integrado e funcional
- **Navegação Intuitiva**: Menu responsivo com todas as seções

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React moderno com App Router
- **TypeScript** - Tipagem estática para maior confiabilidade
- **Tailwind CSS** - Framework CSS utilitário para design responsivo
- **Framer Motion** - Animações suaves e interativas
- **Lucide React** - Ícones modernos e consistentes

## 📁 Estrutura do Projeto

```
site-brandi-fratelli/
├── app/                    # Páginas (App Router Next.js 14)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Homepage
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Navegação principal
│   ├── Hero.tsx           # Seção hero
│   ├── Services.tsx       # Cards de serviços
│   ├── About.tsx          # Sobre a empresa
│   ├── Contact.tsx        # Formulário de contato
│   └── Footer.tsx         # Rodapé
├── docs/                  # Documentação
├── .gitignore            # Arquivos ignorados pelo Git
├── package.json          # Dependências do projeto
├── next.config.js        # Configuração do Next.js
├── tailwind.config.js    # Configuração do Tailwind CSS
└── tsconfig.json         # Configuração do TypeScript
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/Conde86Projects/sitebrandifratelli.git

# Entre na pasta do projeto
cd sitebrandifratelli

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Netlify
1. Conecte o repositório
2. Configure o build command: `npm run build`
3. Configure o publish directory: `.next`

### Outras Plataformas
- **AWS Amplify**
- **DigitalOcean App Platform**
- **Heroku**

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

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- **Next.js Team** - Framework incrível
- **Tailwind CSS** - Sistema de design utilitário
- **Framer Motion** - Animações suaves
- **Lucide** - Ícones bonitos

---

**Desenvolvido com ❤️ pela equipe Brandi Fratelli**  
**Tecnologia: Next.js + TypeScript + Tailwind CSS**
