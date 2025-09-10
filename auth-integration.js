// Integração do sistema de autenticação com o simulador

// Verificar autenticação ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    checkAuthenticationOnSimulator();
    interceptQuizFinish();
});

function checkAuthenticationOnSimulator() {
    // Aguardar um pouco para garantir que o AuthSystem esteja carregado
    setTimeout(() => {
        // Verificar se o usuário está logado
        if (!window.AuthSystem || !window.AuthSystem.isUserLoggedIn()) {
            // Evitar loop de redirecionamento
            if (!window.location.href.includes('login.html')) {
                // Redirecionar para login se não estiver autenticado
                document.body.style.opacity = '0';
                window.location.href = 'login.html';
            }
            return;
        }
        
        // Usuário está logado, configurar interface
        setupAuthenticatedInterface();
    }, 50);
}

function setupAuthenticatedInterface() {
    const userSession = window.AuthSystem.getUserSession();
    
    if (!userSession) {
        window.location.href = 'login.html';
        return;
    }
    
    // Mostrar header do usuário
    const userHeader = document.getElementById('user-header');
    const usernameDisplay = document.getElementById('username-display');
    const userTypeDisplay = document.getElementById('user-type');
    
    if (userHeader && usernameDisplay && userTypeDisplay) {
        userHeader.style.display = 'flex';
        usernameDisplay.textContent = userSession.username;
        
        if (userSession.isTest) {
            userTypeDisplay.textContent = 'Teste Gratuito';
            userTypeDisplay.className = 'user-type test';
            
            // Configurar limitações do teste
            setupTestLimitations();
        } else if (userSession.isPremium) {
            userTypeDisplay.textContent = 'Premium';
            userTypeDisplay.className = 'user-type premium';
        } else {
            userTypeDisplay.textContent = 'Usuário';
            userTypeDisplay.className = 'user-type regular';
        }
    }
    
    // Adicionar estilos para o header do usuário
    addUserHeaderStyles();
    
    // Atualizar informações da tela inicial
    updateHomeScreenInfo();
}

function setupTestLimitations() {
    const userSession = window.AuthSystem.getUserSession();
    
    if (userSession && userSession.isTest) {
        // Modificar o simulador para usar apenas 10 questões
        window.TEST_MODE = true;
        window.MAX_TEST_QUESTIONS = userSession.maxQuestions || 10;
        
        // Adicionar aviso de teste limitado
        addTestWarning();
        
        // Interceptar função de início do quiz
        const originalStartQuiz = window.startQuiz;
        if (originalStartQuiz) {
            window.startQuiz = function() {
                // Modificar para usar menos questões
                const originalGetRandomQuestions = window.getRandomQuestions;
                window.getRandomQuestions = function(count) {
                    return originalGetRandomQuestions(Math.min(count, window.MAX_TEST_QUESTIONS));
                };
                
                originalStartQuiz();
            };
        }
    }
}

function addTestWarning() {
    const homeScreen = document.getElementById('home-screen');
    if (homeScreen) {
        const warningDiv = document.createElement('div');
        warningDiv.className = 'test-warning';
        warningDiv.innerHTML = `
            <div class="warning-content">
                <i class="fas fa-exclamation-triangle"></i>
                <div class="warning-text">
                    <h3>Modo Teste Gratuito</h3>
                    <p>Você está no modo teste limitado com apenas <strong>${window.MAX_TEST_QUESTIONS || 10} questões</strong>.</p>
                    <p>Para acesso completo, faça login ou adquira o simulado permanente.</p>
                </div>
            </div>
        `;
        
        // Inserir antes dos cards de informação
        const infoCards = homeScreen.querySelector('.info-cards');
        if (infoCards) {
            homeScreen.insertBefore(warningDiv, infoCards);
        }
    }
}

function addUserHeaderStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .user-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        
        .user-info {
            display: flex;
            align-items: center;
            gap: 15px;
            font-weight: 500;
        }
        
        .user-info i {
            font-size: 1.5rem;
        }
        
        .user-type {
            background: rgba(255,255,255,0.2);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
        }
        
        .user-type.premium {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }
        
        .user-type.test {
            background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }
        
        .logout-btn {
            background: rgba(255,255,255,0.2);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 500;
        }
        
        .logout-btn:hover {
            background: rgba(255,255,255,0.3);
            transform: translateY(-1px);
        }
        
        .test-warning {
            background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 30px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .warning-content {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        
        .warning-content i {
            font-size: 2.5rem;
            color: #e17055;
        }
        
        .warning-text h3 {
            margin: 0 0 8px 0;
            color: #2d3436;
            font-size: 1.2rem;
        }
        
        .warning-text p {
            margin: 5px 0;
            color: #636e72;
            line-height: 1.4;
        }
        
        .container {
            padding-top: 0;
        }
        
        @media (max-width: 768px) {
            .user-header {
                padding: 12px 20px;
                flex-direction: column;
                gap: 10px;
                text-align: center;
            }
            
            .user-info {
                flex-direction: column;
                gap: 8px;
            }
            
            .warning-content {
                flex-direction: column;
                text-align: center;
                gap: 15px;
            }
            
            .warning-content i {
                font-size: 2rem;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Interceptar função de finalização do quiz para usuários de teste
function interceptQuizFinish() {
    const userSession = window.AuthSystem.getUserSession();
    
    if (userSession && userSession.isTest) {
        // Adicionar mensagem especial para usuários de teste
        const originalShowResults = window.showResults;
        if (originalShowResults) {
            window.showResults = function() {
                originalShowResults();
                addTestCompletionMessage();
            };
        }
    }
}

function addTestCompletionMessage() {
    const resultsScreen = document.getElementById('results-screen');
    if (resultsScreen) {
        const upgradeDiv = document.createElement('div');
        upgradeDiv.className = 'upgrade-prompt';
        upgradeDiv.innerHTML = `
            <div class="upgrade-content">
                <i class="fas fa-star"></i>
                <h3>Gostou do teste?</h3>
                <p>Faça login ou adquira o simulado permanente para ter acesso a:</p>
                <ul>
                    <li><i class="fas fa-check"></i> Simulados ilimitados com 30 questões</li>
                    <li><i class="fas fa-check"></i> Banco completo com 200+ questões</li>
                    <li><i class="fas fa-check"></i> Relatórios detalhados</li>
                    <li><i class="fas fa-check"></i> Histórico de desempenho</li>
                </ul>
                <div class="upgrade-buttons">
                    <button onclick="window.location.href='login.html'" class="btn-upgrade">
                        <i class="fas fa-sign-in-alt"></i>
                        Fazer Login
                    </button>
                    <button onclick="showPremiumInfo()" class="btn-premium-upgrade">
                        <i class="fas fa-crown"></i>
                        Adquirir Premium
                    </button>
                </div>
            </div>
        `;
        
        // Inserir após os stats
        const resultStats = resultsScreen.querySelector('.result-stats');
        if (resultStats) {
            resultStats.parentNode.insertBefore(upgradeDiv, resultStats.nextSibling);
        }
        
        // Adicionar estilos
        addUpgradePromptStyles();
    }
}

function addUpgradePromptStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .upgrade-prompt {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 15px;
            padding: 30px;
            margin: 30px 0;
            text-align: center;
        }
        
        .upgrade-content i:first-child {
            font-size: 3rem;
            color: #ffd700;
            margin-bottom: 15px;
        }
        
        .upgrade-content h3 {
            font-size: 1.5rem;
            margin: 0 0 15px 0;
        }
        
        .upgrade-content p {
            margin-bottom: 20px;
            opacity: 0.9;
        }
        
        .upgrade-content ul {
            list-style: none;
            padding: 0;
            margin: 20px 0;
            text-align: left;
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .upgrade-content li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            opacity: 0.9;
        }
        
        .upgrade-content li i {
            color: #43e97b;
            font-size: 0.9rem;
        }
        
        .upgrade-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-top: 25px;
            flex-wrap: wrap;
        }
        
        .btn-upgrade, .btn-premium-upgrade {
            padding: 12px 25px;
            border: none;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
        }
        
        .btn-upgrade {
            background: rgba(255,255,255,0.2);
            color: white;
            border: 2px solid rgba(255,255,255,0.3);
        }
        
        .btn-premium-upgrade {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
        }
        
        .btn-upgrade:hover, .btn-premium-upgrade:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
            .upgrade-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .btn-upgrade, .btn-premium-upgrade {
                width: 200px;
                justify-content: center;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Interceptação do quiz já configurada no DOMContentLoaded principal

function updateHomeScreenInfo() {
    const userSession = window.AuthSystem.getUserSession();
    const questionsCountEl = document.getElementById('questions-count');
    const passRequirementEl = document.getElementById('pass-requirement');
    const passDescriptionEl = document.getElementById('pass-description');
    
    if (userSession && userSession.isTest) {
        // Modo teste - 10 questões
        const testQuestions = userSession.maxQuestions || 10;
        const requiredScore = Math.ceil(testQuestions * 0.7);
        
        if (questionsCountEl) {
            questionsCountEl.textContent = `${testQuestions} Questões`;
        }
        if (passRequirementEl) {
            passRequirementEl.textContent = `${requiredScore} para Passar`;
        }
        if (passDescriptionEl) {
            passDescriptionEl.textContent = `Você precisa acertar pelo menos ${requiredScore} questões (70%)`;
        }
    } else {
        // Modo completo - 30 questões
        if (questionsCountEl) {
            questionsCountEl.textContent = '30 Questões';
        }
        if (passRequirementEl) {
            passRequirementEl.textContent = '21 para Passar';
        }
        if (passDescriptionEl) {
            passDescriptionEl.textContent = 'Você precisa acertar pelo menos 70% das questões';
        }
    }
}

console.log('Sistema de integração de autenticação carregado!');
console.log('Verificação de login ativa no simulador.');