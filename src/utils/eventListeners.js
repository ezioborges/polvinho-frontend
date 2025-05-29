import Dialog from "../components/Dialogs/index.js";
import SendTestFinished from "../components/Dialogs/SendTestFinished.js";

export const initTestDialog = (element, title, text, funcCancelButton, funcStartQuiz) => {
    element.addEventListener("click", 
        () => Dialog(title, text, funcCancelButton, funcStartQuiz)
)};

export const clickEventCancelButton = (element) => {
    element.addEventListener("click", () => {
        const dialogOverlay = document.querySelector('.dialog-overlay')
        const dialogContent = document.querySelector('.dialog-content')

        if (dialogOverlay) {
            dialogOverlay.remove()
        }

        if (dialogContent) {
            dialogContent.remove()
        }
    })
}

export const clickEventStartQuiz = (element) => {
    element.addEventListener("click", () => {
        const hash = window.location.hash

        if (hash.startsWith('#/disciplines/')) {
            window.location.hash = `${hash}/quizz`
        } else {
            console.warn('O hash atual não corresponde ao formato esperado.')
        }
    })


    clickEventCancelButton(element)
}

export const clickFinishTest = (element) => {
    element.addEventListener('click', () => {
        const dialogContent = document.querySelector('.dialog-content')
        const hash = window.location.hash 
        const match = hash.match(/#\/disciplines\/([^/]+)\/quizz/);
        const hashId = match ? match[1] : null;
        
        
        if (dialogContent) {
            dialogContent.remove()
            
            const finishTest = SendTestFinished(hashId)

            document.body.appendChild(finishTest)
        }
    })
}

export const clickCloseFinishDialog = () => {
        const dialogOverlay = document.querySelector('.dialog-overlay')
        const dialogContent = document.querySelector('.dialog-content')

        if (dialogOverlay) {
            dialogOverlay.remove()
        }

        if (dialogContent) {
            dialogContent.remove()
        }
}

export const clickResults = () => {
    const hash = window.location.hash
    console.log("🚀 testando a rota de resultados", hash)
}

export const clickFormLogin = async (element) => {
    element.addEventListener('submit', async (event) => {
        event.preventDefault()
        const credentialsInput = document.querySelector('#credentials')
        const passwordInput = document.querySelector('#password')  
        const errorArea = document.querySelector('#error-area')
        const errorMessage = document.querySelector('#error-message')

        const emailOrRegistration = credentialsInput.value
        const password = passwordInput.value       

        const loginUrl = 'http://localhost:2424/login'

        try {
            const response = await fetch(loginUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({ 
                    email: emailOrRegistration,
                    password: password
                })
            })
 
            const data = await response.json()
            
            if (response.ok) {  
                console.log('Login bem-sucedido', data.token);
                
                localStorage.setItem('jwtToken', data.token);
                
                window.location.hash = '#/dashboard';
                
            } else {
                credentialsInput.style.border = ' 2px solid var(--red-500)';
                passwordInput.style.border = '2px solid var(--red-500)';
                credentialsInput.value = '';
                passwordInput.value = '';
                errorArea.style.display = 'flex';
                errorMessage.textContent = data.message || 'Erro ao fazer login. Verifique suas credenciais.';
                console.error('Erro no login ', data.message);
            }
        } catch (error) {
            throw new Error(`Erro ao buscar usuários: ${error.message}`);
        }
    })
}

export const endSession = (event) => {
    event.preventDefault();
    localStorage.removeItem('jwtToken');
    window.location.hash = '#/';
}