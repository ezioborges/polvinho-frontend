import newElement from "../utils/newElement.js";

const Button = (title) => {
    const buttonContent = newElement('button');
    buttonContent.textContent = title
    buttonContent.classList.add('button-content')
    
    return buttonContent
}

export default Button;
