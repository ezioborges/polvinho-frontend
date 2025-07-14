import { getAllSubjectsApi } from '../../api/subjects.js';
import newElement from '../../utils/newElement.js';
import { panelItem } from './panelItem.js';

const SubjectsPanelList = async user => {
	const userSubjects = user.subject;
	const subjects = await getAllSubjectsApi();

	const PanelContent = newElement('div');
	PanelContent.classList.add('subjects-panel-content');

	userSubjects.forEach(subjectId => {
		const { name } = subjects.find(subjct => subjct._id === subjectId);

		const item = panelItem(
			`#/subject-student/${user._id}`,
			name,
			'subject-panel-list-item',
		);

		PanelContent.appendChild(item);
	});

	return PanelContent;
};

export default SubjectsPanelList;
