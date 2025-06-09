import newElement from "../../utils/newElement.js";

const FormButton = (title, classButton, fontButton, bgButton) => {
    const buttonContent = newElement('button');
    buttonContent.type = 'submit';
    buttonContent.classList.add(classButton);
    buttonContent.classList.add(fontButton)
    buttonContent.style.backgroundColor = bgButton
    buttonContent.textContent = title;

    return buttonContent;
}

export default FormButton;