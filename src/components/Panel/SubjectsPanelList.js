import { getAllSubjects } from '../../data/subjectsData.js';
import urls from '../../urls/index.js';
import newElement from '../../utils/newElement.js';
import { panelItem } from './panelItem.js';

const SubjectsPanelList = async usersArray => {
	// usersArray agora será um array com UM ÚNICO objeto de usuário: [currentUser]
	const { subjects } = await getAllSubjects(urls.subjects);
	const PanelContent = newElement('div');
	PanelContent.classList.add('subjects-panel-content');

	usersArray.forEach(user => {
		const userSubjectIds = user.subject;

		if (userSubjectIds && Array.isArray(userSubjectIds)) {
			userSubjectIds.forEach(subjectId => {
				const { name } = subjects.find(
					subjct => subjct._id === subjectId,
				);

				const item = panelItem(
					`#/subject-student/${user._id}`,
					name,
					'subject-panel-list-item',
				);

				PanelContent.appendChild(item);
			});
		}
	});

	return PanelContent;
};

export default SubjectsPanelList;
