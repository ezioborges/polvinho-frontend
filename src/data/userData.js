export async function fetchLogin(url) {
	const credentialsInput = document.querySelector('#credentials');
	const passwordInput = document.querySelector('#password');

	const response = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email: credentialsInput.value,
			password: passwordInput.value,
		}),
	});
	return response;
}

// export async function fetchLogin(url) {
// 	const credentialsInput = document.querySelector('#credentials');
// 	const passwordInput = document.querySelector('#password');

// 	// Retorna uma nova Promise para controlar o atraso
// 	return new Promise(resolve => {
// 		setTimeout(async () => {
// 			try {
// 				const response = await fetch(url, {
// 					method: 'POST',
// 					headers: { 'Content-Type': 'application/json' },
// 					body: JSON.stringify({
// 						email: credentialsInput.value,
// 						password: passwordInput.value,
// 					}),
// 				});
// 				// A Promise é resolvida com a resposta do fetch
// 				resolve(response);
// 			} catch (error) {
// 				// Em caso de erro, a Promise é rejeitada, garantindo o tratamento de erro
// 				throw new Error(`Erro ao buscar usuários: ${error.message}`);
// 			}
// 		}, 5000); // Atraso de 2000 milissegundos (2 segundos)
// 	});
// }
