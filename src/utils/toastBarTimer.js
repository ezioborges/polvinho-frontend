export const toastBarTimer = () => {
	setTimeout(() => {
		const toastBar = document.querySelector('.toast');
		if (toastBar) {
			toastBar.classList.add('hide');
			setTimeout(() => {
				toastBar.remove();
			}, 500);
		}
	}, 2000);
};
