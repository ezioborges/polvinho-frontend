import { getAllSubjectsApi } from '../../api/subjects.js';
import QuizzButton from '../../components/Buttons/QuizzButton.js';
import selectInput from '../../components/Input/selectInput.js';
import InputArea from '../../components/Input/textInput.js';
import { createProfessor } from '../../events/users.js';
import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';

const ProfessorRegister = async () => {
	const subjects = await getAllSubjectsApi();

	const subjectArray = subjects.map(subject => subject.name);

	const professorRegister = newElement('div');

	const firstRowRegister = newElement('div');
	firstRowRegister.classList.add('register-row');

	const secondRowRegister = newElement('div');
	secondRowRegister.classList.add('register-row');

	const title = textGenerator('title1', 'Cadastro de Professor');
	title.style.marginBottom = '3rem';

	const registerArea = newElement('div');
	registerArea.classList.add('register-area');

	const nameLabelInput = InputArea(
		'Nome Completo',
		'input-professor-name',
		`Digite o nome da Professor(a)`,
	);
	const registerLabelInput = InputArea(
		'Matrícula',
		'input-professor-register',
		`000000`,
	);
	const emailLabelInput = InputArea(
		'E-mail',
		'input-professor-email',
		'email@email.com',
	);

	const subjectsComponent = selectInput(
		'Disciplinas',
		'input-professor-subjects',
		subjectArray,
	);

	const buttonArea = newElement('div');
	buttonArea.classList.add('button-area');

	const registerButton = QuizzButton('Cadastrar', 'button-content', 'textMd');
	registerButton.style.width = '19.2vw';
	createProfessor(registerButton, 'professor');

	firstRowRegister.appendChild(nameLabelInput);
	firstRowRegister.appendChild(registerLabelInput);

	secondRowRegister.appendChild(emailLabelInput);
	secondRowRegister.appendChild(subjectsComponent);

	buttonArea.appendChild(registerButton);

	professorRegister.appendChild(title);
	professorRegister.appendChild(firstRowRegister);
	professorRegister.appendChild(secondRowRegister);
	professorRegister.appendChild(buttonArea);

	return professorRegister;
};

export default ProfessorRegister;
