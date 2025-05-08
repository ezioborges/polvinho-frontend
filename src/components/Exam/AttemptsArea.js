import { attemptsArr } from "../../data/attemptsArr.js";
import newElement from "../../utils/newElement.js";

const AttemptsArea = () => {
    const attemptsContent = newElement('div')
    attemptsContent.classList.add('attempts-list')
    
    attemptsArr.forEach(({ id, score, response }) => {
        const attemptItem = newElement('div')
        
        const atttemptId = newElement('div')
        attemptItem.textContent = `${id}º Tentativa: `
        
        const attemptScore = newElement('div')
        attemptItem.textContent = score
        
        const attemptResponse = newElement('div')
        attemptItem.textContent = response

        attemptItem.appendChild(atttemptId)
        attemptItem.appendChild(attemptScore)
        attemptItem.appendChild(attemptResponse)

        attemptsContent.appendChild(attemptItem)
    })

    return attemptsContent
}

export default AttemptsArea;