import newElement from "../../utils/newElement.js";
import { panelItem } from "./panelItem.js";

const SidebarPanel = () => {
    const panelContent = newElement('div')
    panelContent.classList.add('sidebar-panel-content')
    
    const entities = newElement('div');

    const studentList = panelItem('#/students-admin', 'Alunos', 'dropdown-items')
    const profList = panelItem('#/professors-admin', 'Professores', 'dropdown-items')
    const subjectsList = panelItem('#/subjects-admin', 'Disciplinas', 'dropdown-items')

    entities.appendChild(studentList)
    entities.appendChild(profList)
    entities.appendChild(subjectsList)

    panelContent.appendChild(entities)

    return panelContent;
}

export default SidebarPanel;