import newElement from "../../utils/newElement.js";
import PageTitle from '../PageTitle.js';

const QuizzTitle = (name, discipline) => {
    const titleArea = newElement('div')
    titleArea.classList.add('title-area')

    const titlePage = PageTitle(`Avaliação: ${name}`,
        `Discipolina: ${discipline}`);

    return titleArea.appendChild(titlePage)
}

export default QuizzTitle;