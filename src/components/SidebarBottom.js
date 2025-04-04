import newElement from "../utils/newElement.js";

const SidebarBottom = () => {
    const sidebarBottomContent = newElement('div');
    const changePassword = newElement('div');
    const finishSection = newElement('div');
    const passwordLogo = newElement('img');
    const passwordText = newElement('p');
    const sectionLogo = newElement('img');
    const sectionText = newElement('p');

    passwordText.textContent = 'Trocar Senha';
    sectionText.textContent = 'Encerrar Seção';
    
    sidebarBottomContent.classList.add('sidebar-bottom-content');
    changePassword.classList.add('sidebar-dashboard');
    finishSection.classList.add('sidebar-dashboard');
    passwordText.classList.add('sidebar-menu-text');
    sectionText.classList.add('sidebar-menu-text');
    sectionLogo.classList.add('menu-logo');

    passwordLogo.src = './assets/Password.png';
    passwordLogo.alt = 'Logo da senha';
    passwordLogo.classList.add('menu-logo');

    sectionLogo.src = './assets/SignOut.png';
    sectionLogo.alt = 'Logo de sair';
    sectionLogo.classList.add('menu-logo');

    sidebarBottomContent.appendChild(changePassword);
    sidebarBottomContent.appendChild(finishSection);

    changePassword.appendChild(passwordLogo);
    changePassword.appendChild(passwordText);

    finishSection.appendChild(sectionLogo);
    finishSection.appendChild(sectionText);

    return sidebarBottomContent;
}

export default SidebarBottom;
