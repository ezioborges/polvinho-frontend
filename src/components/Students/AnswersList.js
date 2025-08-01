import { getQuizzByIdApi } from '../../api/quizzes.js';
import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';

export const AnswersList = async () => {
	const quizId = window.location.hash.split('/')[2];
	const { questions } = await getQuizzByIdApi(quizId);

	console.log('quizId ===> ', questions);
	const answersContent = newElement('div');

	questions.forEach((questions, i) => {
		const answers = newElement('div');
		answers.classList.add('answers-list-content');

		const questionNumber = textGenerator('textMdBold', `Pergunta ${i + 1}`);

		const letterAnswer = textGenerator('textMd', `A`);

		answers.appendChild(questionNumber);
		answers.appendChild(letterAnswer);

		answersContent.appendChild(answers);
	});

	return answersContent;
};
