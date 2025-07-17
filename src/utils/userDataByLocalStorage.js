export const userDataByLocalStorage = () => {
	const userLogin = localStorage.getItem('userLogin');
	const userObj = JSON.parse(userLogin);

	return userObj;
};
