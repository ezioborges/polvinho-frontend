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

	const subjectBody = newElement('div');
	subjectBody.classList.add('subject-body');

	//TODO: lembrar de criar um componente subjectBodySide para tratar a renderização das colunas
	const subjectBodyLeft = newElement('div');
	subjectBodyLeft.classList.add('subject-body-side');

	const subjectBodyRight = newElement('div');
	subjectBodyRight.classList.add('subject-body-side');

	bodyTitleArea.appendChild(pageTitle);
	bodyTitleArea.appendChild(changeToRegister);

	subjectBody.appendChild(subjectBodyLeft);
	subjectBody.appendChild(subjectBodyRight);

	content.appendChild(bodyTitleArea);
	content.appendChild(subjectBody);
	return content;
};

export default ProfessorSubject;
