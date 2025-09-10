# 🚗 Simulador Prova DETRAN-GO

## 🌐 **Acesso Online**

**🔗 URL:** https://johnpeterfsa.github.io/simulador-detran-go

*Simulador disponível 24/7 na internet - Acesse de qualquer dispositivo!*

Simulador completo da prova teórica do DETRAN de Goiás com 200 questões atualizadas e interface moderna.

## ✨ Características

- 📚 **200 questões** do banco oficial atualizado
- 🎯 **Sistema de pontuação** em tempo real
- 📱 **Interface responsiva** para celular e desktop
- 🔀 **Randomização** das questões a cada simulado
- 📊 **Revisão detalhada** com explicações
- ⏱️ **Sem limite de tempo** para estudo tranquilo
- 💾 **Salvamento automático** do progresso
- 🌍 **Hospedado no GitHub Pages** - Acesso gratuito

## 🚀 Como Usar

### Online (Recomendado)
Acesse: **https://johnpeterfsa.github.io/simulador-detran-go**

### Local
1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` no navegador
3. Clique em "Iniciar Simulado"
4. Responda as 30 questões selecionadas aleatoriamente
5. Veja seu resultado e revise as questões incorretas

## 📋 Critérios de Aprovação

- ✅ **21 acertos** ou mais = **APROVADO**
- ❌ **20 acertos** ou menos = **REPROVADO**
- 🎯 Meta: **70% de aproveitamento**

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Design moderno e responsivo
- **JavaScript** - Lógica do simulador (Vanilla JS)
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Inter)

## 📁 Estrutura do Projeto

```
📦 simulador-detran-go/
├── 📄 index.html      # Página principal
├── 📄 script.js       # Lógica do simulador
├── 📄 questions.js    # Banco de 200 questões
├── 📄 styles.css      # Estilos da interface
└── 📄 README.md       # Documentação
```

## 🎨 Funcionalidades

### 🏠 Tela Inicial
- Informações sobre o simulado
- Botão para iniciar
- Design atrativo e informativo

### 📝 Tela do Quiz
- Contador de questões
- Barra de progresso visual
- Pontuação em tempo real
- Navegação entre questões
- Botões de anterior/próximo

### 📊 Tela de Resultados
- Pontuação final
- Percentual de acertos
- Status de aprovação/reprovação
- Botão para revisar questões
- Opção de refazer o simulado

### 🔍 Tela de Revisão
- Lista completa das questões
- Respostas corretas e incorretas destacadas
- Explicações detalhadas
- Categorização por assunto

## 📚 Categorias das Questões

- 📖 **Legislação de Trânsito**
- 🛡️ **Direção Defensiva**
- 🚦 **Sinalização de Trânsito**
- 🚑 **Primeiros Socorros**
- 🔧 **Mecânica Básica**
- 🌍 **Meio Ambiente**

## 🚀 Como Usar

### **Método 1: Abrir Diretamente**
1. Clique duas vezes no arquivo `index.html`
2. O simulador abrirá automaticamente no seu navegador

### **Método 2: Servidor Local (Recomendado)**
1. Abra o terminal/prompt de comando na pasta do projeto
2. Execute um dos comandos abaixo:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (se tiver instalado)
   npx serve .
   ```
3. Acesse `http://localhost:8000` no navegador

## 📱 Compatibilidade

- ✅ **Navegadores:** Chrome, Firefox, Safari, Edge (versões recentes)
- ✅ **Dispositivos:** Desktop, Tablet, Smartphone
- ✅ **Sistemas:** Windows, macOS, Linux, Android, iOS

## 🎮 Instruções de Uso

### **Tela Inicial**
- Clique em "Iniciar Simulado" para começar
- Leia as informações sobre o formato da prova

### **Durante o Simulado**
- Leia cada questão com atenção
- Clique na alternativa desejada (A, B, C ou D)
- Use os botões "Anterior" e "Próxima" para navegar
- Acompanhe seu progresso na barra superior
- Clique em "Finalizar" na última questão

### **Atalhos de Teclado**
- **A, B, C, D:** Selecionar alternativas
- **← →:** Navegar entre questões
- **Enter:** Finalizar simulado (última questão)

### **Resultados**
- Veja sua pontuação e status (aprovado/reprovado)
- Clique em "Revisar Respostas" para análise detalhada
- Clique em "Novo Simulado" para tentar novamente

## 📁 Estrutura do Projeto

```
Simulador Prova Dtran Goias/
├── index.html          # Página principal
├── styles.css          # Estilos e design
├── script.js           # Lógica do simulador
├── questions.js        # Banco de questões
└── README.md          # Este arquivo
```

## 🔧 Personalização

### **Adicionar Novas Questões**
1. Abra o arquivo `questions.js`
2. Adicione novas questões no array `questionsBank`
3. Siga o formato existente:
   ```javascript
   {
       id: 51,
       question: "Sua pergunta aqui?",
       options: [
           "Opção A",
           "Opção B",
           "Opção C",
           "Opção D"
       ],
       correct: 0, // Índice da resposta correta (0=A, 1=B, 2=C, 3=D)
       category: "legislacao",
       explanation: "Explicação da resposta correta"
   }
   ```

### **Alterar Critério de Aprovação**
1. Abra o arquivo `script.js`
2. Procure por `score >= 21`
3. Altere o número 21 para o desejado

### **Modificar Número de Questões**
1. No arquivo `script.js`, procure por `getRandomQuestions(30)`
2. Altere o número 30 para a quantidade desejada

## 🎨 Cores e Tema

O simulador utiliza as cores oficiais do DETRAN-GO:
- **Azul Principal:** #2a5298
- **Azul Secundário:** #1e3c72
- **Verde Sucesso:** #28a745
- **Vermelho Erro:** #dc3545
- **Dourado:** #ffd700

## 📞 Suporte

Este simulador foi desenvolvido como ferramenta de estudo. Para dúvidas sobre a prova oficial, consulte o site do DETRAN-GO.

## 📄 Licença

Este projeto é de uso educacional e gratuito. Sinta-se livre para usar, modificar e compartilhar.

---

**Boa sorte nos estudos! 🚗💨**

*Lembre-se: Este simulador é uma ferramenta de apoio aos estudos. Para informações oficiais, sempre consulte o DETRAN-GO.*