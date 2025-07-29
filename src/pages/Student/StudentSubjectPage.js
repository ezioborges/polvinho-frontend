import { getSubjectByIdApi } from '../../api/subjects.js';
import DisciplinesContent from '../../components/DisciplinesContent.js';
import PageTitle from '../../components/PageTitle.js';
import newElement from '../../utils/newElement.js';

const StudentSubjectPage = async () => {
	const subjectId = window.location.hash.split('/')[2];
	const subject = await getSubjectByIdApi(subjectId);

	const studentSubjectContent = newElement('div');

	const bodyTitleArea = newElement('div');
	bodyTitleArea.classList.add('body-title-area');

	const pageTitle = PageTitle(`${subject.name}`, 'Quizzes');

	const studentSubjectBody = await DisciplinesContent();

	bodyTitleArea.appendChild(pageTitle);

	studentSubjectContent.appendChild(bodyTitleArea);
	studentSubjectContent.appendChild(studentSubjectBody);

	return studentSubjectContent;
};

export default StudentSubjectPage;
