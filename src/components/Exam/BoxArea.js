import { initTest } from "../../utils/eventListeners.js";
import newElement from "../../utils/newElement.js";
import textGenerator from "../../utils/textGenerator.js";
import QuizzButton from "../Buttons/QuizzButton.js";
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

        const finishTest = QuizzButton('Entregar', 'button-content', 'textMd')
        finishTest.onclick = initTest(finishTest, 'entrega do teste', 'Clicar apenas no botão de cancelar por enquanto!')
    
        attemptsContent.appendChild(attemptsTop)
        attemptsContent.appendChild(awnsers)
        attemptsContent.appendChild(finishTest)
    }
    
    return attemptsContent;
}

export default BoxArea;
