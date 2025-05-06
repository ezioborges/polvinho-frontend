
export const clickEventButton = (event, func) => {
    event.addEventListener("click", 
        () => func('Deseja começar agora?',
            'Ao clicar no botão o quiz começará imediatamente e deve ser entregue para poder sair'));
};

export const clickEventCancelButton = (event) => {
    event.addEventListener("click", () => {
        const dialogOvgerlay = document.querySelector('.dialog-overlay')
        const dialogContent = document.querySelector('.dialog-content')

        if (dialogOvgerlay) {
            dialogOvgerlay.remove()
        }

        if (dialogContent) {
            dialogContent.remove()
        }
    })
}

export const clickEventStartQuiz = (event) => {
    event.addEventListener("click", () => {
        console.log('AQUI VAI SER O BOTÃO QUE INICIA O QUIZ');
    })
}