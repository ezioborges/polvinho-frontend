import PageTitle from "../../components/PageTitle.js";
import { getAllUsers } from "../../data/fetchData.js";
import urls from "../../urls/index.js";
import newElement from "../../utils/newElement.js";

const Students = async () => {
    const studentArray = await getAllUsers(urls.createUser);
    const { users } = studentArray;
    console.log('studentArray ===> ', users)
    
    const studentsContent = newElement('div')
    
    const studentTitle = PageTitle('Alunos', 'Colocar a quantidade de alunos cadastrados aqui')
    studentTitle.style.border = '1px solid red'
    
    const studentList = newElement('ul')
    studentList.style.border = '1px solid yellow'
    studentList.style.padding = '50px'
    

    studentsContent.appendChild(studentTitle)
    studentsContent.appendChild(studentList)

    return studentsContent;
}

export default Students;