import newElement from "../../utils/newElement.js";

const QuizzButton = (titleButton, cssButton, fontsButton) => {
    const buttonContent = newElement('button');
    buttonContent.textContent = titleButton;
    buttonContent.classList.add(cssButton)
    buttonContent.classList.add(fontsButton)

    return buttonContent
}

export default QuizzButton;