import newElement from '../../utils/newElement.js';

export const StudentAnswers = async () => {
	const answersContent = newElement('div');
	answersContent.classList.add('info-card-area');

	return answersContent;
};
