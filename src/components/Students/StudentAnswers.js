import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';
import FormButton from '../Buttons/FormButton.js';
import { AnswersList } from './AnswersList.js';

export const StudentAnswers = async () => {
	const answersContent = newElement('div');
	answersContent.classList.add('info-card-area');

	const infoCardTitleArea = newElement('div');
	infoCardTitleArea.style.height = '5%';

	const infoCardTitle = textGenerator('textLG', 'Respostas');
	infoCardTitle.style.color = 'var(--stone-700)';

	const infocardQuestionsBody = newElement('div');
	infocardQuestionsBody.classList.add('info-card-questions-body');

	const answersList = await AnswersList();

	const infocardFinishButtonArea = newElement('div');
	infocardFinishButtonArea.classList.add('info-card-finish-button-area');

	const finishButton = FormButton(
		'Entregar',
		'create-entity-button',
		'textMdBold',
		'var(--stone-700)',
	);
	finishButton.style.backgroundColor = 'var(--indigo-500)';

	infoCardTitleArea.appendChild(infoCardTitle);

	infocardQuestionsBody.appendChild(answersList);

	infocardFinishButtonArea.appendChild(finishButton);

	answersContent.appendChild(infoCardTitleArea);
	answersContent.appendChild(infocardQuestionsBody);
	answersContent.appendChild(infocardFinishButtonArea);

	return answersContent;
};
