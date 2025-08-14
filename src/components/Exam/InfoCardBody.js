import { getQuizResultApi } from '../../api/quizzes.js';
import newElement from '../../utils/newElement.js';

export const InfoCardBody = async quiz => {
	const { user } = JSON.parse(localStorage.getItem('userLogin'));

	const { result } = await getQuizResultApi(quiz._id, user.id);

	const bodyContent = newElement('div');
	bodyContent.classList.add('info-card-body-area');

	//criando um array com os valores de attempts. O parametro é um número inteiro
	const attemptsArr = [...Array(quiz.maxAttempts).keys()].map(i => i + 1);

	const infoCardBodyAttemptsContent = newElement('div');
	infoCardBodyAttemptsContent.classList.add(
		'info-card-body-attempts-content',
	);

	attemptsArr.forEach((_, i) => {
		const infoCardRow = newElement('div');
		infoCardRow.classList.add('info-card-row');

		const infoCardAttempts = newElement('div');
		infoCardAttempts.classList.add('info-card-column');
		infoCardAttempts.textContent = `${i + 1}ª Tentativa`;
		infoCardAttempts.classList.add('textMd');
		infoCardAttempts.style.color = 'var(--stone-700';

		const infoCardAmount = newElement('div');
		infoCardAmount.classList.add('info-card-column');
		infoCardAmount.textContent = result ? `${result}/10` : '0/10';
		infoCardAmount.classList.add('textMdBold');

		const infoCardResume = newElement('div');
		infoCardResume.classList.add('info-card-column');
		infoCardResume.textContent = 'Gabarito';
		infoCardResume.classList.add('textMd');
		infoCardResume.style.color = 'var(--indigo-700';
		infoCardResume.style.cursor = 'pointer';

		infoCardRow.appendChild(infoCardAttempts);
		infoCardRow.appendChild(infoCardAmount);
		infoCardRow.appendChild(infoCardResume);

		infoCardBodyAttemptsContent.appendChild(infoCardRow);
	});

	bodyContent.appendChild(infoCardBodyAttemptsContent);

	return bodyContent;
};
