import newElement from "../utils/newElement.js";
import textGenerator from "../utils/textGenerator.js";

export const BodyTitle = () => {
    const content  = newElement('div');

    const title = textGenerator('title1', 'Dashboard');
    const subtitle = textGenerator('textXL', 'Bem Vindo, Aluno!');

    content.classList.add('title-content');

    content.appendChild(title);
    content.appendChild(subtitle);

    return content;
    
}

