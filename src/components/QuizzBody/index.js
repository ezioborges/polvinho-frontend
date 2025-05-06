import newElement from "../../utils/newElement.js";

const QuizzBody = (title, question) => {
    const bodyContent = newElement('div')
    bodyContent.classList.add('quizz-body')
    
    const questionTitle = newElement('p')
    questionTitle.classList.add('title3')
    questionTitle.classList.add('question-title')
    questionTitle.textContent = title
    
    const questionBody = newElement('div')
    questionBody.classList.add('textSm')
    questionBody.classList.add('question-title')
    questionBody.style.color = 'var(--stone-700)'
    questionBody.textContent = question

    bodyContent.classList.add('quizz-body-content')

    bodyContent.appendChild(questionTitle)
    bodyContent.appendChild(questionBody)

    return bodyContent;
}

export default QuizzBody;
