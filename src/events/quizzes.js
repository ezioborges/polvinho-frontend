import { createQuizApi } from '../api/quizzes.js';
import ToastBar from '../components/ToastBar/index.js';
import { createQuizUtil } from '../utils/newQuiz.js';
import { resetQuizInputs } from '../utils/resetUserInputs.js';
import { userDataByLocalStorage } from '../utils/userDataByLocalStorage.js';

const {
	user: { name },
} = userDataByLocalStorage();

export const SaveQuizAsDraft = element => {
	element.addEventListener('click', async event => {
		event.preventDefault();

		const newQuiz = createQuizUtil(name);

		try {
			await createQuizApi(newQuiz);
			ToastBar(
				{
					iconParam: '../../assets/CheckCircle.png',
					titleParam: 'Sucesso',
					msgParam: 'Quiz adicionado aos rascunhos com sucesso!',
				},
				'success-toast',
			);

			resetQuizInputs();
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

export const CreateQuizQuestions = element => {
	element.addEventListener('click', async event => {
		event.preventDefault();
		const newQuiz = createQuizUtil(name);
		//TODO: criar validações

		try {
			// aqui preferi retornar o id na hora que crio o quiz para poder utilizar na rota
			// isso me ajuda a passar o quiz através do id
			const { quizId } = await createQuizApi(newQuiz);

			window.location.hash = `#/quiz/create-question/${quizId}`;
		} catch (error) {
			throw new Error('Erro ao Criar quiz', error.message);
		}
	});
};
