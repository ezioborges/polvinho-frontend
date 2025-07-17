import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';
import { subjectQuizzesList } from './subjectQuizzesList.js';

export const SubjectBodySide = async bool => {
	const subjectBody = newElement('div');
	subjectBody.classList.add('subject-body-side');
	const subjectCollumnTitle = bool
		? textGenerator('title4', 'Postados')
		: textGenerator('title4', 'Rascunho');
	const subjectQuizzesPosted = bool
		? await subjectQuizzesList(true)
		: await subjectQuizzesList(false);

	subjectBody.appendChild(subjectCollumnTitle);
	subjectBody.appendChild(subjectQuizzesPosted);

	return subjectBody;
};
