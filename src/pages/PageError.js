import SubjectsNotFound from "../components/Errors/SubjectsNotFound.js";
import newElement from "../utils/newElement.js";

const PageError = () => {
    const errorContent = newElement('div')
    errorContent.classList.add('error-page')

    const errorMessage = SubjectsNotFound('Disciplinas não encontradas ou não cadastradas.', 'Entre em contato com o Admin')

    errorContent.appendChild(errorMessage)

    return errorContent;
}

export default PageError;