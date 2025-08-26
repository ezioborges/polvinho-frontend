import { BASE_URL } from '../urls/index.js';
import { toggleLoadingOverlay } from '../utils/toggleLoadingOverlay.js';
import { validToken } from '../utils/validateAdminJWT.js';

export const getAllUsersApi = async () => {
	const usersURL = `${BASE_URL}/users`;

	toggleLoadingOverlay(true);

	const token = validToken();

	const response = await fetch(usersURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	const data = await response.json();

	toggleLoadingOverlay(false);

	return data;
};
