import ExamBody from "../components/Exam/index.js";
import newElement from "../utils/newElement.js"
import InfoCard from "../components/Exam/InfoCard.js";

const Exam = () => {
    const bodyContent = newElement('div')
    bodyContent.classList.add('exam-component')


    const body = ExamBody()
    
    const attemptsArea = InfoCard('Suas tentativas')

    bodyContent.appendChild(body)
    bodyContent.appendChild(attemptsArea)

    return bodyContent;
}

export default Exam;
