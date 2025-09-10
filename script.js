// Variáveis globais do simulador
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let quizStartTime = null;

// Elementos DOM
const screens = {
    home: document.getElementById('home-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen'),
    review: document.getElementById('review-screen')
};

const elements = {
    startBtn: document.getElementById('start-btn'),
    questionCounter: document.getElementById('question-counter'),
    progressFill: document.getElementById('progress-fill'),
    scoreDisplay: document.getElementById('score-display'),
    questionText: document.getElementById('question-text'),
    questionImage: document.getElementById('question-image'),
    optionsContainer: document.getElementById('options-container'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    finishBtn: document.getElementById('finish-btn'),
    correctAnswers: document.getElementById('correct-answers'),
    wrongAnswers: document.getElementById('wrong-answers'),
    percentage: document.getElementById('percentage'),
    resultStatus: document.getElementById('result-status'),
    reviewBtn: document.getElementById('review-btn'),
    restartBtn: document.getElementById('restart-btn'),
    backToResults: document.getElementById('back-to-results'),
    reviewContainer: document.getElementById('review-container')
};

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Event listeners para botões
    elements.startBtn.addEventListener('click', startQuiz);
    elements.prevBtn.addEventListener('click', previousQuestion);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.finishBtn.addEventListener('click', finishQuiz);
    elements.reviewBtn.addEventListener('click', showReview);
    elements.restartBtn.addEventListener('click', restartQuiz);
    elements.backToResults.addEventListener('click', backToResults);
    
    // Mostrar tela inicial
    showScreen('home');
}

function showScreen(screenName) {
    // Esconder todas as telas
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Mostrar tela selecionada
    screens[screenName].classList.add('active');
}

function startQuiz() {
    // Verificar se é modo teste e definir número de questões
    const questionCount = window.TEST_MODE ? (window.MAX_TEST_QUESTIONS || 10) : 30;
    
    // Selecionar perguntas aleatórias
    currentQuestions = getRandomQuestions(questionCount);
    currentQuestionIndex = 0;
    userAnswers = new Array(questionCount).fill(null);
    score = 0;
    quizStartTime = new Date();
    
    // Mostrar tela do quiz
    showScreen('quiz');
    
    // Carregar primeira pergunta
    loadQuestion();
    updateUI();
}

function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Atualizar texto da pergunta
    elements.questionText.textContent = question.question;
    
    // Limpar imagem (caso implementem imagens futuramente)
    elements.questionImage.innerHTML = '';
    
    // Criar opções
    elements.optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = createOptionElement(option, index);
        elements.optionsContainer.appendChild(optionElement);
    });
    
    // Marcar resposta já selecionada (se houver)
    if (userAnswers[currentQuestionIndex] !== null) {
        const selectedOption = elements.optionsContainer.children[userAnswers[currentQuestionIndex]];
        selectedOption.classList.add('selected');
    }
}

function createOptionElement(optionText, index) {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.addEventListener('click', () => selectOption(index));
    
    const letterDiv = document.createElement('div');
    letterDiv.className = 'option-letter';
    letterDiv.textContent = String.fromCharCode(65 + index); // A, B, C, D
    
    const textSpan = document.createElement('span');
    textSpan.textContent = optionText;
    
    optionDiv.appendChild(letterDiv);
    optionDiv.appendChild(textSpan);
    
    return optionDiv;
}

function selectOption(optionIndex) {
    // Remover seleção anterior
    const options = elements.optionsContainer.children;
    Array.from(options).forEach(option => {
        option.classList.remove('selected');
    });
    
    // Marcar nova seleção
    options[optionIndex].classList.add('selected');
    
    // Salvar resposta
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Habilitar botão próxima
    elements.nextBtn.disabled = false;
    
    // Se for a última pergunta, mostrar botão finalizar
    if (currentQuestionIndex === currentQuestions.length - 1) {
        elements.nextBtn.style.display = 'none';
        elements.finishBtn.style.display = 'inline-flex';
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        updateUI();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        updateUI();
    }
}

