import { getQuizResultApi } from '../../api/quizzes.js';
import { goToResume } from '../../events/quizzes.js';
import newElement from '../../utils/newElement.js';

export const InfoCardBody = async quiz => {
	const { user } = JSON.parse(localStorage.getItem('userLogin'));

	const { result } = await getQuizResultApi(quiz._id, user.id);

	const bodyContent = newElement('div');
	bodyContent.classList.add('info-card-body-area');

	const infoCardBodyAttemptsContent = newElement('div');
	infoCardBodyAttemptsContent.classList.add(
		'info-card-body-attempts-content',
	);

	result.forEach((res, i) => {
		const infoCardRow = newElement('div');
		infoCardRow.classList.add('info-card-row');

		const infoCardAttempts = newElement('div');
		infoCardAttempts.classList.add('info-card-column');
		infoCardAttempts.textContent = `${i + 1}ª Tentativa`;
		infoCardAttempts.classList.add('textMd');
		infoCardAttempts.style.color = 'var(--stone-700';

		const infoCardAmount = newElement('div');
		infoCardAmount.classList.add('info-card-column');
		infoCardAmount.textContent = result ? `${res.score}/10` : '0/10';
		infoCardAmount.classList.add('textMdBold');

		const infoCardResume = newElement('div');
		infoCardResume.classList.add('info-card-column');
		infoCardResume.textContent = 'Gabarito';
		infoCardResume.classList.add('textMd');
		infoCardResume.style.color = 'var(--indigo-700';
		infoCardResume.style.cursor = 'pointer';
		goToResume(infoCardResume, quiz._id, user.id);

		infoCardRow.appendChild(infoCardAttempts);
		infoCardRow.appendChild(infoCardAmount);
		infoCardRow.appendChild(infoCardResume);

		infoCardBodyAttemptsContent.appendChild(infoCardRow);
	});

	bodyContent.appendChild(infoCardBodyAttemptsContent);

	return bodyContent;
};
