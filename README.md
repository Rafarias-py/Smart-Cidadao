## SmartCidadão — Zeladoria Urbana Inteligente

O SmartCidadão é uma Landing Page institucional e interativa projetada para conectar cidadãos e gestão pública, simplificando o relato de problemas urbanos (como buracos nas vias, falhas na iluminação, alagamentos e descarte irregular de lixo) e demonstrando como a tecnologia otimiza o direcionamento das equipes de manutenção das prefeituras.

## Visão Geral do Projeto

Muitos problemas cotidianos nas cidades demoram semanas para serem resolvidos devido a canais burocráticos e triagens manuais. O SmartCidadão apresenta uma proposta de sistema ágil onde a população registra ocorrências de forma simples e um algoritmo inteligente organiza uma fila de priorização automática com base no volume e na gravidade dos chamados.

A aplicação foi consolidada em uma arquitetura Single-Page / Landing Page com navegação por âncoras suaves, recursos visuais em 3D, elementos multimídia incorporados e design totalmente responsivo.

## Estrutura de Arquivos

SmartCidadão/
├── imagens/             # Diretório contendo as fotografias dos problemas urbanos
│   ├── buraco.jpg
│   ├── buraco2.jpg
│   ├── arvore-caida.jpeg
│   ├── enchentes2.jpg
│   ├── fiossoltos.jpg
│   ├── Lixo, no centro.jpg
│   ├── moradores-de-rua.jpg
│   └── poda de arvore.jpg
├── index.html           # Estrutura semântica completa da Landing Page
├── styles.css           # Folha de estilos, variáveis CSS, animações 3D e responsividade
├── script.js            # Lógica de renderização dinâmica do carrossel 3D
└── README.md            # Documentação técnica detalhada do projeto



## Análise Técnica Detalhada por Arquivo

Abaixo está o detalhamento completo de tudo o que foi utilizado na construção de cada arquivo do projeto:

## 1. index.html (Estrutura Semântica & Acessibilidade)

O arquivo HTML foi construído utilizando HTML5 Semântico e boas práticas de Acessibilidade Web (WAI-ARIA):

Metadados e Configuração Inicial (<head>):

Declaração <!doctype html> e atributo lang="pt-BR" para leitura correta por motores de busca e leitores de tela.

<meta charset="UTF-8"> e <meta name="viewport" content="width=device-width, initial-scale=1.0"> para suporte a acentuação e adaptação a dispositivos móveis.

Cabeçalho Fixo (<header class="site-header">):

Identidade Visual (.brand): Logotipo com ícone vetorial inline (<svg>) representando um escudo com sinal de verificação.

