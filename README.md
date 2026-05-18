# Portfolio-React — João Paulo Muniz Mesquita

Portfolio pessoal de desenvolvimento de software focado em exibir competências técnicas, acadêmicas e experiências em soluções digitais. O projeto adota a identidade visual clássica do tema **Dracula** e foi construído do zero utilizando **React** e **Vite**, contando com animações fluidas e interativas.

Projeto desenvolvido como parte dos requisitos práticos da disciplina de **Desenvolvimento de Plataformas Web** na **Universidade de Fortaleza (UNIFOR)**

---

## 🚀 Tecnologias Utilizadas

O ecossistema do projeto foi modernizado para garantir performance, componentização e uma experiência de usuário (UX) fluida:

* **React (v18+)** — Estrutura base da aplicação e componentização de seções.
* **Vite** — Ferramenta de build ultra-rápida para o ambiente de desenvolvimento.
* **Framer Motion** — Biblioteca utilizada para animações de entrada de componentes e efeitos de *Scroll Reveal*.
* **CSS3 & Dracula Theme** — Estilização personalizada simulando a estética de um terminal de desenvolvimento hacker/Dracula.
* **Font Awesome** — Ícones vetoriais integrados para microinterações nos contatos.

---

## 🛠️ Funcionalidades e Requisitos Atendidos

* **Componentização Estruturada**: Interface dividida em componentes independentes e reutilizáveis (`Navbar`, `Hero`, `Projetos`, `Experiencia` e `Contato`).
* **Animações de Entrada (Framer Motion)**: O cabeçalho e os elementos principais possuem efeitos de *fade-in* e deslocamento suave ao carregar a página.
* **Scroll Reveal Animate**: Seções secundárias emergem com animações dinâmicas à medida que o usuário rola a tela.
* **Navbar Fixa Inteligente**: Menu persistente no topo com transição de opacidade/sombra acionada por eventos de scroll (`window.scrollY`).
* **Navegação por Âncoras Ajustada**: Uso estratégico de `scroll-margin-top` no CSS para garantir que o menu fixo nunca cubra os títulos das seções ao clicar nos links.
* **Microinterações na Tabela**: Linhas da tabela de projetos com efeitos de transição visual (`hover`) dinâmicos.

---

## 💼 Estrutura do Portfolio

* **Sobre Mim**: Breve resumo do meu perfil acadêmico no 3º semestre de ADS, proficiência em inglês e visão geral de atuação.
* **Conhecimentos**: Listagem técnica das minhas principais stacks (Java, JavaScript, React, SQL, Neo4j, Figma e AWS EC2).
* **Projetos**: Tabela detalhada mapeando as principais soluções desenvolvidas (como *Swapiffy*, *Desenrola*, *REVISAI* e pesquisas do *SynapseLab*).
* **Experiência**: Destaque para minha atuação real com digitalização financeira e otimização de processos operacionais.

---

## 🔧 Como Rodar o Projeto Localmente

Se quiser clonar e rodar este projeto na sua máquina:

1. Clone o repositório:
   git clone [https://github.com/JpMuniz21/portfolio-react.git](https://github.com/JpMuniz21/portfolio-react.git)

2. Entre na pasta do projeto:
   cd portfolio-react
   
3. Instale as dependências:
   npm install

4. Inicie o servidor de desenvolvimento do Vite:
   npm run dev

5. Abra o link gerado no terminal (geralmente http://localhost:5173) no seu navegador.


Desenhado e codificado por João Paulo Muniz
