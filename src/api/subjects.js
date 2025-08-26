import { BASE_URL } from '../urls/index.js';
import { toggleLoadingOverlay } from '../utils/toggleLoadingOverlay.js';
import { validToken } from '../utils/validateAdminJWT.js';

export const createSubject = async subjectData => {
	const createSubjectURL = `${BASE_URL}/subjects`;
	toggleLoadingOverlay(true);

	const token = validToken();

	const response = await fetch(createSubjectURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(subjectData),
	});

	if (!response.ok) {
		toggleLoadingOverlay(false);
		throw new Error('Erro ao criar disciplina');
	}

	const data = await response.json();

	toggleLoadingOverlay(false);

	return data;
};

export const updateSubject = async (subjectID, subjectdata) => {
	const upodateSubjectURL = `${BASE_URL}/subjects/${subjectID}`;

	toggleLoadingOverlay(true);

	const token = validToken();

	const response = await fetch(upodateSubjectURL, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(subjectdata),
	});

	if (!response.ok) {
		toggleLoadingOverlay(false);
		throw new Error('Erro ao atualizar disciplina');
	}

	const data = await response.json();

	toggleLoadingOverlay(false);

	return data;
};

export const getAllSubjectsApi = async () => {
	const getAllURL = `${BASE_URL}/subjects`;

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
		throw new Error('Erro ao buscar disciplinas');
	}

	const data = await response.json();

	toggleLoadingOverlay(false);

	return data;
};

export const getSubjectByIdApi = async subjectId => {
	const getByIdURL = `${BASE_URL}/subjects/${subjectId}`;

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
		throw new Error('Erro ao buscar disciplina por ID');
	}

	const data = await response.json();

	toggleLoadingOverlay(false);

	return data;
};

export const deleteSubjectApi = async subjectID => {
	const deleteSubjectURL = `${BASE_URL}/subjects/${subjectID}`;

	toggleLoadingOverlay(true);

	const token = validToken();

	const response = await fetch(deleteSubjectURL, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		toggleLoadingOverlay(false);
		throw new Error('Erro ao excluir disciplina');
	}

	const data = await response.json();

	toggleLoadingOverlay(false);

	return data;
};
