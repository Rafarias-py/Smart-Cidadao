# SmartCidadão — Zeladoria Urbana Inteligente

## A Ficha da CitizenTech

- **Nome:** CitizenTech
- **Cidade e bairro:** São Paulo
- **Cidadão beneficiado:** Moradores de São Paulo
- **Problema:** Os problemas urbanos demoram a ser resolvidos porque o relato é burocrático e a triagem das ocorrências é feita manualmente.
- **Indicador de impacto:** Tempo médio entre o registro de um chamado e a sua resolução, em dias.
- **ODS conectados:** ODS 11 (Cidades e Comunidades Sustentáveis), ODS 9 (Indústria, Inovação e Infraestrutura) e ODS 16 (Paz, Justiça e Instituições Eficazes).

### O que cada parte faz

- **Landing page:** Apresenta o problema, a tecnologia, os objetivos, o público-alvo e os benefícios.
- **Formulário de solicitação:** Permite informar o tipo do problema, a descrição, o endereço, de 1 a 4 fotos, se há risco de acidente, nome e idade. É uma demonstração: os dados não são enviados.
- **Algoritmo de priorização:** Cruza o volume e a gravidade dos chamados para montar a fila de atendimento.
- **Prefeitura (proposta):** Recebe os dados organizados para direcionar as equipes de manutenção.

