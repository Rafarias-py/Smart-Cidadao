import os
os.system("cls")


print("Olá, seja muito bem vindo(a) ao Smart cidadão! \nAqui você pode sinalizar incidentes ou reclamações que encontre pela cidade, iremos redirecionar esses inconvenientes para a prefeitura para que seja atendido da melhor maneira ! \nAntes de iniciarmos, precisamos de alguns dados:")
nome = input("Nome: ")
email = input("E-mail: ")
idade = input("Idade: ")
print(f"Perfeito, com esses dados podemos iniciar seu atendimento {nome}!")



# Categorias, subcategorias e problemas
menu = {
    "Reclamação": {
        "Limpeza urbana": [
            "Coleta de lixo irregular",
            "Acúmulo de lixo em vias públicas",
            "Descarte irregular de entulho",
            "Falta de limpeza em terrenos públicos",
            "Mau cheiro em espaços públicos"
        ],
        "Infraestrutura urbana": [
            "Buracos nas ruas",
            "Calçadas danificadas",
            "Pavimentação irregular",
            "Bueiros sem manutenção",
            "Falta de acessibilidade nas calçadas"
        ],
        "Iluminação pública": [
            "Lâmpada queimada",
            "Iluminação insuficiente",
            "Luminária funcionando irregularmente"
        ],
        "Transporte público": [
            "Atraso de ônibus",
            "Falta de linhas de transporte",
            "Ponto de ônibus danificado",
            "Falta de cobertura em pontos de ônibus",
            "Problemas de acessibilidade no transporte"
        ],
        "Meio ambiente": [
            "Poluição sonora",
            "Poluição ambiental",
            "Desmatamento irregular",
            "Queimadas",
            "Descarte irregular de resíduos"
        ],
        "Saúde pública": [
            "Falta de atendimento em unidades de saúde",
            "Demora no atendimento",
            "Falta de medicamentos",
            "Problemas de higiene em unidades públicas"
        ],
        "Segurança e fiscalização": [
            "Veículos abandonados",
            "Estacionamento irregular",
            "Comércio irregular em vias públicas",
            "Perturbação do sossego"
        ],
        "Espaços públicos": [
            "Praças malconservadas",
            "Parques sem manutenção",
            "Equipamentos públicos danificados",
            "Falta de manutenção em áreas de lazer"
        ]
    },

    "Incidente": {
        "Água e saneamento": [
            "Cano estourado",
            "Vazamento de água na rua",
            "Esgoto a céu aberto",
            "Entupimento da rede de esgoto",
            "Bueiro transbordando",
            "Alagamento por problemas de drenagem"
        ],
        "Energia elétrica e iluminação": [
            "Poste caído",
            "Fiação elétrica exposta",
            "Fiação caída na rua",
            "Curto-circuito em equipamento público",
            "Poste soltando faíscas",
            "Transformador danificado"
        ],
        "Infraestrutura e vias públicas": [
            "Cratera na pista",
            "Desmoronamento de calçada",
            "Queda de muro em área pública",
            "Afundamento de asfalto",
            "Árvore caída bloqueando a via",
            "Tampa de bueiro quebrada ou ausente"
        ],
        "Meio ambiente e arborização": [
            "Árvore prestes a cair",
            "Galhos caídos sobre vias",
            "Incêndio em área pública",
            "Vazamento de produtos químicos",
            "Animal silvestre em situação de risco"
        ],
        "Trânsito e mobilidade": [
            "Semáforo desligado",
            "Semáforo com defeito",
            "Placa de trânsito caída",
            "Sinalização danificada",
            "Obstáculo bloqueando a via"
        ],
        "Equipamentos públicos": [
            "Playground quebrado com risco de acidente",
            "Estrutura de praça danificada",
            "Telhado de prédio público danificado",
            "Portão de equipamento público danificado"
        ],
        "Defesa civil": [
            "Enchente",
            "Deslizamento de terra",
            "Rachaduras com risco estrutural",
            "Desabamento",
            "Queda de árvores sobre imóveis"
        ]
    }
}


# Função para exibir as opções e receber uma escolha
def escolher_opcao(titulo, opcoes):

    while True:
        print("\n" + titulo)

        for i, opcao in enumerate(opcoes, start=1):
            print(f"{i} - {opcao}")

        escolha = input("Digite o número da opção: ")

        if escolha.isdigit():
            escolha = int(escolha)

            if 1 <= escolha <= len(opcoes):
                return opcoes[escolha - 1]

        print("Opção inválida! Tente novamente.")


# 1 - Escolher categoria
categoria = escolher_opcao(
    "Qual é o tipo da ocorrência?",
    list(menu.keys())
)


# 2 - Escolher subcategoria
subcategorias = list(menu[categoria].keys())

subcategoria = escolher_opcao(
    "Selecione a categoria específica:",
    subcategorias
)


# 3 - Escolher problema
problema = escolher_opcao(
    "Qual problema você encontrou?",
    menu[categoria][subcategoria]
)


# 4 - Coletar detalhes da ocorrência
print("\nAgora precisamos de algumas informações sobre o problema.")

endereco = input("Informe o endereço completo do problema: ")

descricao = input("Descreva detalhadamente o que aconteceu: ")

horario = input("Informe o horário em que encontrou o problema (HH:MM): ")


# 5 - Organizar todos os dados
chamado = {
    "categoria": categoria,
    "subcategoria": subcategoria,
    "problema": problema,
    "endereco": endereco,
    "descricao": descricao,
    "horario": horario
}


# 6 - Exibir resumo do chamado
print("\n========== RESUMO DO CHAMADO ==========")

for campo, valor in chamado.items():
    print(f"{campo.capitalize()}: {valor}")

print("=======================================")
print("Chamado registrado para processamento!")
