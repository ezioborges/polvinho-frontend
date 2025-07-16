import { getSubjectByIdApi } from '../../api/subjects.js';
import createEntityButtonRoute from '../../components/Buttons/createEntityButtonRoute.js';
import PageTitle from '../../components/PageTitle.js';
import newElement from '../../utils/newElement.js';

const ProfessorSubject = async () => {
	const subjectId = window.location.hash.split('/')[2];
	const subject = await getSubjectByIdApi(subjectId);
	const content = newElement('div');

	const bodyTitleArea = newElement('div');
	bodyTitleArea.classList.add('body-title-area');

	const pageTitle = PageTitle(`${subject.name}`, 'Quizzes');

	const changeToRegister = createEntityButtonRoute(
		'Cadastrar',
		'textLG',
		'create-entity-button',
	);

	bodyTitleArea.appendChild(pageTitle);
	bodyTitleArea.appendChild(changeToRegister);

	content.appendChild(bodyTitleArea);

	return content;
};

export default ProfessorSubject;
