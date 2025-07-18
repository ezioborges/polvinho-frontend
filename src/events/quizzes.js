import { createQuiz } from '../api/quizzes.js';
import { userDataByLocalStorage } from '../utils/userDataByLocalStorage.js';

export const SaveQuizAsDraft = element => {
	element.addEventListener('click', async () => {
		const {
			user: { name },
		} = userDataByLocalStorage();

		const newQuiz = {
			title: document.querySelector('#quiz-register-name').value,
			subject: document.querySelector('#quiz-register-subject').value,
			professor: name,
		};

		await createQuiz(newQuiz);
		console.log('Draft saved!', newQuiz);
	});
};
