import QuizzButton from '../../components/Buttons/QuizzButton.js';
import selectInput from '../../components/Input/selectInput.js';
import InputArea from '../../components/Input/textInput.js';
import { getAllSubjects } from '../../data/subjectsData.js';
import urls from '../../urls/index.js';
import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';

const UserRegister = async (role, createUser) => {
	const subjects = await getAllSubjects(urls.subjects);

	const subjectArray = subjects.map(subject => subject.name);

	const userRegister = newElement('div');

	const firstRowRegister = newElement('div');
	firstRowRegister.classList.add('register-row');

	const secondRowRegister = newElement('div');
	secondRowRegister.classList.add('register-row');

	const title = textGenerator('title1', `Cadastro de ${role}`);
	title.style.marginBottom = '3rem';

	const registerArea = newElement('div');
	registerArea.classList.add('register-area');

	const nameLabelInput = InputArea(
		'Nome Completo',
		'input-user-name',
		`Digite o nome do(a) ${role}(a)`,
	);
	const registerLabelInput = InputArea(
		'Matrícula',
		'input-user-register',
		`000000`,
	);
	const emailLabelInput = InputArea(
		'E-mail',
		'input-user-email',
		'email@email.com',
	);

	const subjectsComponent = selectInput(
		'Disciplinas',
		'input-user-subjects',
		subjectArray,
	);

	const buttonArea = newElement('div');
	buttonArea.classList.add('button-area');

	const registerButton = QuizzButton('Cadastrar', 'button-content', 'textMd');
	registerButton.style.width = '19.2vw';
	await createUser(registerButton, role);

	firstRowRegister.appendChild(nameLabelInput);
	firstRowRegister.appendChild(registerLabelInput);

	secondRowRegister.appendChild(emailLabelInput);
	secondRowRegister.appendChild(subjectsComponent);

	buttonArea.appendChild(registerButton);

	userRegister.appendChild(title);
	userRegister.appendChild(firstRowRegister);
	userRegister.appendChild(secondRowRegister);
	userRegister.appendChild(buttonArea);

	return userRegister;
};

export default UserRegister;
