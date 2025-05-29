import newElement from "../../utils/newElement.js";
import textGenerator from "../../utils/textGenerator.js";

const ExamDesc = (professor, text) => {
    const bodyContent = newElement('div')
    bodyContent.classList.add('exam-desc')

    const titleResume = textGenerator('textLG', `Orientação do professor(a): ${professor}`)
    titleResume.style.color = 'var(--stone-700)'
    titleResume.style.marginBottom = '.5rem'

    const textReturn = textGenerator('textSm', text)
    textReturn.style.color = 'var(--stone-700)'
    
    bodyContent.appendChild(titleResume)
    bodyContent.appendChild(textReturn)

    return bodyContent;
}

export default ExamDesc;
