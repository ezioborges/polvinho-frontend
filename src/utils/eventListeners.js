import Dialog from "../components/Dialogs/index.js";
import SendTestFinished from "../components/Dialogs/SendTestFinished.js";
import { fetchLogin } from "../data/fetchLogin.js";
import { createUserValidation } from "./createUserValidation.js";
import newElement from "./newElement.js";

export const openDialog = (element, title, text, funcCancelButton, funcStartQuiz) => {
    element.addEventListener('click', () => {
        Dialog(title, text, funcCancelButton, funcStartQuiz)
    })
    
}

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

        const loginUrl = 'http://localhost:2424/login'

        try {
            const response = await fetchLogin(loginUrl)            
            
            const data = await response.json();
            console.log('data ===> ', data.user);

            const userLogin = {
                token: data.token,
                user: data.user
            }
            
            console.log('userLogin ===> ', userLogin);
            

            if (response.ok) {  
                const role = data.user.role.toLowerCase();
                console.log('role ===> ', role);
                
                
                localStorage.setItem('userLogin', JSON.stringify(userLogin));

                if (role === 'admin') {
                    return window.location.hash = '#/dashboard-admin';
                }
                
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
    event.addEventListener('click', () => {
        localStorage.removeItem('userLogin');
        localStorage.removeItem('newUser');
        window.location.hash = '#/';
    })
    
    clickEventCancelButton(event)
    
}

export const clickEventRegister = (element) => {
    element.addEventListener('click', () => {
        const userNameInput = document.querySelector('#input-name')
        const userEmailInput = document.querySelector('#input-email')
        const userRegisterInput = document.querySelector('#input-register')
        const userDisciplineInput = document.querySelector('#input-discipline')
        const userRoleInput = document.querySelector('#input-role')
        const userPasswordInput = document.querySelector('#input-password')

        const userName = userNameInput.value.trim();
        const userEmail = userEmailInput.value.trim();
        const userRegister = userRegisterInput.value.trim();
        const userDiscipline = userDisciplineInput.value.trim();
        const userRole = userRoleInput.value.trim();
        const userPassword = userPasswordInput.value.trim();

        const ValidUser = createUserValidation(userName, userEmail, userRegister, userDiscipline, userPassword) 
        console.log('ValidUser ===> ', ValidUser);

        if (ValidUser.valid) {        
            const newUser = {
                name: userName,
                email: userEmail,
                register: userRegister,
                discipline: userDiscipline,
                role: userRole,
                password: userPassword
            }
    
    
            localStorage.setItem('newUser', JSON.stringify(newUser));
    
            console.log('clicou no botão depois de cadastrar = ', newUser);

            userNameInput.value = '';
            userEmailInput.value = '';
            userRegisterInput.value = '';
            userRoleInput.value = 'Aluno';
            userDisciplineInput.value = 'Transfiguration'
            userPasswordInput.value = '';


        } else {
            userNameInput.value = '';
            userEmailInput.value = '';
            userRegisterInput.value = '';
            userRoleInput.value = 'Aluno';
            userDisciplineInput.value = 'Transfiguration'
            userPasswordInput.value = '';

            userNameInput.style.border = '2px solid var(--red-500)';
            userEmailInput.style.border = '2px solid var(--red-500)';
            userRegisterInput.style.border = '2px solid var(--red-500)';
            userPasswordInput.style.border = '2px solid var(--red-500)';
            
            const errorArea = document.querySelector('.error-area');
            errorArea.innerHTML = ''; 

            ValidUser.forEach(error => {               
                const errorMessage = newElement('li');
                const errorText = newElement('p')
                errorText.textContent = error.message;
                errorText.classList.add('error-message');
                
                errorMessage.appendChild(errorText);
                
                errorArea.appendChild(errorMessage);
            });

            localStorage.removeItem('newUser');
            console.error('Erro ao cadastrar usuário: ', ValidUser);
        }

    }
)}

