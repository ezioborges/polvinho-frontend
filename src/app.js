import { Sidebar } from "./components/Sidebar.js";
import Login from "./pages/Login.js";
import newElement from "./utils/newElement.js";

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('#main-content'); // Certifique-se que este é o container correto para as disciplinas
    if (mainContent) {
      mainContent.addEventListener('click', (event) => {
        const linkElement = event.target.closest('a.link-content');
        if (linkElement) {
          event.preventDefault();
          window.location.hash = linkElement.getAttribute('href');
        }
      });
    }

    const sidebarLinks = document.querySelectorAll('#sidebar a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            window.location.hash = event.target.getAttribute('href')
        })
    });
    // handleLocation()
});

const App = () => {
    // Captura a div raiz com o id app
    const app = document.querySelector('#app');

    const link = window.location.hash;
    console.log("🚀 ~ App ~ link: #/ ===> ", link)

    
    const bodyContent = newElement('div')
    bodyContent.classList.add('body')
    bodyContent.id = 'main-content'

    const sidebar = Sidebar();
    
    app.appendChild(sidebar);
    app.appendChild(bodyContent);
    
    if (link === '#/') {
        app.removeChild(sidebar);
        app.removeChild(bodyContent);

        
        const login = Login()
        
        bodyContent.classList.remove('body')
        bodyContent.classList.add('login-content')
        
        
        bodyContent.appendChild(login)
        
        app.appendChild(bodyContent)
    }

    return app;
} 


App();