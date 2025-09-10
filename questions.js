// Banco de Perguntas DETRAN-GO
const questionsBank = [
    {
        id: 1,
        question: "Qual é a velocidade máxima permitida para automóveis em vias urbanas, quando não houver sinalização regulamentadora?",
        options: [
            "40 km/h",
            "50 km/h",
            "60 km/h",
            "70 km/h"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "Segundo o CTB, a velocidade máxima em vias urbanas é de 50 km/h quando não há sinalização específica."
    },
    {
        id: 2,
        question: "O que significa a placa de trânsito com fundo azul e símbolos brancos?",
        options: [
            "Placa de regulamentação",
            "Placa de advertência",
            "Placa de indicação",
            "Placa de obras"
        ],
        correct: 2,
        category: "sinalizacao",
        explanation: "Placas com fundo azul e símbolos brancos são placas de indicação, que fornecem informações úteis ao condutor."
    },
    {
        id: 3,
        question: "Em uma via de mão dupla sem sinalização, a ultrapassagem deve ser feita:",
        options: [
            "Sempre pela direita",
            "Sempre pela esquerda",
            "Por qualquer lado",
            "Somente em locais permitidos"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "A ultrapassagem deve sempre ser feita pela esquerda, garantindo maior segurança no trânsito."
    },
    {
        id: 4,
        question: "Qual é a distância mínima que deve ser mantida do veículo da frente?",
        options: [
            "1 metro por cada 10 km/h de velocidade",
            "2 metros por cada 10 km/h de velocidade",
            "3 metros independente da velocidade",
            "5 metros independente da velocidade"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "A regra de segurança estabelece 2 metros de distância para cada 10 km/h de velocidade."
    },
    {
        id: 5,
        question: "O uso do cinto de segurança é obrigatório para:",
        options: [
            "Apenas o condutor",
            "Condutor e passageiro do banco da frente",
            "Todos os ocupantes do veículo",
            "Apenas em viagens longas"
        ],
        correct: 2,
        category: "legislacao",
        explanation: "O cinto de segurança é obrigatório para todos os ocupantes do veículo, conforme determina o CTB."
    },
    {
        id: 6,
        question: "Em caso de acidente com vítima, a primeira providência é:",
        options: [
            "Remover a vítima do local",
            "Sinalizar o local do acidente",
            "Verificar se a vítima está consciente",
            "Chamar o seguro"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "A primeira providência é sinalizar o local para evitar novos acidentes e proteger as vítimas."
    },
    {
        id: 7,
        question: "A placa R-1 (círculo vermelho com faixa branca) significa:",
        options: [
            "Proibido estacionar",
            "Parada obrigatória",
            "Proibido entrar",
            "Velocidade máxima"
        ],
        correct: 2,
        category: "sinalizacao",
        explanation: "A placa R-1 indica 'Parada Obrigatória', exigindo que o veículo pare completamente."
    },
    {
        id: 8,
        question: "O condutor habilitado que dirigir sob influência de álcool comete:",
        options: [
            "Infração leve",
            "Infração média",
            "Infração grave",
            "Infração gravíssima"
        ],
        correct: 3,
        category: "legislacao",
        explanation: "Dirigir sob influência de álcool é infração gravíssima, com suspensão da CNH."
    },
    {
        id: 9,
        question: "Em uma rotatória (rótula), tem preferência:",
        options: [
            "Quem vem da direita",
            "Quem vem da esquerda",
            "Quem já está na rotatória",
            "O veículo maior"
        ],
        correct: 2,
        category: "legislacao",
        explanation: "Na rotatória, tem preferência quem já está circulando dentro dela."
    },
    {
        id: 10,
        question: "O farol baixo deve ser usado:",
        options: [
            "Apenas à noite",
            "Durante o dia em rodovias",
            "Apenas em túneis",
            "Somente quando chove"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O farol baixo deve ser usado durante o dia em rodovias para aumentar a visibilidade."
    },
    {
        id: 11,
        question: "A faixa amarela contínua no meio da pista indica:",
        options: [
            "Ultrapassagem permitida",
            "Ultrapassagem proibida",
            "Estacionamento permitido",
            "Mudança de faixa livre"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A faixa amarela contínua proíbe ultrapassagem e mudança de faixa."
    },
    {
        id: 12,
        question: "Em caso de pane no veículo, deve-se:",
        options: [
            "Parar imediatamente na pista",
            "Sinalizar e encostar no acostamento",
            "Continuar até a próxima cidade",
            "Ligar o pisca-alerta apenas"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Em caso de pane, deve-se sinalizar adequadamente e encostar no acostamento com segurança."
    },
    {
        id: 13,
        question: "A validade da CNH categoria B é de:",
        options: [
            "3 anos",
            "5 anos",
            "10 anos",
            "Varia conforme a idade"
        ],
        correct: 3,
        category: "legislacao",
        explanation: "A validade da CNH varia: 10 anos (até 50 anos), 5 anos (50-70 anos), 3 anos (acima de 70 anos)."
    },
    {
        id: 14,
        question: "O triângulo de segurança deve ser colocado a quantos metros do veículo?",
        options: [
            "20 metros",
            "30 metros",
            "40 metros",
            "50 metros"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "O triângulo deve ser colocado a 30 metros do veículo para alertar outros condutores."
    },
    {
        id: 15,
        question: "Em uma via com ciclofaixa, o condutor deve:",
        options: [
            "Usar a ciclofaixa quando necessário",
            "Respeitar o espaço dos ciclistas",
            "Buzinar para os ciclistas saírem",
            "Trafegar normalmente sobre ela"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "A ciclofaixa é exclusiva para ciclistas e deve ser respeitada pelos condutores."
    },
    {
        id: 16,
        question: "A placa A-2a (curva acentuada à direita) é uma placa de:",
        options: [
            "Regulamentação",
            "Advertência",
            "Indicação",
            "Serviços"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "Placas de advertência (fundo amarelo) alertam sobre condições da via à frente."
    },
    {
        id: 17,
        question: "O que fazer se uma vítima de acidente estiver inconsciente?",
        options: [
            "Dar água para a vítima",
            "Movimentar a vítima",
            "Verificar respiração e pulso",
            "Aplicar medicamentos"
        ],
        correct: 2,
        category: "primeiros_socorros",
        explanation: "Com vítima inconsciente, deve-se verificar sinais vitais sem movimentá-la desnecessariamente."
    },
    {
        id: 18,
        question: "A conversão à esquerda em cruzamento deve ser feita:",
        options: [
            "Antes do centro do cruzamento",
            "Após o centro do cruzamento",
            "Em qualquer ponto",
            "Somente com sinalização"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "A conversão à esquerda deve ser feita após o centro do cruzamento para maior segurança."
    },
    {
        id: 19,
        question: "Em rodovias, a velocidade mínima é:",
        options: [
            "40% da máxima permitida",
            "50% da máxima permitida",
            "60% da máxima permitida",
            "Não há velocidade mínima"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "A velocidade mínima em rodovias é de 50% da velocidade máxima permitida na via."
    },
    {
        id: 20,
        question: "O condutor deve usar o pisca-alerta:",
        options: [
            "Apenas quando o veículo quebrar",
            "Em situações de emergência",
            "Para estacionar em local proibido",
            "Durante chuva forte"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O pisca-alerta deve ser usado em situações de emergência para alertar outros condutores."
    },
    {
        id: 21,
        question: "A distância de seguimento segura em rodovia a 80 km/h é:",
        options: [
            "8 metros",
            "12 metros",
            "16 metros",
            "20 metros"
        ],
        correct: 2,
        category: "direcao_defensiva",
        explanation: "A 80 km/h, a distância segura é de 16 metros (2 metros para cada 10 km/h)."
    },
    {
        id: 22,
        question: "Em caso de derrapagem, o condutor deve:",
        options: [
            "Frear bruscamente",
            "Esterçar no sentido contrário",
            "Esterçar no mesmo sentido da derrapagem",
            "Acelerar para sair da derrapagem"
        ],
        correct: 2,
        category: "direcao_defensiva",
        explanation: "Em derrapagem, deve-se esterçar no mesmo sentido para recuperar o controle do veículo."
    },
    {
        id: 23,
        question: "A placa R-6a significa:",
        options: [
            "Proibido virar à direita",
            "Proibido estacionar",
            "Siga em frente",
            "Proibido retornar"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa R-6a significa 'Proibido estacionar' no local onde está instalada."
    },
    {
        id: 24,
        question: "O exame toxicológico é obrigatório para condutores:",
        options: [
            "De todas as categorias",
            "Categorias C, D e E",
            "Apenas categoria D",
            "Apenas categoria E"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O exame toxicológico é obrigatório para condutores das categorias C, D e E."
    },
    {
        id: 25,
        question: "Em uma hemorragia externa, deve-se:",
        options: [
            "Aplicar torniquete imediatamente",
            "Fazer pressão direta no ferimento",
            "Lavar o ferimento com água",
            "Aplicar pomada no local"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em hemorragia externa, a primeira medida é fazer pressão direta sobre o ferimento."
    },
    {
        id: 26,
        question: "A faixa de pedestres deve ser respeitada:",
        options: [
            "Apenas quando há semáforo",
            "Somente quando há pedestres",
            "Sempre, independente da situação",
            "Apenas em vias movimentadas"
        ],
        correct: 2,
        category: "legislacao",
        explanation: "A faixa de pedestres deve sempre ser respeitada, dando preferência aos pedestres."
    },
    {
        id: 27,
        question: "O condutor deve reduzir a velocidade:",
        options: [
            "Apenas em curvas",
            "Próximo a escolas e hospitais",
            "Somente à noite",
            "Apenas quando chove"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Deve-se reduzir a velocidade próximo a escolas, hospitais e locais de grande circulação de pedestres."
    },
    {
        id: 28,
        question: "A multa por excesso de velocidade superior a 50% é:",
        options: [
            "Infração média",
            "Infração grave",
            "Infração gravíssima",
            "Crime de trânsito"
        ],
        correct: 2,
        category: "legislacao",
        explanation: "Excesso de velocidade superior a 50% é infração gravíssima com suspensão da CNH."
    },
    {
        id: 29,
        question: "Em caso de aquaplanagem, o condutor deve:",
        options: [
            "Frear imediatamente",
            "Acelerar para sair da água",
            "Manter o volante firme e desacelerar",
            "Esterçar bruscamente"
        ],
        correct: 2,
        category: "direcao_defensiva",
        explanation: "Na aquaplanagem, deve-se manter o volante firme e desacelerar gradualmente."
    },
    {
        id: 30,
        question: "A placa de 'Dê a preferência' tem formato:",
        options: [
            "Circular",
            "Triangular",
            "Quadrado",
            "Octogonal"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa 'Dê a preferência' (R-2) tem formato triangular com vértice para baixo."
    },
    {
        id: 31,
        question: "O uso do telefone celular durante a condução:",
        options: [
            "É permitido com fone de ouvido",
            "É proibido em qualquer situação",
            "É permitido apenas para emergências",
            "É permitido se o veículo estiver parado"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O uso do celular é proibido durante a condução, mesmo com fone de ouvido, por ser infração gravíssima."
    },
    {
        id: 32,
        question: "Em uma via com declive acentuado, quem tem preferência?",
        options: [
            "Quem sobe",
            "Quem desce",
            "O veículo maior",
            "Quem chegou primeiro"
        ],
        correct: 0,
        category: "legislacao",
        explanation: "Em declive acentuado, tem preferência o veículo que sobe, pois tem maior dificuldade para reiniciar a marcha."
    },
    {
        id: 33,
        question: "A sinalização horizontal amarela indica:",
        options: [
            "Separação de fluxos opostos",
            "Separação de fluxos no mesmo sentido",
            "Área de estacionamento",
            "Faixa de pedestres"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "A sinalização horizontal amarela separa fluxos de tráfego em sentidos opostos."
    },
    {
        id: 34,
        question: "O condutor deve parar o veículo:",
        options: [
            "Antes da faixa de pedestres",
            "Sobre a faixa de pedestres",
            "Após a faixa de pedestres",
            "Em qualquer lugar da faixa"
        ],
        correct: 0,
        category: "legislacao",
        explanation: "O veículo deve parar antes da faixa de pedestres para não obstruir a passagem."
    },
    {
        id: 35,
        question: "Em caso de fratura, deve-se:",
        options: [
            "Movimentar o membro fraturado",
            "Imobilizar e não movimentar a vítima",
            "Tentar colocar o osso no lugar",
            "Aplicar gelo diretamente no local"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em caso de fratura, deve-se imobilizar o membro e não movimentar a vítima até a chegada do socorro."
    },
    {
        id: 36,
        question: "A luz de freio queimada é considerada:",
        options: [
            "Infração leve",
            "Infração média",
            "Infração grave",
            "Não é infração"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "Luz de freio queimada é infração média, pois compromete a sinalização do veículo."
    },
    {
        id: 37,
        question: "Em rodovias de pista dupla, a ultrapassagem deve ser feita:",
        options: [
            "Por qualquer faixa",
            "Sempre pela faixa da esquerda",
            "Sempre pela faixa da direita",
            "Pela faixa central"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "Em rodovias de pista dupla, a ultrapassagem deve ser feita pela faixa da esquerda."
    },
    {
        id: 38,
        question: "O condutor deve manter distância lateral de:",
        options: [
            "1,0 metro de ciclistas",
            "1,5 metros de ciclistas",
            "2,0 metros de ciclistas",
            "Não há distância mínima"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "Deve-se manter distância lateral mínima de 1,5 metros ao ultrapassar ciclistas."
    },
    {
        id: 39,
        question: "A placa A-21a (semáforo à frente) serve para:",
        options: [
            "Indicar velocidade máxima",
            "Advertir sobre semáforo à frente",
            "Proibir avanço do sinal",
            "Indicar área escolar"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa A-21a adverte sobre a existência de semáforo à frente na via."
    },
    {
        id: 40,
        question: "Em caso de engasgamento, deve-se:",
        options: [
            "Dar água para a vítima",
            "Bater nas costas da vítima",
            "Aplicar a manobra de Heimlich",
            "Colocar o dedo na boca da vítima"
        ],
        correct: 2,
        category: "primeiros_socorros",
        explanation: "Em caso de engasgamento, deve-se aplicar a manobra de Heimlich para desobstruir as vias aéreas."
    },
    {
        id: 41,
        question: "O período de validade da CNH para condutores entre 50 e 70 anos é:",
        options: [
            "3 anos",
            "5 anos",
            "8 anos",
            "10 anos"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "Para condutores entre 50 e 70 anos, a CNH tem validade de 5 anos."
    },
    {
        id: 42,
        question: "A velocidade máxima em vias coletoras é:",
        options: [
            "40 km/h",
            "50 km/h",
            "60 km/h",
            "80 km/h"
        ],
        correct: 2,
        category: "legislacao",
        explanation: "Em vias coletoras, a velocidade máxima é de 60 km/h quando não há sinalização específica."
    },
    {
        id: 43,
        question: "Ao se aproximar de um cruzamento, o condutor deve:",
        options: [
            "Acelerar para passar rapidamente",
            "Reduzir a velocidade e redobrar a atenção",
            "Buzinar para avisar sua presença",
            "Manter a velocidade constante"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Ao se aproximar de cruzamentos, deve-se reduzir a velocidade e redobrar a atenção."
    },
    {
        id: 44,
        question: "A placa R-19 (velocidade máxima permitida) é:",
        options: [
            "Circular com fundo branco",
            "Circular com fundo vermelho",
            "Triangular com fundo amarelo",
            "Retangular com fundo azul"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "A placa R-19 (velocidade máxima permitida) é circular com fundo branco e orla vermelha."
    },
    {
        id: 45,
        question: "Em caso de parada cardíaca, deve-se:",
        options: [
            "Dar respiração boca a boca apenas",
            "Fazer massagem cardíaca apenas",
            "Alternar massagem cardíaca e respiração",
            "Aguardar o socorro chegar"
        ],
        correct: 2,
        category: "primeiros_socorros",
        explanation: "Em parada cardíaca, deve-se alternar 30 compressões torácicas com 2 ventilações."
    },
    {
        id: 46,
        question: "O condutor que não possuir CNH comete:",
        options: [
            "Infração grave",
            "Infração gravíssima",
            "Crime de trânsito",
            "Contravenção penal"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "Dirigir sem CNH é infração gravíssima com multa e apreensão do veículo."
    },
    {
        id: 47,
        question: "Em neblina ou cerração, deve-se:",
        options: [
            "Usar farol alto",
            "Usar farol baixo e pisca-alerta",
            "Acelerar para sair rapidamente",
            "Parar no meio da pista"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Em neblina, deve-se usar farol baixo, pisca-alerta e reduzir a velocidade."
    },
    {
        id: 48,
        question: "A faixa branca tracejada permite:",
        options: [
            "Ultrapassagem proibida",
            "Mudança de faixa permitida",
            "Estacionamento permitido",
            "Parada obrigatória"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A faixa branca tracejada permite mudança de faixa e ultrapassagem com segurança."
    },
    {
        id: 49,
        question: "O condutor deve usar o farol alto:",
        options: [
            "Sempre à noite",
            "Apenas em rodovias escuras",
            "Quando não prejudicar outros condutores",
            "Nunca deve usar"
        ],
        correct: 2,
        category: "legislacao",
        explanation: "O farol alto deve ser usado quando não prejudicar a visão de outros condutores."
    },
    {
        id: 50,
        question: "Em caso de queimadura, deve-se:",
        options: [
            "Aplicar gelo diretamente",
            "Furar as bolhas",
            "Resfriar com água corrente",
            "Aplicar pomada imediatamente"
        ],
        correct: 2,
        category: "primeiros_socorros",
        explanation: "Em queimaduras, deve-se resfriar o local com água corrente por 10-15 minutos."
    },
    {
        id: 51,
        question: "A velocidade máxima permitida em vias arteriais é:",
        options: [
            "50 km/h",
            "60 km/h",
            "70 km/h",
            "80 km/h"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "Em vias arteriais, a velocidade máxima é de 60 km/h quando não há sinalização específica."
    },
    {
        id: 52,
        question: "O que significa a placa R-3 (sentido proibido)?",
        options: [
            "Conversão obrigatória à direita",
            "Sentido proibido",
            "Siga em frente ou à direita",
            "Preferência à direita"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa R-3 indica 'Sentido proibido', proibindo a entrada de veículos na via."
    },
    {
        id: 53,
        question: "Em caso de chuva intensa, o condutor deve:",
        options: [
            "Acelerar para sair rapidamente",
            "Reduzir velocidade e aumentar distância",
            "Manter velocidade normal",
            "Usar apenas pisca-alerta"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Em chuva intensa, deve-se reduzir a velocidade e aumentar a distância de seguimento."
    },
    {
        id: 54,
        question: "Em caso de desmaio, deve-se:",
        options: [
            "Dar água gelada",
            "Colocar a vítima sentada",
            "Elevar as pernas da vítima",
            "Balançar a vítima"
        ],
        correct: 2,
        category: "primeiros_socorros",
        explanation: "Em desmaio, deve-se elevar as pernas da vítima para facilitar o retorno do sangue ao cérebro."
    },
    {
        id: 55,
        question: "A multa por dirigir sem CNH é:",
        options: [
            "R$ 88,38",
            "R$ 195,23",
            "R$ 293,47",
            "R$ 880,41"
        ],
        correct: 3,
        category: "legislacao",
        explanation: "Dirigir sem CNH é infração gravíssima com multa de R$ 880,41 e apreensão do veículo."
    },
    {
        id: 56,
        question: "A placa A-12 (curva em S à direita) indica:",
        options: [
            "Curva acentuada",
            "Curvas sucessivas",
            "Bifurcação",
            "Retorno obrigatório"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa A-12 adverte sobre curvas sucessivas, primeiro à direita depois à esquerda."
    },
    {
        id: 57,
        question: "O condutor deve usar o cinto de segurança:",
        options: [
            "Apenas em rodovias",
            "Somente acima de 60 km/h",
            "Em qualquer situação",
            "Apenas em viagens longas"
        ],
        correct: 2,
        category: "legislacao",
        explanation: "O uso do cinto de segurança é obrigatório em qualquer situação de condução."
    },
    {
        id: 58,
        question: "Em caso de convulsão, deve-se:",
        options: [
            "Segurar a vítima firmemente",
            "Colocar algo na boca da vítima",
            "Proteger a vítima de lesões",
            "Jogar água no rosto"
        ],
        correct: 2,
        category: "primeiros_socorros",
        explanation: "Durante convulsão, deve-se proteger a vítima de lesões, afastando objetos perigosos."
    },
    {
        id: 59,
        question: "A distância mínima para ultrapassagem em rodovia é:",
        options: [
            "100 metros",
            "150 metros",
            "200 metros",
            "Varia com a velocidade"
        ],
        correct: 3,
        category: "direcao_defensiva",
        explanation: "A distância para ultrapassagem varia conforme a velocidade e deve garantir segurança total."
    },
    {
        id: 60,
        question: "A placa R-4a significa:",
        options: [
            "Proibido virar à esquerda",
            "Proibido retornar",
            "Siga em frente",
            "Conversão obrigatória"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "A placa R-4a significa 'Proibido virar à esquerda' no local onde está instalada."
    },
    {
        id: 61,
        question: "O condutor deve manter o veículo à direita da via quando:",
        options: [
            "Apenas em curvas",
            "Somente à noite",
            "Sempre que possível",
            "Apenas em rodovias"
        ],
        correct: 2,
        category: "legislacao",
        explanation: "O condutor deve sempre manter o veículo à direita da via, exceto para ultrapassagens."
    },
    {
        id: 62,
        question: "A placa A-20 (crianças) indica:",
        options: [
            "Área escolar",
            "Parque infantil",
            "Creche próxima",
            "Todas as anteriores"
        ],
        correct: 3,
        category: "sinalizacao",
        explanation: "A placa A-20 adverte sobre área com grande circulação de crianças."
    },
    {
        id: 63,
        question: "Em caso de atropelamento, a primeira providência é:",
        options: [
            "Remover a vítima da pista",
            "Sinalizar o local",
            "Verificar ferimentos",
            "Chamar a polícia"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Primeiro deve-se sinalizar o local para evitar novos acidentes."
    },
    {
        id: 64,
        question: "A velocidade máxima em vias locais é:",
        options: [
            "30 km/h",
            "40 km/h",
            "50 km/h",
            "60 km/h"
        ],
        correct: 0,
        category: "legislacao",
        explanation: "Em vias locais, a velocidade máxima é de 30 km/h."
    },
    {
        id: 65,
        question: "O condutor deve buzinar:",
        options: [
            "Para cumprimentar",
            "Em situações de perigo",
            "Para apressar outros condutores",
            "Ao entrar em túneis"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "A buzina deve ser usada apenas em situações de perigo iminente."
    },
    {
        id: 66,
        question: "A placa R-12 (peso bruto total máximo permitido) é:",
        options: [
            "Circular com números",
            "Retangular azul",
            "Triangular amarela",
            "Octogonal vermelha"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "Placas de regulamentação são circulares, esta indica peso máximo permitido."
    },
    {
        id: 67,
        question: "Em caso de sangramento nasal, deve-se:",
        options: [
            "Inclinar a cabeça para trás",
            "Inclinar a cabeça para frente",
            "Deitar a vítima",
            "Dar água gelada"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em sangramento nasal, inclinar a cabeça para frente e comprimir a narina."
    },
    {
        id: 68,
        question: "A direção defensiva consiste em:",
        options: [
            "Dirigir sempre devagar",
            "Antecipar situações de perigo",
            "Usar sempre o freio",
            "Buzinar constantemente"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Direção defensiva é antecipar e prevenir situações de perigo no trânsito."
    },
    {
        id: 69,
        question: "O estacionamento em fila dupla é:",
        options: [
            "Permitido por 5 minutos",
            "Proibido sempre",
            "Permitido com pisca-alerta",
            "Permitido apenas à noite"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O estacionamento em fila dupla é sempre proibido e constitui infração grave."
    },
    {
        id: 70,
        question: "A placa A-24 (obras na pista) tem cor:",
        options: [
            "Amarela com símbolos pretos",
            "Laranja com símbolos pretos",
            "Vermelha com símbolos brancos",
            "Azul com símbolos brancos"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "Placas de obras são laranja com símbolos pretos para maior visibilidade."
    },
    {
        id: 71,
        question: "A distância de seguimento deve ser:",
        options: [
            "Sempre 2 metros",
            "Proporcional à velocidade",
            "Sempre 10 metros",
            "Não há regra específica"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "A distância deve ser proporcional à velocidade para permitir frenagem segura."
    },
    {
        id: 72,
        question: "Em caso de queimadura, deve-se:",
        options: [
            "Aplicar gelo",
            "Aplicar água fria",
            "Aplicar manteiga",
            "Furar as bolhas"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em queimaduras, aplicar água fria por 10-15 minutos para resfriar o local."
    },
    {
        id: 73,
        question: "A placa R-19 (velocidade máxima permitida) é:",
        options: [
            "Circular vermelha e branca",
            "Triangular amarela",
            "Retangular azul",
            "Quadrada verde"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "A placa R-19 (velocidade máxima permitida) é circular com fundo branco e borda vermelha."
    },
    {
        id: 74,
        question: "O uso do telefone celular ao dirigir:",
        options: [
            "É permitido com viva-voz",
            "É sempre proibido",
            "É permitido apenas para emergências",
            "É permitido em baixa velocidade"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O uso de telefone celular ao dirigir é sempre proibido, mesmo com viva-voz."
    },
    {
        id: 75,
        question: "A aquaplanagem ocorre quando:",
        options: [
            "O pneu perde aderência com o asfalto molhado",
            "O freio falha",
            "O motor superaquece",
            "A direção trava"
        ],
        correct: 0,
        category: "direcao_defensiva",
        explanation: "Aquaplanagem é a perda de aderência do pneu com o solo devido ao acúmulo de água."
    },
    {
        id: 76,
        question: "Em caso de desmaio, deve-se:",
        options: [
            "Dar água à vítima",
            "Elevar as pernas da vítima",
            "Balançar a vítima",
            "Dar tapas no rosto"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em desmaio, elevar as pernas facilita o retorno do sangue ao cérebro."
    },
    {
        id: 77,
        question: "A placa A-13 (pista irregular) adverte sobre:",
        options: [
            "Buraco na pista",
            "Pista escorregadia",
            "Irregularidades no pavimento",
            "Pista em obras"
        ],
        correct: 2,
        category: "sinalizacao",
        explanation: "A placa A-13 adverte sobre irregularidades no pavimento da via."
    },
    {
        id: 78,
        question: "O condutor habilitado na categoria B pode dirigir:",
        options: [
            "Apenas automóveis",
            "Automóveis e caminhonetes até 3.500 kg",
            "Qualquer veículo",
            "Apenas veículos de passeio"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "Categoria B permite conduzir veículos até 3.500 kg e até 8 lugares para passageiros."
    },
    {
        id: 79,
        question: "Em curvas, o condutor deve:",
        options: [
            "Acelerar para vencer a curva",
            "Reduzir a velocidade antes da curva",
            "Frear dentro da curva",
            "Manter a mesma velocidade"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Deve-se reduzir a velocidade antes da curva para manter o controle do veículo."
    },
    {
        id: 80,
        question: "Em caso de fratura exposta, deve-se:",
        options: [
            "Tentar colocar o osso no lugar",
            "Imobilizar sem mexer no osso",
            "Lavar o ferimento",
            "Aplicar pomada"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em fratura exposta, imobilizar sem tentar recolocar o osso no lugar."
    },
    {
        id: 81,
        question: "A ultrapassagem é proibida:",
        options: [
            "Apenas em curvas",
            "Em curvas, lombadas e cruzamentos",
            "Apenas à noite",
            "Apenas em rodovias"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "A ultrapassagem é proibida em locais sem visibilidade como curvas, lombadas e cruzamentos."
    },
    {
        id: 82,
        question: "A placa A-30 (pedestres) indica:",
        options: [
            "Passagem de pedestres",
            "Área de grande circulação de pedestres",
            "Proibido pedestres",
            "Calçada"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa A-30 adverte sobre área com grande circulação de pedestres."
    },
    {
        id: 83,
        question: "Em caso de convulsão, deve-se:",
        options: [
            "Segurar a língua da vítima",
            "Proteger a vítima de ferimentos",
            "Jogar água no rosto",
            "Dar remédios"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Durante convulsão, proteger a vítima de ferimentos e não colocar nada na boca."
    },
    {
        id: 84,
        question: "O condutor deve usar farol baixo:",
        options: [
            "Apenas à noite",
            "Durante o dia em rodovias",
            "Apenas em túneis",
            "Apenas com chuva"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O farol baixo deve ser usado durante o dia em rodovias para maior visibilidade."
    },
    {
        id: 85,
        question: "A técnica de frenagem em piso molhado é:",
        options: [
            "Frear bruscamente",
            "Frear suavemente e progressivamente",
            "Não frear",
            "Usar apenas freio de mão"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Em piso molhado, frear suavemente para evitar travamento das rodas."
    },
    {
        id: 86,
        question: "A placa R-6a (proibido estacionar) vale:",
        options: [
            "24 horas por dia",
            "Apenas durante o dia",
            "Conforme indicação complementar",
            "Apenas à noite"
        ],
        correct: 2,
        category: "sinalizacao",
        explanation: "A validade da placa R-6a depende da placa complementar de período."
    },
    {
        id: 87,
        question: "Em caso de parada cardíaca, deve-se:",
        options: [
            "Dar água à vítima",
            "Fazer massagem cardíaca",
            "Balançar a vítima",
            "Esperar a ambulância"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em parada cardíaca, iniciar imediatamente a massagem cardíaca (RCP)."
    },
    {
        id: 88,
        question: "A CNH categoria A permite conduzir:",
        options: [
            "Apenas motos até 125cc",
            "Motocicletas de qualquer cilindrada",
            "Apenas ciclomotores",
            "Motos até 250cc"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "A CNH categoria A permite conduzir motocicletas de qualquer cilindrada."
    },
    {
        id: 89,
        question: "O efeito estroboscópico ocorre:",
        options: [
            "Em túneis iluminados",
            "Com chuva forte",
            "Com neblina",
            "À noite"
        ],
        correct: 0,
        category: "direcao_defensiva",
        explanation: "O efeito estroboscópico ocorre em túneis com iluminação intermitente."
    },
    {
        id: 90,
        question: "A placa A-21 (semáforo à frente) tem formato:",
        options: [
            "Circular",
            "Triangular",
            "Retangular",
            "Octogonal"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "Placas de advertência são triangulares com fundo amarelo."
    },
    {
        id: 91,
        question: "O tempo de reação do condutor é:",
        options: [
            "Sempre 1 segundo",
            "Entre 1,5 a 2,5 segundos",
            "Sempre 3 segundos",
            "Não existe tempo de reação"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "O tempo de reação médio do condutor varia entre 1,5 a 2,5 segundos."
    },
    {
        id: 92,
        question: "A placa R-15 (peso máximo por eixo) é:",
        options: [
            "Circular com números",
            "Triangular amarela",
            "Retangular azul",
            "Octogonal vermelha"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "Placas de regulamentação são circulares, esta limita peso por eixo."
    },
    {
        id: 93,
        question: "Em caso de engasgo em bebê, deve-se:",
        options: [
            "Dar água",
            "Virar de cabeça para baixo e bater nas costas",
            "Colocar dedo na boca",
            "Balançar o bebê"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em bebês engasgados, virar de cabeça para baixo e dar tapinhas nas costas."
    },
    {
        id: 94,
        question: "A validade da CNH categoria B é:",
        options: [
            "5 anos para todos",
            "10 anos até 50 anos, 5 anos após",
            "Vitalícia",
            "3 anos"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "CNH vale 10 anos até 50 anos, depois 5 anos até 70 anos, e 3 anos após."
    },
    {
        id: 95,
        question: "A neblina reduz a visibilidade, deve-se:",
        options: [
            "Acelerar para sair logo",
            "Usar farol alto",
            "Reduzir velocidade e usar farol baixo",
            "Parar no meio da pista"
        ],
        correct: 2,
        category: "direcao_defensiva",
        explanation: "Com neblina, reduzir velocidade e usar farol baixo, nunca o alto."
    },
    {
        id: 96,
        question: "A placa A-33 (animais) adverte sobre:",
        options: [
            "Zoológico próximo",
            "Travessia de animais",
            "Fazenda próxima",
            "Veterinário próximo"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa A-33 adverte sobre possível travessia de animais na via."
    },
    {
        id: 97,
        question: "Em caso de intoxicação, deve-se:",
        options: [
            "Provocar vômito sempre",
            "Dar leite",
            "Procurar ajuda médica imediatamente",
            "Dar água com sal"
        ],
        correct: 2,
        category: "primeiros_socorros",
        explanation: "Em intoxicação, procurar ajuda médica sem provocar vômito."
    },
    {
        id: 98,
        question: "O condutor deve manter distância lateral de:",
        options: [
            "1,0 metro de ciclistas",
            "1,5 metro de ciclistas",
            "0,5 metro de ciclistas",
            "Não há distância mínima"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "Deve-se manter distância lateral mínima de 1,5 metro de ciclistas."
    },
    {
        id: 99,
        question: "O fenômeno da fadiga causa:",
        options: [
            "Aumento da atenção",
            "Redução dos reflexos",
            "Melhora da visão",
            "Aumento da velocidade"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "A fadiga reduz os reflexos e a capacidade de reação do condutor."
    },
    {
        id: 100,
        question: "A placa R-17 (proibido acesso de pedestres) é:",
        options: [
            "Circular vermelha e branca",
            "Triangular amarela",
            "Retangular azul",
            "Quadrada verde"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "Placas de proibição são circulares com fundo branco e borda vermelha."
    },
    {
        id: 101,
        question: "O álcool no sangue é eliminado:",
        options: [
            "Tomando café",
            "Apenas com o tempo",
            "Fazendo exercícios",
            "Tomando água"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O álcool só é eliminado do organismo com o tempo, cerca de 1 hora por dose."
    },
    {
        id: 102,
        question: "A hidroplanagem pode ser evitada:",
        options: [
            "Acelerando mais",
            "Mantendo pneus em bom estado",
            "Usando freio de mão",
            "Dirigindo no centro da pista"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Pneus em bom estado com sulcos adequados ajudam a evitar hidroplanagem."
    },
    {
        id: 103,
        question: "A placa A-26a (mão dupla adiante) tem formato:",
        options: [
            "Circular",
            "Triangular",
            "Retangular",
            "Losangular"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "Placas de advertência são triangulares com fundo amarelo."
    },
    {
        id: 104,
        question: "Em caso de choque elétrico, deve-se:",
        options: [
            "Tocar na vítima imediatamente",
            "Desligar a energia antes de tocar",
            "Jogar água na vítima",
            "Puxar a vítima com as mãos"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Antes de socorrer, desligar a energia ou afastar a vítima com material isolante."
    },
    {
        id: 105,
        question: "A categoria C da CNH permite dirigir:",
        options: [
            "Caminhões até 3.500 kg",
            "Caminhões acima de 3.500 kg",
            "Apenas ônibus",
            "Qualquer veículo"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "Categoria C permite conduzir veículos de carga acima de 3.500 kg."
    },
    {
        id: 106,
        question: "O condutor defensivo deve:",
        options: [
            "Confiar apenas em si mesmo",
            "Prever ações dos outros condutores",
            "Dirigir sempre devagar",
            "Usar buzina constantemente"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Direção defensiva inclui prever e antecipar ações de outros condutores."
    },
    {
        id: 107,
        question: "A placa R-20 (proibido trânsito de tratores) é:",
        options: [
            "Circular vermelha e branca",
            "Triangular amarela",
            "Retangular azul",
            "Octogonal vermelha"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "Placas de proibição são circulares com fundo branco e borda vermelha."
    },
    {
        id: 108,
        question: "Em caso de ferimento com objeto perfurante, deve-se:",
        options: [
            "Retirar o objeto imediatamente",
            "Não retirar o objeto",
            "Empurrar o objeto para dentro",
            "Quebrar o objeto"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Nunca retirar objeto perfurante, pois pode causar hemorragia maior."
    },
    {
        id: 109,
        question: "O limite de velocidade em escola é:",
        options: [
            "30 km/h",
            "40 km/h",
            "50 km/h",
            "20 km/h"
        ],
        correct: 0,
        category: "legislacao",
        explanation: "Em áreas escolares, o limite é de 30 km/h para proteger as crianças."
    },
    {
        id: 110,
        question: "A visão periférica diminui quando:",
        options: [
            "A velocidade aumenta",
            "A velocidade diminui",
            "Está chovendo",
            "É dia"
        ],
        correct: 0,
        category: "direcao_defensiva",
        explanation: "Com o aumento da velocidade, a visão periférica diminui significativamente."
    },
    {
        id: 111,
        question: "A placa A-14 (lombada) adverte sobre:",
        options: [
            "Buraco na pista",
            "Elevação na pista",
            "Curva acentuada",
            "Pista escorregadia"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa A-14 adverte sobre lombada ou elevação transversal na pista."
    },
    {
        id: 112,
        question: "O condutor deve renovar a CNH:",
        options: [
            "Apenas quando vencer",
            "30 dias antes do vencimento",
            "No dia do vencimento",
            "Após o vencimento"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "A CNH pode ser renovada até 30 dias antes do vencimento."
    },
    {
        id: 113,
        question: "Em caso de afogamento, deve-se:",
        options: [
            "Dar água à vítima",
            "Fazer respiração artificial",
            "Balançar a vítima",
            "Colocar a vítima de pé"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em afogamento, fazer respiração artificial e massagem cardíaca se necessário."
    },
    {
        id: 114,
        question: "A distância de frenagem aumenta com:",
        options: [
            "A diminuição da velocidade",
            "O aumento da velocidade",
            "Pista seca",
            "Pneus novos"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Quanto maior a velocidade, maior será a distância necessária para frear."
    },
    {
        id: 115,
        question: "A placa R-25a (proibido virar à esquerda) é:",
        options: [
            "Circular vermelha e branca",
            "Triangular amarela",
            "Retangular azul",
            "Octogonal vermelha"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "Placas de proibição são circulares com fundo branco e borda vermelha."
    },
    {
        id: 116,
        question: "O condutor com CNH vencida há mais de 30 dias:",
        options: [
            "Pode dirigir normalmente",
            "Não pode dirigir",
            "Pode dirigir apenas de dia",
            "Pode dirigir com acompanhante"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "CNH vencida há mais de 30 dias impede a condução de veículos."
    },
    {
        id: 117,
        question: "O ponto cego do veículo é:",
        options: [
            "Área não visível pelos espelhos",
            "Farol queimado",
            "Pneu furado",
            "Vidro embaçado"
        ],
        correct: 0,
        category: "direcao_defensiva",
        explanation: "Ponto cego é a área ao redor do veículo não visível pelos espelhos."
    },
    {
        id: 118,
        question: "A placa A-32 (ciclistas) tem cor:",
        options: [
            "Amarela com símbolos pretos",
            "Vermelha com símbolos brancos",
            "Azul com símbolos brancos",
            "Verde com símbolos brancos"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "Placas de advertência são amarelas com símbolos pretos."
    },
    {
        id: 119,
        question: "Em caso de picada de cobra, deve-se:",
        options: [
            "Fazer torniquete",
            "Chupar o veneno",
            "Manter a vítima calma e procurar ajuda",
            "Cortar o local da picada"
        ],
        correct: 2,
        category: "primeiros_socorros",
        explanation: "Em picada de cobra, manter calma, não fazer torniquete e procurar ajuda médica."
    },
    {
        id: 120,
        question: "A categoria D da CNH permite dirigir:",
        options: [
            "Apenas caminhões",
            "Ônibus e micro-ônibus",
            "Apenas motocicletas",
            "Qualquer veículo de carga"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "Categoria D permite conduzir ônibus e micro-ônibus para transporte de passageiros."
    },
    {
        id: 121,
        question: "O condutor deve usar cinto de segurança:",
        options: [
            "Apenas em rodovias",
            "Sempre que dirigir",
            "Apenas à noite",
            "Apenas em alta velocidade"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O uso do cinto de segurança é obrigatório sempre, em qualquer via."
    },
    {
        id: 122,
        question: "A técnica de direção em descidas é:",
        options: [
            "Usar apenas o freio",
            "Usar freio motor",
            "Acelerar para ganhar velocidade",
            "Desligar o motor"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Em descidas, usar freio motor para não superaquecer os freios."
    },
    {
        id: 123,
        question: "A placa R-26 (proibido virar à direita) é:",
        options: [
            "Circular vermelha e branca",
            "Triangular amarela",
            "Retangular azul",
            "Losangular amarela"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "Placas de proibição são circulares com fundo branco e borda vermelha."
    },
    {
        id: 124,
        question: "Em caso de hemorragia nasal intensa, deve-se:",
        options: [
            "Inclinar a cabeça para trás",
            "Comprimir a narina e inclinar para frente",
            "Dar água gelada",
            "Balançar a cabeça"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Comprimir a narina e inclinar a cabeça para frente para estancar o sangramento."
    },
    {
        id: 125,
        question: "O condutor deve parar o veículo:",
        options: [
            "Apenas quando solicitado",
            "Para fiscalização da autoridade de trânsito",
            "Apenas em emergências",
            "Nunca é obrigatório parar"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "É obrigatório parar o veículo quando solicitado pela autoridade de trânsito."
    },
    {
        id: 126,
        question: "A condução econômica inclui:",
        options: [
            "Acelerar e frear bruscamente",
            "Manter velocidade constante",
            "Usar sempre marcha baixa",
            "Dirigir sempre em alta velocidade"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Condução econômica inclui manter velocidade constante e evitar acelerações bruscas."
    },
    {
        id: 127,
        question: "A placa A-15 (pista escorregadia) adverte sobre:",
        options: [
            "Pista molhada",
            "Pista com baixa aderência",
            "Pista em obras",
            "Pista irregular"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa A-15 adverte sobre pista com baixa aderência ou escorregadia."
    },
    {
        id: 128,
        question: "Em caso de luxação, deve-se:",
        options: [
            "Tentar colocar o osso no lugar",
            "Imobilizar a articulação",
            "Massagear o local",
            "Aplicar calor"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em luxação, imobilizar a articulação sem tentar recolocar no lugar."
    },
    {
        id: 129,
        question: "A categoria E da CNH permite:",
        options: [
            "Dirigir qualquer veículo",
            "Conduzir veículos com reboque",
            "Apenas motocicletas grandes",
            "Apenas ônibus articulados"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "Categoria E permite conduzir veículos da categoria B, C ou D com reboque."
    },
    {
        id: 130,
        question: "O ofuscamento pode ser causado por:",
        options: [
            "Farol baixo",
            "Farol alto de outros veículos",
            "Pisca-alerta",
            "Luz de freio"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "O ofuscamento é causado principalmente pelo farol alto de outros veículos."
    },
    {
        id: 131,
        question: "A placa A-34 (área com desmoronamento) adverte sobre:",
        options: [
            "Pista irregular",
            "Queda de pedras ou terra",
            "Pista molhada",
            "Animais na pista"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa A-34 adverte sobre área sujeita a queda de pedras ou desmoronamento."
    },
    {
        id: 132,
        question: "O condutor deve portar sempre:",
        options: [
            "Apenas a CNH",
            "CNH, CRLV e seguro obrigatório",
            "Apenas o CRLV",
            "Apenas o seguro"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "É obrigatório portar CNH, CRLV (documento do veículo) e comprovante do seguro DPVAT."
    },
    {
        id: 133,
        question: "Em caso de entorse, deve-se:",
        options: [
            "Massagear vigorosamente",
            "Aplicar gelo e elevar o membro",
            "Aplicar calor",
            "Movimentar a articulação"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em entorse, aplicar gelo, elevar o membro e evitar movimentação."
    },
    {
        id: 134,
        question: "A velocidade deve ser reduzida:",
        options: [
            "Apenas à noite",
            "Em condições adversas",
            "Apenas na chuva",
            "Nunca é necessário reduzir"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "A velocidade deve ser reduzida em condições adversas como chuva, neblina, etc."
    },
    {
        id: 135,
        question: "A placa R-30 (regulamentação de uso das faixas) é:",
        options: [
            "Circular azul",
            "Retangular azul",
            "Triangular amarela",
            "Circular vermelha"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "Placas de regulamentação de uso das faixas são retangulares azuis."
    },
    {
        id: 136,
        question: "O exame toxicológico é obrigatório para:",
        options: [
            "Todas as categorias",
            "Categorias C, D e E",
            "Apenas categoria A",
            "Apenas categoria B"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O exame toxicológico é obrigatório para condutores das categorias C, D e E."
    },
    {
        id: 137,
        question: "A regra dos 3 segundos serve para:",
        options: [
            "Tempo de reação",
            "Distância de seguimento",
            "Tempo de frenagem",
            "Velocidade máxima"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "A regra dos 3 segundos ajuda a manter distância segura de seguimento."
    },
    {
        id: 138,
        question: "A placa A-16 (pista dividida) indica:",
        options: [
            "Fim da pista dupla",
            "Início da pista dupla",
            "Pista única",
            "Desvio na pista"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa A-16 adverte sobre o início de pista dividida (dupla)."
    },
    {
        id: 139,
        question: "Em caso de crise epiléptica, deve-se:",
        options: [
            "Segurar a língua",
            "Proteger a cabeça da vítima",
            "Dar água",
            "Amarrar a vítima"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Durante crise epiléptica, proteger a cabeça e não colocar nada na boca."
    },
    {
        id: 140,
        question: "A suspensão da CNH ocorre por:",
        options: [
            "Qualquer infração",
            "Atingir 20 pontos na carteira",
            "Apenas infrações gravíssimas",
            "Não há suspensão"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "A CNH é suspensa quando o condutor atinge 20 pontos no período de 12 meses."
    },
    {
        id: 141,
        question: "O condutor deve manter atenção:",
        options: [
            "Apenas em curvas",
            "Sempre durante a condução",
            "Apenas à noite",
            "Apenas em alta velocidade"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "O condutor deve manter atenção constante durante toda a condução."
    },
    {
        id: 142,
        question: "A placa R-35a (ciclovia) é:",
        options: [
            "Circular azul",
            "Triangular amarela",
            "Retangular verde",
            "Circular vermelha"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "Placas de regulamentação de uso obrigatório são circulares azuis."
    },
    {
        id: 143,
        question: "Em caso de corte profundo, deve-se:",
        options: [
            "Lavar com água oxigenada",
            "Fazer pressão direta no ferimento",
            "Aplicar pomada",
            "Deixar sangrar para limpar"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em corte profundo, fazer pressão direta com pano limpo para estancar."
    },
    {
        id: 144,
        question: "A categoria ACC permite:",
        options: [
            "Dirigir qualquer veículo",
            "Conduzir ciclomotores",
            "Apenas bicicletas",
            "Motocicletas até 125cc"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "A categoria ACC permite conduzir ciclomotores de até 50cc."
    },
    {
        id: 145,
        question: "O efeito do álcool no organismo:",
        options: [
            "Melhora os reflexos",
            "Diminui os reflexos",
            "Não afeta a direção",
            "Melhora a visão"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "O álcool diminui os reflexos, coordenação e capacidade de julgamento."
    },
    {
        id: 146,
        question: "A placa A-17 (fim da pista dividida) adverte sobre:",
        options: [
            "Início de pista dupla",
            "Término da pista dupla",
            "Pista irregular",
            "Desvio obrigatório"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa A-17 adverte sobre o fim da pista dividida (dupla)."
    },
    {
        id: 147,
        question: "Em caso de parada respiratória, deve-se:",
        options: [
            "Dar água à vítima",
            "Fazer respiração boca a boca",
            "Balançar a vítima",
            "Esperar a ambulância"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em parada respiratória, iniciar imediatamente a respiração artificial."
    },
    {
        id: 148,
        question: "O condutor deve usar farol alto:",
        options: [
            "Sempre à noite",
            "Apenas quando não ofuscar outros",
            "Em qualquer situação",
            "Nunca deve usar"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O farol alto deve ser usado apenas quando não ofuscar outros condutores."
    },
    {
        id: 149,
        question: "A aquaplanagem é mais provável em:",
        options: [
            "Pista seca",
            "Velocidades baixas",
            "Pneus carecas e alta velocidade",
            "Pista irregular"
        ],
        correct: 2,
        category: "direcao_defensiva",
        explanation: "Aquaplanagem é mais provável com pneus gastos e velocidade alta em pista molhada."
    },
    {
        id: 150,
        question: "A placa R-40 (altura máxima permitida) é:",
        options: [
            "Circular com números",
            "Triangular amarela",
            "Retangular azul",
            "Octogonal vermelha"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "Placas de regulamentação são circulares, esta limita a altura dos veículos."
    },
    {
        id: 151,
        question: "Em caso de hipotermia, deve-se:",
        options: [
            "Dar bebida alcoólica",
            "Aquecer gradualmente a vítima",
            "Dar banho quente",
            "Massagear vigorosamente"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em hipotermia, aquecer gradualmente sem choques térmicos bruscos."
    },
    {
        id: 152,
        question: "O condutor deve reduzir a velocidade:",
        options: [
            "Apenas quando chove",
            "Ao aproximar-se de pedestres",
            "Apenas à noite",
            "Nunca é necessário"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Deve-se reduzir velocidade ao aproximar-se de pedestres para evitar acidentes."
    },
    {
        id: 153,
        question: "A placa A-18 (ponte móvel) adverte sobre:",
        options: [
            "Ponte em construção",
            "Ponte que se movimenta",
            "Ponte estreita",
            "Ponte perigosa"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa A-18 adverte sobre ponte móvel que pode se abrir."
    },
    {
        id: 154,
        question: "A multa por dirigir sem CNH é:",
        options: [
            "Leve",
            "Média",
            "Grave",
            "Gravíssima"
        ],
        correct: 3,
        category: "legislacao",
        explanation: "Dirigir sem CNH é infração gravíssima com multa e apreensão do veículo."
    },
    {
        id: 155,
        question: "O condutor deve verificar os espelhos:",
        options: [
            "Apenas ao sair",
            "Constantemente durante a viagem",
            "Apenas ao estacionar",
            "Uma vez por dia"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Os espelhos devem ser verificados constantemente para monitorar o trânsito."
    },
    {
        id: 156,
        question: "A placa R-41 (largura máxima permitida) é:",
        options: [
            "Circular com números",
            "Triangular amarela",
            "Retangular azul",
            "Octogonal vermelha"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "Placas de regulamentação são circulares, esta limita a largura dos veículos."
    },
    {
        id: 157,
        question: "Em caso de mordida de animal, deve-se:",
        options: [
            "Ignorar se for pequena",
            "Lavar com água e sabão",
            "Aplicar álcool",
            "Cobrir com band-aid"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Mordida de animal deve ser lavada com água e sabão e procurar ajuda médica."
    },
    {
        id: 158,
        question: "O prazo para recurso de multa é:",
        options: [
            "15 dias",
            "30 dias",
            "45 dias",
            "60 dias"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O prazo para apresentar recurso de multa é de 30 dias."
    },
    {
        id: 159,
        question: "A condução preventiva inclui:",
        options: [
            "Dirigir sempre devagar",
            "Manter distância segura",
            "Usar buzina constantemente",
            "Acelerar em curvas"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Condução preventiva inclui manter distância segura e antecipar perigos."
    },
    {
        id: 160,
        question: "A placa A-19 (ponte estreita) adverte sobre:",
        options: [
            "Ponte larga",
            "Redução da largura da ponte",
            "Ponte alta",
            "Ponte baixa"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa A-19 adverte sobre ponte com largura reduzida."
    },
    {
        id: 161,
        question: "Em caso de insolação, deve-se:",
        options: [
            "Expor mais ao sol",
            "Levar para local fresco e dar água",
            "Dar bebida quente",
            "Fazer exercícios"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em insolação, levar para local fresco, dar água e resfriar o corpo."
    },
    {
        id: 162,
        question: "O condutor deve sinalizar:",
        options: [
            "Apenas mudanças de faixa",
            "Todas as manobras",
            "Apenas conversões",
            "Apenas ultrapassagens"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O condutor deve sinalizar todas as manobras com antecedência."
    },
    {
        id: 163,
        question: "A técnica de condução em subidas é:",
        options: [
            "Usar marcha alta",
            "Usar marcha adequada à inclinação",
            "Acelerar ao máximo",
            "Desligar o motor"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Em subidas, usar marcha adequada para manter potência sem forçar o motor."
    },
    {
        id: 164,
        question: "A placa R-42 (comprimento máximo permitido) é:",
        options: [
            "Circular com números",
            "Triangular amarela",
            "Retangular azul",
            "Losangular amarela"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "Placas de regulamentação são circulares, esta limita o comprimento dos veículos."
    },
    {
        id: 165,
        question: "Em caso de cãibra, deve-se:",
        options: [
            "Massagear o local",
            "Alongar o músculo suavemente",
            "Aplicar calor intenso",
            "Ignorar a dor"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em cãibra, alongar suavemente o músculo e massagear levemente."
    },
    {
        id: 166,
        question: "A cassação da CNH ocorre por:",
        options: [
            "Qualquer infração",
            "Infrações gravíssimas específicas",
            "Atingir 10 pontos",
            "Não renovar no prazo"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "A cassação ocorre por infrações gravíssimas como dirigir embriagado."
    },
    {
        id: 167,
        question: "O condutor deve observar:",
        options: [
            "Apenas a frente",
            "Todas as direções constantemente",
            "Apenas os lados",
            "Apenas atrás"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "O condutor deve observar constantemente todas as direções ao redor."
    },
    {
        id: 168,
        question: "A placa A-22 (semáforo à frente) tem formato:",
        options: [
            "Circular",
            "Triangular",
            "Retangular",
            "Octogonal"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "Placas de advertência são triangulares com fundo amarelo."
    },
    {
        id: 169,
        question: "Em caso de ferimento no olho, deve-se:",
        options: [
            "Lavar com água",
            "Não tocar e cobrir ambos os olhos",
            "Aplicar colírio",
            "Massagear o olho"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em ferimento no olho, não tocar e cobrir ambos os olhos para evitar movimento."
    },
    {
        id: 170,
        question: "O limite de álcool no sangue para condutores profissionais é:",
        options: [
            "0,05 mg/L",
            "Zero",
            "0,1 mg/L",
            "0,2 mg/L"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "Para condutores profissionais, a tolerância ao álcool é zero."
    },
    {
        id: 171,
        question: "A direção econômica visa:",
        options: [
            "Dirigir sempre devagar",
            "Reduzir consumo de combustível",
            "Usar sempre freio",
            "Acelerar constantemente"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Direção econômica visa reduzir consumo através de técnicas adequadas."
    },
    {
        id: 172,
        question: "A placa R-1 (parada obrigatória) tem formato:",
        options: [
            "Circular",
            "Triangular",
            "Octogonal",
            "Retangular"
        ],
        correct: 2,
        category: "sinalizacao",
        explanation: "A placa de parada obrigatória (PARE) tem formato octogonal único."
    },
    {
        id: 173,
        question: "Em caso de corpo estranho no ouvido, deve-se:",
        options: [
            "Tentar retirar com objeto",
            "Não mexer e procurar ajuda médica",
            "Balançar a cabeça",
            "Colocar água no ouvido"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Corpo estranho no ouvido: não mexer e procurar ajuda médica especializada."
    },
    {
        id: 174,
        question: "A renovação da CNH pode ser feita:",
        options: [
            "Apenas no Detran",
            "Em clínicas credenciadas",
            "Apenas online",
            "Em qualquer lugar"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "A renovação pode ser feita em clínicas credenciadas pelo Detran."
    },
    {
        id: 175,
        question: "O condutor deve antecipar:",
        options: [
            "Apenas curvas",
            "Situações de perigo",
            "Apenas semáforos",
            "Apenas ultrapassagens"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "O condutor defensivo deve antecipar todas as situações de perigo."
    },
    {
        id: 176,
        question: "A placa A-23 (obras na pista) tem cor:",
        options: [
            "Amarela",
            "Laranja",
            "Vermelha",
            "Azul"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "Placas de obras são laranja para maior visibilidade e destaque."
    },
    {
        id: 177,
        question: "Em caso de tontura, deve-se:",
        options: [
            "Continuar dirigindo",
            "Parar em local seguro",
            "Acelerar para chegar logo",
            "Ignorar o sintoma"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Com tontura, parar imediatamente em local seguro e procurar ajuda."
    },
    {
        id: 178,
        question: "O seguro DPVAT cobre:",
        options: [
            "Apenas danos materiais",
            "Danos pessoais por acidentes de trânsito",
            "Apenas roubo",
            "Apenas incêndio"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O DPVAT cobre danos pessoais causados por veículos automotores."
    },
    {
        id: 179,
        question: "A manutenção preventiva do veículo:",
        options: [
            "É desnecessária",
            "Evita problemas e acidentes",
            "É muito cara",
            "Só serve para carros novos"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Manutenção preventiva evita falhas mecânicas que podem causar acidentes."
    },
    {
        id: 180,
        question: "A placa A-25 (passagem de nível) adverte sobre:",
        options: [
            "Ponte",
            "Cruzamento com ferrovia",
            "Túnel",
            "Viaduto"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa A-25 adverte sobre passagem de nível (cruzamento com ferrovia)."
    },
    {
        id: 181,
        question: "Em caso de dor no peito, deve-se:",
        options: [
            "Ignorar se for leve",
            "Procurar ajuda médica imediatamente",
            "Tomar remédio caseiro",
            "Esperar passar"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Dor no peito pode indicar problema cardíaco, procurar ajuda imediatamente."
    },
    {
        id: 182,
        question: "A transferência de propriedade do veículo deve ser feita em:",
        options: [
            "15 dias",
            "30 dias",
            "45 dias",
            "60 dias"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "A transferência de propriedade deve ser feita em até 30 dias."
    },
    {
        id: 183,
        question: "O condutor deve estar sempre:",
        options: [
            "Relaxado",
            "Alerta e concentrado",
            "Conversando",
            "Ouvindo música alta"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "O condutor deve manter-se sempre alerta e concentrado no trânsito."
    },
    {
        id: 184,
        question: "A placa A-26b (mão dupla adiante) tem formato:",
        options: [
            "Circular",
            "Triangular",
            "Retangular",
            "Losangular"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "Placas de advertência são triangulares com fundo amarelo."
    },
    {
        id: 185,
        question: "Em caso de vômito, deve-se:",
        options: [
            "Deitar a vítima de costas",
            "Virar a cabeça para o lado",
            "Dar água imediatamente",
            "Segurar a cabeça firme"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em caso de vômito, virar a cabeça para o lado para evitar aspiração."
    },
    {
        id: 186,
        question: "O licenciamento anual do veículo é:",
        options: [
            "Opcional",
            "Obrigatório",
            "Apenas para carros novos",
            "Apenas para caminhões"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O licenciamento anual é obrigatório para todos os veículos."
    },
    {
        id: 187,
        question: "A velocidade compatível é aquela:",
        options: [
            "Sempre máxima permitida",
            "Adequada às condições da via",
            "Sempre mínima",
            "Que outros usam"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Velocidade compatível é adequada às condições da via, tempo e trânsito."
    },
    {
        id: 188,
        question: "A placa A-27 (área escolar) tem cor:",
        options: [
            "Amarela com símbolos pretos",
            "Verde com símbolos brancos",
            "Azul com símbolos brancos",
            "Vermelha com símbolos brancos"
        ],
        correct: 0,
        category: "sinalizacao",
        explanation: "Placas de advertência são amarelas com símbolos pretos."
    },
    {
        id: 189,
        question: "Em caso de febre alta, deve-se:",
        options: [
            "Dar banho quente",
            "Aplicar compressas frias",
            "Cobrir bem a pessoa",
            "Dar bebida quente"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em febre alta, aplicar compressas frias e procurar ajuda médica."
    },
    {
        id: 190,
        question: "A multa por excesso de velocidade pode ser:",
        options: [
            "Apenas leve",
            "Leve, média, grave ou gravíssima",
            "Apenas gravíssima",
            "Não existe multa por velocidade"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "A multa varia conforme o percentual de excesso de velocidade."
    },
    {
        id: 191,
        question: "O condutor deve planejar:",
        options: [
            "Apenas o destino",
            "Toda a viagem antecipadamente",
            "Apenas o horário",
            "Nada é necessário planejar"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Planejar a viagem inclui rota, horário, condições do veículo e descanso."
    },
    {
        id: 192,
        question: "A placa A-28 (animais selvagens) adverte sobre:",
        options: [
            "Zoológico",
            "Travessia de animais selvagens",
            "Fazenda",
            "Reserva ambiental"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa A-28 adverte sobre possível travessia de animais selvagens."
    },
    {
        id: 193,
        question: "Em caso de diarreia intensa, deve-se:",
        options: [
            "Parar de beber água",
            "Repor líquidos constantemente",
            "Comer alimentos pesados",
            "Tomar remédio forte"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Em diarreia intensa, repor líquidos para evitar desidratação."
    },
    {
        id: 194,
        question: "O condutor profissional deve:",
        options: [
            "Renovar CNH a cada 3 anos",
            "Fazer curso especializado",
            "Ter apenas categoria B",
            "Não precisa de exames"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "Condutores profissionais devem fazer curso especializado e exames periódicos."
    },
    {
        id: 195,
        question: "A atenção do condutor deve ser:",
        options: [
            "Dividida entre várias atividades",
            "Focada exclusivamente na condução",
            "Apenas no rádio",
            "Apenas no celular"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "A atenção deve estar focada exclusivamente na condução do veículo."
    },
    {
        id: 196,
        question: "A placa A-29 (altura limitada) adverte sobre:",
        options: [
            "Ponte baixa",
            "Obstáculo com altura limitada",
            "Túnel",
            "Todas as anteriores"
        ],
        correct: 3,
        category: "sinalizacao",
        explanation: "A placa A-29 adverte sobre qualquer obstáculo com altura limitada."
    },
    {
        id: 197,
        question: "Em caso de pessoa inconsciente, deve-se:",
        options: [
            "Dar água",
            "Verificar respiração e pulso",
            "Balançar vigorosamente",
            "Dar tapas no rosto"
        ],
        correct: 1,
        category: "primeiros_socorros",
        explanation: "Com pessoa inconsciente, verificar sinais vitais e manter vias aéreas livres."
    },
    {
        id: 198,
        question: "O IPVA deve ser pago:",
        options: [
            "Apenas uma vez",
            "Anualmente",
            "A cada 5 anos",
            "Apenas na compra"
        ],
        correct: 1,
        category: "legislacao",
        explanation: "O IPVA (Imposto sobre Propriedade de Veículos Automotores) é anual."
    },
    {
        id: 199,
        question: "A cortesia no trânsito:",
        options: [
            "É desnecessária",
            "Melhora a fluidez e segurança",
            "Atrapalha o trânsito",
            "É perda de tempo"
        ],
        correct: 1,
        category: "direcao_defensiva",
        explanation: "Cortesia no trânsito melhora a convivência, fluidez e segurança."
    },
    {
        id: 200,
        question: "A placa A-31 (largura limitada) adverte sobre:",
        options: [
            "Pista larga",
            "Redução da largura da pista",
            "Pista dupla",
            "Acostamento largo"
        ],
        correct: 1,
        category: "sinalizacao",
        explanation: "A placa A-31 adverte sobre redução da largura da pista."
    }
];
// Função para embaralhar array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Função para selecionar 30 perguntas aleatórias
function getRandomQuestions(count = 30) {
    const shuffled = shuffleArray(questionsBank);
    return shuffled.slice(0, count);
}