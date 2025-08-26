export const isLoading = (isLoading, route) => {
	console.log('passou pelo loading', isLoading);

	if (isLoading === true) {
		console.log('aqui ele batei no true', window.location.hash);
		const newRoute = (window.location.hash = route);

		console.log('newRoute ===> ', newRoute);

		return newRoute;
	}

	if (isLoading === false) {
		console.log('aqui ele bateu no false', route);
		return (window.location.hash = route);
	}
};
