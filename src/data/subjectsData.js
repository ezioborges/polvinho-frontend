import urls from '../urls/index.js';

export const getAllSubjects = async url => {
	const response = await fetch(url, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	if (!response.ok) {
		throw new Error('Nenhuma disciplina cadastrada');
	}

	const data = await response.json();

	return Array.isArray(data) ? data : [];
};

//TODO: implementar a autenticação para que apaenas ADMIN possam criar disciplinas
export const fetchCreateSubjects = async (url, subjectsData) => {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(subjectsData),
	});

	const data = await response.json();

	return data;
};

//TODO: depois separar as funções por entidade!!!
export const getSubjectsById = async subjectId => {
	const url = `http://localhost:2424/subjects/${subjectId}`;

	const userLogin = localStorage.getItem('userLogin');
	const token = userLogin ? JSON.parse(userLogin).token : null;

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Disciplina não encontrada pelo id informado');
	}

	const data = response.json();

	return data;
};

export const userSubjectsData = async userId => {
	const url = `http://localhost:2424/users/${userId}/subjects`;
	const userLogin = localStorage.getItem('userLogin');
	const token = userLogin ? JSON.parse(userLogin).token : null;

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Erro ao carregar as disciplas no Usuário');
	}

	const data = response.json();

	return data;
};

export const deleteSubject = async subjectId => {
	const userLogin = localStorage.getItem('userLogin');
	const token = userLogin ? JSON.parse(userLogin).token : null;

	const response = await fetch(`${urls.subjects}/${subjectId}`, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Erro ao deletar a disciplina');
	}

	const data = await response.json();

	return data;
};

export const updateSubject = async (subjectId, subjectUpdated) => {
	try {
		const userLogin = localStorage.getItem('userLogin');
		const token = userLogin ? JSON.parse(userLogin).token : null;

		const response = await fetch(`${urls.subjects}/${subjectId}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(subjectUpdated),
		});

		if (!response.ok) {
			throw new Error('Erro ao atualizar disciplina');
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.error('Erro ao atualizar disciplina: ', error.message);
	}
};
