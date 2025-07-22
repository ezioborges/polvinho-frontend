import newElement from '../../utils/newElement.js';

const createQuestion = async () => {
	const createcontent = newElement('div');
	createcontent.textContent = 'criar página de perguntas';

	return createcontent;
};

export default createQuestion;
