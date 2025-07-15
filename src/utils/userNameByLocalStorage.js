export const userNameByLocalStorage = () => {
	const userLogin = localStorage.getItem('userLogin');
	const userObj = JSON.parse(userLogin);
	const { name } = userObj.user;

	return name;
};
