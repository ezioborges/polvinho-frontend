import urls from '../urls/index.js';

export const createProfessorApi = async profData => {
	const createProfessorURL = urls.createProfessor;
	console.log('createProfessorURL ==> ', createProfessorURL);
	const response = await fetch(createProfessorURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(profData),
	});

	if (!response.ok) {
		throw new Error('Erro ao criar professor');
	}

	const data = await response.json();

	return data;
};
