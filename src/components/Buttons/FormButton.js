import newElement from "../../utils/newElement.js";

const FormButton = (title, classButton, fontButton) => {
    const buttonContent = newElement('button');
    buttonContent.classList.add(classButton);
    buttonContent.classList.add(fontButton)
    buttonContent.textContent = title;

    return buttonContent;
}

export default FormButton;