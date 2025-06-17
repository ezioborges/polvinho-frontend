import newElement from "../../utils/newElement.js";
import { getAllUsers } from "../../data/fetchData.js";
import urls from "../../urls/index.js";
import { BodyWithoputUsers } from "../BodyWithoputUsers.js";
import UsersListComponent from "./UsersListComponent.js";

const UserList = async (userArray) => {
    const headersList = ['Matricula', 'Nome', 'Disciplinas', 'Ações'];
    const { users } = await getAllUsers(urls.users);

    const userAmount = users.length
    // const studentAmount = studentArray.length;

    const bodyWithoutUsers = BodyWithoputUsers();

    const studentsListContent = newElement('div');
    studentsListContent.classList.add('students-list');

    const titleListArea = newElement('div');
    titleListArea.classList.add('title-student-list-area');

    const titleList = newElement('p');
    titleList.classList.add('title-list-student');
    titleList.classList.add('title2');
    titleList.textContent = 'Lista de Alunos';

    const headersArea = newElement('div');
    headersArea.classList.add('headers-area');

    const bodyArea = newElement('div');
    bodyArea.classList.add('body-area');
    // TODO: vai se tornar o retorno da função de lista

    headersList.forEach((header) => {
        const headerItem = newElement('p');
        headerItem.classList.add('header-item');
        headerItem.textContent = header;
        headerItem.classList.add('textMd');
        headersArea.appendChild(headerItem);
    });

    const listContent = newElement('div');
    listContent.classList.add('list-area');

    const studentsList = UsersListComponent(userArray, listContent)

    titleListArea.appendChild(titleList);
    listContent.appendChild(headersArea);
    if (userAmount > 0) {
        listContent.appendChild(studentsList);
    } else {
        listContent.appendChild(bodyWithoutUsers);
    }
    
    studentsListContent.appendChild(titleListArea);
    studentsListContent.appendChild(listContent);

    return studentsListContent;
};

export default UserList;