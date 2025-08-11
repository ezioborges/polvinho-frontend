export const responsesColor = async element => {
	if (element.isCorrect) {
		const teste = document.querySelector(`#${element.id}`);
		console.log('CORRECT ELEMENT', teste);
	}
};
