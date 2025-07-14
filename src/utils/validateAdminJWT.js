export const validToken = () => {
	const userLogin = localStorage.getItem('userLogin');
	const token = userLogin ? JSON.parse(userLogin).token : '';

	return token;
};
