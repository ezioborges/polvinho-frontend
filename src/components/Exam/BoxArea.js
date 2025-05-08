import newElement from "../../utils/newElement.js";
import textGenerator from "../../utils/textGenerator.js";
import AttempsArea from "./AttempsArea.js";

const BoxArea = (titleInfo) => {
    const attemptsContent = newElement('div')
    attemptsContent.classList.add('attempts-area')

    const attemptsTop = newElement('div')
    attemptsTop.classList.add('attempts-top')

    const title = textGenerator('textLG', titleInfo)

    const attempts = AttempsArea()

    attemptsTop.appendChild(title)

    attemptsContent.appendChild(attemptsTop)
    attemptsContent.appendChild(attempts)


    return attemptsContent;
}

export default BoxArea;
