const SidebarBottom = () => {
    const sidebarBottomContent = document.createElement('div');
    const changePassword = document.createElement('div');
    const finishSection = document.createElement('div');
    const passwordLogo = document.createElement('img');
    const passwordText = document.createElement('p');
    const sectionLogo = document.createElement('img');
    const sectionText = document.createElement('p');

    passwordText.textContent = 'Trocar Senha';
    sectionText.textContent = 'Encerrar Seção';
    
    sidebarBottomContent.classList.add('sidebar-bottom-content');
    changePassword.classList.add('sidebar-dashboard');
    finishSection.classList.add('sidebar-dashboard');
    passwordText.classList.add('sidebar-menu-text');
    sectionText.classList.add('sidebar-menu-text');
    // sectionLogo.classList.add('menu-logo');

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
