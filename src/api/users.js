import urls from '../urls/index.js';

export const getAllUsersApi = async () => {
	const usersURL = `${urls.users}`;

	const response = await fetch(usersURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();

	return data;
};
