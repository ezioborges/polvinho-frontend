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

    const infoCardContent = newElement('div')
    infoCardContent.classList.add('info-card-content')
    
    const title = PageTitle(name, discipline)
    const body = ExamBody()
    
    const attemptsArea = InfoCard('Suas tentativas')

    examContent.appendChild(title)
    examContent.appendChild(body)

    infoCardContent.appendChild(attemptsArea)

    bodyContent.appendChild(examContent)
    bodyContent.appendChild(infoCardContent)

    return bodyContent;
}

export default Exam;
