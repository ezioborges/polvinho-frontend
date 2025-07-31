import { getQuizzByIdApi } from '../../api/quizzes.js';
import FormButton from '../../components/Buttons/FormButton.js';
import { QuestionDialog } from '../../components/Dialogs/QuestionsDialog.js';
import InfoCard from '../../components/Exam/InfoCard.js';
import PageTitle from '../../components/PageTitle.js';
import { instructionsFromTheProfessor } from '../../components/professor/Quizz/InstructionsFromTheProfessor.js';
import { studentStartQuizEvent } from '../../events/quizzes.js';
import { clickEventCancelButton } from '../../utils/eventListeners.js';
import newElement from '../../utils/newElement.js';

const QuizStudentPage = async () => {
	const quizId = window.location.hash.split('/')[3];
	const quizData = await getQuizzByIdApi(quizId);

	const quizStudentContent = newElement('div');
	quizStudentContent.classList.add('quiz-student-content');

	const quizLeftArea = newElement('div');

	const quizRightArea = newElement('div');

	const quizTitleArea = newElement('div');
	quizTitleArea.classList.add('body-title-area');

	const quizTitle = PageTitle(
		`${quizData.title}`,
		`${quizData.subjectId.name}`,
	);

	const instructions = instructionsFromTheProfessor(quizData);

	const initQuizButtonArea = newElement('div');
	initQuizButtonArea.classList.add('init-button-area');

	const initQuizButton = FormButton(
		'Começar',
		'create-entity-button',
		'textMd',
		'',
	);
	initQuizButton.id = `${quizData._id}`;
	QuestionDialog(
		initQuizButton,
		'Deseja começar agora?',
		'Ao clica em "Começar", o quiz será inicializado imediatamente e deve ser entregue para poder sair.',
		'Cancelar',
		clickEventCancelButton,
		'Começar',
		studentStartQuizEvent,
		'',
		quizData,
	);

	const inforCard = await InfoCard('Suas tentativas', quizData);

	quizTitleArea.appendChild(quizTitle);

	initQuizButtonArea.appendChild(initQuizButton);

	quizLeftArea.appendChild(quizTitleArea);
	quizLeftArea.appendChild(instructions);
	quizLeftArea.appendChild(initQuizButtonArea);

	quizRightArea.appendChild(inforCard);

	quizStudentContent.appendChild(quizLeftArea);
	quizStudentContent.appendChild(quizRightArea);

	return quizStudentContent;
};

export default QuizStudentPage;
