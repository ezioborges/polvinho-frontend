export const createQuizUtil = name => {
	const newQuiz = {
		professor: name,
		subject: document.querySelector('#quiz-register-subject').value,
		title: document.querySelector('#quiz-register-name').value,
		maxAttempts: document.querySelector('#quiz-register-attempts').value,
		timeMinutes: document.querySelector('#quiz-max-time').value,
		releaseDate: document.querySelector('#quiz-register-release-date')
			.value,
		submissionDeadline: document.querySelector(
			'#quiz-register-submission-date',
		).value,
		description: document.querySelector('#quiz-register-description').value,
	};

	return newQuiz;
};
