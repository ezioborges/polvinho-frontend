import { initQuizDialog } from "../../data/dialogsContent.js";
import { quizzesData } from "../../data/quizzesData.js";
import { clickEventCancelButton, clickEventStartQuiz, initTestDialog } from "../../utils/eventListeners.js";
import { getQuizz } from "../../utils/getQuizz.js";
import newElement from "../../utils/newElement.js";
import textGenerator from "../../utils/textGenerator.js";
import QuizzButton from "../Buttons/QuizzButton.js";
import PageTitle from "../PageTitle.js";

import ExamDesc from "./ExamDesc.js";
import ExamInfo from "./ExamInfo.js";

const ExamBody = () => {
    const hash = window.location.hash
    const hashId = hash.slice(-1)
    const quizz = getQuizz(hash, quizzesData)
    const { teacher: { name, resume } } = quizz 
    const { title, text } = initQuizDialog
    const data = quizzesData.find((quiz) => quiz.id == hashId);    

    const bodyContent = newElement('div');
    bodyContent.classList.add('exam-body');

    const titleDiscipline =  PageTitle(data.name, data.discipline)

    const resumeReturn = ExamDesc(name, resume)

    const testInfo = ExamInfo(quizz)

    const buttonArea = newElement('div')
    buttonArea.style.paddingLeft = '3.75rem'

    const initButton = QuizzButton('Começar', 'button-content', 'textMdBold')
    initButton.onclick = initTestDialog(initButton, title, text, clickEventCancelButton, clickEventStartQuiz)

    buttonArea.appendChild(initButton)

    bodyContent.appendChild(titleDiscipline)
    bodyContent.appendChild(resumeReturn)
    bodyContent.appendChild(testInfo)
    bodyContent.appendChild(buttonArea)

    return bodyContent;
}

export default ExamBody;
