import { BASE_URL } from '../urls/index.js';
import { validToken } from '../utils/validateAdminJWT.js';

export const getAllStudenstsApi = async () => {
	const getallStudentsURL = `${BASE_URL}/students`;

	const token = validToken();

	const response = await fetch(getallStudentsURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Erro ao buscar alunos');
	}

	const data = await response.json();

	return data;
};

export const createStudentApi = async studentData => {
	const createStudentUrl = `${BASE_URL}/students`;

	const token = validToken();

	const response = await fetch(createStudentUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(studentData),
	});

	if (!response.ok) {
		throw new Error('Erro ao criar aluno');
	}

	const data = await response.json();

	return data;
};

export const updateStudentApi = async (studentId, studentData) => {
	const updateStudentURL = `${BASE_URL}/students/${studentId}`;

	const token = validToken();

	const response = await fetch(updateStudentURL, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(studentData),
	});

	if (!response.ok) {
		throw new Error('Erro ao atualizar aluno');
	}

	const data = await response.json();

	return data;
};

export const deleteStudentApi = async studentId => {
	const deleteStudentURL = `${BASE_URL}/students/${studentId}`;

	const token = validToken();

	const response = await fetch(deleteStudentURL, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
	if (!response.ok) {
		throw new Error('Erro ao deletar aluno');
	}
	const data = await response.json();
	return data;
};

export const getAllSubjectsOfStudentApi = async studentId => {
	const getAllStudentURL = `${BASE_URL}/students/${studentId}/subjects`;

	const response = await fetch(getAllStudentURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Erro ao buscar disciplinas do aluno');
	}

	const data = await response.json();

	return data;
};
