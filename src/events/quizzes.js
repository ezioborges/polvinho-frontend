import { createQuestionsApi } from '../api/questions.js';
import {
	createQuizApi,
	deleteQuizApi,
	getQuizzByIdApi,
	startQuizApi,
} from '../api/quizzes.js';
import ToastBar from '../components/ToastBar/index.js';
import {
	toastBarError,
	toastBarSuccess,
} from '../components/ToastBar/toastAnswers.js';
import { clickEventCancelButton } from '../utils/eventListeners.js';
import { createQuizUtil } from '../utils/newQuiz.js';
import {
	resetCreateQuestionsInput,
	resetQuizInputs,
} from '../utils/resetInputs.js';
import { userDataByLocalStorage } from '../utils/userDataByLocalStorage.js';

const {
	user: { name },
} = userDataByLocalStorage();

export const SaveQuizAsDraft = element => {
	element.addEventListener('click', async event => {
		event.preventDefault();
		const newQuiz = createQuizUtil(name);

		try {
			const { quizId } = await createQuizApi(newQuiz);

			const {
				subjectId: { _id },
			} = await getQuizzByIdApi(quizId);

			window.location.hash = `#/subject-professor/${_id}`;

			setTimeout(() => {
				const toastSuccess = toastBarSuccess(
					'Quiz adicionado aos rascunhos com sucesso!',
				);
				ToastBar(toastSuccess, 'success-toast');
			}, 300);

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

export const createQuestionEvent = (element, quizId) => {
	element.addEventListener('click', async () => {
		try {
			const newQuestion = {
				question: document.querySelector('#quiz-create-question').value,
				correctOption: document.querySelector('#correct-answer').value,
				firstOption: document.querySelector('#first-wrong-answer')
					.value,
				secondOption: document.querySelector('#second-wrong-answer')
					.value,
				thirdOption: document.querySelector('#third-wrong-answer')
					.value,
			};

			const toastSuccess = toastBarSuccess('Questão criada com sucesso!');

			await createQuestionsApi(newQuestion, quizId);

			resetCreateQuestionsInput();

			ToastBar(toastSuccess, 'success-toast');
		} catch (error) {
			const toastError = toastBarError('Erro ao criar nova questão!');
			ToastBar(toastError, 'Não foi possível criar a pergunta');
			throw new Error('Erro no evento de criar questão');
		}
	});
};

export const deleteQuizzButton = element => {
	element.addEventListener('click', async () => {
		try {
			await deleteQuizApi(element.id);

			window.location.hash = '#/dashboard-admin';

			setTimeout(() => {
				const toastSuccess = toastBarSuccess('Quiz removido!');
				ToastBar(toastSuccess, 'success-toast');
			}, 300);
		} catch (error) {
			const toastMessage = toastBarError(
				'Erro ao deletar o quiz! Disciplina já foi excluida',
			);

			ToastBar(toastMessage, 'error-toast');

			throw new Error(`Error ao deletar quiz: ${error.message}`);
		}
	});

	clickEventCancelButton(element);
};

export const postQuizEvent = element => {
	element.addEventListener('click', async () => {
		try {
			const { subjectId } = await getQuizzByIdApi(element.id);

			const postQuiz = {
				isPublished: true,
			};

			await startQuizApi(element.id, postQuiz);

			window.location.hash = `#/subject-professor/${subjectId._id}`;

			setTimeout(() => {
				const toastSuccess = toastBarSuccess(
					'Quiz publicado com sucesso!',
				);
				ToastBar(toastSuccess, 'success-toast');
			}, 300);
		} catch (error) {
			setTimeout(() => {
				const toastError = toastBarError('Erro ao publicar quiz!');
				ToastBar(toastError, 'error-toast');
			}, 300);
			throw new Error('Erro no evento para publicar quiz', error.message);
		}
	});
	clickEventCancelButton(element);
};

export const studentStartQuizEvent = element => {
	element.addEventListener('click', async () => {
		console.log('ta batendo aqui');
	});
};
