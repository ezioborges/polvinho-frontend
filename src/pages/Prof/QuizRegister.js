import PageTitle from '../../components/PageTitle.js';
import { RegisterForm } from '../../components/professor/Quizz/RegisterForm.js';
import newElement from '../../utils/newElement.js';

const QuizRegister = async () => {
	const registerContent = newElement('div');

	const pageTitle = PageTitle('Informações do Quiz', '');

	const registerForm = await RegisterForm();

	registerContent.appendChild(pageTitle);
	registerContent.appendChild(registerForm);

	return registerContent;
};

export default QuizRegister;
