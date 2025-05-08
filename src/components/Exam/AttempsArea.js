import newElement from "../../utils/newElement.js";
import { attemptsArr } from "../../data/attemptsArr.js";
import BodyWithoutContent from "../BodyWithoutContent.js";

const AttempsArea = () => {
    const attemptsContent = newElement('div')
    attemptsContent.classList.add('attempts-body')

    console.log('attemptsArr', attemptsArr);
    

    if (!attemptsArr || attemptsArr.length === 0) {
        return BodyWithoutContent('ainda não há respostas computadas!')
    }

    const attemptsList = newElement('ul')
    attemptsList.classList.add('attempts-list')

    attemptsArr.forEach((attempt) => {
        const attemptItem = newElement('li')
        attemptItem.classList.add('attempt-item')

        const attemptQuestion = newElement('div')
        attemptQuestion.classList.add('title3')
        attemptQuestion.textContent = `Pergunta ${attempt.id}: `

        const attemptAnswer = newElement('div')
        attemptAnswer.classList.add('title3')
        attemptAnswer.textContent = `${attempt.answers}`

        attemptItem.appendChild(attemptQuestion)
        attemptItem.appendChild(attemptAnswer)

        attemptsList.appendChild(attemptItem)
    })

    attemptsContent.appendChild(attemptsList)

    return attemptsContent;
}

export default AttempsArea;