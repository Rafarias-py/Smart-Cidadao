## SmartCidadão — Zeladoria Urbana Inteligente

O SmartCidadão é uma plataforma web projetada para conectar cidadãos e gestão pública, simplificando o relato de problemas urbanos (como buracos nas vias, falhas na iluminação, alagamentos e descarte irregular de lixo) e otimizando o direcionamento das equipes de manutenção das prefeituras.

## Sobre o Projeto

Muitos problemas cotidianos nas cidades demoram semanas para serem resolvidos devido a canais burocráticos e triagens manuais. O SmartCidadão resolve esse gargalo propondo um sistema ágil onde a população registra ocorrências de forma simples e um algoritmo inteligente organiza uma fila de priorização automática com base no volume e na gravidade dos chamados.

## Funcionalidades e Estrutura

Navegação Intuitiva & Barra de Pesquisa: Menu superior fixo com barra de busca funcional em JavaScript que direciona o usuário rapidamente para as seções do portal.

Carrossel 3D Interativo: Galeria dinâmica na página inicial ilustrando os principais desafios enfrentados nas vias urbanas.

Conteúdo Informativo: Seções dedicadas explicando o problema, a tecnologia proposta, os objetivos, o público-alvo (cidadãos e prefeituras) e os benefícios para a cidade.

Design Responsivo e Temático: Interface limpa com elementos visuais urbanos sutis nas laterais e adaptação para diferentes tamanhos de tela.

## Tecnologias Utilizadas

Front-end (Implementado)

HTML5: Estruturação semântica das páginas e acessibilidade (aria-labels).

CSS3: Estilização moderna com variáveis CSS, Flexbox, Grid Layout, animações 3D e design responsivo.

JavaScript (Vanilla): Manipulação do DOM para criação dinâmica do carrossel de imagens e lógica de redirecionamento da barra de pesquisa.

Back-end (Arquitetura Proposta)

Python & SQL: Processamento de dados e algoritmo de priorização automática de chamados.

## Estrutura de Arquivos

Inteligente-Cidadão/
├── imagens/             # Recursos visuais e fotos dos problemas urbanos
├── index.html           # Página inicial ("O Problema", carrossel 3D e vídeo)
├── tecnologia.html      # Detalhes sobre a arquitetura e ferramentas do sistema
├── objetivos.html       # Missão e metas de otimização urbana
├── publico.html         # Público-alvo (população e gestores públicos)
├── beneficios.html      # Impactos positivos e redução de burocracia
├── styles.css           # Folha de estilos global e responsividade
├── script.js            # Lógica do carrossel 3D
└── README.md            # Documentação do projeto


## Como Executar o Projeto Localmente

Clone o repositório:

git clone https://github.com/Rafarias-py/Inteligente-Cidadão.git


Acesse a pasta do projeto:

cd Inteligente-Cidadão


Abra no navegador:

Você pode abrir o arquivo index.html diretamente no seu navegador de preferência, ou utilizar a extensão Live Server no Visual Studio Code para rodar um servidor local.

## Licença

© 2026 SmartCidadão. Projeto desenvolvido para fins educacionais e de inovação em zeladoria urbana.