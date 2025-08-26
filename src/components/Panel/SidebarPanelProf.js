import newElement from '../../utils/newElement.js';
import { professorSubjects } from '../../utils/professorSubjects.js';
import { panelItem } from './panelItem.js';

export const SidebarPanelProf = async () => {
	const subjectsOfProfessor = await professorSubjects();

	const content = newElement('div');
	content.classList.add('sidebar-panel-content');
	content.classList.add('sidebar-panel-prof-content');

	subjectsOfProfessor.forEach(subject => {
		const subjectItem = panelItem(
			`#/subject-professor/${subject._id}`,
			`${subject.name}`,
			'dropdown-prof-items',
		);

		content.appendChild(subjectItem);
	});

	return content;
};