Navegação Principal (<nav class="main-nav">): Links de ancoragem interna (#problema, #tecnologia, #objetivos, #publico, #beneficios) com aria-label="Navegação principal".

Ação Principal (.header-action): Botão de destaque (Faça sua Solicitação) posicionado à direita para conversão direta.

Conteúdo Principal (<main>):

Seção 1 — O Problema (#problema):

Introdução textual com hierarquia de títulos (<h1> com destaque em <span>) e subtítulo categorizador (.eyebrow).

Container do Carrossel (<div class="carousel-scene">): Região demarcada com role="region" e aria-label, contendo a trilha #carousel-track populada via JavaScript.

Seção de Vídeo (<section class="video-section">): Incorporação responsiva (<iframe>) de reportagem do YouTube com carregamento otimizado (loading="lazy").

Seções 2 a 5 — Conteúdo Institucional (#tecnologia, #objetivos, #publico, #beneficios):

Estruturadas em grid de duas colunas (.section-layout), alternando fundos claros e suaves (.content-section e .content-section.soft).

Cada seção conta com um cartão de ícone vetorial exclusivo (.section-icon) criado diretamente com primitivas <svg> (<rect>, <circle>, <path>), ocultos para leitores de tela via aria-hidden="true" para evitar redundância.

Rodapé (<footer class="site-footer">):

Dividido em três áreas: resumo institucional com ícones de redes sociais em SVG (Instagram, LinkedIn, X, YouTube), mapa do site com links de navegação, informações de plataforma/endereço (Av. Paulista, 1106) e barra inferior de direitos autorais e links legais.

Elementos Decorativos Laterais (.fundo-urbano-lateral):

Dois blocos fixos nas margens esquerda e direita (.esquerda e .direita) com 4 ícones vetoriais temáticos (prédios, pino de localização, rede conectada e lâmpada urbana) que preenchem o espaço lateral em telas grandes sem interferir na leitura.

Carregamento de Scripts:

Importação do script.js com o atributo defer, garantindo que o DOM esteja completamente carregado antes da execução do JavaScript.

## 2. styles.css (Estilização, Layout & Animações)

A folha de estilos utiliza recursos modernos de CSS3 sem dependência de frameworks externos:

Design Tokens (:root):

Centralização de paleta de cores (--ink, --muted, --primary: #3498db, --primary-soft, --accent: #10b981, --line, --white), sombras (--shadow), arredondamentos (--radius), tipografia (Inter, system-ui, sans-serif) e rolagem suave nativa (scroll-behavior: smooth).

Reset e Contenção:

Uso global de * { box-sizing: border-box; } e classe utilitária .container utilizando width: min(1280px, calc(100% - 48px)) e margin-inline: auto para centralização fluida.

Cabeçalho Sticky e Layout de 3 Colunas:

.site-header utiliza position: sticky; top: 0; z-index: 5; com efeito de vidro fosco (backdrop-filter: blur(14px)).

.header-inner distribui a logo (.brand com flex: 1), o menu centralizado (.main-nav) e o botão direito (.header-action com flex: 1; justify-content: flex-end;) mantendo simetria visual.

Compensação de ancoragem nas seções com main section { scroll-margin-top: 92px; } para que o cabeçalho fixo não cubra os títulos ao clicar nos links.

Fundo com Gradientes Radiais:

.problem-section combina dois radial-gradient sutis nas cores verde e azul sobre o fundo branco para criar profundidade visual.

Motor do Carrossel 3D:

.carousel-scene define a profundidade de campo com perspective: 1200px e calcula o raio dinamicamente via variável --carousel-radius: clamp(112px, 30vw, 380px).

.carousel ativa o espaço tridimensional com transform-style: preserve-3d e executa a rotação contínua (@keyframes rotate-carousel) durante 32s em loop infinito.

.carousel-image posiciona cada foto no espaço 3D usando a variável injetada pelo JS (rotateY(var(--angle)) translateZ(var(--carousel-radius))), oculta o verso com backface-visibility: hidden e adiciona reflexo inferior sutil com -webkit-box-reflect.

Grids e Seções de Conteúdo:

.section-layout utiliza CSS Grid (grid-template-columns: 170px minmax(0, 1fr)) para alinhar os cartões de ícones aos textos.

.video-frame utiliza aspect-ratio: 16 / 9 para manter a proporção exata do vídeo em qualquer largura de tela.

.footer-main utiliza Grid de 3 colunas proporcionais (1.2fr .7fr 1fr).

Elementos Laterais Decorativos:

.fundo-urbano-lateral utiliza position: fixed, opacity: 0.12 e pointer-events: none (para não bloquear cliques), sendo ocultado automaticamente em telas menores que 1024px.

Responsividade e Acessibilidade de Movimento:

Media Queries (@media): Breakpoints em 1024px, 760px e 420px adaptam grids para coluna única, ajustam tipografia fluida com clamp() e redimensionam o raio do carrossel 3D para smartphones.

Preferência de Movimento Reduzido: Bloco @media (prefers-reduced-motion: reduce) desativa automaticamente a rotação do carrossel e transições para usuários com sensibilidade a movimento.

## 3. script.js (Interatividade & Manipulação do DOM)

O arquivo JavaScript gerencia a geração dinâmica da galeria 3D:

Estrutura de Dados (slides):

Array de objetos contendo 8 registros de problemas urbanos, cada um mapeando o caminho da imagem (src) na pasta imagens/ e sua descrição acessível (alt).

Renderização Dinâmica:

Seleciona o elemento #carousel-track via document.querySelector.

Itera sobre o array slides utilizando .forEach((slide, index) => ...), criando elementos <img> nativos (document.createElement("img")).

Distribui cada imagem igualmente ao redor do círculo 3D, injetando a posição diretamente na variável CSS --angle via image.style.setProperty("--angle", ...) e anexando cada imagem ao carrossel com carousel.append(image).