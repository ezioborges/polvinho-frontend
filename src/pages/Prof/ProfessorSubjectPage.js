import { getSubjectByIdApi } from '../../api/subjects.js';
import createEntityButtonRoute from '../../components/Buttons/createEntityButtonRoute.js';
import PageTitle from '../../components/PageTitle.js';
import { SubjectBodySide } from '../../components/professor/SubjectBodySide.js';
import newElement from '../../utils/newElement.js';

const ProfessorSubject = async () => {
	const subjectId = window.location.hash.split('/')[2];
	const subject = await getSubjectByIdApi(subjectId);

	const content = newElement('div');

	const bodyTitleArea = newElement('div');
	bodyTitleArea.classList.add('body-title-area');

	const pageTitle = PageTitle(`${subject.name}`, 'Quizzes');

	const changeToRegister = createEntityButtonRoute(
		'Adicionar Quiz',
		'textLG',
		'create-entity-button',
	);
	changeToRegister.onclick = () =>
		(window.location.hash = '#/quiz/register-quiz');

	const subjectBody = newElement('div');
	subjectBody.classList.add('subject-body');

	bodyTitleArea.appendChild(pageTitle);
	bodyTitleArea.appendChild(changeToRegister);

	const subjectBodyLeft = await SubjectBodySide(true);
	const subjectBodyRight = await SubjectBodySide(false);

	subjectBody.appendChild(subjectBodyLeft);
	subjectBody.appendChild(subjectBodyRight);

	content.appendChild(bodyTitleArea);
	content.appendChild(subjectBody);

	return content;
};

export default ProfessorSubject;
