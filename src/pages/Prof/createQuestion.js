import { getQuizzByIdApi } from '../../api/quizzes.js';
import { questionsGenerateButton } from '../../components/Buttons/questionsGenerateButton.js';
import PageTitle from '../../components/PageTitle.js';
import { CreateQuestionForm } from '../../components/professor/Quizz/CreateQuestionForm.js';
import newElement from '../../utils/newElement.js';

const createQuestion = async () => {
	const quizId = window.location.hash.split('/')[3];

	const { title, subjectId } = await getQuizzByIdApi(quizId);

	const createcontent = newElement('div');

	const bodyTitleArea = newElement('div');
	bodyTitleArea.classList.add('body-title-area');

	const pageTitle = PageTitle(`${title}`, `${subjectId.name}`);

	const bodyArea = CreateQuestionForm();

	const buttonArea = newElement('div');
	buttonArea.classList.add('button-create-question-area');

	const saveAsDraft = questionsGenerateButton(
		'Voltar para inicio',
		'quiz-register-save-draft-button',
	);
	saveAsDraft.onclick = () => (window.location.hash = `#/dashboard-admin`);

	const postQuizButton = questionsGenerateButton(
		'Adicionar pergunta',
		'quiz-register-generate-button',
	);

	bodyTitleArea.appendChild(pageTitle);

	buttonArea.appendChild(saveAsDraft);
	buttonArea.appendChild(postQuizButton);

	createcontent.appendChild(bodyTitleArea);
	createcontent.appendChild(bodyArea);
	createcontent.appendChild(buttonArea);

	return createcontent;
};

export default createQuestion;
