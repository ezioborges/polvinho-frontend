import { getQuizzByIdApi } from '../../api/quizzes.js';
import newElement from '../../utils/newElement.js';
import { responsesColor } from '../../utils/responsesColor.js';
import textGenerator from '../../utils/textGenerator.js';

export const ResultList = async questions => {
	const questionsContent = newElement('div');

	questions.forEach(async (quest, i) => {
		const { user } = JSON.parse(localStorage.getItem('userLogin'));
		const quizId = window.location.hash.split('/')[2];
		const quiz = await getQuizzByIdApi(quizId);

		const questionArea = newElement('div');
		questionArea.classList.add('question-student-area-answers');

		const questionTitle = textGenerator('title4', `Pergunta ${i + 1}`);
		questionTitle.style.color = 'var(--stone-700)';

		const questionDesc = textGenerator('textSm', `${quest.question}`);
		questionDesc.style.color = 'var(--stone-700)';
		questionDesc.style.marginTop = '.7rem';

		const optionsAreaA = newElement('div');
		optionsAreaA.id = `${quest.options[0]._id}`;
		optionsAreaA.classList.add('options-area');

		const optionsAreaB = newElement('div');
		optionsAreaB.classList.add('options-area');

		const optionsAreaC = newElement('div');
		optionsAreaC.classList.add('options-area');

		const optionsAreaD = newElement('div');
		optionsAreaD.classList.add('options-area');

		const letterA = newElement('div');
		letterA.textContent = 'a';
		letterA.classList.add('letter-option');
		letterA.classList.add('textSm');

		const letterB = newElement('div');
		letterB.textContent = 'b';
		letterB.classList.add('letter-option');
		letterB.classList.add('textSm');

		const letterC = newElement('div');
		letterC.textContent = 'c';
		letterC.classList.add('letter-option');
		letterC.classList.add('textSm');

		const letterD = newElement('div');
		letterD.textContent = 'd';
		letterD.classList.add('letter-option');
		letterD.classList.add('textSm');

		const correctAnswer = textGenerator(
			'textSm',
			`${quest.options[0].option}`,
		);
		if (quest.options[0].isCorrect) {
			optionsAreaA.style.backgroundColor = 'var(--smerald-100)';
		}

		const firstOption = textGenerator(
			'textSm',
			`${quest.options[1].option}`,
		);
		firstOption.id = quest.options[1]._id;
		responsesColor(quest.options[1]);

		const secondOption = textGenerator(
			'textSm',
			`${quest.options[2].option}`,
		);
		secondOption.id = quest.options[2]._id;
		responsesColor(quest.options[2]);

		const thirdOption = textGenerator(
			'textSm',
			`${quest.options[3].option}`,
		);
		thirdOption.id = quest.options[3]._id;
		responsesColor(quest.options[3]);

		optionsAreaA.appendChild(letterA);
		optionsAreaA.appendChild(correctAnswer);

		optionsAreaB.appendChild(letterB);
		optionsAreaB.appendChild(firstOption);

		optionsAreaC.appendChild(letterC);
		optionsAreaC.appendChild(secondOption);

		optionsAreaD.appendChild(letterD);
		optionsAreaD.appendChild(thirdOption);

		questionArea.appendChild(questionTitle);
		questionArea.appendChild(questionDesc);
		questionArea.appendChild(optionsAreaA);
		questionArea.appendChild(optionsAreaB);
		questionArea.appendChild(optionsAreaC);
		questionArea.appendChild(optionsAreaD);

		questionsContent.appendChild(questionArea);
	});

	return questionsContent;
};
