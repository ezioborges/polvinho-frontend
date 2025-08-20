export const togglePassword = element => {
	element.addEventListener('click', () => {
		element.type = 'text';
		console.log('testando o toggle password ===> ', element.type);
	});
};
