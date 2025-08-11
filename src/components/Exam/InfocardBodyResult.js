import { getAllStudentAnswersByQuizIdApi } from '../../api/questions.js';
import newElement from '../../utils/newElement.js';

export const InfoCardBodyResult = async (quizId, studentId, questions) => {
	const studentAnswersResponse = await getAllStudentAnswersByQuizIdApi(
		quizId,
		studentId,
	);
	const studentAnswers = studentAnswersResponse.studentAnswers;

	const bodyContent = newElement('div');
	bodyContent.classList.add('info-card-body-area');

	const infoCardBodyAttemptsContent = newElement('div');
	infoCardBodyAttemptsContent.classList.add(
		'info-card-body-attempts-content',
	);

	questions.forEach((question, i) => {
		const infoCardRow = newElement('div');
		infoCardRow.classList.add('info-card-row');

		const infoCardQuestionLabel = newElement('div');
		infoCardQuestionLabel.classList.add('info-card-column', 'textMd');
		infoCardQuestionLabel.textContent = `Pergunta ${i + 1}`;
		infoCardQuestionLabel.style.color = 'var(--stone-700)';

		// Encontra a resposta do aluno para a pergunta atual
		const studentAnswerForQuestion = studentAnswers.find(
			answer => answer.questionId === question._id,
		);

		// Encontra a resposta correta para a pergunta atual
		const correctAnswer = question.options.find(option => option.isCorrect);

		const StudentResponse = newElement('div');
		StudentResponse.classList.add('info-card-column', 'textMdBold');

		if (studentAnswerForQuestion && correctAnswer) {
			// Compara o ID da resposta do aluno com o ID da resposta correta
			const isCorrect =
				studentAnswerForQuestion.selectedOptionId === correctAnswer._id;

			if (isCorrect) {
				StudentResponse.textContent = `✅ Correta`;
				StudentResponse.style.color = 'var(--smerald-400)';
			} else {
				StudentResponse.textContent = `❌ Incorreta`;
				StudentResponse.style.color = 'var(--red-400)';
			}
		} else {
			// Caso não tenha uma resposta do aluno, ou uma resposta correta definida
			StudentResponse.textContent = `🚫 Sem resposta`;
			StudentResponse.style.color = 'var(--stone-500)';
		}

		infoCardRow.appendChild(infoCardQuestionLabel);
		infoCardRow.appendChild(StudentResponse);

		infoCardBodyAttemptsContent.appendChild(infoCardRow);
	});

	bodyContent.appendChild(infoCardBodyAttemptsContent);

	return bodyContent;
};
