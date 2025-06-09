import Dialog from "../components/Dialogs/index.js";
import SendTestFinished from "../components/Dialogs/SendTestFinished.js";
import ToastBar from "../components/ToastBar/index.js";
import { createUserValidation } from "./createUserValidation.js";
import newElement from "./newElement.js";
import urls from '../urls/index.js'
import { fetchCreateUser, fetchLogin } from "../data/fetchData.js";
import { router } from "../router.js";
import Panel from "../components/Panel/index.js";

export const openDialog = (
            element, 
            title, 
            text, 
            cancelTitle, 
            funcCancelButton,
            startTitle, 
            funcStartQuiz,
            buttonColor
) => {
    element.addEventListener('click', () => {
        Dialog(
            title, 
            text, 
            cancelTitle, 
            funcCancelButton,
            startTitle, 
            funcStartQuiz,
            buttonColor
        )
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

export const clickFormLogin = (element) => {
    element.addEventListener('submit', async (event) => {
        event.preventDefault()
        const credentialsInput = document.querySelector('#credentials')
        const passwordInput = document.querySelector('#password')  
        const errorArea = document.querySelector('#error-area')
        const errorMessage = document.querySelector('#error-message')  

        try {
            const response = await fetchLogin(urls.login)
            
            const data = await response.json();

            const userLogin = {
                token: data.token,
                user: data.user
            }            

            if (response.ok) {  
                const role = data.user.role.toLowerCase();                
                
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
        localStorage.removeItem('jwtToken');
        window.location.hash = '#/';
    })
    
    clickEventCancelButton(event)
    
}

export const clickEventRegister = async (element, roleFromHash) => {
    element.addEventListener('click', async () => {
        try {
            
            const userNameInput = document.querySelector('#input-name')
            const userEmailInput = document.querySelector('#input-email')
            const userRegisterInput = document.querySelector('#input-register')
            const userDisciplineInput = document.querySelector('#input-subjects')
    
            const userName = userNameInput.value.trim();
            const userEmail = userEmailInput.value.trim();
            const userRegister = userRegisterInput.value.trim();
            const userDiscipline = userDisciplineInput.value.trim();
    
            const ValidUser = createUserValidation(userName, userEmail, userRegister, userDiscipline) 
            
            if (ValidUser.length === 0) {
                ToastBar({
                    iconParam: '../../assets/CheckCircle.svg',
                    titleParam: 'Sucesso!',
                    msgParam: 'Cadastro realizado com sucesso!'
                })
    
                setTimeout(() => {
                    const toastBar = document.querySelector('.success-toast')
                    if (toastBar) {
                        toastBar.classList.add('hide')
                        setTimeout(() => {
                            toastBar.remove();
                        }, 500)
                    }
                }, 3000)
    
                const newUser = {
                name: userName,
                email: userEmail,
                registration: userRegister,
                passwordHash: 'Umtest@22',
                role: roleFromHash, 
                subject: userDiscipline,
            }    
                localStorage.setItem('newUser', JSON.stringify(newUser));

                console.log('newUser ===> ', newUser);
                
                
    
                await fetchCreateUser(urls.users, newUser)
    
                userNameInput.value = '';
                userEmailInput.value = '';
                userRegisterInput.value = '';
                userDisciplineInput.value = 'Transfiguration'
    
            } else {
                userNameInput.value = '';
                userEmailInput.value = '';
                userRegisterInput.value = '';
                userDisciplineInput.value = 'Transfiguration'
    
                userNameInput.style.border = '2px solid var(--red-500)';
                userEmailInput.style.border = '2px solid var(--red-500)';
                userRegisterInput.style.border = '2px solid var(--red-500)';
                
                const errorList = document.querySelector('.error-list');
                errorList.innerHTML = ''; 
    
                ValidUser.forEach(error => {               
                    const errorMessage = newElement('li');
                    const errorText = newElement('p')
                    errorText.textContent = error.message;
                    errorText.classList.add('error-message');
                    
                    errorMessage.appendChild(errorText);
                    
                    errorList.appendChild(errorMessage);
                });
    
                localStorage.removeItem('newUser');
                console.error('Erro ao cadastrar usuário: ', ValidUser);
            }
        } catch (error) {
            throw new Error(`Erro ao buscar usuários: ${error.message}`);
        }

    }
)}

let isVisible = false
export const panelDropdown = () => {
    isVisible = !isVisible
    const panel = document.querySelector('#panel-dropdown')

    if(!isVisible) {
        panel.classList.remove('panel-dropdown-open')
        panel.classList.add('panel-dropdown-close')
    } else {
        const dropdown = Panel()
        panel.innerHTML = ''
        panel.appendChild(dropdown)
        

        panel.classList.remove('panel-dropdown-close')
        panel.classList.add('panel-dropdown-open')
    }
}