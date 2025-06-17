import createEntityButtonRoute from "../../components/Buttons/createEntityButtonRoute.js";
import PageTitle from "../../components/PageTitle.js";
import { getAllUsers } from "../../data/fetchData.js";
import urls from "../../urls/index.js";
import newElement from "../../utils/newElement.js";

const Professor = async () => {
    const { users } = await getAllUsers(urls.users)

    const ProfessorArray = users.filter(user => user.role.toLowerCase() === 'professor')
    
    const professorContent = newElement('div')
    
    const professorTopArea = newElement('div')
    professorTopArea.classList.add('user-top-area')

    const professorPageTitle = PageTitle('Professores', `${ProfessorArray.length} Cadastrados`)

    const professorRegisterButton = createEntityButtonRoute('Cadastrar', 'textLG', 'create-entity-button')
    professorRegisterButton.onclick = () => window.location.href = '#/register/professor'

    professorTopArea.appendChild(professorPageTitle)
    professorTopArea.appendChild(professorRegisterButton)

    professorContent.appendChild(professorTopArea)

    return professorContent
}

export default Professor;