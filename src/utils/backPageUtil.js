export const backPageUtil = element => {
	element.addEventListener('click', () => {
		history.back();
	});
};
