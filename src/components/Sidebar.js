import SidebarTop from "./SidebarTop.js";
import SidebarBottom from "./SidebarBottom.js";

export const Sidebar = () => {
    // Captura a div raiz com o id app
    const app = document.querySelector('#app');

    // Cria a estrutura HTML do sidebar
    const sidebarContent = document.createElement('div');

    // Adiciona classes
    sidebarContent.classList.add('sidebar');
    // sidebarBottomContent.classList.add('sidebar-bottom-content');

    // Adiciona o conteúdo do topo chamando a função sidebarTop
    const sidebarTopContent = SidebarTop();
    const sidebarBottomContent = SidebarBottom();

    // Monta a estrutura
    sidebarContent.appendChild(sidebarTopContent);
    sidebarContent.appendChild(sidebarBottomContent);

    return app.appendChild(sidebarContent);
};