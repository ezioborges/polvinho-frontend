import newElement from "../utils/newElement.js";
import textGenerator from "../utils/textGenerator.js";
import Timer from "./Timer.js";

export const PageTitle = (title, subtitle) => {
    
    const titleArea = newElement('div')
    titleArea.classList.add('title-area')


    const titleTop = textGenerator('title1', title);
    titleTop.style.color = 'var(--stone-900)'
    
    const subtitleTop = textGenerator('textXL', subtitle);
    subtitleTop.style.color = 'var(--stone-700)'

    // const timer = Timer() //usar display none pra sumir TODO


    titleArea.appendChild(titleTop);
    titleArea.appendChild(subtitleTop);

    // content.appendChild(timer)

    return titleArea;
}

export default PageTitle;
