import { finishQuizDialog } from "../../data/dialogsContent.js";
import { clickEventCancelButton , clickFinishTest, openDialog } from "../../utils/eventListeners.js";
import newElement from "../../utils/newElement.js";
import textGenerator from "../../utils/textGenerator.js";
import QuizzButton from "../Buttons/QuizzButton.js";
import AttemptsArea from "./AttemptsArea.js";
import AwnsersArea from "./AwnsersArea.js";

const InfoCard = (titleInfoParam) => {
    const { title, text } = finishQuizDialog
    const infoCardArea = newElement('div')
    infoCardArea.classList.add('info-card-area')

    const attemptsTop = newElement('div')
    attemptsTop.classList.add('info-card-top')

    const titleInfo = textGenerator('textLG', titleInfoParam)
    
    if (titleInfo.textContent === 'Suas tentativas') {
        const attempts = AttemptsArea()
        attemptsTop.appendChild(titleInfo)
        
        // aqui é o titulo
        infoCardArea.appendChild(attemptsTop)
        infoCardArea.appendChild(attempts)
    }    

    if (titleInfo.textContent === 'Respostas') {
        const awnsers = AwnsersArea()
    
        attemptsTop.appendChild(titleInfo)

        const finishTest = QuizzButton('Entregar', 'button-content', 'textMd')
        finishTest.onclick = openDialog(finishTest, title, text, clickEventCancelButton, clickFinishTest)
    
        infoCardArea.appendChild(attemptsTop)
        infoCardArea.appendChild(awnsers)
        infoCardArea.appendChild(finishTest)
    }

    if (titleInfo.textContent === 'Nota') {
        const results = newElement('p')
        results.textContent = `Nota: 5/10`
        results.classList.add('title1')

        const awnsers = AwnsersArea()

        const desabledButton = newElement('button')
        desabledButton.textContent = 'Entregue'
        desabledButton.classList.add('desabled-button')
        desabledButton.style.fontSize = '1.4rem'

        infoCardArea.appendChild(results)
        infoCardArea.appendChild(awnsers)
        infoCardArea.appendChild(desabledButton)
    }
    
    return infoCardArea;
}

export default InfoCard;
