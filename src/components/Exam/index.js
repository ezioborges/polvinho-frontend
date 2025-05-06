import { initQuizDialog } from "../../data/dialogsContent.js";
import { quizzesData } from "../../data/quizzesData.js";
import { clickEventButton } from "../../utils/eventListeners.js";
import { getQuizz } from "../../utils/getQuizz.js";
import newElement from "../../utils/newElement.js";
import textGenerator from "../../utils/textGenerator.js";
import InitQuizButton from "../Buttons/InitQuizButton.js";

import InitQuiz from "../Dialogs/InitQuiz.js";
import ExamDesc from "./ExamDesc.js";
import ExamInfo from "./ExamInfo.js";

const ExamBody = () => {
    const hash = window.location.hash
    const quizz = getQuizz(hash, quizzesData)
    const { teacher: { name, resume } } = quizz 
    const { title, text } = initQuizDialog

    const bodyContent = newElement('div');
    bodyContent.classList.add('exam-body');

    const titleResume = textGenerator('textLG', `Orientação do professor(a): ${name}`)
    titleResume.style.color = 'var(--stone-700)'
    
    const resumeReturn = ExamDesc(resume)
    const testInfo = ExamInfo(quizz)
    const initButton = InitQuizButton('Começar', 'button-content', 'textMdBold')

    clickEventButton(initButton, () => InitQuiz(title, text))

    bodyContent.appendChild(titleResume)
    bodyContent.appendChild(resumeReturn)
    bodyContent.appendChild(testInfo)
    bodyContent.appendChild(initButton)

    return bodyContent;
}

export default ExamBody;
