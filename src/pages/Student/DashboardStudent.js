import newElement from '../../utils/newElement.js';

const DashboardStudent = async () => {
	const studentContent = newElement('div');

	studentContent.textContent = 'Aqui é o dash do aluno';

	return studentContent;
};

export default DashboardStudent;
