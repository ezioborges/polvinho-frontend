export const BASE_URL = 'https://little-octopus-api.onrender.com';
// 'http://localhost:2424';

const urls = {
	login: `${BASE_URL}/login`,

	professors: `${BASE_URL}/professors`,

	students: `${BASE_URL}/students`,

	users: `${BASE_URL}/users`,

	subjects: `${BASE_URL}/subjects`,

	quizzes: `${BASE_URL}/quizzes`,
	quizById: `${BASE_URL}/quizzes/quiz`,
};

export default urls;
