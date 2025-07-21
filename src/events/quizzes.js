import { createQuizApi } from '../api/quizzes.js';
import ToastBar from '../components/ToastBar/index.js';
import { resetQuizInputs } from '../utils/resetUserInputs.js';
import { userDataByLocalStorage } from '../utils/userDataByLocalStorage.js';

export const SaveQuizAsDraft = element => {
	element.addEventListener('click', async event => {
		event.preventDefault();

		const {
			user: { name },
		} = userDataByLocalStorage();

		const newQuiz = {
			professor: name,
			subject: document.querySelector('#quiz-register-subject').value,
			title: document.querySelector('#quiz-register-name').value,
			maxAttempts: document.querySelector('#quiz-register-attempts')
				.value,
			timeMinutes: document.querySelector('#quiz-max-time').value,
			releaseDate: document.querySelector('#quiz-register-release-date')
				.value,
			submissionDeadline: document.querySelector(
				'#quiz-register-submission-date',
			).value,
			description: document.querySelector('#quiz-register-description')
				.value,
		};

		try {
			await createQuizApi(newQuiz);
			console.log('antes do toast');
			ToastBar(
				{
					iconParam: '../../assets/CheckCircle.png',
					titleParam: 'Sucesso',
					msgParam: 'Quiz adicionado aos rascunhos com sucesso!',
				},
				'success-toast',
			);

			resetQuizInputs();

			console.log('depois de criar o quiz');
		} catch (error) {
			ToastBar(
				{
					iconParam: '../../assets/Vector-error.png',
					titleParam: 'Erro',
					msgParam:
						'Ocorreu um erro ao adicionar o quiz aos rascunhos.',
				},
				'error-toast',
			);

			console.error('Erro ao criar quiz:', error.message);
		}
	});
};
