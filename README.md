# SmartCidadão

> Conectando cidadãos e gestão pública para construir cidades mais inteligentes, ágeis e seguras.

O **SmartCidadão** é uma proposta de plataforma de zeladoria urbana: um canal simples para o cidadão relatar problemas do bairro (buracos, falhas de iluminação, alagamentos, fios soltos, lixo acumulado) e uma fila de priorização automática para que a prefeitura atenda primeiro os casos mais críticos.

Este repositório contém:

- o **protótipo do site de apresentação** do projeto, feito com HTML, CSS e JavaScript puros, sem frameworks nem etapa de build;
- um **protótipo em Python do fluxo de abertura de chamado**, que roda no terminal.

## Status do projeto

🚧 **Protótipo inicial.** O site institucional está navegável e o fluxo de abertura de chamado já existe como programa de terminal em Python. As duas partes ainda não estão ligadas: o site não envia chamados, nada é salvo em banco de dados e o algoritmo de priorização não foi implementado. Veja [Próximos passos](#próximos-passos).

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

## Protótipo do back-end (terminal)

O arquivo `backend/chamados.py` simula o atendimento ao cidadão em modo texto:

1. Pede **nome, e-mail e idade** de quem está relatando.
2. Pergunta o **tipo da ocorrência**: *Reclamação* ou *Incidente*.
3. Mostra as **categorias** do tipo escolhido e, em seguida, os **problemas** de cada categoria.
4. Coleta **endereço, descrição e horário** do problema.
5. Exibe um **resumo do chamado**.

Opções inválidas no menu são recusadas e a pergunta é repetida.

| Tipo | Categorias | Problemas cadastrados |
| --- | --- | --- |
| Reclamação | 8 (limpeza urbana, infraestrutura, iluminação, transporte, meio ambiente, saúde, fiscalização, espaços públicos) | 35 |
| Incidente | 7 (água e saneamento, energia elétrica, vias públicas, arborização, trânsito, equipamentos públicos, defesa civil) | 37 |

**Limitações atuais:** o chamado só é exibido na tela e se perde ao fechar o programa; nome, e-mail e idade não entram no chamado; os campos de texto não são validados; e o comando de limpar a tela (`cls`) só funciona no Windows.

## Tecnologias

| Camada | Tecnologia | Situação |
| --- | --- | --- |
| Interface | HTML5, CSS3, JavaScript | ✅ Em uso |
| Back-end | Python | 🧪 Protótipo em terminal |
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

Para testar o protótipo de abertura de chamado (requer Python 3):

```bash
python backend/chamados.py
```

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
├── imagens/          # Fotos usadas no carrossel
└── backend/
    └── chamados.py   # Protótipo em terminal da abertura de chamado
```

## Histórico

- **07/11/2026** — Protótipo inicial do site.
- **08/11/2026** — Alteração do nome do projeto para SmartCidadão.
- **09/11/2026** — Cabeçalho com a mesma cor do rodapé; imagem de fios soltos adicionada ao carrossel; barra de pesquisa funcional na página inicial e depois nas demais páginas; ícones urbanos decorativos nas laterais.
- **10/11/2026** — README e protótipo em Python do fluxo de abertura de chamado.

## Próximos passos

- [ ] Formulário no site para **abrir um chamado** com descrição, foto e localização.
- [ ] Transformar o protótipo de terminal em uma **API em Python** (por exemplo, Flask ou FastAPI), para o site conseguir enviar os chamados.
- [ ] Salvar os chamados em um banco de dados **SQL**, incluindo os dados de quem relatou.
- [ ] Validar os campos (e-mail, horário, campos vazios) e registrar data e hora automaticamente.
- [ ] **Algoritmo de priorização** que cruza volume e gravidade dos chamados para ordenar a fila automaticamente.
- [ ] Painel para gestores e equipes operacionais da prefeitura.
- [ ] Ativar os links do rodapé (Portal da Prefeitura, Central de Ajuda, Painel de Transparência, redes sociais).
- [ ] Unificar o código da barra de pesquisa no `script.js`, hoje repetido em cada página.

## Autores

- Rafael Farias Feitosa
- mtheus3391
