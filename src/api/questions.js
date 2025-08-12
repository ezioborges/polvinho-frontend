export const createQuestionsApi = async (questionData, quizId) => {
	const createQuestionsURL = `http://localhost:2424/questions/${quizId}/create`;

	const response = await fetch(createQuestionsURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(questionData),
	});

	if (!response.ok) {
		throw new Error('Não foi possível criar a questão');
	}

	const data = await response.json();

	return data;
};

export const studentAnswerApi = async (quizId, answerData) => {
	const studentAnswerURL = `http://localhost:2424/questions/${quizId}/student-responses`;

	const response = await fetch(studentAnswerURL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(answerData),
	});

	if (!response.ok) {
		throw new Error('Não foi possível registrar a resposta do aluno.');
	}

	const data = await response.json();

	return data;
};

export const getAllStudentAnswersByQuizIdAndStudentIdApi = async (
	quizId,
	studentId,
) => {
	const url = `http://localhost:2424/quizzes/${quizId}/student/${studentId}/questions-responses`;

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Não foi possível recuperar as respostas do aluno.');
	}

	const data = await response.json();

	return data;
};
