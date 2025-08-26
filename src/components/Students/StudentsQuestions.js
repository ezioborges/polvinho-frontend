import newElement from '../../utils/newElement.js';
import BodyWithoutContent from '../BodyWithoutContent.js';
import PageTitle from '../PageTitle.js';
import Timer from '../Timer.js';
import { QuestionsList } from './QuestionsList.js';

export const StudentstudentsQuestions = async quiz => {
	const {
		title,
		subjectId: { name },
		questions,
	} = quiz;

	const questionsContent = newElement('div');

	const quizTitleArea = newElement('div');
	quizTitleArea.classList.add('quiz-student-questions-area-component-title');

	const pageTitle = PageTitle(title, name);

	const questionsTitle = newElement('div');

	const timer = await Timer(quiz);

	const quizQuestionsArea = newElement('div');
	quizQuestionsArea.classList.add(
		'quiz-student-questions-area-component-body',
	);

	questionsTitle.appendChild(pageTitle);
	questionsTitle.style.width = '80%';

	quizTitleArea.appendChild(questionsTitle);
	quizTitleArea.appendChild(timer);

	questionsContent.appendChild(quizTitleArea);

	if (!questions || questions.length === 0) {
		const noContent = BodyWithoutContent('Este quiz não possui questões');

		questionsContent.appendChild(noContent);
	} else {
		const list = await QuestionsList(questions);

		quizQuestionsArea.appendChild(list);

		questionsContent.appendChild(quizQuestionsArea);
	}

	return questionsContent;
};
