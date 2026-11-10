# SmartCidadão

> Conectando cidadãos e gestão pública para construir cidades mais inteligentes, ágeis e seguras.

O **SmartCidadão** é uma proposta de plataforma de zeladoria urbana: um canal simples para o cidadão relatar problemas do bairro (buracos, falhas de iluminação, alagamentos, fios soltos, lixo acumulado) e uma fila de priorização automática para que a prefeitura atenda primeiro os casos mais críticos.

Este repositório contém o **protótipo do site de apresentação** do projeto, feito com HTML, CSS e JavaScript puros, sem frameworks nem etapa de build.

## Status do projeto

🚧 **Protótipo inicial.** O site institucional está navegável; a plataforma em si (abertura de chamados, back-end e algoritmo de priorização) ainda não foi implementada. Veja [Próximos passos](#próximos-passos).

## Páginas

| Página | Arquivo | Conteúdo |
| --- | --- | --- |
| O Problema | `index.html` | Página inicial com carrossel 3D de problemas urbanos e vídeo sobre reclamações de buracos na Prefeitura de São Paulo |
| Tecnologia | `tecnologia.html` | Ferramentas previstas para o projeto: HTML, CSS, JavaScript, Python e SQL |
| Objetivos | `objetivos.html` | Automatizar a triagem de solicitações e otimizar o uso dos recursos públicos |
| Público-alvo | `publico.html` | Cidadãos que relatam problemas e prefeituras que recebem os dados organizados |
| Benefícios | `beneficios.html` | Resolução mais rápida de casos críticos e menos burocracia para a população |

## Funcionalidades já implementadas

- **Carrossel 3D giratório** na página inicial, montado dinamicamente pelo `script.js` a partir de uma lista de imagens e animado só com CSS (`transform-style: preserve-3d`).
- **Barra de pesquisa** no cabeçalho de todas as páginas: digite uma palavra-chave (`problema`, `tecnologia`, `objetivo`, `público` ou `benefício`) para ir direto à página correspondente.
- **Vídeo incorporado** do YouTube com carregamento sob demanda (`loading="lazy"`).
- **Cabeçalho fixo** com navegação e destaque da página atual.
- **Rodapé completo** com mapa do site, seção da plataforma e informações legais.
- **Layout responsivo**, com ajustes para telas de até 1024 px, 760 px e 420 px.
- **Acessibilidade**: HTML semântico, atributos `aria-*`, textos alternativos nas imagens, foco visível e respeito à preferência `prefers-reduced-motion` (o carrossel para de girar).
- **Identidade visual** definida por variáveis CSS (azul `#3498db` e verde `#10b981`) e ícones em SVG embutido, sem dependências externas.

## Tecnologias

| Camada | Tecnologia | Situação |
| --- | --- | --- |
| Interface | HTML5, CSS3, JavaScript | ✅ Em uso |
| Back-end | Python | 📌 Planejado |
| Banco de dados | SQL | 📌 Planejado |

## Como executar

Não há dependências para instalar. Clone o repositório e abra o `index.html` no navegador:

```bash
git clone https://github.com/gabrielmorone75/Smart-Cidadao-qa.git
```

```bash
cd Smart-Cidadao-qa
```

Se preferir servir os arquivos por um servidor local:

```bash
python3 -m http.server 8000
```

Depois acesse <http://localhost:8000>.

## Estrutura do projeto

```
Smart-Cidadao-qa/
├── index.html        # Página inicial (O Problema)
├── tecnologia.html   # Tecnologia
├── objetivos.html    # Objetivos
├── publico.html      # Público-alvo
├── beneficios.html   # Benefícios
├── styles.css        # Estilos de todas as páginas
├── script.js         # Montagem do carrossel 3D
└── imagens/          # Fotos usadas no carrossel
```

## Histórico

- **07/11/2026** — Protótipo inicial do site.
- **08/11/2026** — Alteração do nome do projeto para SmartCidadão.
- **09/11/2026** — Cabeçalho com a mesma cor do rodapé; imagem de fios soltos adicionada ao carrossel; barra de pesquisa funcional na página inicial e depois nas demais páginas; ícones urbanos decorativos nas laterais.

## Próximos passos

- [ ] Formulário para **abrir um chamado** com descrição, foto e localização.
- [ ] Back-end em **Python** com banco de dados **SQL** para registrar as solicitações.
- [ ] **Algoritmo de priorização** que cruza volume e gravidade dos chamados para ordenar a fila automaticamente.
- [ ] Painel para gestores e equipes operacionais da prefeitura.
- [ ] Ativar os links do rodapé (Portal da Prefeitura, Central de Ajuda, Painel de Transparência, redes sociais).
- [ ] Unificar o código da barra de pesquisa no `script.js`, hoje repetido em cada página.

## Autores

- Rafael Farias Feitosa
- mtheus3391
