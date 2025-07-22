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
