import BodyWithoutContent from "../components/BodyWithoutContent.js";
import QuizzAnswersStudent from "../components/Quizz/QuizzAnswersStudent.js";
import QuizzBody from "../components/Quizz/QuizzBody.js";
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

    const bodyContent = newElement('div')
    bodyContent.classList.add('all-content')

    const bodyRigth  = newElement('div')
    bodyRigth.classList.add('quiz-component')

    // lado direito da tela
    const bodyTest = QuizzBody(questions, `Assunto: ${name}`, `Disciplina: ${discipline}`)
        
    console.log("🚀 ~ Quizz ~ bodyTest:", bodyTest)
    //lado esquerdo da tela
    const bodyLeft = QuizzAnswersStudent()


    bodyRigth.appendChild(bodyTest.bodyContent)

    bodyContent.appendChild(bodyRigth)
    bodyContent.appendChild(bodyLeft)

    return bodyContent
}

export default Quizz;