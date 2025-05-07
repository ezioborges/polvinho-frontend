import newElement from "../../utils/newElement.js";

const QuizzBody = (questions) => {
    const bodyContent = newElement('div')
    bodyContent.classList.add('quizz-body')
    
    questions.forEach((question) => {
        const questionContainer = newElement('div')
        questionContainer.classList.add('question-container')

        const questionArea = newElement('div')
        questionArea.classList.add('question-area')

        const answersArea = newElement('div')
        answersArea.classList.add('answers-area')
        // número da pergunta
        const questionNumber = newElement('p')
        questionNumber.textContent = `Pergunta: ${question.questionId}`
        questionNumber.classList.add('question-number')
        questionNumber.classList.add('textXL')
        bodyContent.appendChild(questionNumber)


        // titulo de cada pergunta
        const questionTitle = newElement('p')
        questionTitle.textContent = `${question.question}`
        questionTitle.classList.add('question-title')
        questionTitle.classList.add('textMd')
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

        questionArea.appendChild(questionNumber)
        questionArea.appendChild(questionTitle)

        answersArea.appendChild(optionsList)

        questionContainer.appendChild(questionArea)
        questionContainer.appendChild(answersArea)

        bodyContent.appendChild(questionContainer)
    })

    return bodyContent;
}

export default QuizzBody;
