import Dialog from "../components/Dialogs/index.js";
import SendTestFinished from "../components/Dialogs/SendTestFinished.js";
import { users } from "../data/userMock.js";
import { emailExists, passwordExists } from "../validations/credentialsExist.js";
import newElement from "./newElement.js";

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

export const clickFormLogin = (element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault()
        // const credentialsInput = document.querySelector('#credentials')
        
        users.find(user => {
            const credentialsInput = emailExists(user.email, user.registration)
            const passwordInput = passwordExists(user.passwordHash)
            if (credentialsInput && passwordInput) {
                
                return window.location.hash = '#/home' 
            }

            console.log('se bater aqui não veio ai');
        })
    })
}