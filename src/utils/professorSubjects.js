import { getProfessorByIdApi } from '../api/professors.js';
import { getAllSubjectsApi } from '../api/subjects.js';

export const professorSubjects = async () => {
	const userData = JSON.parse(localStorage.getItem('userLogin'));
	const userID = userData.user.id;
	const professor = await getProfessorByIdApi(userID);
	const subjects = await getAllSubjectsApi();

	const subjectsOfProfessor = subjects.filter(
		subject => subject.professor === professor._id,
	);

	return subjectsOfProfessor;
};
