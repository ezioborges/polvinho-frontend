import {
	CreateQuizQuestions,
	SaveQuizAsDraft,
} from '../../../events/quizzes.js';
import newElement from '../../../utils/newElement.js';
import { professorSubjects } from '../../../utils/professorSubjects.js';
import { questionsGenerateButton } from '../../Buttons/questionsGenerateButton.js';
import InputDate from '../../Input/InputDate.js';
import selectInput from '../../Input/selectInput.js';
import InputArea from '../../Input/textInput.js';

export const RegisterForm = async () => {
	const subjects = await professorSubjects();

	const activeSubjects = subjects.filter(
		subjects => subjects.isDeleted === false,
	);

	const subjectsNames = activeSubjects.map(subject => subject.name);

	const form = newElement('form');
	form.classList.add('quiz-register-form');

	const firstRow = newElement('div');
	firstRow.classList.add('quiz-register-first-row');

	const quizName = InputArea('', 'quiz-register-name', 'Nome do quiz');

	const quizSubject = await selectInput(
		'',
		'quiz-register-subject',
		subjectsNames,
	);

	const secondRow = newElement('div');
	secondRow.classList.add('quiz-register-second-row');

	const quizAttempts = InputArea(
		'',
		'quiz-register-attempts',
		'Tentativas para realizar o quiz',
	);

	const timer = InputArea(
		'',
		'quiz-max-time',
		'Tempo máximo para realizar o quiz (em minutos)',
	);

	const thirdRow = newElement('div');
	thirdRow.classList.add('quiz-register-third-row');

	const releaseDate = InputDate('Inicio', 'quiz-register-release-date');

	const submissionDeadline = InputDate(
		'Termino',
		'quiz-register-submission-date',
	);

	const fourthRow = newElement('div');
	fourthRow.classList.add('quiz-register-fourth-row');

	const registerDescription = newElement('textarea');
	registerDescription.id = 'quiz-register-description';
	registerDescription.classList.add('quiz-register-description');

	const buttonsArea = newElement('div');
	buttonsArea.classList.add('quiz-register-buttons-area');

	const createQuestionButton = questionsGenerateButton(
		'Criar Pergunta',
		'quiz-register-generate-button',
	);
	CreateQuizQuestions(createQuestionButton);

	const saveAsDraft = questionsGenerateButton(
		'Guardar Rascunho',
		'quiz-register-save-draft-button',
	);
	SaveQuizAsDraft(saveAsDraft);

	firstRow.appendChild(quizName);
	firstRow.appendChild(quizSubject);

	secondRow.appendChild(quizAttempts);
	secondRow.appendChild(timer);

	thirdRow.appendChild(releaseDate);
	thirdRow.appendChild(submissionDeadline);

	fourthRow.appendChild(registerDescription);

	buttonsArea.appendChild(saveAsDraft);
	buttonsArea.appendChild(createQuestionButton);

	form.appendChild(firstRow);
	form.appendChild(secondRow);
	form.appendChild(thirdRow);
	form.appendChild(fourthRow);
	form.appendChild(buttonsArea);

	return form;
};
