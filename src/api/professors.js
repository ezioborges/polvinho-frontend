import { BASE_URL } from '../urls/index.js';
import { toggleLoadingOverlay } from '../utils/toggleLoadingOverlay.js';
import { validToken } from '../utils/validateAdminJWT.js';

export const createProfessorApi = async profData => {
	const createProfessorURL = `${BASE_URL}/professors`;

	toggleLoadingOverlay(true);

	const token = validToken();

	const response = await fetch(createProfessorURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(profData),
	});

	if (!response.ok) {
		toggleLoadingOverlay(false);
		throw new Error('Erro ao criar professor');
	}

	const data = await response.json();

	toggleLoadingOverlay(false);

	return data;
};

export const getAllProfessorsApi = async () => {
	const getAllURL = `${BASE_URL}/professors`;

	toggleLoadingOverlay(true);

	const token = validToken();

	const response = await fetch(getAllURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		toggleLoadingOverlay(false);
		throw new Error('Error ao buscar lista de professores!');
	}

	const data = await response.json();

	toggleLoadingOverlay(false);

	return data;
};

export const getProfessorByIdApi = async professorId => {
	const getByIdURL = `${BASE_URL}/professors/${professorId}`;

	toggleLoadingOverlay(true);

	const token = validToken();

	const response = await fetch(getByIdURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		toggleLoadingOverlay(false);
		toggleLoadingOverlay(false);
		throw new Error('Erro ao buscar professor pelo ID');
	}

	const data = await response.json();

	toggleLoadingOverlay(false);

	return data;
};

export const updateProfessorApi = async (professorId, professorData) => {
	const updateURL = `${BASE_URL}/professors/${professorId}`;

	toggleLoadingOverlay(true);

	const token = validToken();

	const response = await fetch(updateURL, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(professorData),
	});

	if (!response.ok) {
		toggleLoadingOverlay(false);
		throw new Error('Erro ao atualizar professor');
	}

	const data = await response.json();

	toggleLoadingOverlay(false);

	return data;
};

export const deleteProfessorApi = async professorId => {
	const deleteURL = `${BASE_URL}/professors/${professorId}`;

	toggleLoadingOverlay(true);

	const token = validToken();

	const response = await fetch(deleteURL, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		toggleLoadingOverlay(false);
		throw new Error('Erro ao excluir professor');
	}

	const data = await response.json();

	toggleLoadingOverlay(false);

	return data;
};
