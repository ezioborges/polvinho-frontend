import ExamBody from "../components/Exam/index.js";
import PageTitle from "../components/PageTitle.js";
import { quizzesData } from "../data/quizzesData.js";
import newElement from "../utils/newElement.js"
import InfoCard from "../components/Exam/InfoCard.js";

const Exam = () => {
    const hash = window.location.hash
    const hashId = hash.slice(-1)

    const data = quizzesData

    const { name, discipline } = data.find((quiz) => quiz.id == hashId)

    const bodyContent = newElement('div')
    bodyContent.classList.add('exam-component')

    const examContent = newElement('div')
    examContent.classList.add('exam-content') 

    const AttemptsContent = newElement('div')
    AttemptsContent.classList.add('attempts-content')
    
    const attemptsArea = InfoCard('Suas tentativas')
    
    const title = PageTitle(name, discipline)
    const body = ExamBody()


    examContent.appendChild(title)
    examContent.appendChild(body)

    bodyContent.appendChild(examContent)
    bodyContent.appendChild(attemptsArea)

    return bodyContent;
}

export default Exam;
