import newElement from "../../utils/newElement.js";

const Professor = () => {
    const professorContent = newElement('div')
    professorContent.textContent = 'Area para listagem do professor'

    return professorContent
}

export default Professor;