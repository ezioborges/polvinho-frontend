import { clickEventStartQuiz } from "../../utils/eventListeners.js";
import newElement from "../../utils/newElement.js";

const OpenQuizButton = (title, classTitle) => {
    const buttonContent = newElement('button');
    buttonContent.textContent = title
    buttonContent.classList.add('button-content')
    buttonContent.classList.add(classTitle)

    clickEventStartQuiz(buttonContent)

    return buttonContent
}

export default OpenQuizButton;
