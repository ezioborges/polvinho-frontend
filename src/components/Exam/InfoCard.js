import { initTest } from "../../utils/eventListeners.js";
import newElement from "../../utils/newElement.js";
import textGenerator from "../../utils/textGenerator.js";
import QuizzButton from "../Buttons/QuizzButton.js";
import AttemptsArea from "./AttemptsArea.js";
import AwnsersArea from "./AwnsersArea.js";

const InfoCard = (titleInfo) => {
    const infoCardArea = newElement('div')
    infoCardArea.classList.add('info-card-area')

    const attemptsTop = newElement('div')
    attemptsTop.classList.add('info-card-top')

    const title = textGenerator('textLG', titleInfo)
    
    if (title.textContent === 'Suas tentativas') {
        const attempts = AttemptsArea()
        attemptsTop.appendChild(title)
        
        // aqui é o titulo
        infoCardArea.appendChild(attemptsTop)
        infoCardArea.appendChild(attempts)
    }    

    if (title.textContent === 'Respostas') {
        const awnsers = AwnsersArea()
    
        attemptsTop.appendChild(title)

        const finishTest = QuizzButton('Entregar', 'button-content', 'textMd')
        finishTest.onclick = initTest(finishTest, 'entrega do teste', 'Clicar apenas no botão de cancelar por enquanto!')
    
        infoCardArea.appendChild(attemptsTop)
        infoCardArea.appendChild(awnsers)
        infoCardArea.appendChild(finishTest)
    }
    
    return infoCardArea;
}

export default InfoCard;
