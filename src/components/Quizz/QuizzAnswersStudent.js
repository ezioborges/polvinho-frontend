import newElement from "../../utils/newElement.js";
import InfoCard from "../Exam/InfoCard.js";

const QuizzAnswersStudent = () => {
    const answersContent = newElement('div')
    answersContent.classList.add('answers-student-area')

    const attemptsArea = InfoCard('Respostas')

    answersContent.appendChild(attemptsArea)

    return answersContent
}

export default QuizzAnswersStudent;