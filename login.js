// Sistema de autenticação e controle de acesso

// Usuários cadastrados
const users = {
    'MariaVictoria': '092129'
};

// Chaves para localStorage
const STORAGE_KEYS = {
    IP_TEST_USED: 'detran_ip_test_used',
    USER_SESSION: 'detran_user_session',
    TEST_TIMESTAMP: 'detran_test_timestamp'
};

// Inicialização da página
document.addEventListener('DOMContentLoaded', function() {
    initializeLogin();
});

function initializeLogin() {
    // Verificar se já está logado
    if (isUserLoggedIn()) {
        redirectToSimulator();
        return;
    }

    // Configurar event listeners
    setupEventListeners();
    
    // Verificar status do teste gratuito
    checkFreeTestStatus();
    
    // Obter IP do usuário
    getUserIP();
}

function setupEventListeners() {
    const loginForm = document.getElementById('login-form');
    const testBtn = document.getElementById('test-btn');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Event listeners para modais
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    
    if (authenticateUser(username, password)) {
        // Login bem-sucedido
        setUserSession(username);
        showSuccessMessage('Login realizado com sucesso!');
        
        setTimeout(() => {
            redirectToSimulator();
        }, 1500);
    } else {
        // Login falhou
        showErrorMessage('Usuário ou senha incorretos!');
        
        // Limpar campos
        document.getElementById('password').value = '';
        document.getElementById('username').focus();
    }
}

function authenticateUser(username, password) {
    return users[username] && users[username] === password;
}

function setUserSession(username) {
    const sessionData = {
        username: username,
        loginTime: new Date().toISOString(),
        isPremium: true // Usuários cadastrados têm acesso premium
    };
    
    localStorage.setItem(STORAGE_KEYS.USER_SESSION, JSON.stringify(sessionData));
}

function isUserLoggedIn() {
    const session = localStorage.getItem(STORAGE_KEYS.USER_SESSION);
    if (!session) return false;
    
    try {
        const sessionData = JSON.parse(session);
        // Verificar se a sessão não expirou (24 horas)
        const loginTime = new Date(sessionData.loginTime);
        const now = new Date();
        const hoursDiff = (now - loginTime) / (1000 * 60 * 60);
        
        return hoursDiff < 24;
    } catch (e) {
        return false;
    }
}

function redirectToSimulator() {
    // Adicionar um pequeno delay para evitar piscar
    document.body.style.opacity = '0.5';
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 100);
}

// Sistema de teste gratuito por IP
let userIP = null;

function getUserIP() {
    // Simular obtenção de IP (em produção, usar serviço real)
    // Para demonstração, vamos usar um IP simulado baseado no navegador
    userIP = generateSimulatedIP();
    console.log('IP do usuário:', userIP);
}

function generateSimulatedIP() {
    // Gerar um "IP" baseado em características do navegador
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('IP Fingerprint', 2, 2);
    
    const fingerprint = canvas.toDataURL().slice(-20);
    const userAgent = navigator.userAgent.slice(-10);
    const screenInfo = `${window.screen.width}x${window.screen.height}`;
    
    // Criar um hash simples
    let hash = 0;
    const str = fingerprint + userAgent + screenInfo;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    
    // Converter para formato IP-like
    const ip = Math.abs(hash);
    return `192.168.${(ip % 255)}.${((ip >> 8) % 255)}`;
}

function checkFreeTestStatus() {
    const testUsed = localStorage.getItem(STORAGE_KEYS.IP_TEST_USED);
    const testBtn = document.getElementById('test-btn');
    const testStatus = document.getElementById('test-status');
    
    if (testUsed) {
        try {
            const testData = JSON.parse(testUsed);
            if (testData.ip === userIP || testData.ip === generateSimulatedIP()) {
                // Teste já foi usado neste IP
                testBtn.style.display = 'none';
                testStatus.style.display = 'flex';
                return;
            }
        } catch (e) {
            // Dados corrompidos, limpar
            localStorage.removeItem(STORAGE_KEYS.IP_TEST_USED);
        }
    }
    
    // Teste disponível
    testBtn.style.display = 'inline-flex';
    testStatus.style.display = 'none';
}

function startFreeTest() {
    const testUsed = localStorage.getItem(STORAGE_KEYS.IP_TEST_USED);
    
    if (testUsed) {
        showErrorMessage('Você já utilizou seu teste gratuito!');
        return;
    }
    
    // Marcar teste como usado
    const testData = {
        ip: userIP || generateSimulatedIP(),
        timestamp: new Date().toISOString(),
        used: true
    };
    
    localStorage.setItem(STORAGE_KEYS.IP_TEST_USED, JSON.stringify(testData));
    localStorage.setItem(STORAGE_KEYS.TEST_TIMESTAMP, new Date().toISOString());
    
    // Criar sessão temporária para teste
    const testSession = {
        username: 'teste_gratuito',
        loginTime: new Date().toISOString(),
        isPremium: false,
        isTest: true,
        maxQuestions: 10 // Limitar a 10 questões no teste
    };
    
    localStorage.setItem(STORAGE_KEYS.USER_SESSION, JSON.stringify(testSession));
    
    showSuccessMessage('Iniciando teste gratuito...');
    
    setTimeout(() => {
        redirectToSimulator();
    }, 1500);
}

// Funções para modais
function showPremiumInfo() {
    document.getElementById('premium-modal').style.display = 'block';
}

function showDonationInfo() {
    document.getElementById('donation-modal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showCustomDonation() {
    const customValue = prompt('Digite o valor da doação (R$):');
    if (customValue && !isNaN(customValue) && parseFloat(customValue) > 0) {
        processDonation(parseFloat(customValue));
    }
}

function processDonation(value) {
    // Simular processamento de doação
    showSuccessMessage(`Obrigado pela doação de R$ ${value.toFixed(2)}!`);
    closeModal('donation-modal');
    
    // Em produção, integrar com gateway de pagamento
    console.log('Processando doação:', value);
}

// Event listeners para botões de doação
document.addEventListener('DOMContentLoaded', function() {
    const donationBtns = document.querySelectorAll('.donation-btn[data-value]');
    donationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const value = parseFloat(this.dataset.value);
            processDonation(value);
        });
    });
});

// Funções de utilidade
function showSuccessMessage(message) {
    showMessage(message, 'success');
}

function showErrorMessage(message) {
    showMessage(message, 'error');
}

function showMessage(message, type) {
    // Remover mensagens existentes
    const existingMessages = document.querySelectorAll('.message-toast');
    existingMessages.forEach(msg => msg.remove());
    
    // Criar nova mensagem
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-toast message-${type}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Adicionar estilos
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' : 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)'};
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(messageDiv);
    
    // Remover após 3 segundos
    setTimeout(() => {
        messageDiv.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 3000);
}

// Adicionar estilos de animação
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    .message-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;
document.head.appendChild(style);

// Função para logout (será usada no simulador)
function logout() {
    localStorage.removeItem(STORAGE_KEYS.USER_SESSION);
    window.location.href = 'login.html';
}

// Exportar funções para uso no simulador
window.AuthSystem = {
    isUserLoggedIn,
    getUserSession: () => {
        const session = localStorage.getItem(STORAGE_KEYS.USER_SESSION);
        return session ? JSON.parse(session) : null;
    },
    logout,
    redirectToLogin: () => {
        window.location.href = 'login.html';
    }
};

console.log('Sistema de login carregado com sucesso!');
console.log('Usuário de teste: MariaVictoria / Senha: 092129');