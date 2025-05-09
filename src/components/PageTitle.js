import newElement from "../utils/newElement.js";
import textGenerator from "../utils/textGenerator.js";
import Timer from "./Timer.js";

export const PageTitle = (title, subtitle) => {
    const content  = newElement('div');
    content.classList.add('title-content');
    
    const titleArea = newElement('div')


    const titleTop = textGenerator('title1', title);
    titleTop.style.color = 'var(--stone-900)'
    
    const subtitleTop = textGenerator('textXL', subtitle);
    subtitleTop.style.color = 'var(--stone-700)'

    const timer = Timer() //usar display none pra sumir


    titleArea.appendChild(titleTop);
    titleArea.appendChild(subtitleTop);

    content.appendChild(titleArea)
    content.appendChild(timer)

    return content;
}

export default PageTitle;
