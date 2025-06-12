import newElement from "../../utils/newElement.js";
import { getAllUsers } from "../../data/fetchData.js";
import urls from "../../urls/index.js";
import { BodyWithoputUsers } from "../BodyWithoputUsers.js";
import { subjectsAmountDropdown } from "../../utils/eventListeners.js";

const StudentList = async () => {
    const headersList = ['Matricula', 'Nome', 'Disciplinas', 'Ações'];
    const { users } = await getAllUsers(urls.users);
    const studentRole = 'aluno' 

    const studentArray = users.filter(user => user.role === 'aluno')

    const studentAmount = studentArray.length

    const bodyWithoutUsers =  BodyWithoputUsers()

    const studentsListContent = newElement('div');
    studentsListContent.classList.add('students-list');

    const titleArea = newElement('div');
    titleArea.classList.add('title-student-list-area');

    const titleList = newElement('p');
    titleList.classList.add('title-list-student');
    titleList.classList.add('title2');
    titleList.textContent = 'Lista de Alunos';

    const headersArea = newElement('div');
    headersArea.classList.add('headers-area');

    const bodyArea = newElement('div');
    bodyArea.classList.add('body-area');

    headersList.forEach((header) => {
        const headerItem = newElement('p');
        headerItem.classList.add('header-item');
        headerItem.textContent = header;
        headerItem.classList.add('textMd');
        headersArea.appendChild(headerItem);
    });

    const listContent = newElement('div');
    listContent.classList.add('list-area');

    users.forEach((user) => {
        if (user.role === studentRole) {              
            const listRow = newElement('div');
            listRow.classList.add('bar-content');

            const studentRegisterArea = newElement('div');
            studentRegisterArea.classList.add('student-box-area');

            const studentNameArea = newElement('div');
            studentNameArea.classList.add('student-box-area');

            const studentSubjectsAmountArea = newElement('div');
            studentSubjectsAmountArea.classList.add('student-box-area');
            studentSubjectsAmountArea.classList.add('student-subjects-amount');
            subjectsAmountDropdown(studentSubjectsAmountArea)

            const studentActionsArea = newElement('div');
            studentActionsArea.classList.add('student-box-area');

            const actionsClickArea = newElement('div')
            actionsClickArea.classList.add('actions-click-area');

            const studentRegister = newElement('p');
            studentRegister.textContent = user.registration;
            studentRegister.classList.add('textMd');

            const studentName = newElement('p');
            studentName.textContent = user.name;
            studentName.classList.add('textMd');

            const studentSubjectsAmount = newElement('p');
            studentSubjectsAmount.textContent = user.subject.length > 0 ? user.subject.length : '0';
            studentSubjectsAmount.classList.add('textMd');

            const editArea = newElement('a');
            editArea.classList.add('edit-area');
            editArea.textContent = 'Editar';
            editArea.classList.add('textSm');
            editArea.href = `#/edit-area`;

            const deleteArea = newElement('a');
            deleteArea.classList.add('delete-area');
            deleteArea.textContent = 'Excluir';
            deleteArea.classList.add('textSm');
            deleteArea.href = `#/delete-area`;

            const subjectsDropdown = newElement('div')
            subjectsDropdown.id = 'subjects-dropdown';

            actionsClickArea.appendChild(editArea);
            actionsClickArea.appendChild(deleteArea);

            studentActionsArea.appendChild(actionsClickArea);

            studentRegisterArea.appendChild(studentRegister);

            studentNameArea.appendChild(studentName);

            studentSubjectsAmountArea.appendChild(subjectsDropdown);
            studentSubjectsAmountArea.appendChild(studentSubjectsAmount);

            listRow.appendChild(studentRegisterArea);
            listRow.appendChild(studentNameArea);
            listRow.appendChild(studentSubjectsAmountArea);
            listRow.appendChild(studentActionsArea);

            bodyArea.appendChild(listRow);
        }
    });

    titleArea.appendChild(titleList);
    listContent.appendChild(headersArea);
    studentAmount > 0 ? listContent.appendChild(bodyArea) : listContent.appendChild(bodyWithoutUsers);    
    studentsListContent.appendChild(titleArea);
    studentsListContent.appendChild(listContent);

    return studentsListContent;
};

export default StudentList;