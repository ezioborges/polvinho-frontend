import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';
import { InfoCardBodyResult } from './InfocardBodyResult.js';

const InfoCardResult = async (title, questions, quizId, studentId) => {
	const infoCardArea = newElement('div');
	infoCardArea.classList.add('info-card-area');

	const infoCardTitleArea = newElement('div');
	infoCardTitleArea.classList.add('info-card-title-area');

	const inforCardTitle = textGenerator('textXL', title);
	inforCardTitle.style.color = 'var(--stone-700)';

	const infoCardBody = await InfoCardBodyResult(quizId, studentId, questions);

	infoCardTitleArea.appendChild(inforCardTitle);

	//TODO: AQUI EU TENHO PRIMEIRO COLOCAR O 'VC NÃO POSSUI NENHUMA TENTATIVA'
	// depois o número de tentativas ex: 1 de 5 nesse formato tentativas: 1/5
	if (!questions || questions.length === 0) {
		const infoCardBodyError = newElement('div');
		infoCardBodyError.classList.add('info-card-body-error');

		const noAttempts = textGenerator(
			'textSm',
			'Você não possui nenhuma tentativa.',
		);
		noAttempts.classList.add('no-attempts');

		infoCardBody.innerHTML = '';
		infoCardBodyError.appendChild(noAttempts);

		infoCardArea.appendChild(infoCardTitleArea);
		infoCardArea.appendChild(infoCardBodyError);

		return infoCardArea;
	}

	const buttonArea = newElement('div');
	buttonArea.classList.add('button-area');
	buttonArea.style.margin = '-3rem';

	const buttonDisabled = newElement('button');
	buttonDisabled.classList.add('disabled-button');
	buttonDisabled.classList.add('textMdBold');
	buttonDisabled.textContent = 'Entregue';

	buttonArea.appendChild(buttonDisabled);

	infoCardArea.appendChild(infoCardTitleArea);
	infoCardArea.appendChild(infoCardBody);
	infoCardArea.appendChild(buttonArea);

	return infoCardArea;
};

export default InfoCardResult;
