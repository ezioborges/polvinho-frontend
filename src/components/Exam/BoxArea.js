import newElement from "../../utils/newElement.js";
import textGenerator from "../../utils/textGenerator.js";
import AttemptsArea from "./AttemptsArea.js";
import AwnsersArea from "./AwnsersArea.js";

const BoxArea = (titleInfo) => {
    const attemptsContent = newElement('div')
    attemptsContent.classList.add('attempts-area')

    const attemptsTop = newElement('div')
    attemptsTop.classList.add('attempts-top')

    const title = textGenerator('textLG', titleInfo)
    
    if (title.textContent === 'Suas tentativas') {
        const attempts = AttemptsArea()
        attemptsTop.appendChild(title)
        
        // aqui é o titulo
        attemptsContent.appendChild(attemptsTop)
        attemptsContent.appendChild(attempts)
    }    

    if (title.textContent === 'Respostas') {
        const awnsers = AwnsersArea()
    
        attemptsTop.appendChild(title)
    
        attemptsContent.appendChild(attemptsTop)
        attemptsContent.appendChild(awnsers)
    }
    
    return attemptsContent;
}

export default BoxArea;
