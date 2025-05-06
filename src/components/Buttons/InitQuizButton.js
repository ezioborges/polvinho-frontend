import newElement from "../../utils/newElement.js";

const InitQuizButton = (title, content, fonts) => {
    const buttonContent = newElement('button');
    buttonContent.textContent = title
    buttonContent.classList.add(content)
    buttonContent.classList.add(fonts)

    return buttonContent
}

export default InitQuizButton;