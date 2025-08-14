import { getAllStudentAnswersByQuizIdAndStudentIdApi } from '../api/questions.js';

export const studentResult = async (questions, quizId, studentId) => {
	const correctAnswers = questions.map(question =>
		question.options.find(option => option.isCorrect),
	);

	const studentAnswers = await getAllStudentAnswersByQuizIdAndStudentIdApi(
		quizId,
		studentId,
	);

	const studentSelectedOptions = studentAnswers.studentAnswers.map(
		answer => answer.selectedOptionId,
	);

	let studentRightAnswers = 0;
	correctAnswers.map(answer => {
		if (studentSelectedOptions.includes(answer._id)) {
			studentRightAnswers++;
		}
	});

	const quizResult = (studentRightAnswers / correctAnswers.length) * 10;

	return quizResult.toFixed();
};
