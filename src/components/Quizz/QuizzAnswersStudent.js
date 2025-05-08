import newElement from "../../utils/newElement.js";
import BoxArea from "../Exam/BoxArea.js";

const QuizzAnswersStudent = () => {
    const answersContent = newElement('div')
    answersContent.classList.add('answers-student-area')

    const attemptsArea = BoxArea('Respostas')

    answersContent.appendChild(attemptsArea)

    return answersContent
}

export default QuizzAnswersStudent;