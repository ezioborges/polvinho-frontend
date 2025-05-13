import newElement from "../../utils/newElement.js"
import PageTitle from "../PageTitle.js"

const QuizzBody = (questions, title, subtitle) => {
    const bodyContent = newElement('div')
    bodyContent.classList.add('quizz-body')

    const questionsList = newElement('div')

    const bodyTitle = PageTitle(title, subtitle)

    
    questions.forEach((question) => {
        const questionContainer = newElement('div')
        questionContainer.classList.add('question-container')

        const questionArea = newElement('div')
        questionArea.classList.add('question-area')

        const answersArea = newElement('div')
        answersArea.classList.add('answers-area')

        const questionTitleArea = newElement('div')
        questionTitleArea.classList.add('question-title-area')

        // titulo de cada pergunta
        const questionTitle = newElement('p')
        questionTitle.textContent = `Pergunta ${question.questionId}: ${question.question}`
        questionTitle.classList.add('question-title')
        questionTitle.classList.add('textXL')
        questionTitle.style.fontWeight = 'bold'
        bodyContent.appendChild(questionTitle)

        // lista para as alternativas
        const optionsList = newElement('ol')
        optionsList.classList.add('option-list')

        // itera sobre as alternativas da pergunta
        question.alternatives.forEach((alternative) => {
            const listItem = newElement('li')
            const text = newElement('p')
            text.style.color = 'var(--stone-700)'
            text.textContent = alternative
            listItem.classList.add('list-item')
            text.classList.add('textMd')
            listItem.appendChild(text)
            optionsList.appendChild(listItem)
        })

        questionArea.appendChild(questionTitle)

        answersArea.appendChild(optionsList)

        questionContainer.appendChild(questionArea)
        questionContainer.appendChild(answersArea)

        questionsList.appendChild(questionContainer)
    })

    bodyContent.appendChild(bodyTitle)
    bodyContent.appendChild(questionsList)

    return bodyContent;
}

export default QuizzBody;
