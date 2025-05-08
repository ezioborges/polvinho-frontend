import { attemptsArr } from "../../data/attemptsArr.js";
import newElement from "../../utils/newElement.js";

const AttemptsArea = () => {
    const attemptsContent = newElement('div')
    attemptsContent.classList.add('attempts-list')
    
    attemptsArr.forEach((attempt) => {
        const attemptItem = newElement('li')
        
        const atttemptId = newElement('div')

        const attemptScore = newElement('div')

        const attemptResponse = newElement('div')

        attemptItem.appendChild(atttemptId)
        attemptItem.appendChild(attemptScore)
        attemptItem.appendChild(attemptResponse)

        attemptsContent.appendChild(attemptItem)
    })

    return attemptsContent
}

export default AttemptsArea;