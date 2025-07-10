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

export const createStudentApi = async studentData => {
	const createStudentUrl = `${urls.students}`;

	const response = await fetch(createStudentUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(studentData),
	});

	if (!response.ok) {
		throw new Error('Erro ao criar aluno');
	}

	const data = await response.json();

	return data;
};
