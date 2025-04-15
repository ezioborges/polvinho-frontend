import { Sidebar } from "./components/Sidebar.js";
import { router } from "./router.js";
import newElement from "./utils/newElement.js";

document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', router)
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