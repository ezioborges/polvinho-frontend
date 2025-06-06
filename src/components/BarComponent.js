import newElement from "../utils/newElement.js";
import textGenerator from "../utils/textGenerator.js";

const BarComponent = (disciplineName) => {
    const content = newElement('div');

    const name = newElement('p');
    name.textContent = disciplineName;    

    const text = textGenerator('textMd', name.textContent);

    content.classList.add('discipline-bar');
    text.classList.add('discipline-text');

    content.appendChild(text);
    
    return content;
}

export default BarComponent;
