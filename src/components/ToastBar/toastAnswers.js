export const toastBarSuccess = msg => {
	return {
		iconParam: '../../../assets/CheckCircle.png',
		titleParam: 'Sucesso',
		msgParam: msg,
	};
};

export const toastBarError = msg => {
	return {
		iconParam: '../../../assets/Vector-error.png',
		titleParam: 'Erro',
		msgParam: msg,
	};
};
