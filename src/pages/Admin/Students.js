import PageTitle from "../../components/PageTitle.js";
import StudentList from "../../components/Studant/StudentList.js";
import newElement from "../../utils/newElement.js";

const Students = async () => {

    
    const studentsContent = newElement('div')
    
    const studentTitle = PageTitle('Alunos', 'Colocar a quantidade de alunos cadastrados aqui')


    const studentsListTest = await StudentList();
    

    studentsContent.appendChild(studentTitle)
    studentsContent.appendChild(studentsListTest)

    return studentsContent;
}

export default Students;