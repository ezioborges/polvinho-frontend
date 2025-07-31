import newElement from '../../utils/newElement.js';

const QuizStartedPage = () => {
	const startContent = newElement('div');
	startContent.classList.add('textMd');
	startContent.textContent = 'Aqui é onde o quiz iniciado vai aparecer';

	return startContent;
};

export default QuizStartedPage;
