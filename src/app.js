import { Sidebar } from "./components/Sidebar.js";
import { router } from "./router.js";
import newElement from "./utils/newElement.js";

document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('#sidebar a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', router)
    });
    // handleLocation()
});

const App = () => {
    // Captura a div raiz com o id app
    const app = document.querySelector('#app');
<<<<<<< HEAD
=======
    const bodyContent = newElement('div')
    bodyContent.classList.add('body')
    bodyContent.id = 'main-content'
>>>>>>> 07639d8a7fc729c03ca142ed2bedf375b616e776

    const sidebar = Sidebar();

    app.appendChild(sidebar);
    app.appendChild(bodyContent);

    return app;
} 


App();