function updateUI() {
    // Atualizar contador de perguntas
    elements.questionCounter.textContent = `Questão ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
    
    // Atualizar barra de progresso
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
    
    // Atualizar pontuação atual
    const currentScore = calculateCurrentScore();
    elements.scoreDisplay.textContent = `Acertos: ${currentScore}`;
    
    // Controlar botões
    elements.prevBtn.disabled = currentQuestionIndex === 0;
    elements.nextBtn.disabled = userAnswers[currentQuestionIndex] === null;
    
    // Controlar visibilidade dos botões
    if (currentQuestionIndex === currentQuestions.length - 1) {
        if (userAnswers[currentQuestionIndex] !== null) {
            elements.nextBtn.style.display = 'none';
            elements.finishBtn.style.display = 'inline-flex';
        }
    } else {
        elements.nextBtn.style.display = 'inline-flex';
        elements.finishBtn.style.display = 'none';
    }
}

function calculateCurrentScore() {
    let currentScore = 0;
    for (let i = 0; i <= currentQuestionIndex; i++) {
        if (userAnswers[i] !== null && userAnswers[i] === currentQuestions[i].correct) {
            currentScore++;
        }
    }
    return currentScore;
}

function finishQuiz() {
    // Calcular pontuação final
    score = 0;
    for (let i = 0; i < currentQuestions.length; i++) {
        if (userAnswers[i] === currentQuestions[i].correct) {
            score++;
        }
    }
    
    // Mostrar resultados
    showResults();
}

function showResults() {
    const totalQuestions = currentQuestions.length;
    const wrongAnswers = totalQuestions - score;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Calcular critério de aprovação dinamicamente
    // Para 30 questões: 21 acertos (70%)
    // Para 10 questões: 7 acertos (70%)
    const requiredScore = Math.ceil(totalQuestions * 0.7);
    const passed = score >= requiredScore;
    
    // Atualizar elementos de resultado
    elements.correctAnswers.textContent = score;
    elements.wrongAnswers.textContent = wrongAnswers;
    elements.percentage.textContent = `${percentage}%`;
    
    // Mostrar status de aprovação/reprovação
    const statusHTML = passed 
        ? `
            <i class="fas fa-check-circle"></i>
            <h2>Parabéns! Você foi APROVADA!</h2>
            <p>Você acertou ${score} de ${totalQuestions} questões (${percentage}%)</p>
        `
        : `
            <i class="fas fa-times-circle"></i>
            <h2>Você foi REPROVADA</h2>
            <p>Você acertou ${score} de ${totalQuestions} questões (${percentage}%)</p>
            <p>É necessário acertar pelo menos ${requiredScore} questões para ser aprovada.</p>
        `;
    
    elements.resultStatus.innerHTML = statusHTML;
    elements.resultStatus.className = `result-status ${passed ? 'passed' : 'failed'}`;
    
    // Mostrar tela de resultados
    showScreen('results');
}

function showReview() {
    // Limpar container de revisão
    elements.reviewContainer.innerHTML = '';
    
    // Criar revisão para cada pergunta
    currentQuestions.forEach((question, index) => {
        const reviewElement = createReviewElement(question, index);
        elements.reviewContainer.appendChild(reviewElement);
    });
    
    // Mostrar tela de revisão
    showScreen('review');
}

function createReviewElement(question, index) {
    const userAnswer = userAnswers[index];
    const correctAnswer = question.correct;
    const isCorrect = userAnswer === correctAnswer;
    
    const reviewDiv = document.createElement('div');
    reviewDiv.className = `review-question ${isCorrect ? 'correct' : 'incorrect'}`;
    
    const headerDiv = document.createElement('div');
    headerDiv.className = 'review-question-header';
    
    const questionNumber = document.createElement('span');
    questionNumber.className = 'review-question-number';
    questionNumber.textContent = `Questão ${index + 1}`;
    
    const resultSpan = document.createElement('span');
    resultSpan.className = `review-result ${isCorrect ? 'correct' : 'incorrect'}`;
    resultSpan.innerHTML = isCorrect 
        ? '<i class="fas fa-check"></i> Correta' 
        : '<i class="fas fa-times"></i> Incorreta';
    
    headerDiv.appendChild(questionNumber);
    headerDiv.appendChild(resultSpan);
    
    const questionText = document.createElement('div');
    questionText.className = 'review-question-text';
    questionText.textContent = question.question;
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'review-options';
    
    question.options.forEach((option, optionIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'review-option';
        
        // Determinar classe da opção
        if (optionIndex === correctAnswer && optionIndex === userAnswer) {
            optionDiv.classList.add('correct-answer', 'user-answer');
        } else if (optionIndex === correctAnswer) {
            optionDiv.classList.add('correct-answer');
        } else if (optionIndex === userAnswer) {
            optionDiv.classList.add('user-wrong');
        }
        
        const letter = document.createElement('span');
        letter.textContent = `${String.fromCharCode(65 + optionIndex)}) `;
        
        const text = document.createElement('span');
        text.textContent = option;
        
        optionDiv.appendChild(letter);
        optionDiv.appendChild(text);
        optionsDiv.appendChild(optionDiv);
    });
    
    // Adicionar explicação se disponível
    if (question.explanation) {
        const explanationDiv = document.createElement('div');
        explanationDiv.style.marginTop = '10px';
        explanationDiv.style.padding = '10px';
        explanationDiv.style.backgroundColor = '#f0f8ff';
        explanationDiv.style.borderRadius = '5px';
        explanationDiv.style.fontSize = '0.9rem';
        explanationDiv.innerHTML = `<strong>Explicação:</strong> ${question.explanation}`;
        optionsDiv.appendChild(explanationDiv);
    }
    
    reviewDiv.appendChild(headerDiv);
    reviewDiv.appendChild(questionText);
    reviewDiv.appendChild(optionsDiv);
    
    return reviewDiv;
}

function backToResults() {
    showScreen('results');
}

function restartQuiz() {
    // Resetar variáveis
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    quizStartTime = null;
    
    // Voltar para tela inicial
    showScreen('home');
}

// Função para adicionar animações suaves
function addSmoothTransitions() {
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.style.animationDelay = `${index * 0.1}s`;
    });
}

// Função para salvar progresso no localStorage (opcional)
function saveProgress() {
    const progress = {
        currentQuestions,
        currentQuestionIndex,
        userAnswers,
        score,
        quizStartTime
    };
    localStorage.setItem('detran-quiz-progress', JSON.stringify(progress));
}

// Função para carregar progresso do localStorage (opcional)
function loadProgress() {
    const saved = localStorage.getItem('detran-quiz-progress');
    if (saved) {
        const progress = JSON.parse(saved);
        currentQuestions = progress.currentQuestions || [];
        currentQuestionIndex = progress.currentQuestionIndex || 0;
        userAnswers = progress.userAnswers || [];
        score = progress.score || 0;
        quizStartTime = progress.quizStartTime ? new Date(progress.quizStartTime) : null;
        return true;
    }
    return false;
}

// Função para limpar progresso salvo
function clearProgress() {
    localStorage.removeItem('detran-quiz-progress');
}

// Adicionar atalhos de teclado
document.addEventListener('keydown', function(event) {
    if (screens.quiz.classList.contains('active')) {
        // Teclas A, B, C, D para selecionar opções
        if (event.key >= 'a' && event.key <= 'd') {
            const optionIndex = event.key.charCodeAt(0) - 97; // a=0, b=1, c=2, d=3
            if (optionIndex < currentQuestions[currentQuestionIndex].options.length) {
                selectOption(optionIndex);
            }
        }
        // Seta esquerda para pergunta anterior
        else if (event.key === 'ArrowLeft' && !elements.prevBtn.disabled) {
            previousQuestion();
        }
        // Seta direita para próxima pergunta
        else if (event.key === 'ArrowRight' && !elements.nextBtn.disabled) {
            nextQuestion();
        }
        // Enter para finalizar (se for a última pergunta)
        else if (event.key === 'Enter' && elements.finishBtn.style.display !== 'none') {
            finishQuiz();
        }
    }
});

// Adicionar confirmação antes de sair da página durante o quiz
window.addEventListener('beforeunload', function(event) {
    if (screens.quiz.classList.contains('active')) {
        event.preventDefault();
        event.returnValue = 'Você tem certeza que deseja sair? Seu progresso será perdido.';
        return 'Você tem certeza que deseja sair? Seu progresso será perdido.';
    }
});

// Função para mostrar dicas (pode ser expandida futuramente)
function showHint(questionIndex) {
    const question = currentQuestions[questionIndex];
    if (question.hint) {
        alert(`Dica: ${question.hint}`);
    }
}

// Função para calcular tempo gasto (pode ser usada para estatísticas)
function getQuizDuration() {
    if (quizStartTime) {
        const endTime = new Date();
        const duration = endTime - quizStartTime;
        return Math.round(duration / 1000); // retorna em segundos
    }
    return 0;
}

// Função para gerar relatório detalhado
function generateDetailedReport() {
    const report = {
        totalQuestions: currentQuestions.length,
        correctAnswers: score,
        wrongAnswers: currentQuestions.length - score,
        percentage: Math.round((score / currentQuestions.length) * 100),
        passed: score >= 21,
        duration: getQuizDuration(),
        categories: {}
    };
    
    // Análise por categoria
    currentQuestions.forEach((question, index) => {
        const category = question.category || 'geral';
        if (!report.categories[category]) {
            report.categories[category] = { total: 0, correct: 0 };
        }
        report.categories[category].total++;
        if (userAnswers[index] === question.correct) {
            report.categories[category].correct++;
        }
    });
    
    return report;
}

console.log('Simulador DETRAN-GO carregado com sucesso!');
console.log(`Banco de perguntas: ${questionsBank.length} questões disponíveis`);