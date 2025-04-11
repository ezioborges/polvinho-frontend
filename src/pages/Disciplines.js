import Title from "../components/Title.js";
import newElement from "../utils/newElement.js"

const Disciplines = () => {
    const disciplineContent = newElement('div');
    
    disciplineContent.classList.add('body');

    const title = Title('Nome da disciplina')

    disciplineContent.appendChild(title)

    return disciplineContent;
}

export default Disciplines;
