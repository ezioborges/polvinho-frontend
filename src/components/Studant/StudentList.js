import newElement from "../../utils/newElement.js";
import { getAllUsers } from "../../data/fetchData.js";
import urls from "../../urls/index.js";

const StudentList = async () => {
    const headersList = ['Matricula', 'Nome', 'Disciplinas', 'Ações'];

    const studentsArray = await getAllUsers(urls.createUser)
    const { users } = studentsArray;
    console.log('🚀 é daqui que vem mesmo:', users)

    const studentsListContent = newElement('div')
    studentsListContent.classList.add('students-list');
       
    const titleList = newElement('p');
    titleList.classList.add('title-list-student')
    titleList.classList.add('title4');
    titleList.textContent = 'Lista de Alunos';

    const headersArea = newElement('div');
    headersArea.classList.add('headers-area');

    const bodyArea = newElement('div');
    bodyArea.classList.add('body-area');

    headersList.forEach((header) => {
        const headerItem = newElement('p')
        headerItem.classList.add('header-item');
        headerItem.textContent = header;
        headerItem.classList.add('textSm')

        headersArea.appendChild(headerItem)
    })

    const listContent = newElement('div');
    listContent.classList.add('list-area');

    users.forEach((user) => {
        console.log('user ===> ', user);
        
        const listRow = newElement('div');
        listRow.classList.add('bar-content');

        const studentRegisterArea = newElement('div');
        studentRegisterArea.classList.add('student-box-area');

        const studentNameArea = newElement('div');
        studentNameArea.classList.add('student-box-area');

        const studentSubjectsAmountArea = newElement('div');
        studentSubjectsAmountArea.classList.add('student-box-area');

        const studentActionsArea = newElement('div');
        studentActionsArea.classList.add('student-box-area');

        const studentRegister = newElement('p');
        studentRegister.textContent = user.registration;
        studentRegister.classList.add('textMd');

        const studentName = newElement('p')
        studentName.textContent = user.name;
        studentName.classList.add('textMd')

        const studentSubjectsAmount = newElement('p')
        studentSubjectsAmount.textContent = 'qtd subjects',
        studentSubjectsAmount.classList.add('textMd')

        const actionsArea = newElement('div');
        actionsArea.classList.add('actions-area');

        const editArea = newElement('a');
        editArea.classList.add('edit-area');
        editArea.textContent = 'Editar';
        editArea.classList.add('textSm')
        editArea.href = `#/edit-area`;

        const deleteArea = newElement('a');
        deleteArea.classList.add('delete-area');
        deleteArea.textContent = 'Excluir';
        deleteArea.classList.add('textSm')

        actionsArea.appendChild(editArea)
        actionsArea.appendChild(deleteArea)

        studentRegisterArea.appendChild(studentRegister)
        studentNameArea.appendChild(studentName)
        studentSubjectsAmountArea.appendChild(studentSubjectsAmount)
        studentActionsArea.appendChild(actionsArea)

        listRow.appendChild(studentRegisterArea)
        listRow.appendChild(studentNameArea)
        listRow.appendChild(studentSubjectsAmountArea)
        listRow.appendChild(actionsArea)

        bodyArea.appendChild(listRow)
    })

    listContent.appendChild(headersArea)
    listContent.appendChild(bodyArea)

    studentsListContent.appendChild(titleList);
    studentsListContent.appendChild(listContent)
    
    return studentsListContent;
}

export default StudentList;