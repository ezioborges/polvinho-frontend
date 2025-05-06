export const clickEventButton = (event, func) => {
    event.addEventListener("click", 
        () => func('Deseja começar agora?',
            'Ao clicar no botão o quiz começará imediatamente e deve ser entregue para poder sair'));
};