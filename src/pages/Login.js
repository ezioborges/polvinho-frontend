import newElement from "../utils/newElement.js"

const Login = () => {
    const LoginContent = newElement('div')
    LoginContent.classList.add('login-background')

    const logoArea = newElement('div')
    logoArea.classList.add('logo-area')

    const loginArea = newElement('div')

    const logo = newElement('img')
    logo.src = '../../assets/logo-lado.svg'

    logoArea.appendChild(logo)

    LoginContent.appendChild(logoArea)
    LoginContent.appendChild(loginArea)

    return LoginContent;
}

export default Login;
