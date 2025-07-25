import { getQuizzByIdApi } from '../../api/quizzes.js';
import createEntityButtonRoute from '../../components/Buttons/createEntityButtonRoute.js';
import { QuestionDialog } from '../../components/Dialogs/QuestionsDialog.js';
import PageTitle from '../../components/PageTitle.js';
import { CreateQuestionButton } from '../../components/professor/Quizz/CreateQuestionButton.js';
import { DeleteQuiz } from '../../components/professor/Quizz/DeleteQuiz.js';
import { instructionsFromTheProfessor } from '../../components/professor/Quizz/InstructionsFromTheProfessor.js';
import { StudentsResponseAndResumeList } from '../../components/professor/Quizz/StudentsResponseAndResumeList.js';
import { postQuizEvent } from '../../events/quizzes.js';
import { clickEventCancelButton } from '../../utils/eventListeners.js';
import newElement from '../../utils/newElement.js';

const QuizPage = async () => {
	const quizId = window.location.hash.split('/')[2];
	const quizData = await getQuizzByIdApi(quizId);
	const quizContent = newElement('div');

	const quizTitleArea = newElement('div');
	quizTitleArea.classList.add('body-title-area');

	const pageTitle = PageTitle(`${quizData.title}`, '');

	const instructions = instructionsFromTheProfessor(quizData);

	const responses = await StudentsResponseAndResumeList();

	const publishQuizButton = createEntityButtonRoute(
		'Postar Quizz',
		'textMd',
		'create-entity-button',
	);
	QuestionDialog(
		publishQuizButton,
		'Publicar Quiz?',
		'O quiz "NOME DO QUIZ" será postado e ficará disponível para os alunos responderem.',
		'Cancelar',
		clickEventCancelButton,
		'Publicar',
		postQuizEvent,
		'', // aqui é referente a cor do botão
		quizData,
	);

	const buttonsArea = newElement('div');
	buttonsArea.classList.add('buttons-quiz-area');

	const deleteButton = DeleteQuiz(quizData);
	const createQuestion = CreateQuestionButton('Criar Pergunta');
	createQuestion.onclick = () =>
		(window.location.hash = `#/quiz/create-question/${quizData._id}`);

	quizTitleArea.appendChild(pageTitle);
	quizTitleArea.appendChild(publishQuizButton);

	buttonsArea.appendChild(deleteButton);
	buttonsArea.appendChild(createQuestion);

	quizContent.appendChild(quizTitleArea);
	quizContent.appendChild(instructions);
	quizContent.appendChild(responses);
	quizContent.appendChild(buttonsArea);

	return quizContent;
};

export default QuizPage;
