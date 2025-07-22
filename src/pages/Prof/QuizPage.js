import { getQuizzByIdApi } from '../../api/quizzes.js';
import PageTitle from '../../components/PageTitle.js';
import { DeleteQuiz } from '../../components/professor/Quizz/DeleteQuiz.js';
import { instructionsFromTheProfessor } from '../../components/professor/Quizz/InstructionsFromTheProfessor.js';
import { StudentsResponseAndResumeList } from '../../components/professor/Quizz/StudentsResponseAndResumeList.js';
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
	quizTitleArea.appendChild(pageTitle);

	const deleteButton = DeleteQuiz();

	quizContent.appendChild(quizTitleArea);
	quizContent.appendChild(instructions);
	quizContent.appendChild(responses);
	quizContent.appendChild(deleteButton);

	return quizContent;
};

export default QuizPage;
