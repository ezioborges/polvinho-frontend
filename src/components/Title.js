import newElement from "../utils/newElement.js";
import textGenerator from "../utils/textGenerator.js";

export const Title = (title, subtitle) => {
    const content  = newElement('div');

    const titleTop = textGenerator('title1', title);
    const subtitleTop = textGenerator('textXL', subtitle);

    content.classList.add('title-content');

    content.appendChild(titleTop);
    content.appendChild(subtitleTop);

    return content;
}

export default Title;
