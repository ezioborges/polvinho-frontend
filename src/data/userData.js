export async function fetchLogin(url) {
	const credentialsInput = document.querySelector('#credentials');
	const passwordInput = document.querySelector('#password');

	const response = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email: credentialsInput.value,
			password: passwordInput.value,
		}),
	});
	return response;
}

export const fetchCreateUser = async (url, userData) => {
	const userLogin = localStorage.getItem('userLogin');
	const token = userLogin ? JSON.parse(userLogin).token : null;

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(userData),
	});

	const data = await response.json();
	return data;
};

export const getAllUsers = async url => {
	const userLogin = localStorage.getItem('userLogin');
	const token = userLogin ? JSON.parse(userLogin).token : null;

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'constent-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Erro ao buscar usuários');
	}

	const data = await response.json();

	return data;
};

export const deleteUserEvent = async url => {
	const userLogin = localStorage.getItem('userLogin');
	const token = userLogin ? JSON.parse(userLogin).token : null;

	const response = await fetch(url, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Erro ao deletar disciplina');
	}

	const data = await response.json();

	return data;
};

export const updateUserEvent = async (url, userUpdated) => {
	const userLogin = localStorage.getItem('userLogin');
	const token = userLogin ? JSON.parse(userLogin).token : null;

	const response = await fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(userUpdated),
	});

	if (!response.ok) {
		throw new Error('Erro ao atualizar usuário', userUpdated);
	}

	const data = await response.json();

	return data;
};
