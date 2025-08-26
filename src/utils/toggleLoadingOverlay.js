import { LoadingComponent } from '../components/LoadingComponent.js';

export const toggleLoadingOverlay = isLoad => {
	let loadingOverlay = document.getElementById('loading-overlay');

	if (isLoad) {
		if (!loadingOverlay) {
			loadingOverlay = LoadingComponent();
			loadingOverlay.id = 'loading-overlay';
			document.body.appendChild(loadingOverlay);
		}
	} else {
		if (loadingOverlay) {
			loadingOverlay.remove();
		}
	}
};
