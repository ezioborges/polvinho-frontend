import newElement from "../utils/newElement.js";
import textGenerator from "../utils/textGenerator.js";

export const PageTitle = (title, subtitle) => {
    const content  = newElement('div');

    const titleTop = textGenerator('title1', title);
    titleTop.style.color = 'var(--stone-900)'
    const subtitleTop = textGenerator('textXL', subtitle);
    subtitleTop.style.color = 'var(--stone-700)'

    content.classList.add('title-content');

    content.appendChild(titleTop);
    content.appendChild(subtitleTop);

    return content;
}

export default PageTitle;
