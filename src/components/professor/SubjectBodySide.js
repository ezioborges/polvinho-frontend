import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';
import { subjectQuizzesList } from './subjectQuizzesList.js';

export const SubjectBodySide = async bool => {
	const subjectBodyLeft = newElement('div');
	// TODO: COLOCAR AQUI UM ONCLICK PRA CONSEGUIR NEVEGAR ATÉ A DISCIPLINA
	subjectBodyLeft.classList.add('subject-body-side');
	const subjectCollumnTitleLeft = textGenerator('title4', 'Postados');
	const subjectQuizzesPosted = bool
		? await subjectQuizzesList(true)
		: await subjectQuizzesList(false);

	subjectBodyLeft.appendChild(subjectCollumnTitleLeft);
	subjectBodyLeft.appendChild(subjectQuizzesPosted);

	return subjectBodyLeft;
};
