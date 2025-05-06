
export const clickEventButton = (event, func) => {
    event.addEventListener("click", 
        () => func('Deseja começar agora?',
            'Ao clicar no botão o quiz começará imediatamente e deve ser entregue para poder sair'));
};

export const clickEventCancelButton = (event) => {
    event.addEventListener("click", () => {
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

export const clickEventStartQuiz = (event) => {
    event.addEventListener("click", () => {
        const hash = window.location.hash
        const hashId = hash.slice(-1)

        if (hash.startsWith('#/disciplines/')) {
            window.location.hash = `${hash}/quiz`
        } else {
            console.warn('O hash atual não corresponde ao formato esperado.')
        }
        console.log('aqui é valor do hash ===>', hash);
        console.log('aqui é o valor do hashId ===>', hashId);


    })
}