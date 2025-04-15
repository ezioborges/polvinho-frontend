import { Sidebar } from "./components/Sidebar.js";
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

    const bodyContent = newElement('div')
    bodyContent.classList.add('body')
    bodyContent.id = 'main-content'

    const sidebar = Sidebar();

    app.appendChild(sidebar);
    app.appendChild(bodyContent);

    return app;
} 


App();