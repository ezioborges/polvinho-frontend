import urls from '../urls/index.js';

export const createQuiz = async quizData => {
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
