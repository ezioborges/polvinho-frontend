import newElement from "../utils/newElement.js";

const Button = (title) => {
    const buttonContent = newElement('button');
    buttonContent.textContent = title
    buttonContent.classList.add('button-content')
    buttonContent.classList.add('textMdBold')
    
    return buttonContent
}

export default Button;
