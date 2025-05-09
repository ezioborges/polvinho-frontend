import newElement from "../../utils/newElement.js";
import { answersArr } from "../../data/attemptsArr.js";
import BodyWithoutContent from "../BodyWithoutContent.js";

const AwnsersArea = () => {
    const answersContent = newElement('div')
    answersContent.classList.add('answers-body')    

    if (!answersArr || answersArr.length === 0) {
        return BodyWithoutContent('ainda não há respostas computadas!')
    }

    const answersList = newElement('ul')
    answersList.classList.add('answers-list')

    answersArr.forEach((attempt) => {
        const answersItem = newElement('li')
        answersItem.classList.add('attempt-item')

        const answersQuestion = newElement('div')
        answersQuestion.classList.add('title3')
        answersQuestion.textContent = `Pergunta ${attempt.id}: `

        const testAnswer = newElement('div')
        testAnswer.classList.add('title3')
        testAnswer.textContent = `${attempt.answers}`

        answersItem.appendChild(answersQuestion)
        answersItem.appendChild(testAnswer)

        answersList.appendChild(answersItem)
    })

    answersContent.appendChild(answersList)

    return answersContent;
}

export default AwnsersArea;