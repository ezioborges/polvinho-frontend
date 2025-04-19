import { quizzesData } from "../../data/quizzesData.js";
import { getQuizz } from "../../utils/getQuizz.js";
import newElement from "../../utils/newElement.js";
import textGenerator from "../../utils/textGenerator.js";
import Button from "../Button.js";
import ExamDesc from "./ExamDesc.js";
import ExamInfo from "./ExamInfo.js";

const ExamBody = () => {
    const hash = window.location.hash
    const quizz = getQuizz(hash, quizzesData)
    const { teacher: { name, resume } } = quizz 

    const bodyContent = newElement('div');
    bodyContent.classList.add('exam-body');

    const title = textGenerator('textLG', `Orientação do professor(a): ${name}`)
    title.style.color = 'var(--stone-700'
    
    const resumeReturn = ExamDesc(resume)
    const testInfo = ExamInfo(quizz)
    const initButton = Button('Começar')

    bodyContent.appendChild(title)
    bodyContent.appendChild(resumeReturn)
    bodyContent.appendChild(testInfo)
    bodyContent.appendChild(initButton)

    return bodyContent;
}

export default ExamBody;
