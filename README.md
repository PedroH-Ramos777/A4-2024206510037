# 🐉 Dragon Ball Super Cards

Bem-vindo ao **Dragon Ball Super Cards**, uma aplicação web *Mobile-First* extremamente polida e fluida construída para demonstrar técnicas avançadas de UX/UI com tecnologias nativas da web (Vanilla JS, HTML e CSS).

## 🌟 Sobre o Projeto

Este projeto consome a **[Dragon Ball API](https://dragonball-api.com/)** para invocar guerreiros aleatórios em uma arena de batalha. A interface foi cuidadosamente projetada para funcionar impecavelmente em telas de smartphones, tablets e grandes monitores Desktop (com alinhamento central dinâmico).

O fluxo principal adota um formato *Wizard* (etapas sequenciais), removendo a necessidade de excessos de cliques do usuário. Ao clicar em gerar, a magia acontece: a interface guia o usuário da invocação do Player 1 à do Player 2, culminatingo num cenário épico de embate ("VS").

## 🚀 Funcionalidades

- **Design *Mobile-First* Responsivo:** Uso extensivo de flexbox, unidades relativas e media queries para uma experiência sem quebras e 100% fluida em qualquer aparelho.
- **Wizard Sequencial Mágico:** Um clique dispara a invocação assíncrona do Player 1 e do Player 2 de forma encadeada, com intervalos para apreciar as animações.
- **Tipografia e Alinhamento *Pixel Perfect*:** Utilização da fonte geométrica *Russo One* (Google Fonts) com compensações ópticas (`transform: translateY`) para que todos os ícones e baselines se alinhem matematicamente no centro.
- **Micro-Interações e Animações:** Sombras pulsantes no botão de batalha e no logotipo, brilhos holográficos nos cards e fundos imersivos no estilo partículas e galáxias.
- **Arquitetura Vanilla JS:** Nenhuma dependência pesada de frameworks. Toda a manipulação do DOM e o roteamento das etapas (`step-1`, `step-2`, `step-3`) são feitos de forma nativa e performática com JavaScript puro.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da aplicação.
- **CSS3 (Vanilla):** Variáveis nativas (Custom Properties), Flexbox, transições dinâmicas e layouts adaptáveis. Sem bibliotecas de terceiros (Tailwind ou Bootstrap).
- **JavaScript (ES6+):** Lógica assíncrona (`fetch` & `async/await`), timers (`setTimeout`) e manipulação de estado (`classList`).
- **Lucide Icons:** Ícones de alta qualidade em SVG incorporados inline (como as espadas cruzadas).

## 📥 Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/desv-jorge/dragon-ball-super-cards.git
   ```
2. Abra a pasta do projeto:
   ```bash
   cd dragon-ball-super-cards
   ```
3. Abra o arquivo `index.html` em qualquer navegador web moderno. *Ou, se preferir uma experiência de servidor de desenvolvimento, utilize a extensão Live Server no VSCode.*

## 💡 Próximos Passos (Roadmap)
- [ ] Implementação de sistema de pontuação com `localStorage`.
- [ ] Adição de efeitos sonoros em cada transição de etapa do Wizard.
- [ ] Mais filtros de raridade, permitindo encontrar transformações específicas da API.

---

*Desenvolvido com foco em UI/UX e performance nativa. Eleve seu ki!* 💥
