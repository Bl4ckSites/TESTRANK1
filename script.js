// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyASnW_iFd1cO8KlRtJNtDQzlVJpo9sKqOU",
    authDomain: "rank3001cprg.firebaseapp.com",
    databaseURL: "https://rank3001cprg-default-rtdb.firebaseio.com",
    projectId: "rank3001cprg",
    storageBucket: "rank3001cprg.appspot.com",
    messagingSenderId: "595304781315",
    appId: "1:595304781315:web:fefcbca98a1e087eafa036",
    measurementId: "G-QDFMER85Z6"
};

// Inicializar o Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

console.log("©Roger Bastos");

// Função para aceitar os termos de uso
function acceptTerms() {
    console.log("Termos de uso aceitos.");
    document.getElementById('termsOverlay').style.display = 'none';
}

// Exibir os termos de uso ao carregar a página
window.onload = function () {
    console.log("Termos de uso exibidos.");

    // Centralizar o contêiner de termos de serviço na parte inferior central da tela
    const termsContainer = document.getElementById('termsOverlay');
    termsContainer.style.position = 'fixed';
    termsContainer.style.left = '50%';
    termsContainer.style.bottom = '20px';
    termsContainer.style.transform = 'translateX(-50%)';

    // Mostrar aviso após 1 segundo de carregamento da página
    setTimeout(function() {
        const termsOverlay = document.getElementById('termsOverlay');
        termsOverlay.textContent = "AO FAZER LOGIN ESTARÁ ACEITANDO OS TERMOS DE SERVIÇO";
        console.log("Aviso exibido após 1 segundo.");
        setTimeout(function() {
            acceptTerms();
            console.log("Aviso fechado automaticamente após 10 segundos.");
        }, 10000);
    }, 1000); 
};

// Função para verificar as credenciais de login
function checkCredentials(username, password, userType) {
    console.log("Verificando credenciais de login...");
    // Simulando verificação de credenciais
    // Aqui você pode adicionar lógica para verificar em um banco de dados, etc.
    if (userType === 'professor') {
        return username === 'Professor14+1' && password === 'escol@CP2K24';
    } else if (userType === 'aluno') {
        return username === 'Aluno' && password === 'Estudante24';
    } else {
        console.error("Tipo de usuário inválido:", userType);
        return false;
    }
}

// Função para enviar o formulário de login
function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    const subject = document.getElementById('subject').value;

    console.log('Usuário:', username);
    console.log('Senha:', password);
    console.log('Tipo de Usuário:', userType);
    console.log('Matéria:', subject);

    // Verificar credenciais
    const credentialsAreValid = checkCredentials(username, password, userType);
    if (!credentialsAreValid) {
        console.error("Credenciais inválidas. Usuário:", username);
        alert('Credenciais inválidas. Por favor, tente novamente.');
        return; // Impedir o avanço se as credenciais forem inválidas
    }

    console.log("Login bem-sucedido.");
    // Redirecionar o usuário para a página de ranking
    window.location.href = "ranking.html";
}

// Função para alternar a visibilidade da senha
function togglePasswordVisibility() {
    console.log("Alternando visibilidade da senha.");
    const passwordInput = document.getElementById('password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

// Função para alternar o tipo de usuário
function toggleUserType() {
    console.log("Alternando tipo de usuário.");
    const userType = document.getElementById('userType').value;
    const subjectSelect = document.getElementById('subjectSelect');

    // Mostrar ou ocultar o seletor de matéria com base no tipo de usuário
    if (userType === 'professor') {
        subjectSelect.classList.add('hidden');
    } else {
        subjectSelect.classList.remove('hidden');
    }
}

// Função para exibir os termos de serviço
function showTerms() {
    console.log("Exibindo termos de serviço.");
    document.getElementById('termsOverlay').style.display = 'block';
}

// Função para fechar os termos de serviço
function closeTerms() {
    console.log("Fechando termos de serviço.");
    document.getElementById('termsOverlay').style.display = 'none';
}