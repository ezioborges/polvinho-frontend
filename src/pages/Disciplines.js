import DisciplinesContent from "../components/DisciplinesContent.js";
import Title from "../components/Title.js";
import newElement from "../utils/newElement.js"

const Disciplines = () => {
    const disciplineContent = newElement('div');
    
    const title = Title('Nome da disciplina', 'Quizzes')
    const disciplines = DisciplinesContent();

    disciplineContent.appendChild(title)
    disciplineContent.appendChild(disciplines)

    return disciplineContent;
}

export default Disciplines;
