import urls from '../urls/index.js';

export const createQuizz = async quizData => {
	const createQuizURL = `${urls.quizzes}`;

	const response = await fetch(createQuizURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(quizData),
	});

	const data = await response.json();

	return data;
};
