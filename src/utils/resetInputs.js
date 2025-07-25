export const resetUserInputs = () => {
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

export const resetQuizInputs = () => {
	document.querySelector('#quiz-register-subject').value = '';
	document.querySelector('#quiz-register-name').value = '';
	document.querySelector('#quiz-register-attempts').value = '';
	document.querySelector('#quiz-max-time').value = '';
	document.querySelector('#quiz-register-release-date').value = '';
	document.querySelector('#quiz-register-submission-date').value = '';
	document.querySelector('#quiz-register-description').value = '';
};

export const resetCreateQuestionsInput = () => {
	document.querySelector('#quiz-create-question').value = '';
	document.querySelector('#correct-answer').value = '';
	document.querySelector('#first-wrong-answer').value = '';
	document.querySelector('#second-wrong-answer').value = '';
	document.querySelector('#third-wrong-answer').value = '';
};
