import newElement from '../../utils/newElement.js';

export const InfoCardBodyResult = async questions => {
	console.log('🚀 ~ InfoCardBodyResult ~ questions:', questions);
	const bodyContent = newElement('div');
	bodyContent.classList.add('info-card-body-area');

	// criando um array com os valores de attempts. O parametro é um número inteiro
	// const attemptsArr = [...Array(attempts).keys()].map(i => i + 1);

	const infoCardBodyAttemptsContent = newElement('div');
	infoCardBodyAttemptsContent.classList.add(
		'info-card-body-attempts-content',
	);

	questions.forEach((_, i) => {
		const infoCardRow = newElement('div');
		infoCardRow.classList.add('info-card-row');

		const infoCardAttempts = newElement('div');
		infoCardAttempts.classList.add('info-card-column');
		infoCardAttempts.textContent = `Pergunta ${i + 1}`;
		infoCardAttempts.classList.add('textMd');
		infoCardAttempts.style.color = 'var(--stone-700)';

		// TODO: PRECISO PADROZINAR AS RESPOSTAS DOS ALUNOS E PASSAR AQUI
		// DEPOIS QUE CRIAR A LÓGICA PARA CAPTURAR AS RESPOSTAS
		const StudentResponse = newElement('div');
		StudentResponse.classList.add('info-card-column');
		StudentResponse.textContent = `A`;
		StudentResponse.classList.add('textMdBold');

		infoCardRow.appendChild(infoCardAttempts);
		infoCardRow.appendChild(StudentResponse);

		infoCardBodyAttemptsContent.appendChild(infoCardRow);
	});

	bodyContent.appendChild(infoCardBodyAttemptsContent);

	return bodyContent;
};
