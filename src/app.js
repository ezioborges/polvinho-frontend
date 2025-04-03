import Body from "./components/Body.js";
import { Sidebar } from "./components/Sidebar.js";

const App = () => {
    // Captura a div raiz com o id app
    const app = document.querySelector('#app');

    const sidebar = Sidebar();
    const body = Body();

    app.appendChild(sidebar);
    app.appendChild(body);

    return app;
} 


App();