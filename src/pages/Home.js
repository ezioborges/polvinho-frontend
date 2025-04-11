import newElement from "../utils/newElement.js"
import Title from "../components/Title.js";

const Home = () => {
    const body = newElement('div');
    const divWelcome = newElement('div')
    divWelcome.classList.add('div-welcome')

    const imgWelcome = newElement('img')
    imgWelcome.src = '../../assets/emocionado.jpg';
    imgWelcome.alt = 'Imagem de boas-vindas' 
    
    const titleContent = Title('Home');

    divWelcome.appendChild(imgWelcome)
    
    body.appendChild(titleContent);
    body.appendChild(divWelcome)

    return body;
}

export default Home;
