import newElement from "../../utils/newElement.js";
import textGenerator from "../../utils/textGenerator.js";

const ExamDesc = (text) => {
    const bodyContent = newElement('div')
    bodyContent.classList.add('exam-desc')

    const textReturn = textGenerator('textSm', text)
    textReturn.style.color = 'var(--stone-700)'
    
    bodyContent.appendChild(textReturn)

    return bodyContent;
}

export default ExamDesc;
