import urls from '../urls/index.js';
import { validToken } from '../utils/validateAdminJWT.js';

export const getAllUsersApi = async () => {
	const usersURL = `${urls.users}`;

	const token = validToken();

	const response = await fetch(usersURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	const data = await response.json();

	return data;
};
