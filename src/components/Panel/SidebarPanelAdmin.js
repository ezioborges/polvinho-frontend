import newElement from '../../utils/newElement.js';
import { panelItem } from './panelItem.js';

const SidebarPanelAdmin = () => {
	const panelContent = newElement('div');
	panelContent.classList.add('sidebar-panel-content');

	const studentList = panelItem('#/aluno-admin', 'Alunos', 'dropdown-items');
	const profList = panelItem(
		'#/professor-admin',
		'Professores',
		'dropdown-items',
	);
	const subjectsList = panelItem(
		'#/subjects-admin',
		'Disciplinas',
		'dropdown-items',
	);

	panelContent.appendChild(studentList);
	panelContent.appendChild(profList);
	panelContent.appendChild(subjectsList);

	return panelContent;
};

export default SidebarPanelAdmin;
