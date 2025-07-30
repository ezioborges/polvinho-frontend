import { formatDate } from '../utils/formatedDate.js';
import newElement from '../utils/newElement.js';
import textGenerator from '../utils/textGenerator.js';

const disciplineBarDisc = quiz => {
	const date = formatDate(quiz.submissionDeadline);

	const content = newElement('div');
	content.classList.add('bar-content');
	content.classList.add('quiz-bar-content');

	content.onclick = () =>
		(window.location.hash = `#/quiz/student/${quiz._id}`);

	const quizTitleArea = newElement('div');
	quizTitleArea.classList.add('quiz-bar-content-item');

	const quizTitle = textGenerator('textMd', quiz.title);
	quizTitle.classList.add('textMdBold');

	const quizDateArea = newElement('div');
	quizDateArea.classList.add('quiz-bar-content-item');

	const quizDate = textGenerator('textMd', date);

	const quizTypeArea = newElement('div');
	quizTypeArea.classList.add('quiz-bar-content-item');

	const quizTypeBadge = newElement('div');
	quizTypeBadge.classList.add('quiz-type-badge');

	//TODO: COLOCAR O TIPO DE AVALIAÇÃO NO SCHEMMA
	const quizType = textGenerator('textMd', 'type no schemma');
	quizType.classList.add('textSm');

	quizTypeBadge.appendChild(quizType);

	quizTitleArea.appendChild(quizTitle);
	quizDateArea.appendChild(quizDate);
	quizTypeArea.appendChild(quizTypeBadge);

	content.appendChild(quizTitleArea);
	content.appendChild(quizDateArea);
	content.appendChild(quizTypeArea);

	return content;
};

export default disciplineBarDisc;
