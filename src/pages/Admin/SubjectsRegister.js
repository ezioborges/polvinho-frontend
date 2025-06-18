import QuizzButton from '../../components/Buttons/QuizzButton.js';
import InputArea from '../../components/Input/textInput.js';
import { createSubjects } from '../../utils/eventListeners.js';
import newElement from '../../utils/newElement.js';

const SubjectsRegister = () => {
	const registerCotent = newElement('div');

	const RowRegister = newElement('div');
	RowRegister.classList.add('register-row');

	const subjectNameLabelInput = InputArea(
		'Disciplina',
		'input-new-subject',
		`Digite o nome da disciplina`,
	);
	const subjectProfessorLabelInput = InputArea(
		'Professor',
		'input-professor',
		`Nome do professor`,
	);

	const buttonArea = newElement('div');
	buttonArea.classList.add('button-area');

	const registerButton = QuizzButton('Cadastrar', 'button-content', 'textMd');
	registerButton.classList.add('register-button-position');
	registerButton.style.width = '19.2vw';
	createSubjects(registerButton, 'disciplina');

	buttonArea.appendChild(registerButton);

	RowRegister.appendChild(subjectNameLabelInput);
	RowRegister.appendChild(subjectProfessorLabelInput);
	RowRegister.appendChild(buttonArea);

	registerCotent.appendChild(RowRegister);

	return registerCotent;
};

export default SubjectsRegister;
