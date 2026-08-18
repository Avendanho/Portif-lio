# 💼 Portfólio Profissional — Bernardo Avendanho

> 🔗 **Protótipo (Figma):** https://www.figma.com/design/qtElu5o0CD1Aup7KxJsRNG
> 🌐 **Site publicado:** _a ser adicionado na Sprint 03 (Lab01S03)_

Website de portfólio profissional desenvolvido para a disciplina **Projeto de Software** — Laboratório 1, Segundo Semestre/2026 — Engenharia de Software, PUC Minas.

---

## 🖼️ Imagens dos Protótipos

Wireframes de média fidelidade construídos no Figma, cobrindo as quatro seções exigidas.

> As imagens abaixo devem ser salvas em `docs/screenshots/` no repositório com os nomes indicados (foram exportadas do Figma e exibidas no chat para download).

**Sobre Mim**
![Sobre Mim](./docs/screenshots/sobre-mim.png)

**Projetos**
![Projetos](./docs/screenshots/projetos.png)

**Experiências**
![Experiências](./docs/screenshots/experiencias.png)

**Contato**
![Contato](./docs/screenshots/contato.png)

---

## 📋 Descrição do Projeto

O sistema é um site de portfólio pessoal com navegação por menu, contendo quatro seções principais:

| Seção | Descrição |
|---|---|
| **Sobre Mim** | Apresentação em português e inglês, com formação, área de atuação, interesses e objetivos profissionais. |
| **Projetos** | Linha do tempo de projetos (do mais antigo ao mais recente), cada um com nome, descrição, tecnologias, link do repositório no GitHub e imagem/GIF do projeto em funcionamento. |
| **Experiências** | Experiências profissionais, estágios e participações em projetos/eventos técnicos, com empresa, cargo, período e descrição. |
| **Contato** | Ícones clicáveis (e-mail, WhatsApp, LinkedIn, GitHub) e formulário de contato (nome, e-mail, mensagem) com envio por e-mail. |

O design segue uma identidade visual coerente (tons de azul-marinho e verde-água), com layout responsivo e interface amigável.

---

## 🛠️ Tecnologias Previstas

**Front-end**
- [React](https://react.dev/) com [Next.js](https://nextjs.org/) (SSR + API Routes)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) para componentes estilizados
- Design responsivo (mobile-first)

**Back-end**
- API Route do Next.js para processar o formulário de contato
- Envio de e-mail via [Nodemailer](https://nodemailer.com/) ou [Resend](https://resend.com/)

**Hospedagem**
- [Vercel](https://vercel.com/) (deploy gratuito, ideal para Next.js)

**Design**
- [Figma](https://www.figma.com/) — wireframes e protótipo de média fidelidade

> Planejamento inicial (Lab01S01); pode ser ajustado conforme o desenvolvimento avança.

---

## 📁 Estrutura Inicial do Site

```
portfolio/
├── docs/
│   └── screenshots/         # imagens dos protótipos (Figma)
│       ├── sobre-mim.png
│       ├── projetos.png
│       ├── experiencias.png
│       └── contato.png
├── public/
│   ├── images/               # imagens e GIFs dos projetos
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── page.tsx          # landing page (Sobre Mim + seções)
│   │   ├── layout.tsx        # layout base (header/footer)
│   │   └── api/
│   │       └── contact/      # rota da API para o formulário de contato
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── Projetos.tsx
│   │   ├── Experiencias.tsx
│   │   ├── Contato.tsx
│   │   └── Footer.tsx
│   └── styles/
│       └── globals.css
├── .env.example
├── next.config.js
├── package.json
└── README.md
```

---

## 🚀 Como Rodar Localmente

> Instruções a serem finalizadas assim que o código-fonte for implementado (Lab01S02).

```bash
git clone https://github.com/avendanho/portfolio.git
cd portfolio
npm install
cp .env.example .env.local
npm run dev
# http://localhost:3000
```

---

## 🗺️ Roadmap (Sprints)

- [x] **Lab01S01 — Planejamento e prototipação** (4 pts)
  - [x] Criação do repositório GitHub com README inicial
  - [x] Wireframes das páginas no Figma (média fidelidade)
  - [ ] Protótipo inicial do front-end
  - [ ] Implementação da navegação e layout principal
- [ ] **Lab01S02 — Implementação das funcionalidades principais** (4 pts)
- [ ] **Lab01S03 — Hospedagem e finalização** (7 pts)

---

## 📞 Contato

- ✉️ **E-mail:** beravendanho@gmail.com
- 💬 **WhatsApp:** (31) 9 9927-8942
- 💼 **LinkedIn:** [linkedin.com/in/avendanho](https://linkedin.com/in/avendanho)
- 🐙 **GitHub:** [github.com/avendanho](https://github.com/avendanho)

## 👤 Autor

**Bernardo Avendanho** — Estudante de Engenharia de Software, PUC Minas (2025–2028)

## 📄 Licença

Projeto de uso acadêmico — disciplina de Projeto de Software (PUC Minas).