import Body from "./components/Body.js";
import { Sidebar } from "./components/Sidebar.js";

document.addEventListener('DOMContentLoaded', () => {
    router(); // Load the initial page

    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.getAttribute('href'));
        }
    });
});

const App = () => {
    // Captura a div raiz com o id app
    const app = document.querySelector('#app');

    const sidebar = Sidebar();
    const body = Body();
    const home = Home()

    app.appendChild(sidebar);
    app.appendChild(body);
    app.appendChild(home);

    return app;
} 


App();