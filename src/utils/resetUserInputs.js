export const resetUserInuts = () => {
	document.querySelector('#input-user-name').value = '';
	document.querySelector('#input-user-email').value = '';
	document.querySelector('#input-user-register').value = '';
	document.querySelector('#input-user-subjects').value = '';
};

export const resetProfessorInputs = () => {
	document.querySelector('#input-edit-name').value = '';
	document.querySelector('#input-edit-email').value = '';
	document.querySelector('#select-edit-subjects').value = '';
};
