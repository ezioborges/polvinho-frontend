import SubjectsNotFound from "../components/Errors/SubjectsNotFound.js";
import newElement from "../utils/newElement.js";

const PageError = () => {
    const errorContent = newElement('div')
    errorContent.classList.add('error-page')

    const errorMessage = SubjectsNotFound('Erro de rota.', 'Da uma olhadinha no router')

    errorContent.appendChild(errorMessage)

    return errorContent;
}

export default PageError;