import Title from "../components/Title.js";
import { quizzesArr } from "../data/quizzesArr.js";
import newElement from "../utils/newElement.js"

const Exam = () => {
    const hash = window.location.hash
    const hashId = hash.slice(-1)

    const quizzes = quizzesArr

    const quizName = quizzes.filter((quiz) => quiz.id == hashId)
    console.log("🚀 ~ Exam ~ quizName:", [quizName])

    const examContent = newElement('div')

    
    console.log("buscando a localização: ", hashId);
    
    
    const title = Title('Simulado 1', 'Potions')

    examContent.appendChild(title)

    return examContent;
}

export default Exam;
