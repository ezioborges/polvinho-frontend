import newElement from '../../utils/newElement.js';
import BodyWithoutContent from '../BodyWithoutContent.js';
import PageTitle from '../PageTitle.js';
import Timer from '../Timer.js';

export const StudentstudentsQuestions = async quiz => {
	const {
		title,
		subjectId: { name },
		questions,
	} = quiz;

	console.log('questions ===> ', questions);

	const questionsContent = newElement('div');

	const quizTitleArea = newElement('div');
	quizTitleArea.classList.add('quiz-student-questions-area-component-title');

	const questionsTitle = PageTitle(title, name);

	const timer = Timer();

	const quizQuestionsArea = newElement('div');
	quizQuestionsArea.classList.add(
		'quiz-student-questions-area-component-body',
	);

	quizTitleArea.appendChild(questionsTitle);
	quizTitleArea.appendChild(timer);

	questionsContent.appendChild(quizTitleArea);

	if (!questions || questions.length === 0) {
		const noContent = BodyWithoutContent('Este quiz não possui questões');

		questionsContent.appendChild(noContent);
	} else {
		questionsContent.appendChild(quizQuestionsArea);
	}

	return questionsContent;
};
