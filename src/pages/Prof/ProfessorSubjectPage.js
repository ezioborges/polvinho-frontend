import { getSubjectByIdApi } from '../../api/subjects.js';
import createEntityButtonRoute from '../../components/Buttons/createEntityButtonRoute.js';
import PageTitle from '../../components/PageTitle.js';
import { subjectQuizzesList } from '../../components/professor/subjectQuizzesList.js';
import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';

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

	// //TODO: lembrar de criar um componente subjectBodySide para tratar a renderização das colunas

	// //TODO: LEFT
	const subjectBodyLeft = newElement('div');
	subjectBodyLeft.classList.add('subject-body-side');
	const subjectCollumnTitleLeft = textGenerator('title4', 'Postados');
	const subjectQuizzesPosted = await subjectQuizzesList(true);

	// //TODO: RIGTH
	const subjectBodyRight = newElement('div');
	subjectBodyRight.classList.add('subject-body-side');
	const subjectCollumnTitleRigth = textGenerator('title4', 'Rascunho');
	const subjectQuizzesNotPosted = await subjectQuizzesList(false);

	bodyTitleArea.appendChild(pageTitle);
	bodyTitleArea.appendChild(changeToRegister);

	subjectBodyLeft.appendChild(subjectCollumnTitleLeft);
	subjectBodyLeft.appendChild(subjectQuizzesPosted);

	subjectBodyRight.appendChild(subjectCollumnTitleRigth);
	subjectBodyRight.appendChild(subjectQuizzesNotPosted);

	subjectBody.appendChild(subjectBodyLeft);
	subjectBody.appendChild(subjectBodyRight);

	content.appendChild(bodyTitleArea);
	content.appendChild(subjectBody);

	return content;
};

export default ProfessorSubject;
