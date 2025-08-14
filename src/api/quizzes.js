import ToastBar from '../components/ToastBar/index.js';
import { toastBarError } from '../components/ToastBar/toastAnswers.js';
import urls from '../urls/index.js';

export const createQuizApi = async quizData => {
	const createQuizURL = `${urls.quizzes}`;

	const response = await fetch(createQuizURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(quizData),
	});

	if (!response.ok) {
		throw new Error('Não foi possível criar o quiz');
	}

	const data = await response.json();

	return data;
};

export const getAllQuizzesApi = async () => {
	const getAllURL = `${urls.quizzes}`;

	const response = await fetch(getAllURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Não foi possível obter os quizzes');
	}

	const data = await response.json();

	return data;
};

export const getQuizzesBySubjectApi = async subjectId => {
	const getQuizzesBySubjectURL = `${urls.quizzes}/${subjectId}`;

	const response = await fetch(getQuizzesBySubjectURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Não foi possível obtar os quizes da disciplina');
	}

	const data = await response.json();

	return data;
};

export const getQuizzByIdApi = async quizId => {
	const getQuizzURL = `${urls.quizById}/${quizId}`;

	const response = await fetch(getQuizzURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Não foi poddível obter o quiz');
	}

	const data = await response.json();

	return data;
};

export const deleteQuizApi = async quizId => {
	const deleteURL = `${urls.quizzes}/${quizId}`;

	const response = await fetch(deleteURL, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Não foi possivel deletar o quiz');
	}

	const data = await response.json();

	return data;
};

export const startQuizApi = async (quizId, quizData) => {
	const startQuizURL = `${urls.quizzes}/start/${quizId}`;

	const response = await fetch(startQuizURL, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(quizData),
	});

	if (!response.ok) {
		throw new Error('Não foi possível atualizar o quiz');
	}

	const data = await response.json();

	return data;
};

export const studentStartedQuizApi = async quizId => {
	const startURL = `${urls.quizzes}/student-start/${quizId}`;

	try {
		const response = await fetch(startURL, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Não foi possível iniciar o quiz');
		}

		const data = await response.json();

		return data;
	} catch (error) {
		const toastError = toastBarError('Quiz já iniciado ou não encontrado');

		ToastBar(toastError, 'error-toast');
		throw new Error(error.message);
	}
};

export const getQuizResultApi = async (quizId, studentId) => {
	const url = `http://localhost:2424/quizzes/${quizId}/student/${studentId}/result`;

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Não foi possível obter o resultado do quiz');
	}

	const data = await response.json();

	return data;
};
