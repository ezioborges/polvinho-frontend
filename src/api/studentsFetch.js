import urls from '../urls/index.js';

export const getAllStudenstsApi = async () => {
	const getallStudentsURL = `${urls.students}`;
	const response = await fetch(getallStudentsURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Erro ao buscar alunos');
	}

	const data = await response.json();

	return data;
};
