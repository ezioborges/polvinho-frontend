import newElement from "../../utils/newElement.js";

const createEntityButtonRoute = (title, cssFont, cssButton) => {
const buttomContent = newElement('button'); // Corrija também o nome da tag: 'button', não 'buttom'

const plusFileIcon = newElement('img');
plusFileIcon.src = '../../../assets/FilePlus.png';
plusFileIcon.alt = 'ícone de arquivo com sinal de mais';


buttomContent.appendChild(plusFileIcon);
buttomContent.appendChild(document.createTextNode(` ${title}`));
buttomContent.classList.add(cssFont);
buttomContent.classList.add(cssButton);

return buttomContent;
}

export default createEntityButtonRoute;