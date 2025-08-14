import { formatDate } from '../../../utils/formatedDate.js';
import newElement from '../../../utils/newElement.js';
import textGenerator from '../../../utils/textGenerator.js';

export const instructionsFromTheProfessor = quizData => {
	const {
		professorId: { name },
		description,
		attemptsRemaining,
		timeMinutes,
		submissionDeadline,
	} = quizData;

	const instructionContent = newElement('div');
	instructionContent.classList.add('instruction-content');

	const instructionTitle = textGenerator(
		'title4',
		`Orientações do professor: ${name}`,
	);

	const instructionsResumeArea = newElement('div');
	instructionsResumeArea.classList.add('instructions-resume-area');

	const instructionResume = textGenerator('textMd', `${description}`);

	const instructionsConfigArea = newElement('div');
	instructionsConfigArea.classList.add('instructions-config-area');

	const instructionConfigList = newElement('ul');

	const attemptsItem = newElement('li');
	attemptsItem.classList.add('config-item');
	attemptsItem.innerHTML = `
	    <span class="attempts-title">Tentativas: </span>
	    <span class="attempts-title attempts-amount">${attemptsRemaining}</span>
	`;

	const timeItem = newElement('li');
	timeItem.classList.add('config-item');
	timeItem.innerHTML = `
	    <span class="attempts-title">Tempo Máximo: </span>
	    <span class="attempts-title attempts-amount">${timeMinutes}</span>
	`;

	const dateItem = newElement('li');
	dateItem.classList.add('config-item');
	dateItem.innerHTML = `
	    <span class="attempts-title">Data de entrega: </span>
	    <span class="attempts-title attempts-amount">${formatDate(submissionDeadline)}</span>
	`;

	instructionConfigList.appendChild(attemptsItem);
	instructionConfigList.appendChild(timeItem);
	instructionConfigList.appendChild(dateItem);

	instructionsResumeArea.appendChild(instructionResume);

	instructionsConfigArea.appendChild(instructionConfigList);

	instructionContent.appendChild(instructionTitle);
	instructionContent.appendChild(instructionsResumeArea);
	instructionContent.appendChild(instructionsConfigArea);

	return instructionContent;
};
