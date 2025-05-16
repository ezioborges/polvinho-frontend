import newElement from "../utils/newElement.js";

const Results = () => {
    const resultsContent = newElement('div');
    resultsContent.textContent = 'Aqui é a tela de resultados';

    return resultsContent;
}

export default Results;