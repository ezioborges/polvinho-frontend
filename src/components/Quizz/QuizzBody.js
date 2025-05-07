import newElement from "../../utils/newElement.js";

const QuizzBody = (questions) => {
    console.log("🚀 ~ QuizzBody ~ questions:", questions)
    // aqui é o html da aplicação
    const bodyContent = newElement('div')
    bodyContent.classList.add('quizz-body')
    
    questions.forEach((question) => {
        // titulo de cada pergunta
        const questionTitle = newElement('p')
        questionTitle.textContent = `AQUI EU AMONTO AS PERGUNTAS: ${question.question}`
        bodyContent.appendChild(questionTitle)

        // lista para as alternativas
        const optionsList = newElement('ul')

        // itera sobre as alternativas da pergunta
        question.alternatives.forEach((alternative) => {
            const listItem = newElement('li')
            listItem.textContent = alternative
            optionsList.appendChild(listItem)
        })

        bodyContent.appendChild(optionsList)
    })

    return bodyContent;
}

export default QuizzBody;
