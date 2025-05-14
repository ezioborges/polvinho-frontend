import newElement from "../utils/newElement.js"
import PageTitle from "../components/PageTitle.js";
import { fetchUsers } from "../data/fetchUsers.js";

const Home = () => {
    const body = newElement('div');
    const divWelcome = newElement('div')
    divWelcome.classList.add('body-content')

    fetchUsers()
        .then(data => {
            console.log("🚀 ~ Home ~ data:", data)
            // You can update DOM elements here if needed
        })
        .catch(error => {
            console.error("Error fetching users:", error)
        });

    const imgWelcome = newElement('img')
    imgWelcome.src = '../../assets/emocionado.jpg';
    imgWelcome.alt = 'Imagem de boas-vindas' 
    
    const titleContent = PageTitle('Home', 'Bem vindo, Aluno');

    divWelcome.appendChild(imgWelcome)
    
    body.appendChild(titleContent);
    body.appendChild(divWelcome)

    return body;
}

export default Home;
