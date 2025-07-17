import newElement from '../../utils/newElement.js';

const QuizAnswers = () => {
	const answersContent = newElement('div');
	answersContent.textContent = 'Aqui é onde vai ficar as respostas do quiz';
	answersContent.classList.add('textMd');

	return answersContent;
};

export default QuizAnswers;
