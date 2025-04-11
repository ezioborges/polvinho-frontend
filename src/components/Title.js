import newElement from "../utils/newElement.js";
import textGenerator from "../utils/textGenerator.js";

export const Title = (local) => {
    const content  = newElement('div');

    const title = textGenerator('title1', local);
    const subtitle = textGenerator('textXL', 'Bem Vindo, Aluno!');

    content.classList.add('title-content');

    content.appendChild(title);
    content.appendChild(subtitle);

    return content;
}

export default Title;
