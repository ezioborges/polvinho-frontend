import newElement from '../../../utils/newElement.js';
import InputArea from '../../Input/textInput.js';
import { InputAnswer } from './InputAnswer.js';

export const CreateQuestionForm = () => {
	const questionsFormContent = newElement('form');
	questionsFormContent.classList.add('questions-form-content');

	const question = InputArea(
		'Pergunta',
		'quiz-create-question',
		'Digite aqui a pergunta',
	);
	question.classList.add('create-question-form');

	const correctAnswer = InputAnswer('correct-answer', true);

	const firstWrongAnswer = InputAnswer('first-wrong-answer', false);
	const secondWrongAnswer = InputAnswer('second-wrong-answer', false);
	const thirdWrongAnswer = InputAnswer('third-wrong-answer', false);

	questionsFormContent.appendChild(question);
	questionsFormContent.appendChild(correctAnswer);
	questionsFormContent.appendChild(firstWrongAnswer);
	questionsFormContent.appendChild(secondWrongAnswer);
	questionsFormContent.appendChild(thirdWrongAnswer);

	return questionsFormContent;
};
