import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';
import { InfoCardBody } from './InfoCardBody.js';

const InfoCard = async (title, quiz) => {
	const infoCardArea = newElement('div');
	infoCardArea.classList.add('info-card-area');

	const infoCardTitleArea = newElement('div');
	infoCardTitleArea.classList.add('info-card-title-area');

	const inforCardTitle = textGenerator('textXL', title);
	inforCardTitle.style.color = 'var(--stone-700)';

	const infoCardBody = await InfoCardBody(quiz.maxAttempts);

	console.log(infoCardBody);

	infoCardTitleArea.appendChild(inforCardTitle);

	//TODO: AQUI EU TENHO PRIMEIRO COLOCAR O 'VC NÃO POSSUI NENHUMA TENTATIVA'
	// depois o número de tentativas ex: 1 de 5 nesse formato tentativas: 1/5
	if (!quiz || quiz.maxAttempts <= 0) {
		console.warn(
			'só ta aparecendo aqui por que a ordem ta invertida o certo é "<="',
		);

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

	infoCardArea.appendChild(infoCardTitleArea);
	infoCardArea.appendChild(infoCardBody);

	return infoCardArea;
};

export default InfoCard;
