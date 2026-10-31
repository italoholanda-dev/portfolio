<div align="center">

# 💻 Portfólio Profissional — Italo Holanda Neves

**Desenvolvedor Web Full-Stack | Análise e Desenvolvimento de Sistemas | UI/UX**

[![Vercel Deploy](https://img.shields.io/badge/Vercel-Online-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-italo-murex.vercel.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Design-100%25%20Responsivo-1261d6?style=for-the-badge)]()

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-acesso-em-produção">Demonstração</a> •
  <a href="#-arquitetura-e-funcionalidades">Funcionalidades</a> •
  <a href="#-vitrine-de-projetos">Projetos</a> •
  <a href="#-tecnologias-e-design-system">Tecnologias</a> •
  <a href="#-responsividade-multi-telas">Responsividade</a> •
  <a href="#-como-executar-localmente">Execução</a> •
  <a href="#-autor-e-contato">Contato</a>
</p>

</div>

---

## 📌 Sobre o Projeto

Este repositório contém o código-fonte do meu site de portfolio oficial, desenvolvido para centralizar minhas competências técnicas, trajetória acadêmica e projetos práticos nas áreas de **Desenvolvimento de Software**.

---

## 🌐 Acesso em Produção

O portfólio está publicado em produção com deploy contínuo via **Vercel**:

👉 **[Acessar Portfólio Oficial (portfolio-italo-murex.vercel.app)](https://portfolio-italo-murex.vercel.app/)**

---

## ⚙️ Arquitetura e Funcionalidades

### 1. Navegação Inteligente e Acessível
- **Header Fixo com Glassmorphism:** Barra de navegação superior com efeito `backdrop-filter: blur()`, mantendo o contexto visual durante a rolagem.
- **Scroll Spy Ativo:** Destaque automático da seção visível no menu conforme o usuário navega pela página.
- **Menu Mobile Interativo:** Menu hambúrguer animado com transição suave e fechamento automático ao selecionar uma seção.
- **Compensação de Âncora (`scroll-margin-top`):** Posicionamento exato dos títulos de seção abaixo do cabeçalho fixo.

### 2. Estrutura de Seções
| Seção | Descrição |
| :--- | :--- |
| **Início (`#inicio`)** | Apresentação principal (Hero), badge de disponibilidade profissional em tempo real, CTAs rápidos e moldura visual com cartões flutuantes. |
| **Sobre Mim (`#sobre`)** | Perfil profissional unindo a formação em Análise e Desenvolvimento de Sistemas à experiência anterior em docência, comunicação assertiva e metodologias ágeis (Sprints). |
| **Habilidades (`#habilidades`)** | Grade visual de competências técnicas (`HTML5`, `CSS3`, `JavaScript`, `Python`, `React`, `Figma`) e proficiência em idiomas (`Inglês` e `Espanhol`). |
| **Projetos (`#projetos`)** | Galeria de soluções desenvolvidas com ilustrações vetoriais (`SVG`) interativas, tags de tecnologias e links diretos para deploy e código-fonte. |
| **Trajetória (`#experiencia`)** | Linha do tempo cronológica destacando formações acadêmicas (Fametro e Senac Amazonas) e experiências práticas (SEMED Manaus e IDESAM). |
| **Contato (`#contato`)** | Canal direto via e-mail, telefone e redes profissionais (`LinkedIn`, `GitHub` e `Instagram`). |

### 3. Interatividade e Animações
- **Intersection Observer API:** Revelação progressiva e suave dos cartões de informação, habilidades, projetos e itens da linha do tempo conforme entram na área visível da tela.
- **Microinterações em CSS:** Efeitos de elevação (`translateY`), realce de bordas e animações vetoriais em SVG nos cartões de projetos.

---

## 🚀 Vitrine de Projetos

Projetos integrados e apresentados diretamente no portfólio:

| Projeto | Categoria | Stack Principal | Links |
| :--- | :--- | :--- | :--- |
| **Associação Atlética de Manaus** | Desenvolvimento Web | `HTML` `CSS` `JavaScript` `PostgreSQL` | [🌐 Deploy](https://site-corridas-aam.vercel.app/) \| [💻 Código](https://github.com/italoholanda-dev/associacao-atletica-de-manaus) |
| **Calculadora de Impostos** | Front-End / Back-End | `HTML` `CSS` `JavaScript` | [🌐 Deploy](https://calculadora-impostos-3gft.vercel.app/) \| [💻 Código](https://github.com/italoholanda-dev/calculadora-impostos) |
| **Servo Motor ESP32** | Sistemas Embarcados | `C++` `PlatformIO` | [💻 Código](https://github.com/italoholanda-dev/servo-motor-esp32) |
| **Floresta ID Plataforma Digital** | Projeto Full-Stack | `PostgreSQL` `JavaScript` `HTML` `CSS` | *Em desenvolvimento* |

---

## 🛠️ Tecnologias e Design System

### Stack Tecnológica
- **HTML5 Semântico:** Uso estruturado de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>` visando SEO e acessibilidade (`aria-label`).
- **CSS3 Moderno:**
  - Variáveis nativas (`CSS Custom Properties`) para manutenção consistente de cores, espaçamentos e fontes.
  - Layouts híbridos com **CSS Grid** e **Flexbox**.
  - Tipografia fluida utilizando funções matemáticas `clamp()` e `min()`.
- **JavaScript (ES6+ Vanilla):** Código limpo e modular sem dependência de bibliotecas externas pesadas, garantindo carregamento instantâneo.

### Sistema Tipográfico e Paleta de Cores
- **Títulos e Destaques:** `Plus Jakarta Sans` (pesos 600, 700 e 800) — geométrica, moderna e de alto impacto visual.
- **Corpo de Texto e Leitura:** `Inter` (pesos 400, 500, 600 e 700) — projetada especificamente para máxima nitidez em telas digitais.
- **Elementos de Código e Índices:** `JetBrains Mono` — aplicada em símbolos técnicos (`</>`), índices de seção e badges de tecnologia.
- **Paleta Cromática:** Tons profundos de azul meia-noite (`#04101f`, `#071a33`) combinados com azul elétrico de destaque (`#1261d6`, `#4295ff`) e alto contraste em branco (`#ffffff`).

---

## 📱 Responsividade Multi-Telas

O layout conta com múltiplos *breakpoints* planejados para oferecer uma experiência consistente em qualquer dispositivo:

| Dispositivo / Viewport | Breakpoint | Adaptações de Layout |
| :--- | :--- | :--- |
| **Monitores Ultra-Wide / Desktop** | `>= 1440px` | Container expandido (`1240px`), grid duplo amplo e espaçamento generoso. |
| **Notebooks & Tablets Landscape** | `<= 1100px` | Ajuste proporcional da moldura de perfil e redução controlada de *gaps*. |
| **Tablets Portrait** | `<= 950px` | Empilhamento centralizado da seção Hero, seção Sobre em coluna única e ajuste da linha do tempo. |
| **Smartphones Grandes** | `<= 768px` | Ativação do menu mobile retrátil, projetos em coluna única e grade de habilidades em 2 colunas. |
| **Smartphones Padrão** | `<= 480px` | Tipografia redimensionada via `clamp()`, botões com largura total (`100%`) e cartões compactados. |
| **Smartphones Compactos** | `<= 360px` | Cartões de habilidades em coluna única centralizada para evitar qualquer rolagem horizontal. |

---

## 📂 Estrutura de Diretórios

```text
PORTFOLIO-PROFISSIONAL/
├── assets/
│   ├── imagem..png          # Fotografia profissional da seção Hero
│   └── unnamed.png          # Favicon do site
├── index.html               # Estrutura principal e marcação semântica
├── style.css                # Folha de estilos, variáveis, animações e media queries
├── script.js                # Controle de menu mobile, scroll spy e Intersection Observer
└── README.md                # Documentação técnica do projeto
```

---

## 🔧 Como Executar Localmente

Para clonar e executar este projeto em sua máquina local com o **VS Code**:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/italoholanda-dev/portfolio.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd portfolio
   ```

3. **Abra no Visual Studio Code:**
   ```bash
   code .
   ```

4. **Execute no navegador:**
   - Utilize a extensão **Live Server** no VS Code clicando em *"Go Live"*, ou simplesmente abra o arquivo `index.html` diretamente no seu navegador de preferência.

---

## 👨‍💻 Autor e Contato

Desenvolvido por **Italo Holanda Neves** — Graduando em Análise e Desenvolvimento de Sistemas (Faculdade de Tecnologia Senac Amazonas) e Desenvolvedor Web no IDESAM.

- 💼 **LinkedIn:** [linkedin.com/in/italo-holanda](https://www.linkedin.com/in/italo-holanda/)
- 🐙 **GitHub:** [github.com/italoholanda-dev](https://github.com/italoholanda-dev)
- 📧 **E-mail:** [italoholanda90@gmail.com](mailto:italoholanda90@gmail.com)
- 📸 **Instagram:** [@italoholanda_01](https://www.instagram.com/italoholanda_01/)

---

<div align="center">
  <sub>© 2026 Italo Holanda Neves. Todos os direitos reservados.</sub>
</div>
