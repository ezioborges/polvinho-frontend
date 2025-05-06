import newElement from "../utils/newElement.js";
import textGenerator from "../utils/textGenerator.js";

const BodyWithoutContent = (text) => {
    const content = newElement('div');
    const img = newElement('img');

    const title = textGenerator('textMdBold', text);

    img.src = './assets/no-data.png';
    img.alt = 'Planilha vazia';

    content.classList.add('no-content')
    content.style.color = 'var(--stone-400)';
    img.style.marginBottom = '1rem';
    
    content.appendChild(img);
    content.appendChild(title);

    return content;
}

export default BodyWithoutContent;