- **Links:** [Site publicado](https://smart-cidadao.vercel.app/) · [Repositório](https://github.com/Rafarias-py/Smart-Cidadao)

## Equipe

Os integrantes e seus RMs estão listados em [Integrantes.txt](Integrantes.txt).

## Implementação

Landing page responsiva desenvolvida em HTML, CSS e JavaScript, sem frameworks.

## Estrutura de Arquivos

```
SmartCidadão/
├── css/
│   └── styles.css       # Estilos, variáveis, animações 3D e responsividade
├── imagens/             # Fotografias dos problemas urbanos
│   ├── buraco.jpg
│   ├── buraco2.jpg
│   ├── arvore-caida-na-via.jpeg
│   ├── enchentes2.jpg
│   ├── fiossoltos.jpg
│   ├── lixo-acumulado-no-centro.jpg
│   ├── moradores-de-rua.jpg
│   └── poda de arvore.jpg
├── js/
│   └── script.js        # Lógica do carrossel, do formulário e da validação
├── index.html           # Estrutura semântica da Landing Page
├── Integrantes.txt      # Integrantes e RMs
├── AI.md                # Declaração de uso de inteligência artificial
└── README.md            # Documentação do projeto
```

## Análise Técnica Detalhada por Arquivo

Abaixo está o detalhamento completo de tudo o que foi utilizado na construção de cada arquivo do projeto:

## 1. index.html (Estrutura Semântica & Acessibilidade)

O arquivo HTML foi construído utilizando HTML5 Semântico e boas práticas de Acessibilidade Web (WAI-ARIA):

**Metadados e Configuração Inicial (`<head>`):**

- Declaração `<!doctype html>` e atributo `lang="pt-BR"` para leitura correta por motores de busca e leitores de tela.
- `<meta charset="UTF-8">` e `<meta name="viewport" content="width=device-width, initial-scale=1.0">` para suporte a acentuação e adaptação a dispositivos móveis.
- **Google Fonts:** `preconnect` para `fonts.googleapis.com` e `fonts.gstatic.com`, seguido do `<link>` da fonte Inter (pesos de 400 a 800), carregado antes da folha de estilos `css/styles.css`.

**Cabeçalho Fixo (`<header class="site-header">`):**

- **Identidade Visual (`.brand`):** logotipo com ícone vetorial inline (`<svg>`) representando um escudo com sinal de verificação.
- **Navegação Principal (`<nav class="main-nav">`):** links de ancoragem interna (`#problema`, `#tecnologia`, `#objetivos`, `#publico`, `#beneficios`) com `aria-label="Navegação principal"`.
- **Ação Principal (`.header-action`):** botão de destaque (Faça sua Solicitação) posicionado à direita, que abre o formulário de solicitação.

**Conteúdo Principal:**

- **Seção 1 — O Problema:**
  - Introdução textual com hierarquia de títulos (`h1` com destaque em `<span>`) e subtítulo categorizador (`.eyebrow`).
  - Container do Carrossel (`<div class="carousel-scene">`): região demarcada com `role="region"` e `aria-label`, contendo a trilha `#carousel-track` populada via JavaScript.
  - Seção de Vídeo (`<section class="video-section">`): incorporação responsiva (`<iframe>`) de reportagem do YouTube com `title` e carregamento otimizado (`loading="lazy"`).
- **Seções 2 a 5 — Conteúdo Institucional (`#tecnologia`, `#objetivos`, `#publico`, `#beneficios`):**
  - Estruturadas em duas colunas com Flexbox (`.section-layout`), alternando fundos claros e suaves (`.content-section` e `.content-section.soft`).
  - Cada seção conta com um cartão de ícone vetorial exclusivo (`.section-icon`) criado diretamente com primitivas `<svg>` (`<rect>`, `<circle>`, `<path>`), ocultos para leitores de tela via `aria-hidden="true"` para evitar redundância.

**Formulário de Solicitação (`<dialog class="request-dialog">`):**

- Janela modal nativa do HTML, com `aria-labelledby` e `aria-describedby`, aberta pelo botão do cabeçalho.
- Campos, todos obrigatórios:

| Campo | Tipo | Regras |
|---|---|---|
| Tipo do problema | `<select>` | 11 categorias (buraco, bueiro, iluminação, lixo, poda, calçada, sinalização, semáforo, alagamento, mato alto e outro) |
| Descrição curta | `<textarea>` | Até 240 caracteres |
| Endereço do chamado | `<input type="text">` | Rua e número |
| Fotos do problema | `<input type="file">` | Imagens, de 1 a 4 arquivos |
| Risco imediato de acidente | `<input type="radio">` em `<fieldset>` | Sim ou Não |
| Nome | `<input type="text">` | Até 100 caracteres |
| Idade | `<input type="number">` | De 1 a 120 |

- Parágrafo de retorno (`#request-feedback`) com `role="status"` e `aria-live="polite"` para informar o resultado da validação.

**Rodapé (`<footer class="site-footer">`):**

- Dividido em três áreas: resumo institucional com ícones de redes sociais em SVG (Instagram, LinkedIn, X, YouTube), mapa do site com links de navegação, informações de plataforma/endereço (Av. Paulista, 1106) e barra inferior de direitos autorais e itens legais.

**Elementos Decorativos Laterais (`.fundo-urbano-lateral`):**

- Dois blocos fixos nas margens esquerda e direita (`.esquerda` e `.direita`) com 4 ícones vetoriais temáticos (prédios, pino de localização, rede conectada e lâmpada urbana) que preenchem o espaço lateral em telas grandes sem interferir na leitura.

**Carregamento de Scripts:**

- Importação de `js/script.js` com o atributo `defer`, garantindo que o DOM esteja carregado antes da execução do JavaScript.

## 2. css/styles.css (Estilização, Layout & Animações)

A folha de estilos utiliza recursos modernos de CSS3 sem dependência de frameworks externos:

**Variáveis CSS (`:root`):**

- Centralização da paleta de cores (`--ink`, `--muted`, `--primary: #3498db`, `--primary-soft`, `--accent: #10b981`, `--line`, `--white`), sombras (`--shadow`), arredondamentos (`--radius`) e rolagem suave nativa (`scroll-behavior: smooth`).
- Tipografia: fonte Inter (carregada pelo Google Fonts), com `system-ui` e `sans-serif` como reserva.

**Reset e Contenção:**

- Uso global de `* { box-sizing: border-box; }` e classe utilitária `.container` utilizando `width: min(1280px, calc(100% - 48px))` e `margin-inline: auto` para centralização fluida.

**Cabeçalho Sticky e Layout de 3 Colunas (Flexbox):**

- `.site-header` utiliza `position: sticky; top: 0; z-index: 5;` com efeito de vidro fosco (`backdrop-filter: blur(14px)`).
- `.header-inner` distribui a logo (`.brand` com `flex: 1`), o menu centralizado (`.main-nav`) e o botão direito (`.header-action` com `flex: 1; justify-content: flex-end;`), mantendo simetria visual.
- Compensação de ancoragem nas seções com `main section { scroll-margin-top: 92px; }` para que o cabeçalho fixo não cubra os títulos ao clicar nos links.

**Fundo com Gradientes Radiais:**

- `.problem-section` combina dois `radial-gradient` sutis nas cores verde e azul sobre o fundo branco para criar profundidade visual.

**Motor do Carrossel 3D:**

- `.carousel-scene` define a profundidade de campo com `perspective: 1200px` e calcula o raio dinamicamente via variável `--carousel-radius: clamp(112px, 30vw, 380px)`.
- `.carousel` ativa o espaço tridimensional com `transform-style: preserve-3d` e executa a rotação contínua (`@keyframes rotate-carousel`) durante 32s em loop infinito.
- `.carousel-image` posiciona cada foto no espaço 3D usando a variável injetada pelo JS (`rotateY(var(--angle)) translateZ(var(--carousel-radius))`), oculta o verso com `backface-visibility: hidden` e adiciona reflexo inferior sutil com `-webkit-box-reflect`.

**Flexbox e Seções de Conteúdo:**

- `.section-layout` utiliza Flexbox (`display: flex`) para alinhar os cartões de ícones aos textos, com `flex: 1` na coluna de texto.
- `.video-frame` utiliza `aspect-ratio: 16 / 9` para manter a proporção exata do vídeo em qualquer largura de tela.
- `.footer-main` utiliza Flexbox com `flex-wrap: wrap` e `flex: 1 1 220px` em cada coluna, que quebram para baixo em telas pequenas.
- O `display: grid` é usado apenas em componentes pequenos, como a centralização de ícones, a lista do rodapé e o empilhamento dos campos do formulário.

**Formulário de Solicitação:**

- `.request-dialog` define a largura máxima, o arredondamento (`--radius`) e a sombra da janela, e `::backdrop` aplica fundo escuro com desfoque.
- Campos com borda, arredondamento e estados `:focus-visible` com contorno na cor de destaque.
- Mensagens de retorno coloridas por estado: `data-state="error"` e `data-state="success"`.

**Elementos Laterais Decorativos:**

- `.fundo-urbano-lateral` utiliza `position: fixed`, `opacity: 0.12` e `pointer-events: none` (para não bloquear cliques), sendo ocultado automaticamente em telas menores que 1024px.

**Responsividade e Acessibilidade de Movimento:**

- **Media Queries (`@media`):** breakpoints em 1024px, 760px, 480px e 420px adaptam as colunas para layout vertical, ajustam a tipografia fluida com `clamp()` e redimensionam o raio do carrossel 3D para smartphones.
- **Preferência de Movimento Reduzido:** bloco `@media (prefers-reduced-motion: reduce)` desativa automaticamente a rotação do carrossel e as transições para usuários com sensibilidade a movimento.

## 3. js/script.js (Interatividade & Manipulação do DOM)

O arquivo JavaScript gerencia a geração dinâmica da galeria 3D e o formulário de solicitação:

**Estrutura de Dados (`slides`):**

- Array de objetos contendo 8 registros de problemas urbanos, cada um mapeando o caminho da imagem (`src`) na pasta `imagens/` e sua descrição acessível (`alt`).

**Renderização Dinâmica:**

- Seleciona o elemento `#carousel-track` via `document.querySelector`.
- Itera sobre o array `slides` utilizando `.forEach((slide, index) => ...)`, criando elementos `<img>` nativos (`document.createElement("img")`).
- Distribui cada imagem igualmente ao redor do círculo 3D, injetando a posição diretamente na variável CSS `--angle` via `image.style.setProperty("--angle", ...)` e anexando cada imagem ao carrossel com `carousel.append(image)`.

**Formulário de Solicitação:**

- Abre a janela modal com `showModal()` ao clicar no botão do cabeçalho e a fecha com `close()` pelos botões "Cancelar" e "×".
- No envio, usa `event.preventDefault()` e confere os campos de texto e a descrição com `trim()`, bloqueando valores vazios ou formados apenas por espaços.
- Valida a quantidade de fotos: mínimo de 1 e máximo de 4, usando `setCustomValidity`.
- Usa `reportValidity()` para exibir as mensagens de erro e escreve o resultado no parágrafo `#request-feedback` por meio de `textContent` e do atributo `dataset.state`.

## Como Executar

Não há dependências nem etapa de build. Basta clonar o repositório e abrir o arquivo `index.html` em um navegador, ou acessar o site publicado pelo link no início deste documento. A fonte Inter depende de conexão com a internet; sem ela, o navegador usa uma fonte do sistema.

## Versionamento

- Branch principal: `main`.
- <!-- Manter esta linha só se for verdade quando entregarem: -->As novas funcionalidades são desenvolvidas em branches próprias e mescladas na `main` por Pull Request.
- Todos os integrantes participam por meio de commits no repositório.

## Uso de Inteligência Artificial

O uso de ferramentas de inteligência artificial neste projeto está declarado no arquivo [`AI.md`](AI.md).
