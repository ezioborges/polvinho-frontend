import Home from "./pages/Home.js";
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
    const app = document.querySelector('#app');
    app.innerHTML = ""; // Limpa o conteúdo anterior

    const link = window.location.hash;

    if (link === "#/home") {
        // Renderize a página Home aqui
        const homeContent = Home()
        app.appendChild(homeContent);
    } else {
        // Renderize a tela de login por padrão
        const loginContent = newElement('div');
        loginContent.classList.add('login-content');
        const login = Login();
        loginContent.appendChild(login);
        app.appendChild(loginContent);
    }

    return app;
}


App();

window.addEventListener('hashchange', () => {
    App(); // Renderiza sempre que o hash mudar
});