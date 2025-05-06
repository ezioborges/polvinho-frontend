import BodyWithoutContent from "../components/BodyWithoutContent.js";
import PageTitle from "../components/PageTitle.js";
import QuizzBody from "../components/QuizzBody/index.js";
import { quizzesData } from "../data/quizzesData.js";
import newElement from "../utils/newElement.js";

const Quizz = () => {
    const hash = window.location.hash
    const match = hash.match(/#\/disciplines\/(\d+)\/quiz/); //regex que traz de volta o id da disciplina
    const hashId = match ? match[1] : null; //id da disciplina
    
    //dados do quiz
    const data = quizzesData.find((quiz) => quiz.id == hashId)

    if(!data) {
        return BodyWithoutContent('Nenhum quiz encontrado')
    }

    const { name, discipline } = data
    const questionsData = data.questions
    console.log("🚀 ~ Quizz ~ questionsData:", questionsData)

    const bodyContent  = newElement('div')
    bodyContent.classList.add('quiz-component')

    const quizContent = newElement('div')
    quizContent.classList.add('quiz-content')

    const listContent = newElement('div')
    listContent.classList.add('list-content')

    const titleArea = newElement('div')
    titleArea.classList.add('title-area')

    const titlePage = PageTitle(`Avaliação: ${name}`,
        `Discipolina: ${discipline}`);

    titleArea.appendChild(titlePage)

    const bodyPage = questionsData.map((question) => 
        QuizzBody(`Pergunta ${question.questionId}`, question.question)
    )

    bodyPage.forEach((question) => {
        listContent.appendChild(question)
    })

    quizContent.appendChild(listContent)

    bodyContent.appendChild(titleArea)
    bodyContent.appendChild(quizContent)

    return bodyContent
}

export default Quizz;