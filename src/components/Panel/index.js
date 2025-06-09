import newElement from "../../utils/newElement.js";
import { panelItem } from "./panelItem.js";

const Panel = () => {
    const panelContent = newElement('div')
    panelContent.classList.add('panel-content')
    
    const entities = newElement('div');

    const studentList = panelItem('student-list', '#/students-admin', 'Alunos')
    const profList = panelItem('prof-list', '#/professors-admin', 'Professores')
    const subjectsList = panelItem('subject-list', '#/subjects-admin', 'Disciplinas')

    entities.appendChild(studentList)
    entities.appendChild(profList)
    entities.appendChild(subjectsList)

    panelContent.appendChild(entities)

    return panelContent;
}

export default Panel;