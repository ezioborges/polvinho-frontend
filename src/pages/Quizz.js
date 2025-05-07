import BodyWithoutContent from "../components/BodyWithoutContent.js";
import QuizzBody from "../components/Quizz/QuizzBody.js";
import QuizzTitle from "../components/Quizz/QuizzTilte.js";
import { quizzesData } from "../data/quizzesData.js";
import newElement from "../utils/newElement.js";

const Quizz = () => {
    const hash = window.location.hash
    const match = hash.match(/#\/disciplines\/(\d+)\/quizz/); //regex que traz de volta o id da disciplina
    const hashId = match ? match[1] : null; //id da disciplina
    
    //dados do quiz
    const data = quizzesData.find((quiz) => quiz.id == hashId)

    if(!data) {
        return BodyWithoutContent('Nenhum quiz encontrado')
    }
    
    const { name, discipline } = data
    const { questions } = data

    const bodyContent  = newElement('div')
    bodyContent.classList.add('quiz-component')

    const titleTest = QuizzTitle(name, discipline)
    const bodyTest = QuizzBody(questions)

    

    bodyContent.appendChild(titleTest)
    bodyContent.appendChild(bodyTest)

    return bodyContent
}

export default Quizz;