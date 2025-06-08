import PageTitle from "../../components/PageTitle.js";
import StudentList from "../../components/Studant/StudentList.js";
import { getAllUsers } from "../../data/fetchData.js";
import urls from "../../urls/index.js";
import newElement from "../../utils/newElement.js";

const Students = async () => {  
    const { users } = await getAllUsers(urls.createUser)
    
    const studentArray = users.filter(user => user.role === 'aluno')

    const studentAmount = studentArray.length

    const studentsContent = newElement('div')
    
    const studentTitle = PageTitle('Alunos', `${studentAmount} Cadastrados`)
    studentTitle.style.marginLeft = '-3.75rem'

    const studentsListTest = await StudentList();
    

    studentsContent.appendChild(studentTitle)
    studentsContent.appendChild(studentsListTest)

    return studentsContent;
}

export default Students;