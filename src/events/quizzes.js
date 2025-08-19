import { createQuestionsApi } from '../api/questions.js';
import {
	createQuizApi,
	deleteQuizApi,
	getQuizzByIdApi,
	startQuizApi,
	studentFinishedAttemptApi,
	studentStartedQuizApi,
} from '../api/quizzes.js';
import SendTestFinished from '../components/Dialogs/SendTestFinished.js';
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

let answersArray = [];

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
				options: [
					{
						option: document.querySelector('#correct-answer').value,
						isCorrect: true,
					},
					{
						option: document.querySelector('#first-wrong-answer')
							.value,
						isCorrect: false,
					},
					{
						option: document.querySelector('#second-wrong-answer')
							.value,
						isCorrect: false,
					},
					{
						option: document.querySelector('#third-wrong-answer')
							.value,
						isCorrect: false,
					},
				],
			};

			await createQuestionsApi(newQuestion, quizId);

			const toastSuccess = toastBarSuccess('Questão criada com sucesso!');

			resetCreateQuestionsInput();

			ToastBar(toastSuccess, 'success-toast');
		} catch (error) {
			const toastError = toastBarError('Erro ao criar nova questão!');
			ToastBar(toastError, 'error-toast');
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
		try {
			const quizStart = await studentStartedQuizApi(element.id);

			console.log('quizStart ===> ', quizStart);

			if (quizStart.maxAttempts >= 0) {
				const toastSuccess = toastBarSuccess(quizStart.message);

				setTimeout(() => {
					ToastBar(toastSuccess, 'success-toast');
				}, 300);

				window.location.hash = `#/quiz-started/${element.id}`;
			} else {
				const toastError = toastBarError(quizStart.message);

				setTimeout(() => {
					ToastBar(toastError, 'error-toast');
				}, 300);

				window.location.hash = `#/quiz/student/${element.id}`;
			}
		} catch (error) {
			console.error('Erro ao iniciar quiz:', error.message);

			const quizStart = await studentStartedQuizApi(element.id);

			const toastError = toastBarError(quizStart.message);
			setTimeout(() => {
				ToastBar(toastError, 'error-toast');
			}, 300);

			window.location.hash = `#/quiz/student/${element.id}`;
		}
	});
	clickEventCancelButton(element);
};

export const studentFinishQuizEvent = element => {
	element.addEventListener('click', async () => {
		const quiz = await getQuizzByIdApi(element.id);
		const { user } = JSON.parse(localStorage.getItem('userLogin'));

		if (answersArray.length === 0) {
			const toastError = toastBarError(
				'O estudante não tem respostas cadastradas',
			);

			ToastBar(toastError, 'error-toast');
			return;
		}

		await studentFinishedAttemptApi(quiz._id, user.id, answersArray);

		const dialogContent = document.querySelector('.dialog-content');

		if (dialogContent) {
			dialogContent.remove();
		}

		const finishDialog = SendTestFinished(element.id);

		return document.body.appendChild(finishDialog);
	});
};

//TODO: MONTAR AS RESPOSTAS NO FRONT E DEPOIS ARMAZENAR NO MONGO
export const clickedResponse = (
	element,
	studentId,
	quizId,
	questionId,
	selectedOptionId,
) => {
	element.addEventListener('click', async ({ currentTarget }) => {
		// Remove 'selected-option' de todas as opções da mesma pergunta
		const allOptions = document.querySelectorAll(
			`[data-question-id="${questionId}]`,
		);
		allOptions.forEach(opt => opt.classList.remove('selected-option'));

		// Adiciona 'selected-option' apenas ao clicado
		currentTarget.classList.add('selected-option');

		const answer = {
			studentId,
			questionId,
			selectedOptionId,
		};

		answersArray = answersArray.filter(
			ans => ans.questionId !== questionId,
		);
		answersArray.push(answer);
	});
};

export const goToResume = (element, quizId, studentId) => {
	element.addEventListener('click', () => {
		console.log(window.location.hash);
		window.location.hash = `#/quizzes/${quizId}/student/${studentId}/result`;
	});
};
