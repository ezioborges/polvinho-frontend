import selectInput from "../../components/Input/selectInput.js";
import InputArea from "../../components/Input/textInput.js";
import newElement from "../../utils/newElement.js";
import textGenerator from "../../utils/textGenerator.js";
import QuizzButton from "../../components/Buttons/QuizzButton.js"
import { clickEventRegister } from "../../utils/eventListeners.js";
import { fetchSubjects } from "../../data/fetchData.js";
import urls from "../../urls/index.js";


const Register = async () => {
    const register = newElement('div')

    const roleFromHash = window.location.hash.split('/')[2].toLowerCase()

    const subjects = await fetchSubjects(urls.subjects)

    const firstRowRegister = newElement('div')
    firstRowRegister.classList.add('register-row')

    const secondRowRegister = newElement('div')
    secondRowRegister.classList.add('register-row')

    const entityName = window.location.hash.split('/')[2]    
    const title = textGenerator('title1', `Cadastro do ${entityName}`)
    title.style.marginLeft = '3.75rem'

    const registerArea = newElement('div')
    registerArea.classList.add('register-area')

    const nameLabelInput = InputArea('Nome Completo', 'input-name', `Digite o nome do ${entityName}`)
    const registerLabelInput = InputArea('Matrícula', 'input-register', `000000`)
    const emailLabelInput = InputArea('E-mail', 'input-email', 'email@email.com')
    
    const errorArea = newElement('div')
    errorArea.classList.add('error-area')

    const errorList = newElement('ul')
    errorList.classList.add('error-list')

    const buttonArea = newElement('div')
    buttonArea.classList.add('button-area')

    const registerButton = QuizzButton('Cadastrar', 'button-content', 'textMd')
    registerButton.classList.add('register-button-position')  
    registerButton.style.width = '19.2vw'
    clickEventRegister(registerButton, roleFromHash)

    const subjectArray = []
    subjects.forEach(subject => subjectArray.push(subject.name))
    
    const subjectsComponent = selectInput('Disciplinas', 'input-subjects', subjectArray)
    

    errorArea.appendChild(errorList)

    buttonArea.appendChild(registerButton)


    firstRowRegister.appendChild(nameLabelInput)
    firstRowRegister.appendChild(registerLabelInput)

    secondRowRegister.appendChild(emailLabelInput)
    secondRowRegister.appendChild(subjectsComponent)

    registerArea.appendChild(firstRowRegister)
    registerArea.appendChild(secondRowRegister)

    register.appendChild(title)
    register.appendChild(registerArea)
    register.appendChild(errorArea)
    register.appendChild(buttonArea)

    return register
}

export default Register;
