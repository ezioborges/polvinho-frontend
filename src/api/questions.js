import { BASE_URL } from '../urls/index.js';
import { toggleLoadingOverlay } from '../utils/toggleLoadingOverlay.js';

export const createQuestionsApi = async (questionData, quizId) => {
	const createQuestionsURL = `${BASE_URL}/questions/${quizId}/create`;

	toggleLoadingOverlay(true);

	const response = await fetch(createQuestionsURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(questionData),
	});

	if (!response.ok) {
		toggleLoadingOverlay(false);
		throw new Error('Não foi possível criar a questão');
	}

	const data = await response.json();

	toggleLoadingOverlay(false);

	return data;
};

export const studentAnswerApi = async (quizId, answerData) => {
	const studentAnswerURL = `${BASE_URL}/questions/${quizId}/student-responses`;

	toggleLoadingOverlay(true);

	const response = await fetch(studentAnswerURL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(answerData),
	});

	if (!response.ok) {
		toggleLoadingOverlay(false);
		throw new Error('Não foi possível registrar a resposta do aluno.');
	}

	const data = await response.json();

	toggleLoadingOverlay(false);

	return data;
};

export const getAllStudentAnswersByQuizIdAndStudentIdApi = async (
	quizId,
	studentId,
) => {
	const url = `${BASE_URL}/quizzes/${quizId}/student/${studentId}/questions-responses`;

	toggleLoadingOverlay(true);

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		toggleLoadingOverlay(false);
		throw new Error('Não foi possível recuperar as respostas do aluno.');
	}

	const data = await response.json();

	toggleLoadingOverlay(false);

	return data;
};
