import urls from '../urls/index.js';
import { validToken } from '../utils/validateAdminJWT.js';

export const createSubject = async subjectData => {
	const createSubjectURL = `${urls.subjects}`;

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
		throw new Error('Erro ao criar disciplina');
	}

	const data = await response.json();

	return data;
};

export const updateSubject = async (subjectID, subjectdata) => {
	const upodateSubjectURL = `${urls.subjects}/${subjectID}`;

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
		throw new Error('Erro ao atualizar disciplina');
	}

	const data = await response.json();

	return data;
};

export const getAllSubjectsApi = async () => {
	const getAllURL = `${urls.subjects}`;

	const token = validToken();

	const response = await fetch(getAllURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Erro ao buscar disciplinas');
	}

	const data = await response.json();

	return data;
};

export const getSubjectByIdApi = async subjectId => {
	const getByIdURL = `${urls.subjects}/${subjectId}`;

	const token = validToken();

	const response = await fetch(getByIdURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Erro ao buscar disciplina por ID');
	}

	const data = await response.json();

	return data;
};

export const deleteSubjectApi = async subjectID => {
	const deleteSubjectURL = `${urls.subjects}/${subjectID}`;

	const token = validToken();

	const response = await fetch(deleteSubjectURL, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Erro ao excluir disciplina');
	}

	const data = await response.json();

	return data;
};
