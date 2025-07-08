import urls from '../urls/index.js';

export const createProfessorApi = async profData => {
	const createProfessorURL = urls.professors;
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

export const getAllProfessorsApi = async () => {
	const getAllURL = `${urls.professors}`;
	const response = await fetch(getAllURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Error ao buscar lista de professores!');
	}

	const data = await response.json();

	return data;
};

export const deleteProfessorApi = async professorId => {
	const deleteURL = `${urls.professors}/${professorId}`;
	console.log('🚀 ~ deleteURL:', deleteURL);
	const response = await fetch(deleteURL, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Erro ao excluir professor');
	}

	const data = await response.json();

	return data;
};
