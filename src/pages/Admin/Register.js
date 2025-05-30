import selectInput from "../../components/Input/selectInput.js";
import InputArea from "../../components/Input/textInput.js";
import newElement from "../../utils/newElement.js";
import textGenerator from "../../utils/textGenerator.js";
import QuizzButton from "../../components/Buttons/QuizzButton.js"

const Register = () => {
    const register = newElement('div')

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
    const disciplineLabelInput = selectInput('Disciplina', 'input-discipline', 'Selecione a disciplina')

    const buttonArea = newElement('div')
    buttonArea.classList.add('button-area')

    const registerButton = QuizzButton('Cadastrar', 'button-content', 'textMd')
    registerButton.style.width = '19.2vw'

    buttonArea.appendChild(registerButton)


    firstRowRegister.appendChild(nameLabelInput)
    firstRowRegister.appendChild(registerLabelInput)

    secondRowRegister.appendChild(emailLabelInput)
    secondRowRegister.appendChild(disciplineLabelInput)

    registerArea.appendChild(firstRowRegister)
    registerArea.appendChild(secondRowRegister)

    register.appendChild(title)
    register.appendChild(registerArea)
    register.appendChild(buttonArea)

    return register
}

export default Register;
