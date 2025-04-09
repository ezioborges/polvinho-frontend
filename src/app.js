import newBody from "./components/newBody.js";
import { Sidebar } from "./components/Sidebar.js";
import { router } from "./router.js";

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
    console.log("🚀 ~ App ~ app:", app)

    const sidebar = Sidebar();
    const body = newBody();

    app.appendChild(sidebar);
    app.appendChild(body);

    return app;
} 


App();