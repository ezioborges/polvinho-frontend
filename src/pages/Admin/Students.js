import createEntityButtonRoute from "../../components/Buttons/createEntityButtonRoute.js";
import PageTitle from "../../components/PageTitle.js";
import UserList from "../../components/Users/UserList.js";
import { getAllUsers } from "../../data/fetchData.js";
import urls from "../../urls/index.js";
import newElement from "../../utils/newElement.js";

const Students = async () => {  
    const { users } = await getAllUsers(urls.users)
    
    const studentArray = users.filter(user => user.role === 'aluno')

    const studentAmount = studentArray.length

    const studentsContent = newElement('div')

    const topArea = newElement('div')
    topArea.classList.add('user-top-area')
    
    const studentTitle = PageTitle('Alunos', `${studentAmount} Cadastrados`)
    studentTitle.style.marginLeft = '-3.75rem'

    const changeToRegister = createEntityButtonRoute('Cadastrar', 'textLG', 'create-entity-button')
    changeToRegister.onclick = () => window.location.href = '#/register/aluno'

    const studentsList = await UserList(studentArray);
    
    topArea.appendChild(studentTitle)
    topArea.appendChild(changeToRegister)

    studentsContent.appendChild(topArea)
    studentsContent.appendChild(studentsList)

    return studentsContent;
}

export default Students;