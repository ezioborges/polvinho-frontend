import SidebarTop from "./SidebarTop.js";
import SidebarBottom from "./SidebarBottom.js";
import newElement from "../utils/newElement.js";

export const Sidebar = () => {
    // Cria a estrutura HTML do sidebar
    const sidebarContent = newElement('div');

    // Adiciona classes
    sidebarContent.classList.add('sidebar');
    // sidebarBottomContent.classList.add('sidebar-bottom-content');

    // Adiciona o conteúdo do topo chamando a função sidebarTop
    const sidebarTopContent = SidebarTop();
    const sidebarBottomContent = SidebarBottom();

    // Monta a estrutura
    sidebarContent.appendChild(sidebarTopContent);
    sidebarContent.appendChild(sidebarBottomContent);

    return sidebarContent;
};