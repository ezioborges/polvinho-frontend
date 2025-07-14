import urls from '../urls/index.js';
import { validToken } from '../utils/validateAdminJWT.js';

export const getAllStudenstsApi = async () => {
	const getallStudentsURL = `${urls.students}`;

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
	const createStudentUrl = `${urls.students}`;

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
	const updateStudentURL = `${urls.students}/${studentId}`;

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
	const deleteStudentURL = `${urls.students}/${studentId}`;

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
